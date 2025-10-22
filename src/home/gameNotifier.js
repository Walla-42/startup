const GameEvent = {
  System: 'system',
  End: 'gameEnd',
  Start: 'gameStart',
};

class EventMessage {
  constructor(from, type, value, game) {
    this.from = from;
    this.type = type;
    this.value = value;
    this.game = game;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    // Simulate chat messages that will eventually come over WebSocket
    const gameArray = ['Name That Molecule', 'Genome Trivia'];
    const userArray = ['Enoch', 'Walla42', 'AwesomeSauce', 'MoleculeMaster','FreakyLookinChicken']
    setInterval(() => {
      const score = Math.floor(Math.random() * 3000);
      const date = new Date().toLocaleDateString();
      const userName = userArray[Math.floor(Math.random()*userArray.length)]
      const game = gameArray[Math.floor(Math.random() * gameArray.length)];
      this.broadcastEvent(userName, GameEvent.End, { name: userName, score: score, date: date, game: game });
    }, 5000);
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };
const GameEvent = {
  System: 'system',
  End: 'gameEnd',
  Start: 'gameStart',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}

class GameEventNotifier {
  events = [];
  handlers = [];
  simulatorIntervalId = null;

  constructor() {
    if (!localStorage.getItem('gameNotifications')) {
      localStorage.setItem('gameNotifications', JSON.stringify([]));
    }
  }

  // NOTE: remove this when websocket is implemented
  startSimulator() {
    if (this.simulatorIntervalId !== null) {
      return;
    }

    const gameArray = ['Name That Molecule', 'Genome Trivia'];
    const userArray = ['Enoch', 'Walla42', 'AwesomeSauce', 'MoleculeMaster','FreakyLookinChicken'];
    
    this.simulatorIntervalId = setInterval(() => {
      const score = Math.floor(Math.random() * 3000);
      const date = new Date().toLocaleDateString();
      const userName = userArray[Math.floor(Math.random() * userArray.length)];
      const game = gameArray[Math.floor(Math.random() * gameArray.length)];
      this.broadcastEvent(userName, GameEvent.End, { name: userName, score: score, date: date, game: game });
    }, 5000);
  }

  // NOTE: remove this when websocket is implemented
  stopSimulator() {
    if (this.simulatorIntervalId !== null) {
      clearInterval(this.simulatorIntervalId);
      this.simulatorIntervalId = null;
    }
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);

    const savedEvents = JSON.parse(localStorage.getItem('gameNotifications'));
    savedEvents.unshift(event);
    if (savedEvents.length > 9) {
      savedEvents.splice(9);
    }
    localStorage.setItem('gameNotifications', JSON.stringify(savedEvents));

    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers = this.handlers.filter((h) => h !== handler);
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
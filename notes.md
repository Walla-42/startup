## My Notes
### Table of Contents:
- [Introduction](#introduction)
- [Git](#git)
- [Markdown Styling on GITHUB](#github-markdown)
- [The Internet](#the-internet)
- [Amazon Web Services](#amazon-web-services)
- [Domain Names](#domain-names)
- [HTML](#html)
- [CSS](#css)
- [React Components](#react-components)
- [React Router](#react-router)
- [Vite](#vite)


## Introduction
This document houses all of my notes taken during my participation in CS260: Web Programing and houses links to important documentation and resources which I used to create this project.

## Git
Instruction 1 talked about how to use Github. I already use github frequently and have no additional notes to put here for this section. I did learn that you can add a [!Note] in a markdown file, which is useful for keeping my documentation clean for the user. 

## Github Markdown
### Below is some useful github styling for gitub

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

## The Internet
The internet is what connects independent networks and computing devices together. 

Every device has its own IP address which can be masked by a Domain. This domain can be used to look up the IP and vice versa using the DNS (Domain Name Server). You can view the IP address of a domain using the dig utility. 
```sh
# Example:
dig byu.edu

# Output:
byu.edu.		5755	IN	A	128.187.16.184
```

When you have a connection you can request a connection route to the device. 

To see the connection route you can use Traceroute.
```sh
➜  traceroute byu.edu

traceroute to byu.edu (128.187.16.184), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  10.942 ms  4.055 ms  4.694 ms
 2  * * *
 3  * * *
 4  192-119-18-212.mci.googlefiber.net (192.119.18.212)  5.369 ms  5.576 ms  6.456 ms
 5  216.21.171.197 (216.21.171.197)  6.283 ms  6.767 ms  5.532 ms
 6  * * *
 7  * * *
 8  * * *
 9  byu.com (128.187.16.184)  7.544 ms !X *  40.231 ms !X
```

The internet is made up of many layers that all work together to process and send data to and from devices. 

### [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) layers

| Layer       | Example         | Purpose                               |
| ----------- | --------------- | ------------------------------------- |
| Application | HTTPS           | Functionality like web browsing       |
| Transport   | TCP             | Moving connection information packets |
| Internet    | IP              | Establishing connections              |
| Link        | Fiber, hardware | Physical connections                  |

## Amazon Web Sercies

### Creating an AWS Server Instance
When creating an instance, be sure to select EC2 service then launch instance to open up a create instance window. 

> [!NOTE]  
> Use naming conventions like `[owner]-[purpose]-[version]` when naming your instance

Be sure to generate a secure shell key and store it in a safe place where you wont accidently commit it and wont share it with anyone else. 

When you have set up the server, you can view it by going to `http://[your-server-ip]`

### SSH into your server
When your server is setup you can ssh (Secure shell) into your server by doing the following:
```sh 
➜  ssh -i [key pair file] ubuntu@[ip address]
```

to limit permissions for your generated key file, do the following:
```sh
chmod 600 youkeypairfile.pem
```

**Notes about server content:** 
*Caddyfile* : This file contains the configuration for your web service gateway.  
*public_html* : is a directory that contains all of the static files that you are serving up directly through Caddy when using it as a web service.


### Establishing an Elastic IP Address
To ensure that your server IP address does not change, you can create an elastic IP address and associate it with your server instance. This will ensure that your server is always accessible at the same IP address. 

>[!NOTE]  
> Assigning an eleastic IP address will change the IP address for the server, but will not change again until it is released. If you terminate your server and make a new one, this address can be reused. That means if it is not being used and you do not release it, you will be charged for it. 


## Common Problems

| Symptom | Reason |
|---------|--------|
| You can SSH into the server, but you can't use HTTP | Check that your security group exposes SSH, HTTP, and HTTPS. |
| Using the browser to hit my server using my IP was working but now it doesn't | Check that your IP address hasn't changed. Perhaps due to assigning an elastic IP address or stopping your server. |
| My server doesn't come up in the browser | Check that you are not trying to use https before you configure Caddy to use https. |


## Domain Names

Domain names are strings of a certain format stored in the DNR (Domain Name Registry)

They are broken into a root domain and one or more subdomain prefixes. 
For example, in the domain name `www.example.com` the root domain is `example.com` and the subdomain prefix is `www`.

The root domain is represented by a secondary level domain and a top level domain (TLD). TLD are things like com, edu, gov or click. TLD's are controlled by ICANN, a govorning board of the internet.

![domain image](https://github.com/webprogramming260/.github/blob/main/profile/webServers/domainNames/domainNameParts.jpg?raw=true)

Root domains can have any number of subdomains with their own IP addresses. 

You can get info on the domain name from the DNR using the `whois` utility:
```sh
➜  whois byu.edu

Domain Name: BYU.EDU

Registrant:
	Brigham Young University
	3009 ITB
	2027 ITB
	Provo, UT 84602
	USA

Administrative Contact:
	Mark Longhurst
	Brigham Young University
	Office of Information Technology
	1208 ITB
	Provo, UT 84602
	USA
	+1.8014220488
	markl@byu.edu

Technical Contact:
	Brent Goodman
	Brigham Young University
	Office of Information Technology
	1203J ITB
	Provo, UT 84602
	USA
	+1.8014227782
	dnsmaster@byu.edu

Domain record activated:    19-Jan-1987
Domain record last updated: 11-Jul-2022
Domain expires:             31-Jul-2025
```

### DNS
DNS, or Domain Name Service is a server that associates IP addresses with a unique web address called a domain name. 

`A` name: aka address are straight mappings from a domain name IP address
`CNAME` or cannonical name: are record maps from one domain name to another domain name (alias)
> Example: `BYU.edu` and `BYU.com` map to the same IP.

When you put a domain name into a browser, the broswer checks if the name already exists in the cache. If not, it contacts a DNS server and gets the IP. If the name is not in the DNS cache, then the DNS server will request it from the authoritative name server. If its not there, an unknown domain name error will be thrown. 

TTL (time to live): a setting that sets a time for which different caching layers must clear their cache. 


## Leasing a domain name

### Amazon Web Services - Route 53:
Route 53 on AWS handles everything DNS related including buying a domain name, hosting your domain on thier DNS servers, and creating DNS record. 

I leased the following domain that will renew yearly starting Sep 8 2025:
biomatchgames.click

### Manage DNS records
After you create a domain name, you must create a type A record to direct traffic to the correct IP using your established domain name. 

> [!NOTE]
>
> *SOA*: Start of Authority record provides contact information about the owner of the domain.
>
> *NS*: Name Server record provides the names of the servers that are hosting the DNS records for this domain.

## HTML
Hyper Text Markup Language (HTML) provides foundational content structure that all web applications build on. 

**Deeper Reading**
- [MDN HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C specification](https://html.spec.whatwg.org/multipage/)

**Contents**
- [Elements and Tags](#elements-and-tags)
- [Attributes](#attributes)
- [Hyperlinks](#hyperlinks)
- [HTML Element List](#html-element-list)
- [Comments](#comments)
- [Special Characters](#special-characters)
- [Index.html](#block-vs-inline)
- [HTML input elements](#html-input-elements)



### Elements and Tags
HTML is made up of elements and tags. Elements are the building blocks of HTML and are used to define the structure and content of a web page. Tags are used to mark the beginning and end of an element.

**Example:**
```html
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <main>
      <p>Hello world</p>
    </main>
  </body>
</html>
```

In the example above, `<html>`, `<head>`, `<title>`, `<body>`, `<main>`, and `<p>` are all HTML tags. The content between the opening and closing tags is the content of the element.

### Attributes
Attributes describe the specific details of the element. 
**Example:**
```html
<p id="hello" class="greeting">Hello World</p>
```

In the example above, the `<p>` element has two attributes: `id` and `class`. The `id` attribute is used to uniquely identify the element, while the `class` attribute is used to group elements together for styling purposes.

### Hyperlinks
Hyperlinks are used to link to other web pages or resources. They are created using the `<a>` tag and the `href` attribute.
**Example:**
```html
<a href="https://byu.edu">Go to the Y</a>
```
In the example above, the `<a>` element creates a hyperlink to the BYU website. When the user clicks on the link, they will be taken to the specified URL.

### HTML Element List
Here is a small list of commonly used elements:
| element   | meaning                                                                |
| --------- | ---------------------------------------------------------------------- |
| `html`    | The page container                                                     |
| `head`    | Header information                                                     |
| `title`   | Title of the page                                                      |
| `meta`    | Metadata for the page such as character set or viewport settings       |
| `script`  | JavaScript reference. Either a external reference, or inline           |
| `include` | External content reference                                             |
| `body`    | The entire content body of the page                                    |
| `header`  | Header of the main content                                             |
| `footer`  | Footer of the main content                                             |
| `nav`     | Navigational inputs                                                    |
| `main`    | Main content of the page                                               |
| `section` | A section of the main content                                          |
| `aside`   | Aside content from the main content                                    |
| `div`     | A block division of content                                            |
| `span`    | An inline span of content                                              |
| `h<1-9>`  | Text heading. From h1, the highest level, down to h9, the lowest level |
| `p`       | A paragraph of text                                                    |
| `b`       | Bring attention                                                        |
| `table`   | Table                                                                  |
| `tr`      | Table row                                                              |
| `th`      | Table header                                                           |
| `td`      | Table data                                                             |
| `ol,ul`   | Ordered or unordered list                                              |
| `li`      | List item                                                              |
| `a`       | Anchor the text to a hyperlink                                         |
| `img`     | Graphical image reference                                              |
| `dialog`  | Interactive component such as a confirmation                           |
| `form`    | A collection of user input                                             |
| `input`   | User input field                                                       |
| `audio`   | Audio content                                                          |
| `video`   | Video content                                                          |
| `svg`     | Scalable vector graphic content                                        |
| `iframe`  | Inline frame of another HTML page                                      |

### comments
```html
<!-- This is how you write an HTML comment. That is all-->
```

### Special Characters
These are characters reserved for use by HTML and must be escaped if used for another purpose inside the HTML document:
| Character | Escape Sequence |
|-----------|-----------------|
| `<`       | `&lt;`          |
| `>`       | `&gt;`          |
| `&`       | `&amp;`         |
| `"`       | `&quot;`        |
| `'`       | `&apos;`        |

The `&` can also be used to represent any unicode character.

### other information
The `index.html` file is the default file that is served when a user navigates to a web server without specifying a specific file.

You must start any HTML document with the header tag `<!DOCTYPE html>` as this is what tells the renderer what type of document is present and its version. 

### HTML Structure
```html
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```

![HTML Render](https://github.com/webprogramming260/.github/blob/main/profile/html/structure/htmlStructure.jpg)

### Block vs Inline elements
A block element is meant to be a distinct block in the flow of the content structue. An inline element is menat to be inline with the content flow of a block element. 

**Example**
```html
<p>This is a paragraph with an <span>inline span element</span> inside of it
 that is a block element.</p>
```
In the example above, the `<p>` element is a block element, while the `<span>` element is an inline element. The `<span>` element is used to apply styling or formatting to a specific portion of text within the `<p>` element without disrupting the flow of the paragraph.

### HTML Input Elements
HTML input elements are used to create interactive forms that allow users to input data. There are many different types of input elements, each with its own specific purpose.

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

Input elements can represnt many different types and can be set with the 'type' attribute. 

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

Input elements must specify a type along with any other attributes associated with the element:
**example**
```html
<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
```

**common attributes**
| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

![form visual](https://github.com/webprogramming260/.github/blob/main/profile/html/input/htmlInput.jpg?raw=true)

>[!NOTE]
> The pattern attribute allows you to restrict the input provided to the input form. It is a regular expression input.

## CSS
CSS or Cascading Style Sheet is a way for the developer to render to create complex renderings of dynamic content that is responsive to the actions of the usre and the device the application is rendered on.

### Rulesets
CSS is concerned with defining rulesets for different elements

![CSS ruleset definition image](https://github.com/webprogramming260/.github/blob/main/profile/css/introduction/cssDefinitions.jpg?raw=true)

### Associating CSS with HTML
1. Use the style attribute of an HTML element and assign one or more declarations
```html
<!-- Example-->
 <p style="color:green">CSS</>
```

2. Use style tags to define CSS rules within an HTML document
```html
<!--Example-->
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
<body>
  <p>CSS</p>
</body>
```

3. Link a CSS document to the HTML document through a hyperlink reference `[Prefered Way]`
```html
<!--Example-->
<!--HTM document-->
<link rel="stylesheet" href="styles.css" />
<!--CSS document styles.css-->
p {
  color:green;
}
```

### Cascading Styles
Syles applied at lower levels override upper level styling. Example: if main has text as red and p elements have text as blue and span elements have text as yellow, the span would override both the p and main styles. 

### The box model
CSS defines everything as boxes. When you apply styles, you are applying them to a region within the display that is a rectangular box. 

The default width and height of an element is defined by the width and height of the content box.
![the box model](https://github.com/webprogramming260/.github/blob/main/profile/css/introduction/cssBoxModel.jpg?raw=true)

### Combinators
Used for selecting specific elements outside of just a general selector.
Types of combinators that can be used:

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `div ~ p`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `div + p`      | Any p that has an adjacent div sibling     |


### Class Selector
You can select a class for styling by using . notation.
```css
.summary {
  font-weight: bold;
}
```
you can also combine the element name and class selectors to select all paragraphs with a class of summary as such:
```css
p.summary {
  font-weight: bold;
}
```

### ID Selectors
To target elements of a specific ID use the `#` symbol. 
>[!NOTE] IDs should be unique within an HTML document and so this selection should target a specific >element.
```css
#physics{
  border-left: solid 1em purple;
}
```

### Attribute selector
You can select elements based on their attributes by using an attribute selector. You use an attribute
selector by the `element[attribute]` syntax. 
```css
p[class='summary']{
  color: red;
}
```

### Pseudo Selector
CSS also defines a significant list of pseudo selectors which select based on positional relationships, mouse interactions, hyperlink visitation states, and attributes. We will give just one example. Suppose we want our purple highlight bar to appear only when the mouse hovers over the text. To accomplish this we can change our ID selector to select whenever a section is hovered over.

```css
section:hover {
  border-left: solid 1em purple;
}
```

### CSS Declarations

CSS rule declarations specify a property and value to assign when the rule selector matches one or more elements. There are legions of possible properties defined for modifying the style of an HTML document. For our purposes we will discuss just a few of the more commonly used ones so that you can get a feel for wide variety of functionality they represent.

| Property           | Value                              | Example             | Discussion                                                                     |
| ------------------ | ---------------------------------- | ------------------- | ------------------------------------------------------------------------------ |
| background-color   | color                              | `red`               | Fill the background color                                                      |
| border             | color width style                  | `#fad solid medium` | Sets the border using shorthand where any or all of the values may be provided |
| border-radius      | unit                               | `50%`               | The size of the border radius                                                  |
| box-shadow         | x-offset y-offset blu-radius color | `2px 2px 2px gray`  | Creates a shadow                                                               |
| columns            | number                             | `3`                 | Number of textual columns                                                      |
| column-rule        | color width style                  | `solid thin black`  | Sets the border used between columns using border shorthand                    |
| color              | color                              | `rgb(128, 0, 0)`    | Sets the text color                                                            |
| cursor             | type                               | `grab`              | Sets the cursor to display when hovering over the element                      |
| display            | type                               | `none`              | Defines how to display the element and its children                            |
| filter             | filter-function                    | `grayscale(30%)`    | Applies a visual filter                                                        |
| float              | direction                          | `right`             | Places the element to the left or right in the flow                            |
| flex               |                                    |                     | Flex layout. Used for responsive design                                        |
| font               | family size style                  | `Arial 1.2em bold`  | Defines the text font using shorthand                                          |
| grid               |                                    |                     | Grid layout. Used for responsive design                                        |
| height             | unit                               | `.25em`             | Sets the height of the box                                                     |
| margin             | unit                               | `5px 5px 0 0`       | Sets the margin spacing                                                        |
| max-[width/height] | unit                               | `20%`               | Restricts the width or height to no more than the unit                         |
| min-[width/height] | unit                               | `10vh`              | Restricts the width or height to no less than the unit                         |
| opacity            | number                             | `.9`                | Sets how opaque the element is                                                 |
| overflow           | [visible/hidden/scroll/auto]       | `scroll`            | Defines what happens when the content does not fix in its box                  |
| position           | [static/relative/absolute/sticky]  | `absolute`          | Defines how the element is positioned in the document                          |
| padding            | unit                               | `1em 2em`           | Sets the padding spacing                                                       |
| left               | unit                               | `10rem`             | The horizontal value of a positioned element                                   |
| text-align         | [start/end/center/justify]         | `end`               | Defines how the text is aligned in the element                                 |
| top                | unit                               | `50px`              | The vertical value of a positioned element                                     |
| transform          | transform-function                 | `rotate(0.5turn)`   | Applies a transformation to the element                                        |
| width              | unit                               | `25vmin`            | Sets the width of the box                                                      |
| z-index            | number                             | `100`               | Controls the positioning of the element on the z axis                          |

### Units
Here is a list of the most commonly used units. All of the units are prefixed with a number when used as a property value.

| Unit | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| px   | The number of pixels                                             |
| pt   | The number of points (1/72 of an inch)                           |
| in   | The number of inches                                             |
| cm   | The number of centimeters                                        |
| %    | A percentage of the parent element                               |
| em   | A multiplier of the width of the letter `m` in the parent's font |
| rem  | A multiplier of the width of the letter `m` in the root's font   |
| ex   | A multiplier of the height of the element's font                 |
| vw   | A percentage of the viewport's width                             |
| vh   | A percentage of the viewport's height                            |
| vmin | A percentage of the viewport's smaller dimension                 |
| vmax | A percentage of the viewport's larger dimension                  |

### Color
CSS defines multiple ways to describe color, ranging from representations familiar to programmers and ones familiar to layout designers and artists.

| Method       | Example                   | Description                                                                                                                                                                                                       |
| ------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| keyword      | `red`                     | A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)                                                                                                                                            |
| RGB hex      | `#00FFAA22` or `#0FA2`    | Red, green, and blue as a hexadecimal number, with an optional alpha opacity                                                                                                                                      |
| RGB function | `rgb(128, 255, 128, 0.5)` | Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage                                                                                                       |
| HSL          | `hsl(180, 30%, 90%, 0.5)` | Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is. |


### fonts
the CSS font-family property defines what fonts should be used. There are default fonts such as `serif` `sans-serif`, `fixed`, `symbol` ect. 
you can import fonts by hosting them on your server and declaring the font rule, or taking them from a font providor such as Google [Here](https://fonts.google.com/)
```css
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```

```css
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```

### animations
Animations can be done by setting the animation-name flag in the css body
```css
p{
  text-align: center;
  font-size: 20vh;

  animation-name: demo
  animation-duration: 3s;
}

@keyframes demo{
  from{
    font-size: 0h;
  }
  95% {
    font-size: 21vh;
  }
  to {
    font-size: 20vh:
  }
}
```
this allows us to specify a keyframe name which we will add frames to. CSS will specify a smooth transition between all the frames within the keyframes.

## CSS Frameworks

CSS frameworks provide pre-built functions and components commonly used in web applications. They help developers:

- Save time by reusing patterns and code.
- Create a consistent user experience across applications.
- Leverage community-maintained, open-source resources.

![CSS Frameworks](cssStateOfCss.jpg)

**Source**: [_StateOfCSS CSS framework poll_](https://2021.stateofcss.com/en-US/technologies/css-frameworks)

---

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/) is a rising CSS framework with an associated component library: [Tailwind UI](https://tailwindui.com/).

- **Popularity**: 46% general usage (2022 StateOfCSS poll)
- **Retention**: 78%  
- **Key idea**: Uses small utility classes applied directly to HTML elements rather than large CSS rulesets.

Example:

```html
<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="profile.png" />
  <p class="text-lg font-medium">“Tailwind CSS”</p>
</div>
```

### Bootstrap
Bootstrap is a long-standing, popular CSS framework.
- Pros: Active community, consistent UX.
- Cons: Its popularity can make websites look generic.

#### Getting Started
You can include Bootstrap via a CDN:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
  </head>
  <body>
    ...
  </body>
</html>
```

For Bootstrap components that require Javascript:
```html
<body>
  ...

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>

```

**You can also install bootstrap via NPM**
```sh
npm install bootstrap
```

#### Using Bootstrap
```html
<!-- Bootstrap styled button -->
<button type="button" class="btn btn-primary">Bootstrap</button>

<!-- Default browser button -->
<button type="button">Plain</button>
```

![Bootstrap button example image](https://github.com/webprogramming260/.github/blob/main/profile/css/frameworks/cssBootstrapBtn.png?raw=true)

### Bootstrap Quick Reference Table

| Element / Component       | Common Classes / Options                                           | Description / Notes |
|----------------------------|-------------------------------------------------------------------|-------------------|
| **Buttons**               | `btn`, `btn-primary`, `btn-secondary`, `btn-success`, `btn-danger`, `btn-warning`, `btn-info`, `btn-light`, `btn-dark`, `btn-link`, `btn-lg`, `btn-sm`, `btn-block` | Base button styling. Add color variants, sizes, and block/full-width. |
| **Typography**            | `h1`–`h6`, `lead`, `display-1`–`display-6`, `text-center`, `text-left`, `text-right`, `text-muted`, `font-weight-bold`, `font-italic` | Headings, paragraphs, and text alignment/weight. |
| **Alerts**                | `alert`, `alert-primary`, `alert-secondary`, `alert-success`, `alert-danger`, `alert-warning`, `alert-info`, `alert-light`, `alert-dark`, `alert-dismissible`, `fade`, `show` | Display contextual messages. Dismissible alerts need button with `data-bs-dismiss="alert"`. |
| **Badges**                | `badge`, `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`, `rounded-pill` | Small count or label indicators. Can use pill-shaped style. |
| **Cards**                 | `card`, `card-body`, `card-header`, `card-footer`, `card-title`, `card-text`, `card-img-top`, `card-img-bottom`, `text-center` | Flexible content containers for images, text, and actions. |
| **Navbars**               | `navbar`, `navbar-expand-lg`, `navbar-light`, `navbar-dark`, `bg-light`, `bg-dark`, `navbar-brand`, `navbar-nav`, `nav-item`, `nav-link` | Responsive navigation bars. Expand classes control collapse behavior. |
| **Forms**                 | `form-control`, `form-check`, `form-check-input`, `form-check-label`, `form-group`, `form-label`, `form-text`, `is-invalid`, `is-valid` | Input fields, checkboxes, radio buttons, validation styles. |
| **Inputs / Buttons**      | `input-group`, `input-group-text`, `form-control`, `btn`, `btn-outline-primary` | Combine input with buttons or prepended/appended text. |
| **Modals**                | `modal`, `modal-dialog`, `modal-content`, `modal-header`, `modal-body`, `modal-footer`, `fade`, `show`, `modal-lg`, `modal-sm` | Popup dialogs. Triggered via `data-bs-toggle="modal"` and `data-bs-target="#id"`. |
| **Dropdowns**             | `dropdown`, `dropdown-menu`, `dropdown-item`, `dropdown-toggle`, `dropdown-divider`, `dropend`, `dropstart`, `dropup` | Toggleable menu for actions. Use `.show` to display programmatically. |
| **Accordion / Collapse**  | `accordion`, `accordion-item`, `accordion-header`, `accordion-button`, `accordion-collapse`, `collapse`, `show` | Collapsible content panels, often for FAQs or grouped content. |
| **Grid / Layout**         | `container`, `container-fluid`, `row`, `col`, `col-1`–`col-12`, `col-md-6`, `col-lg-4`, `d-flex`, `justify-content-center`, `align-items-center` | Responsive layout using 12-column grid. Flex utilities for alignment. |
| **Images**                | `img-fluid`, `rounded`, `rounded-circle`, `img-thumbnail` | Responsive images, rounded corners, and circle avatars. |
| **Tables**                | `table`, `table-striped`, `table-bordered`, `table-hover`, `table-sm`, `table-responsive`, `table-dark` | Styled tables with hover, borders, and responsive wrappers. |
| **Pagination**            | `pagination`, `page-item`, `page-link`, `disabled`, `active` | Navigation through paginated content. |
| **Breadcrumbs**           | `breadcrumb`, `breadcrumb-item`, `active` | Navigation indicators showing current page hierarchy. |
| **Spinners / Loaders**    | `spinner-border`, `spinner-grow`, `text-primary`, `text-secondary`, `text-success`, `text-danger` | Loading indicators with optional color variants. |
| **Utilities – Spacing**   | `m-{t|b|l|r|x|y}-{0-5}`, `p-{t|b|l|r|x|y}-{0-5}` | Margin and padding helpers. `m` = margin, `p` = padding; `{x|y}` = axis. |
| **Utilities – Display**   | `d-none`, `d-inline`, `d-inline-block`, `d-block`, `d-flex`, `d-grid` | Show/hide or change display type. |
| **Utilities – Text**      | `text-start`, `text-center`, `text-end`, `text-nowrap`, `text-truncate`, `text-lowercase`, `text-uppercase`, `text-capitalize` | Text alignment and transformation helpers. |
| **Utilities – Colors**    | `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`, `text-primary`, `text-secondary`, etc. | Background and text color helpers. |
| **Utilities – Flex**      | `d-flex`, `flex-row`, `flex-column`, `justify-content-start`, `justify-content-center`, `justify-content-between`, `align-items-start`, `align-items-center`, `align-items-end` | Flexbox helpers for alignment and layout. |
| **Utilities – Sizing**    | `w-25`, `w-50`, `w-75`, `w-100`, `h-25`, `h-50`, `h-75`, `h-100` | Width and height helpers (percentage-based). |

## React Components

> [!NOTE]
> React components allow you to modularize the functionality of your application, making code reusable and directly representing UI elements that users interact with.

###  Key Concepts

#### 1. **Rendering JSX**
- **Purpose**: Components generate user interface through JSX
- **Process**: JSX returned from a component gets inserted into the component HTML element
- **Example**:
  ```jsx
  // JSX usage
  <div>Component: <Demo /></div>
  
  // React component
  function Demo() {
    const who = 'world';
    return <b>Hello {who}</b>;
  }
  
  // Resulting HTML
  <div>Component: <b>Hello world</b></div>
  ```

#### 2. **Styling Components**
- **External CSS**: Import CSS files and reference rules in JSX
- **Key Difference**: Use `className` instead of `class` (JavaScript keyword conflict)
- **Example**:
  ```jsx
  import './index.css';
  
  function App() {
    return (
      <div>
        <pre className='code'>console.log(1+1);</pre>
      </div>
    );
  }
  ```

#### 3. **Child Components**
- **Concept**: Components can reference other components in their JSX
- **Benefit**: Build complex trees of interrelated components
- **Structure**: Parent components contain child components (e.g., App → Header, Content, Footer)

#### 4. **Properties (Props)**
- **Purpose**: Pass information to components as element properties
- **Usage**: Component receives properties in constructor/function parameters
- **Example**:
  ```jsx
  // JSX with props
  <Demo who="Walke" />
  
  // Component receiving props
  function Demo(props) {
    return <b>Hello {props.who}</b>;
  }
  ```

#### 5. **State**
- **Definition**: Internal component state managed with `React.useState` hook
- **Returns**: Current state variable + function to update state
- **Example**:
  ```jsx
  function App() {
    const [clicked, updateClicked] = React.useState(false);
    
    function onClicked() {
      updateClicked(!clicked);
    }
    
    return <p onClick={onClicked}>clicked: {`${clicked}`}</p>;
  }
  ```

#### 6. **Reactivity**
- **Control**: How components react to user actions and application events
- **Trigger**: When state or properties change, render functions are called
- **Scope**: Component and all dependent components re-render

###  Quick Reference

| Concept | Key Points |
|---------|------------|
| **JSX Rendering** | Return JSX from components; gets inserted into HTML |
| **Styling** | Import CSS files, use `className` not `class` |
| **Child Components** | Components can contain other components |
| **Props** | Pass data to components via element attributes |
| **State** | Use `useState` hook for internal component state |
| **Reactivity** | State/prop changes trigger component re-renders |

###  Best Practices
- **Modularization**: Break UI into reusable components
- **Props vs State**: Use props for external data, state for internal data
- **Naming**: Use PascalCase for component names
- **Reactivity**: Let React handle re-rendering when state changes

## React Router

> [!IMPORTANT]
> React Router provides essential functionality for single-page applications, allowing navigation between different views without reloading the page.

###  Key Concepts

#### 1. **Single Page Applications (SPA)**
- **Multi-page vs SPA**: Traditional multi-page apps require separate HTML files and server requests
- **SPA Advantage**: Browser loads one HTML page, JavaScript manipulates DOM for different views
- **Benefits**: 
  - Maintain state during navigation
  - No need for server requests for new pages
  - Shared components (headers, footers, navigation)

#### 2. **Router Package**
- **Package**: `react-router-dom` (simplified routing functionality)
- **Installation**: `npm install react-router-dom`
- **Core Package**: Built on `react-router` for core functionality

#### 3. **Core Router Components**

| Component | Purpose | Key Attributes |
|-----------|---------|----------------|
| `BrowserRouter` | Encapsulates entire application and controls routing | - |
| `Routes` | Container for Route components | - |
| `Route` | Defines path-to-component mapping | `path`, `element` |
| `Link` / `NavLink` | Navigation elements that trigger route changes | `to` |

#### 4. **Basic Implementation**
```jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navigation */}
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        {/* Route Definitions */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
```

#### 5. **How Router Works**
- **URL Integration**: Router plugs into browser's location API
- **DOM Manipulation**: Changes displayed path without server requests  
- **Component Matching**: Routes match `to` and `path` attributes to render appropriate components
- **State Preservation**: Application state maintained during navigation

###  Setup Process

#### Step 1: Install Dependency
```bash
npm install react-router-dom
```

#### Step 2: Import Components
```jsx
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
```

#### Step 3: Structure Application
1. Wrap app in `<BrowserRouter>`
2. Create navigation with `<NavLink>` components
3. Define routes with `<Routes>` and `<Route>` components

###  Quick Reference

| Concept | Description | Example |
|---------|-------------|---------|
| **BrowserRouter** | Root component that enables routing | `<BrowserRouter><App /></BrowserRouter>` |
| **Routes** | Container for all route definitions | `<Routes>...</Routes>` |
| **Route** | Maps URL path to component | `<Route path="/home" element={<Home />} />` |
| **NavLink** | Navigation link with active state | `<NavLink to="/about">About</NavLink>` |
| **Path Matching** | Router matches URL to component | URL `/green` → `<Page color="green" />` |

###  Best Practices
- **Single BrowserRouter**: Only use one BrowserRouter per application
- **Nested Routes**: Organize routes hierarchically for complex applications
- **NavLink vs Link**: Use NavLink for navigation menus (provides active state)
- **Exact Matching**: Use exact prop when needed to prevent partial matches
- **Route Order**: Place more specific routes before general ones

###  Key Benefits
- **No Page Reloads**: Instant navigation between views
- **State Persistence**: Application state maintained across routes
- **URL Synchronization**: Browser URL reflects current application state
- **Component Reusability**: Share common components across different routes

## Vite

> [!TIP]
> Vite is a fast build tool and development server that provides an excellent developer experience for modern web frameworks like React.

###  Key Concepts

#### 1. **What is Vite?**
- **Purpose**: Full web framework toolchain for modern development
- **Features**: 
  - Fast bundling and hot reload
  - JSX, TypeScript, and CSS support
  - Great debugging capabilities
  - Minification and polyfills
- **CLI Advantage**: Quick project setup with sensible defaults

#### 2. **Quick Start**
```bash
# Create new React app with Vite
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
```

**Development Commands:**
- `o` - Open browser automatically
- `h` - Show help/options
- `q` - Quit development server

#### 3. **Project Structure**

| Directory | File | Purpose |
|-----------|------|---------|
| **Root** | | |
| | `index.html` | Primary page - entry point for JSX components |
| | `package.json` | NPM dependencies and script commands |
| | `package-lock.json` | Version constraints (don't edit) |
| | `vite.config.js` | Vite configuration for React development |
| **./public** | | |
| | `vite.svg` | Vite logo (favicon and app display) |
| **./src** | | |
| | `main.jsx` | Code entry point - loads App component |
| | `index.css` | Global application CSS |
| | `App.jsx` | Top-level application component |
| | `App.css` | Component-specific CSS |
| **./src/assets** | | |
| | `react.svg` | React logo for app display |

#### 4. **File Relationships**
```
index.html → main.jsx → App.jsx
     ↓           ↓         ↓
  #root     ReactDOM   Component
  element    render     render
```

**Flow:**
1. Browser loads `index.html`
2. `index.html` includes script to load `main.jsx`
3. `main.jsx` associates `#root` element with `App` component
4. React renders all components into the DOM

#### 5. **JSX vs JS File Extensions**
- **Preference**: Use `.jsx` for files containing JSX
- **Reason**: Better editor tooling and clarity
- **Compatibility**: Babel works with both `.js` and `.jsx`

#### 6. **Build Process**

| Command | Purpose | Output |
|---------|---------|--------|
| `npm run dev` | Development server | Temporary bundle for debugging |
| `npm run build` | Production build | Optimized files in `dist/` directory |

**Production Build Process:**
- Transpiles code
- Minifies JavaScript/CSS
- Bundles dependencies
- Outputs to `dist/` directory

```bash
# Example build output
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
```

###  Development Workflow

#### Step 1: Create Project
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
```

#### Step 2: Development
```bash
npm run dev  # Start development server
```

#### Step 3: Production Build
```bash
npm run build  # Create production bundle
```

#### Step 4: Deploy
- Copy `dist/` directory to production server
- Use deployment script to automate process

###  Quick Reference

| Concept | Description | Example |
|---------|-------------|---------|
| **CLI Creation** | Quick project setup | `npm create vite@latest app -- --template react` |
| **Dev Server** | Hot reload development | `npm run dev` |
| **Production Build** | Optimized deployment bundle | `npm run build` |
| **File Extensions** | JSX files use .jsx extension | `App.jsx`, `main.jsx` |
| **Entry Points** | HTML → main.jsx → App.jsx | Chain of loading |

###  Best Practices
- **File Naming**: Use `.jsx` extension for JSX files
- **Development**: Use `npm run dev` for development with hot reload
- **Production**: Always run `npm run build` before deployment
- **Project Structure**: Follow Vite's default structure for consistency
- **Dependencies**: Keep `package-lock.json` under version control

###  Key Advantages
- **Fast Development**: Lightning-fast hot reload and bundling
- **Modern Defaults**: Supports JSX, TypeScript, CSS preprocessing out of the box
- **Great DX**: Excellent debugging support and error messages
- **Production Ready**: Optimized builds with minification and bundling
- **Framework Agnostic**: Works with React, Vue, vanilla JS, and more


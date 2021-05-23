# Welcome to Louise Zenasni's Profile Page 💻

## Project Introduction 🛠

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

The profile webpage is written in Angular 11 / TypeScript. The web app runs the Angular Live Web Development Server that provides built-in Live Reload whenever changes are made to the code (code/HTML/CSS). 

A NodeJS Express server runs alongside as a proxy, serving the application data from local and third-party public APIs.

Angular configuration has been setup that handles the following :

- Using a server as a proxy for all service calls from the app.
- Integration with other frameworks such as Jest for testing  

Feel free to use the Angular configuration of this project as a skeleton for your own purposes!

## Getting Started 🛠

### Setup
1. `git clone https://github.com/louzena/welcome-to-inshur-louzena.git`
1. `cd welcome-to-inshur-louzena`
1. `yarn install`
1. `yarn start`

Note:  You'll need to install Angular CLI if you haven't done so already:

1. `npm install -g @angular/cli` 

The web app runs on `http://localhost:4200` and the proxy server runs on `http://localhost:4000`

### Testing 

1. Run `npx jest` from the root src/

## Project Technology Overview 🕵️‍♂️

### Angular / TypeScript 

This profile page is written in Angular 11 with TypeScript. It showcases the following Angular language features:

- Angular Components - Custom components, cross-component communication, structural directives, property binding, content projection (content transclusion), string interpolation.
- Angular Dependency Injection.
- Angular Services - Angular services for communication with the service.
- RxJS and Functional programming 

### Styling 

- CSS - Uses Bootstrap and Start Bootstrap for styling with CSS.
- Icons - Icons provided by Font Awesome.
- Images - Freely usable header image provided by unsplash.com.

### Server 

The server is a NodeJS Express server that proxies all service calls requests from the web application. The API implements the REST paradigm for stateless communication between client and server. Uses middleware for proxying.

### Widgets

The Profile Page has two sidebars - a left sidebar and a right sidebar. These sidebars are containers for custom
components and widgets that you wish to display. One such widget is the Quote widget; see future projects/tasks for information on widgets in the pipeline for future development. 

#### Quote Widget

The QuoteComponent is a widget that can be displayed anywhere in the application. It displays styled inspirational 
quotes from a public API service (https://zenquotes.io/). Quote frequencies are easily configurable. 

### Testing 

Uses the Jasmine testing framework alongside Jest.

## Future Projects/Tasks

This technical exercise has been thoroughly enjoyable. There are many more features that I have in mind (and unfortunately ran out of time to implement) but hope to work on these in the future as a personal side-project:

- Widgets 
    - Quote Widget - Further Enhancements on existing widget such as reload on demand and automatic reload at midnight for the next quote of the day. Configuration required for sharing with the community 
    - Google Map location widget - Create a new configurable widget that displays a Google map, pinpointing the visiting user's current location using HTML5 Geolocation API 
    - Page Hit / Likes counter widget - Dynamic rolling counter of page hits / page likes
    - News RSS Reader Widget - Widget that displays a news reader
    - Weather widget (current location) - Displays the weather of the user's current location using HTML5 Geoocation API.
- Profile Page 
    - Further enhancements to the page, including connecting the 'Contact Me' form to a remote service
    - Adding more widgets to side panels once developed 
    - Full web responsive design for mobile phones (web app is responsive but needs some improvements)
    - Profile picture - Move from the left sidebar to the top left of the toolbar when you scroll down (with some fancy animation)
- Remote Service 
    - Deployment of a remote service REST API; implementation of features described above (contact me, page hits etc)


## Troubleshooting 

As a point of reference, I have included a screenshot of what the profile page should look like located at 
src/assets/profilePageScreenshot.PNG. (This is how it is rendered correctly). This is incase some dependencies aren't installed properly and the page looks unstyled and/or services aren't working as expected.

Please feel free to contact me at louisezenasni@hotmail.com if any issues.







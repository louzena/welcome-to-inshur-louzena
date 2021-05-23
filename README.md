# Welcome to Louise Zenasni's Profile Page 💻

## Project Introduction 🛠

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

The profile webpage is written in Angular 11 / TypeScript. The web app runs the Angular Live Web Development Server that provides built-in Live Reload whenever changes are made to the code (code/HTML/CSS). 

A NodeJS Express server runs alongside as a proxy, serving the application data from local and third-party public APIs.

Angular configuration has been setup that handles the following :

- Using a server as a proxy for all service calls from the app.
- Integration with other frameworks such as Jest testing  

Feel free to use the Angular configuration of this project as a skeleton for your own purposes!

## Getting Started 🛠

### Setup
1. `git clone https://github.com/Inshur/welcome-to-inshur.git`
1. `cd welcome-to-inshur`
1. `yarn install`
1. `yarn start`



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

This technical exercise has been thoroughly enjoyable. There are many more features that I have in mind (and unfortunately ran out of time) but hope to work on these in the future as a personal side-project:

- Widgets 
    - Quote Widget - Further Enhancements on existing widget such as reload on demand and automatic reload at midnight for the next quote of the day. Configuration required for sharing with the community 
    - Google Map location widget - Create a new configurable widget that displays a Google map, pinpointing the visiting user's current location using HTML5 Geolocation API 
    - Page Hit / Likes counter widget - Dynamic rolling counter of page hits / page likes (pre-requisiste)
    - News RSS Reader Widget - Widget that displays a news reader
    - Weather widget (current location) - Displays the weather of the user's current location using HTML5 Geoocation API.
- Profile Page 
    - Further enhancements to the page, including connecting the 'Contact Me' form to a remote service
    - Adding more widgets to side panels once developed 
    - Full web page responsiveness for mobile phones
    - Profile picture - Moves to the top left of the scrollbar when you scroll down (with some fancy animation)
- Remote Service 
    - Deployment of a remote service REST API; implementation of features described above (contact me, page hits etc)



























# WelcomeToInshurLouzena

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

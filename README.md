



# Terryberry

## AboutMe Angular Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.2.

## Table of Contents
- [About The Author](#about-the-author)
- [Project Setup](#project-setup)
  * [Prerequisites](#prerequisites)
  * [How To Install](#how-to-install)
  * [How To Run](#how-to-run)
  * [How To Run End To End Tests](#how-to-run-end-to-end-tests)
- [Software Libraries Used](#software-libraries-used)
- [UI And Program Flow](#ui-and-program-flow)
  * [UI Begins With Home Page](#ui-begins-with-Home-Page)
  * [Two Main Views for Results](#two-main-views-for-results)





## About The Author

**Mahesh Andhurthi** is a Angular Developer for large scale web applications at several Fortune companies.

I am a good expert in **Html**, **Css**, and **Bootstrap** and **Angular** 


## Project Setup

### Prerequisites

You need to have Node and NPM installed on your PC.

[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### How To Install

Download the source code using git or else download and unzip the zip file.

Open a terminal window and go to the project root folder.

You need to have npm installed globally.

Run `npm i` to install the required libraries.

### How To Run

Run `ng serve` for a dev server.

Navigate to `http://localhost:4200/`.

The browser will automatically reload if you change any of the source files.

### How To Run End To End Tests

To run the unit tests using Angular *cli*, you need to stop the server.
 
If the server is running, stop the server from the terminal window by pressing *Control-C*.

To run the e2e tests using Angular cli, Run the following command in the terminal window.

`ng e2e -- --protractor-config=e2e/protractor-ci.conf.js`

And if you're running on Windows,
include the `--disable-gpu` flag. See [crbug.com/737678](https://bugs.chromium.org/p/chromium/issues/detail?id=737678).

## Software Libraries Used

The following major software libraries are used:
```text
Angular 11
Angular Material 11
Html 5
Bootstrap 5
RxJS 6
```

## UI And Program Flow

This project demonstrates how to use Angular HttpClientInMemoryWebApiModule
An in-memory web api for Angular demos and tests that emulates CRUD operations over a RESTy API.

It intercepts Angular Http and HttpClient requests that would otherwise go to the remote server and redirects them to an in-memory data store that you control.

Demo apps that need to simulate CRUD data persistence operations without a real server. You won't have to build and start a test server.

Whip up prototypes and proofs of concept.

Share examples with the community in a web coding environment such as Plunker or CodePen. Create Angular issues and StackOverflow answers supported by live code.

Simulate operations against data collections that aren't yet implemented on your dev/test server. You can pass requests thru to the dev/test server for collections that are supported.

### UI Begins With Search Box

The user enters the Home Page text and clicks the Home Tab.

in this Home page displayed Note As How we Follows  

### Two Main Views For Results

#### Home Page 

After clicking the Home Page , a list of Test Content titles is shown. .



##### MyInfo Page 

In this MyInfo Page Displayed Angular Mattrial card with web api data 

And we can see Formgrop Angular mattrial feilds 
















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

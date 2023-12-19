# Table of Contents
- [Project Description](#Project-Description)
    - [How it works](#Overview)
- [How to run (Getting Started)](#Getting-Started-with-Create-React-App)
# Project Description

This project is a Music Player coded with React and BootStrap that is functional through the munipulation of the properties of the HTML Audio element.

## Overview

Built using React. Many of the components build atop each other so components will use components that link back to the root.

The buttons all have event listeners on them so that they can manipulate the state of the HTML audio element.

### Note: In order for this to function as coded, you should have some audio files on hand and create a `songs.js` file that stores the information like so in the src/ directory:

```
// The url property is the path to the file. I recommend storing the files in public/files directory that is created

let song = [ 
    {title: String, artist: String, url: String, id: Number},
    {title: String, artist: String, url: String, id: Number},
    {title: String, artist: String, url: String, id: Number},
    ...
]
export {song};
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Downloads all the required packages for the project that is needed to run the react application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

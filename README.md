# Getting Started with the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tools Used
- react-js
- react-chart-js-2
- material-ui/icons

## Installation
- Kindly clone this repo by `git clone `
- cd to the expense-tracker-react `cd expense-tracket-react` then please do the followings

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the necessary dependencies used in the project

## Attention
Some of the external third parties dependencies installtion might be failed with the npm version >= 7
#### Affected npm Version : >=7
### Solutions
We can use one of the following three solutions for the workaround:
- Manual install with `--leagacy-peer-deps` flag
```
npm install --save chart.js react-chartjs-2 --legacy-peer-deps
npm install @material-ui/core --legacy-peer-deps
npm install @mui/icons-material --legacy-peer-deps
```
- downgrade npm version to 6
- alternatively, we can use `yarn`
```
yarn add chart.js react-chartjs-2
yarn add @material-ui/core
yarn add @material-ui/icons
```


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### Directory Structure
```
src/App.js // entry point of the application
src/Screens/HomeScreen.js // is the container for every components avaible in the app
src/Components/ // all the components are in this folder
src/Components/Common // all the Resuable Components
```

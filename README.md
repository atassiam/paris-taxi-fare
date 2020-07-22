# paris-taxi-fare

NodeJS Microservice REST API for Paris Taxi Fare app

## Available Scripts

### `npm install`

To install the required modules<br />


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
  
 Unit testing:
### `npm run test`

## Routes

### '/'
### '/about'
General informations of the app: name, description and version

### '/rides'
Get list of the rides
Response: JSON Array => [{"id":"{id}","distance":{number},"duration":{number},"startTime":"{datetime}"]

### '/price/:distance/:time'
Get price of a ride
Response: JSON object => {"price":{number}}

### '/end/:time/:duration'
Get end endtime of a ride
Response: JSON object => {"endTime":"{datetime}", "duration":"{string}"}

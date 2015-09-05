# Dead Simple API Starter Kit

A Node/Express4 starter kit that uses the Dead Simple API Engine http://github.com/brandoncorbin/dead-simple-api-engine

## Overview
The Dead Simple API Engine is a Node module that allows you to quickly build a maintainable restful API without all the headaches.

## Getting Started

## Installation

````
git clone https://github.com/brandoncorbin/dead-simple-api.git
cd dead-simple-api
npm install
node index.js
````
The visit: http://localhost:3100/v1/test/world

### Folder Structure

- **api** Everything is contained within a folder, I recommend "api".
 - **routes** Folder for your Versions
   - **v1** First Version
	   - **test** API Module Folder
		   - **test.js** API Module Entry Point (must always be the name of it's parent folder)

In the example above we'd access this test.js by visiting ``localhost:3100/api/v1/test``

#### Example Trigger: test.js

The following will produce ``/api/v1/test/`` and ``/api/v1/test/world``

```
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.json({
    message : 'If this message also has a property of "Injected", everything is working just find.'
	});
});

router.get('/world', function (req, res) {
  res.send('The World said "Hello" back!');
});

module.exports = router; // Send it to the App
```

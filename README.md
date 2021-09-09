# Test Node app

- ran `npm init -y`
- ran `npm i express`
- created app.js file and defined server code:
```javascript
const express = require('express')
const app = express()

app.get('/names', (req, res) => {
    res.send("James");
})

app.listen(500, () => {
    console.log("Server is running on port 5000");
})
```
- ran `npx create-react-app frontend`
- removed the .git folder from the 'frontend' folder with `rm -rf .git`
    *  (-rf = remove folder)

- ran `git init` in main project directory (nodeapp)
- cleaned up React boilerplate files (e.g. _App.js_)
- switched to the frontend folder and ran `npm i axios`

- Added the following code to the frontend App.js file:
```javascript
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [userName, setUsername] = useState('')
  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    const response = await axios.get('/names')
    console.log(response);
  }

  return (
    <div className="App">
      <h1> My awesome CI/CD full starck website </h1>
      <h3> My name is {userName} </h3>
    </div>
  );
}

export default App;
```

- Add the following to package.json:
```json
  },
  "proxy": "http://localhost:5000"
}
```

- Add the following script to package.json
```json
   "start": "node app.js"
  },
```
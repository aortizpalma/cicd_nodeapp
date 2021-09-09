# Test Node app

- ran `npm init -y`
- ran `npm i express`
- created **app.js** file and defined server code:
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

- Added the following code to the frontend **App.js** file:
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

- Added the following at the end of the **package.json** file of the (_** the brackets and commas are just illustrative_):
```json
  },
  "proxy": "http://localhost:5000"
}
```

- Added the following to the **scripts** section of the **package.json** file (_** the brackets and commas are just illustrative_):
```json
   "start": "node app.js"
  },
```

- In the project's root folder ran `node app.js` to start the backend server

- In the 'fontend' folder ran `npm start` to preview the React frontend app.

- created `.github` folder and inside a `workflows` folder.
- created a nodeapp.yml file inside `workflows` and added the following code:
```yaml
name: Nodeapp CI

on:
  push:
    branches: [master]
  pull_request:
    branches: [master]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
        node-version: ${{ matrix.node-version }}
      - run: |
          npm i
          cd frontend
          npm i
          npm run build
```
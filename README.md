# react-bootstrap-controlled-pagination

> pagination controlled component for ease of use for react-bootstrap applications

[![NPM](https://img.shields.io/npm/v/react-bootstrap-controlled-pagination.svg)](https://www.npmjs.com/package/react-bootstrap-controlled-pagination) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bootstrap-controlled-pagination
```

## Usage

```jsx
import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'; added bootstrap as script tag in public/index.html
import styles from './App.module.css';
import { Pagination } from 'react-bootstrap-pagination'
console.log(styles);
const App = () => {
  const [number, setNumber] = useState(0);

  return <div className={styles.container}>
    <div className={styles.number}>{number}</div>
    <Pagination value={number} start={0} end={324} onSelect={setNumber}/>
  </div>
}

export default App;
```

## License

MIT © [adir1661](https://github.com/adir1661)

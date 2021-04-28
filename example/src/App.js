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
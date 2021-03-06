//MODULES
import React, { Component } from 'react'

//ASSETS
import logo from './logo.svg'

//STYLES
import styles from './css/index.scss'

//COMPONENT
class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App

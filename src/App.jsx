import { Header } from './components/Header.jsx'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar.jsx'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h2>teste</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat libero aperiam incidunt quia nostrum, dolorem quam assumenda, fuga aliquid quo molestiae accusamus similique blanditiis beatae iure placeat quae necessitatibus illo.</p>
        </main>
      </div>
    </div>
  )
}

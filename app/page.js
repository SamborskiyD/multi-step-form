"use client"

import styles from "@/styles/page.module.scss"
import App from "@/components/App"
import { Provider } from "react-redux"
import store from "@/redux/store"

export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <App />
      </main>
    </Provider>
  )
}

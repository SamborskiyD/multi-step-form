
import styles from "@/styles/page.module.scss"
import ProgressContainer from "@/components/ProgressContainer"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.appContainer}>
        <ProgressContainer />
      </section>
    </main>
  )
}

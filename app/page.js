
import styles from "@/styles/page.module.scss"
import ProgressContainer from "@/components/ProgressContainer"
import FirstStepForm from "@/components/FirstStepForm"
import SecondStepForm from "@/components/SecondStepForm"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.appContainer}>
        <ProgressContainer />
        <SecondStepForm />
      </section>
    </main>
  )
}

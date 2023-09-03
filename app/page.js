
import styles from "@/styles/page.module.scss"
import ProgressContainer from "@/components/ProgressContainer"
import FirstStepForm from "@/components/FirstStepForm"
import SecondStepForm from "@/components/SecondStepForm"
import ThirdStepForm from "@/components/ThirdStepForm"
import ForthStepForm from "@/components/ForthStepForm"

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.appContainer}>
        <ProgressContainer />
        <ForthStepForm />
      </section>
    </main>
  )
}

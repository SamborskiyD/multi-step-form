import styles from "@/styles/progressContainer.module.scss"
import { useSelector } from "react-redux"

const ProgressContainer = () => {

  const step = useSelector((state) => state.step)

  const styleActive = `${styles.number} ${styles.active}`

  return (
    <div className={styles.progressContainer}>

      <div className={styles.step}>
        <span className={step.stepNum === 1 ? styleActive : styles.number}>1</span>
        <div>
          <p className={styles.text}>step 1</p>
          <h3 className={styles.title}>your info</h3>
        </div>
      </div>

      <div className={styles.step}>
        <span className={step.stepNum === 2 ? styleActive : styles.number}>2</span>
        <div>
          <p className={styles.text}>step 2</p>
          <h3 className={styles.title}>select plan</h3>
        </div>
      </div> 

      <div className={styles.step}>
        <span className={step.stepNum === 3 ? styleActive : styles.number}>3</span>
        <div>
          <p className={styles.text}>step 3</p>
          <h3 className={styles.title}>add-ons</h3>
        </div>
      </div>

      <div className={styles.step}>
        <span className={step.stepNum === 4 ? styleActive : styles.number}>4</span>
        <div>
          <p className={styles.text}>step 4</p>
          <h3 className={styles.title}>summary</h3>
        </div>
      </div>
    </div>
  )
}

export default ProgressContainer
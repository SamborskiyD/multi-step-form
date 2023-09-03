import styles from "@/styles/forthStepForm.module.scss"
import formTemplate from "@/styles/page.module.scss"

const ForthStepForm = () => {
  return (
    <div className={formTemplate.formContainer}>
        <h1 className={formTemplate.title}>Finishing up</h1>
        <p className={formTemplate.description}>Double-check everything looks OK before confirming</p>

        <article className={styles.summary}>
            <div className={styles.plan}>
                <div>
                    <h3 className={styles.title}>Arcade (Yearly)</h3>
                    <span className={styles.link}>Change</span>
                </div>
                <span className={styles.price}>$90/yr</span>
            </div>
            <div className={styles.addOn}>
                <p className={styles.description}>Online service</p>
                <span className={styles.price}>+$10/yr</span>
            </div>
            <div className={styles.addOn}>
                <p className={styles.description}>Larger storage</p>
                <span className={styles.price}>+$20/yr</span>
            </div>
        </article>

        <div className={styles.total}>
            <p className={styles.description}>Total (per year)</p>
            <span className={styles.price}>$120/yr</span>
        </div>

        <div className={formTemplate.formButtons}>
            <button  className={formTemplate.backButton}>Go Back</button>
            <button  className={`${formTemplate.submitButton} ${formTemplate.confirm}`}>Confirm</button>
        </div>
    </div>
  )
}

export default ForthStepForm
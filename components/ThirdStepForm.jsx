import styles from "@/styles/thirdStepForm.module.scss"
import formTemplate from "@/styles/page.module.scss"

const ThirdStepForm = () => {
    return (
        <div className={formTemplate.formContainer}>
            <h1 className={formTemplate.title}>Pick add-ons</h1>
            <p className={formTemplate.description}>Add-ons help enhance your gaming experience.</p>

            <form action="" className={styles.form} id="thirdStepForm">
                <label for="checkbox-1" className={styles.checkboxContainer}>
                    <input type="checkbox" name="" id="checkbox-1" className={styles.checkbox} />
                    <div className={styles.content}>
                        <div>
                            <h3 className={styles.title}>Online service</h3>
                            <p className={styles.description}>Acces to multiplayer games</p>
                        </div>
                        <span className={styles.price}>+$1/mo</span>
                    </div>
                </label>
                <label for="checkbox-2" className={styles.checkboxContainer}>
                    <input type="checkbox" name="" id="checkbox-2" className={styles.checkbox} />
                    <div className={styles.content}>
                        <div>
                            <h3 className={styles.title}>Larger storage</h3>
                            <p className={styles.description}>Extra 1TB of cloud save</p>
                        </div>
                        <span className={styles.price}>+$2/mo</span>
                    </div>
                </label>
                <label for="checkbox-3" className={styles.checkboxContainer}>
                    <input type="checkbox" name="" id="checkbox-3" className={styles.checkbox} />
                    <div className={styles.content}>
                        <div>
                            <h3 className={styles.title}>Customizable profile</h3>
                            <p className={styles.description}>Custom theme on your profile</p>
                        </div>
                        <span className={styles.price}>+$2/mo</span>
                    </div>
                </label>
            </form>

            <div className={formTemplate.formButtons}>
                <button form="thirdStepForm" type="submit" className={formTemplate.backButton}>Go Back</button>
                <button form="thirdStepForm" type="submit" className={formTemplate.submitButton}>Next Page</button>
            </div>
        </div>
    )
}

export default ThirdStepForm
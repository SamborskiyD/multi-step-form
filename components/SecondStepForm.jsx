import styles from "@/styles/secondStepForm.module.scss"
import formTemplate from "@/styles/page.module.scss"
import Image from "next/image"

const SecondStepForm = () => {
  return (
    <div className={formTemplate.formContainer}>
            <h1 className={formTemplate.title}>Select your plan</h1>
            <p className={formTemplate.description}>You have the option of monthly or yearly billing.</p>
            
            <form action="" className={styles.form}>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <Image src={"/icon-arcade.svg"}  width={40} height={40}/>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Arcade</h3>
                            <p className={styles.price}>$9/mo</p>
                            <p className={styles.description}> 2 months free</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src={"/icon-advanced.svg"}  width={40} height={40}/>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Advanced</h3>
                            <p className={styles.price}>$12/mo</p>
                            <p className={styles.description}> 2 months free</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src={"/icon-pro.svg"}  width={40} height={40}/>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Pro</h3>
                            <p className={styles.price}>$15/mo</p>
                            <p className={styles.description}> 2 months free</p>
                        </div>
                    </div>
                </div>

                <div className={styles.switchContainer}>
                    <span>Monthly</span>
                    <span>Yearly</span>
                </div>
            </form>

            <div className={formTemplate.formButtons}>
                <button form="firstStepForm" type="submit" className={formTemplate.backButton}>Go Back</button>
                <button form="firstStepForm" type="submit" className={formTemplate.submitButton}>Next Page</button>
            </div>
    </div>
  )
}

export default SecondStepForm
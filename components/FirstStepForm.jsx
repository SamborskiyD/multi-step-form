import styles from "@/styles/firstStepForm.module.scss"
import formTemplate from "@/styles/page.module.scss"

const FirstStepForm = () => {
    return (
        <div className={formTemplate.formContainer}>
            <h1 className={styles.title}>Personal info</h1>
            <p className={styles.description}>Please provide your name, email adress and phone number.</p>

            <form action="" className={styles.form}>
                <div className={styles.formFields}>
                    <div className={styles.inputBox}>
                        <label for="name" className={styles.label}>Name</label>
                        <input className={styles.input} type="text" id="name" placeholder="e.g. Stephen King" required />
                    </div>
                    <div className={styles.inputBox}>
                        <label for="email" className={styles.label}>Email Addres</label>
                        <input className={styles.input} type="email" id="email" placeholder="e.g. stephenking@lorem.com" required />
                    </div>
                    <div className={styles.inputBox}>
                        <label for="phone" className={styles.label}>Phone Number</label>
                        <input className={styles.input} type="tel" id="phone" placeholder="e.g. +1 234 567 890" required />
                    </div>
                </div>

                <button type="submit" className={formTemplate.submitButton}>Next Page</button>
            </form>
        </div>
    )
}

export default FirstStepForm

import styles from "@/styles/firstStepForm.module.scss"
import formTemplate from "@/styles/page.module.scss"
import { useDispatch } from "react-redux"
import { nextStep } from "@/redux/stepSlice"
import { setContactInfo } from "@/redux/dataSlice"
import { useState } from "react"

const FirstStepForm = () => {

    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault()

        dispatch(setContactInfo(userData))
        dispatch(nextStep())
    }

    const handleInputChange = (event) => {
        const {id, value} = event.target
        setUserData({
            ...userData, [id]: value
        })
    }

    return (
        <div className={formTemplate.formContainer}>
            <h1 className={formTemplate.title}>Personal info</h1>
            <p className={formTemplate.description}>Please provide your name, email adress and phone number.</p>

            <form onSubmit={handleSubmit} className={styles.form} id="firstStepForm">
                <div className={styles.inputBox}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input onChange={handleInputChange} className={styles.input} type="text" id="name" placeholder="e.g. Stephen King" />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="email" className={styles.label}>Email Addres</label>
                    <input onChange={handleInputChange} className={styles.input} type="email" id="email" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input onChange={handleInputChange} className={styles.input} type="tel" id="phone" placeholder="e.g. +1 234 567 890" />
                </div>
            </form>

            <div className={formTemplate.formButtons}>
                <span></span>
                <button
                    form="firstStepForm" type="submit"
                    className={formTemplate.submitButton}
                >
                    Next Page
                </button>
            </div>
        </div>
    )
}

export default FirstStepForm
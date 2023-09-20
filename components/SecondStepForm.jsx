import styles from "@/styles/secondStepForm.module.scss"
import formTemplate from "@/styles/page.module.scss"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import { nextStep, prevStep } from "@/redux/stepSlice"
import { setPlanType, setPlan } from "@/redux/dataSlice"


const SecondStepForm = () => {

    const planData = useSelector((state) => state.data)

    const dispatch = useDispatch()


    return (
        <div className={formTemplate.formContainer}>
            <h1 className={formTemplate.title}>Select your plan</h1>
            <p className={formTemplate.description}>You have the option of monthly or yearly billing.</p>

            <form onSubmit className={styles.form}>
                <div className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <Image src={"/icon-arcade.svg"} width={40} height={40} alt="arcade icon"/>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Arcade</h3>
                            <p className={styles.price}>{planData.planType === 'Yearly' ? '$90/yr' : '$9/mo'}</p>
                            {
                                planData.planType === 'Yearly' ? <p className={styles.description}> 2 months free</p> : <></>
                            }
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src={"/icon-advanced.svg"} width={40} height={40} alt="advanced icon"/>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Advanced</h3>
                            <p className={styles.price}>{planData.planType === 'Yearly' ? '$120/yr' : '$12/mo'}</p>
                            {
                                planData.planType === 'Yearly' ? <p className={styles.description}> 2 months free</p> : <></>
                            }
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image src={"/icon-pro.svg"} width={40} height={40} alt="pro icon"/>
                        <div className={styles.content}>
                            <h3 className={styles.title}>Pro</h3>
                            <p className={styles.price}>{planData.planType === 'Yearly' ? '$150/yr' : '$15/mo'}</p>
                            {
                                planData.planType === 'Yearly' ? <p className={styles.description}> 2 months free</p> : <></>
                            }
                        </div>
                    </div>
                </div>

                <div className={styles.switchContainer}>
                    <span className={styles.state}>Monthly</span>
                    <div className={styles.switch}>
                        <input 
                            type="checkbox" 
                            name="checkbox" 
                            id="checkbox"
                            className={styles.checkbox} 
                            onClick={(event)=> dispatch(setPlanType(event.target.checked))} 
                        />
                        <span className={styles.slider}></span>
                    </div>
                    <span className={styles.state}>Yearly</span>
                </div>
            </form>

            <div className={formTemplate.formButtons}>
                <button
                    className={formTemplate.backButton}
                    onClick={() => dispatch(prevStep())}
                >
                    Go Back
                </button>
                <button
                    form="firstStepForm" type="submit"
                    className={formTemplate.submitButton}
                    onClick={() => dispatch(nextStep())}
                >
                    Next Page
                </button>
            </div>
        </div>
    )
}

export default SecondStepForm
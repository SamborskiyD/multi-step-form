
import styles from "@/styles/page.module.scss"
import ProgressContainer from "@/components/ProgressContainer"
import FirstStepForm from "@/components/FirstStepForm"
import SecondStepForm from "@/components/SecondStepForm"
import ThirdStepForm from "@/components/ThirdStepForm"
import ForthStepForm from "@/components/ForthStepForm"
import FinishBanner from "@/components/FinishBanner"
import { useSelector } from "react-redux"


const App = () => {

    const step = useSelector((state) => state.step)

    return (
        <section className={styles.appContainer}>
            <ProgressContainer />
            {
                step.stepNum === 1 ? <FirstStepForm /> : 
                step.stepNum === 2 ? <SecondStepForm /> :
                step.stepNum === 3 ? <ThirdStepForm /> :
                step.stepNum === 4 ? <ForthStepForm /> :
                <FinishBanner />
            }
        </section>
    )
}

export default App
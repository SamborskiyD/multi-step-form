import styles from "@/styles/finishBanner.module.scss"
import formTemplate from "@/styles/page.module.scss"
import Image from "next/image"

const FinishBanner = () => {
  return (
    <div className={`${formTemplate.formContainer} ${styles.banner}`}>
        <Image src={"/icon-thank-you.svg"} width={80} height={80}/>
        <h1 className={formTemplate.title}>Thank you!</h1>
        <p className={formTemplate.description}>
          Thanks for confirming your subscription! We hope you have fun using our platform. 
          If you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
    </div>
  )
}

export default FinishBanner
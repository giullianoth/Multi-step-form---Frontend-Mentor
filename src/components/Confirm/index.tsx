import styles from "./Confirm.module.css"
import iconThankYou from "/images/icon-thank-you.svg"

const Confirm = () => {
    return (
        <article className={styles.confirm}>
            <img src={iconThankYou} alt="Thank you!" className={styles.confirm__icon} />

            <header className="title">
                <h2>Thank you!</h2>
                <p className={styles.confirm__text}>Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.</p>
            </header>
        </article>
    )
}

export default Confirm
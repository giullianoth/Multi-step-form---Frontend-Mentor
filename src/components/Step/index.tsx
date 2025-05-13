import styles from "./Step.module.css"

interface StepProps {
    step: number
    title: string
    active: boolean
}

const Step = ({ step, title, active }: StepProps) => {
    return (
        <div className={styles.step + (active ? ` ${styles.active}` : "")}>
            <p className={styles.step__number}>{step}</p>

            <p className={styles.step__title}>
                Step {step}
                <span>{title}</span>
            </p>
        </div>
    )
}

export default Step
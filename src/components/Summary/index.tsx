import { useEffect } from "react"
import { usePlanContext } from "../../context/usePlanContext"
import styles from "./Summary.module.css"
import { useStepsContext } from "../../context/useStepsContext"

const capitalized = (text: string) => text.charAt(0).toUpperCase() + text.slice(1)
const sliced = (text: string) => text.substring(0, text.length - 2)

const Summary = () => {
  const { data, setData } = usePlanContext()
  const { dispatch } = useStepsContext()

  useEffect(() => {
    const period = data.period
    const totalPrice = data.plan?.price[period as keyof typeof data.plan.price]
    let addOnsPrice = 0

    data.addOns?.length && data.addOns?.forEach(addOn => addOnsPrice += addOn.price[period as keyof typeof addOn.price])

    setData({ totalPrice: totalPrice! + addOnsPrice })
  }, [])

  return (
    <article>
      <header className="title">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </header>

      <article className={styles.summary}>
        <div className={`${styles.summary__row} ${styles.summary__title}${data.addOns?.length ? ` ${styles.bordered}` : ""}`}>
          <header className={styles.summary__rowInfo}>
            <h3>{data.plan?.name} ({capitalized(data.period!)})</h3>
            <span onClick={() => dispatch(2)}>Change</span>
          </header>

          <p className={styles.summary__rowPrice}>
            ${data.plan?.price?.[data.period as keyof typeof data.plan.price]}/
            {data.period === "monthly" ? "mo" : ""}
            {data.period === "yearly" ? "yr" : ""}
          </p>
        </div>

        {data.addOns?.length
          ? data.addOns?.map(addOn => (
            <div key={addOn.id} className={styles.summary__row}>
              <p className={styles.summary__rowInfo}>{addOn.name}</p>

              <p className={styles.summary__rowPrice}>
                ${addOn.price[data.period as keyof typeof addOn.price]}/
                {data.period === "monthly" ? "mo" : ""}
                {data.period === "yearly" ? "yr" : ""}
              </p>
            </div>
          ))

          : <></>}
      </article>

      <div className={`${styles.summary__total} ${styles.summary__row}`}>
        <p className={styles.summary__totalInfo}>Total (per {sliced(data.period!)})</p>

        <p className={styles.summary__totalPrice}>
          ${data.totalPrice}/
          {data.period === "monthly" ? "mo" : ""}
          {data.period === "yearly" ? "yr" : ""}
        </p>
      </div>
    </article>
  )
}

export default Summary
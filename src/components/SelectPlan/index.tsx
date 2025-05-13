import { useEffect, type ChangeEvent } from "react"
import { usePlanContext } from "../../context/usePlanContext"
import { Plans } from "../../data/Plan"
import styles from "./SelectPlan.module.css"

const SelectPlan = () => {
  const { data, setData } = usePlanContext()

  useEffect(() => {
    setData({
      period: data.period ?? "monthly",
      plan: data.plan ?? Plans[0]
    })
  }, [])

  const handleSetPeriod = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target

    if (checked) {
      setData({ period: value })
    }
  }

  const handleSetPlan = (event: ChangeEvent<HTMLInputElement>, planId: number) => {
    const { checked } = event.target
    const plan = Plans.find(p => p.id === planId)

    if (plan && checked) {
      setData({ plan })
    }
  }

  return (
    <article>
      <header className="title">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <div className={styles.selectPlan__form}>
        {Plans.map(plan => (
          <label key={plan.id} className={`labelSelect ${styles.selectPlan__label}`}>
            <input
              type="radio"
              value={plan.name}
              checked={plan === data.plan}
              onChange={event => handleSetPlan(event, plan.id)} />

            <div className={`labelContent ${styles.selectPlan__labelContent}`}>
              <div className={styles.selectPlan__image}>
                <img src={plan.icon} alt={plan.name} />
              </div>

              <div className={styles.selectPlan__info}>
                <p className={styles.selectPlan__title}>
                  <strong>{plan.name}</strong>
                </p>

                <p className={styles.selectPlan__price}>
                  ${plan.price[data.period as keyof typeof plan.price]}/
                  {data.period === "monthly" ? "mo" : ""}
                  {data.period === "yearly" ? "yr" : ""}
                </p>

                {plan.benefits && plan.benefits.period === data.period &&
                  <p className={styles.selectPlan__benefit}>{plan.benefits.benefit}</p>}
              </div>
            </div>
          </label>
        ))}
      </div>

      <div className={styles.selectPlan__choose}>
        <input
          type="radio"
          id="monthly"
          value="monthly"
          className={styles.monthly}
          checked={data.period === "monthly"}
          onChange={handleSetPeriod} />

        <input
          type="radio"
          id="yearly"
          value="yearly"
          className={styles.yearly}
          checked={data.period === "yearly"}
          onChange={handleSetPeriod} />

        <label htmlFor="monthly" className={`${styles.chooseLabel} ${styles.monthly}`}>Monthly</label>

        <div className={styles.switch}>
          <div className={styles.button}></div>
          <label htmlFor="monthly" className={styles.clickable}></label>
          <label htmlFor="yearly" className={styles.clickable}></label>
        </div>

        <label htmlFor="yearly" className={`${styles.chooseLabel} ${styles.yearly}`}>Yearly</label>
      </div>
    </article>
  )
}

export default SelectPlan
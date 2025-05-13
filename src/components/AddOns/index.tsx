import styles from "./AddOns.module.css"
import checkMark from "/images/icon-checkmark.svg"
import { AddOns as AddOnsList } from "../../data/AddOns"
import { usePlanContext } from "../../context/usePlanContext"
import { useEffect, type ChangeEvent } from "react"

const AddOns = () => {
  const { data, setData } = usePlanContext()

  useEffect(() => {
    setData({ addOns: data.addOns ?? [] })
  }, [])

  const handleSetAddOn = (event: ChangeEvent<HTMLInputElement>, addOnId: number) => {
    const { checked } = event.target
    const addOn = AddOnsList.find(add => add.id === addOnId)

    if (addOn && checked) {
      setData({ addOns: [...data.addOns!, addOn] })
    }

    if (!checked) {
      const sanitizedAddOns = data.addOns?.filter(add => add.id !== addOnId)
      setData({ addOns: sanitizedAddOns })
    }
  }

  return (
    <article>
      <header className="title">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </header>

      <div className={styles.addOns__form}>
        {AddOnsList.map(addOn => (
          <label key={addOn.id} className={`labelSelect ${styles.addOns__label}`}>
            <input
              type="checkbox"
              value="Add-on"
              checked={data.addOns?.includes(addOn) ?? false}
              onChange={event => handleSetAddOn(event, addOn.id)} />

            <div className={`labelContent ${styles.addOns__labelContent}`}>
              <div className={styles.addOns__check}>
                <div className={styles.addOns__checkBox}>
                  <img src={checkMark} alt="Checkmark" />
                </div>
              </div>

              <div className={styles.addOns__info}>
                <p className={styles.addOns__title}>{addOn.name}</p>
                <p className={styles.addOns__description}>{addOn.description}</p>
              </div>

              <div className={styles.addOns__price}>
                ${addOn.price[data.period as keyof typeof addOn.price]}/
                {data.period === "monthly" ? "mo" : ""}
                {data.period === "yearly" ? "yr" : ""}
              </div>
            </div>
          </label>
        ))}
      </div>
    </article>
  )
}

export default AddOns
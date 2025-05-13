import { useState, type ChangeEvent, type FocusEvent } from "react"
import { usePlanContext } from "../../context/usePlanContext"
import styles from "./PersonalInfo.module.css"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const numberPattern = /[0-9]/

const PersonalInfo = () => {
  const { data, setData } = usePlanContext()

  const [nameError, setNameError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [phoneError, setPhoneError] = useState<string | null>(null)

  const validateEntries = (event: ChangeEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    switch (name) {
      case "name":
        setNameError(null)

        if (!value) {
          setNameError("This field is required")
        }
        
        break

      case "email":
        setEmailError(null)

        if (!value) {
          setEmailError("This field is required")
        }

        if (value && event.type === "blur" && !emailPattern.test(value)) {
          setEmailError("Invalid email address")
        }

        break

      case "phone":
        setPhoneError(null)

        if (!value) {
          setPhoneError("This field is required")
        }

        if (value && event.type === "blur" && !value.match(numberPattern)) {
          setPhoneError("Invalid phone number")
        }

        break
    }

    setData({ [name]: value })
  }

  return (
    <article>
      <header className="title">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </header>

      <div className={styles.personalInfo__form}>
        <label>
          <p>
            <span>Name</span>
            {nameError && <span className="error">{nameError}</span>}
          </p>

          <input
            type="text"
            name="name"
            placeholder="e.g. Stephen King"
            value={data.name ?? ""}
            onChange={validateEntries}
            onBlur={validateEntries}
            className={nameError ? "invalid" : ""} />
        </label>

        <label>
          <p>
            <span>Email Address</span>
            {emailError && <span className="error">{emailError}</span>}
          </p>

          <input
            type="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={data.email ?? ""}
            onChange={validateEntries}
            onBlur={validateEntries}
            className={emailError ? "invalid" : ""} />
        </label>

        <label>
          <p>
            <span>Phone Number</span>
            {phoneError && <span className="error">{phoneError}</span>}
          </p>

          <input
            type="text"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={data.phone ?? ""}
            onChange={validateEntries}
            onBlur={validateEntries}
            className={phoneError ? "invalid" : ""} />
        </label>
      </div>
    </article>
  )
}

export default PersonalInfo
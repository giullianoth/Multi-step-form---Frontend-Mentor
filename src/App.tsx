import { useEffect, useState, type FormEvent } from "react"
import "./App.css"
import Step from "./components/Step"
import { usePlanContext } from "./context/usePlanContext"
import { useStepsContext } from "./context/useStepsContext"

function App() {
  const { stepState, dispatch } = useStepsContext()
  const { data } = usePlanContext()
  const [personalInfoIsValid, setPersonalInfoIsValid] = useState<boolean>(false)

  useEffect(() => {
    if (data.name && data.email && data.phone) {
      setPersonalInfoIsValid(true)
    } else {
      setPersonalInfoIsValid(false)
    }
  }, [data])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(data);
    dispatch(5)
  }

  return (
    <>
      <header className="header">
        <h1>Multi-step Form</h1>
      </header>

      <main>
        <div className="container">
          <section className="steps">
            <Step title="Your info" step={1} active={stepState.step === 1} />
            <Step title="Select plan" step={2} active={stepState.step === 2} />
            <Step title="Add-ons" step={3} active={stepState.step === 3} />
            <Step title="Summary" step={4} active={stepState.step === 4} />
          </section>

          <section className="form">
            <form onSubmit={handleSubmit}>
              <div className="formWrapper">
                <stepState.component />
              </div>

              {stepState.step !== 5 &&
                <div className="actions">
                  {stepState.step > 1
                    ? <span
                      className="button clear"
                      onClick={() => dispatch(stepState.step - 1)}>Go Back</span>

                    : <span></span>}

                  {stepState.step < stepState.quantity
                    ? <span
                      className={`button blue${!personalInfoIsValid ? " disabled" : ""}`}
                      onClick={() => personalInfoIsValid && dispatch(stepState.step + 1)}>Next Step</span>

                    : <button type="submit" className="button purple">Confirm</button>}
                </div>
              }
            </form>
          </section>
        </div>
      </main>

      <footer className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Giulliano Guimarães</a>.
      </footer>
    </>
  )
}

export default App

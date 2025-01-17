import { useEffect, useState } from "react";
import SignupPageStepOne from "../../components/SignupPageSteps/SignupPageStepOne";
import SignupPageStepTwo from '../../components/SignupPageSteps/SignupPageStepTwo'
import SignupPageStepThree from '../../components/SignupPageSteps/SignupPageStepThree'
import styles from "./styles.module.css";
import SuccessfullSignup from "../../components/SignupPageSteps/SuccessfullSignup";

export function SignUpPage() {

const [step, setStep] = useState(0);
const [formData, setFormData] = useState({
  userName:'',
  email:'',
  cpf:'',
  phoneNumber:'',
  birthday:'',
  postalCode: '',
  baseAddress:'',
  baseAddressNumber:'',
  neighborhood:'',
  cityName:'',
  stateName:'',
  password: ''
})

const stepForward = () => {
  if(step + 1 <= 3) setStep(step + 1)
}

const stepBackward = () => {
  if(step - 1 >= 0) setStep(step - 1)
}

const stepsArray = [
  <SignupPageStepOne stepForward={stepForward} formData={formData} setFormData={setFormData}/>, 
  <SignupPageStepTwo stepForward={stepForward} stepBackward={stepBackward} formData={formData} setFormData={setFormData}/>, 
  <SignupPageStepThree stepForward={stepForward} stepBackward={stepBackward} formData={formData} setFormData={setFormData}/>,
  <SuccessfullSignup/>
]

const stepRender = (stepNumber: number) => {
  return stepsArray[stepNumber] 
}

  return (
    <div id={styles["signup-main-container"]}>
      <aside id={styles["side-image"]}/>
      {stepRender(step)}
    </div>
  );
}

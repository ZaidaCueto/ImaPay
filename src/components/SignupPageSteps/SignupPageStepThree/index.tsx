import React from 'react'
import { signupFormStepHandler } from '../../../models/signupForm';
import SignupFormCloseUp from '../SingupFormCloseButton';
import styles from "./styles.module.css";

interface stepperHandler {
    stepperHandler: () => void
}

const SignupPageStepOne = ({stepForward, stepBackward} : signupFormStepHandler) => {
  return (
    <>
    <main className={styles["main-container-style"]}>
      <header className={styles["forms-header-container"]}>
        <h1 id={styles["header-title"]}>Registro Pessoa Física</h1>
      </header>
    <SignupFormCloseUp/>
    <form id={styles["form-container-style"]} onSubmit={() => proceedToAddressStep()}>
      <div className={styles["forms-sections-containers"]}>
        <label className={styles["labels-styling"]} >Nome</label>
        <input required className={styles["inputs-style"]} id={styles["nome"]} placeholder="Nome completo" />
      </div>
      <div className={styles["forms-sections-containers"]}>
        <label className={styles["labels-styling"]} >Email</label>
        <input required className={styles["inputs-style"]} id={styles["email"]} placeholder="examplo@bankmail.com" />
      </div>
      <div className={styles["forms-sections-containers"]}>
        <label className={styles["labels-styling"]} >CPF</label>
        <input required className={styles["inputs-style"]} id={styles["cpf"]} placeholder="000.000.000-00" />
      </div>
      <div className={styles["forms-sections-containers"]}>
        <label className={styles["labels-styling"]}>Celular</label>
        <input required className={styles["inputs-style"]} id={styles["celular"]} placeholder="(99) 9 9999-9999" />
      </div>
      <div className={styles["forms-sections-containers"]}>
        <label className={styles["labels-styling"]}>
          Data de nascimento
        </label>
        <input required className={styles["inputs-style"]} id={styles["data-de-nascimento"]} placeholder=" DD/MM/AAAA" />
      </div>
      <div id={styles["terms-and-services-container"]}>
        <input onChange={() => toggleSubmitButton()} type="checkbox" id={styles["terms-and-services-checkbox"]} />
        <p id={styles["terms-and-services-text"]}>Li e concordo com os
          <a onClick={() => showModal(event)}>Termos de
            Serviço</a>
        </p>
      </div>

      <nav id={styles["nav-button-container"]}>
        <button 
          disabled={true} 
          id={styles["submit-button"]} 
          className={`${styles["submit-button-style"]} ${styles["no-button-style"]}`} 
          type="submit"
          >
          PRÓXIMO
        </button>
      </nav>
    </form>
  </main>
  </>
)
}

export default SignupPageStepOne
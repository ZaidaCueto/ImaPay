import { useState } from "react";
import styles from "./LoginPage.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { cpfMask } from "./CpfMask";
import axios from "axios";
import jwt_decode from "jwt-decode";

export function LoginPage() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: any) {
    e.preventDefault();
    const cleanedValue = cpf.replace(/[^\d]/g, '');
    console.log(cleanedValue)
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const loginDto = {
        Cpf: cleanedValue,
        Password: password,
      };
      setIsLoading(true);
      const response = await axios.post(
        "https://localhost:7274/users/login",
        JSON.stringify(loginDto),
        { headers }
      );
      const token = response.data.token;

      localStorage.setItem("Token", token);
      setIsLoading(false);
      setCpf("");
      setPassword("");
      navigate("/user");
    } catch (err: any) {
      console.log(err.response.data.message);
      setError(true);
    }
  }

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.loginPage}>
          <div className={styles.formPage}>
            <h2>Faça seu login</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor='cpf'>CPF</label>

              <input
                type='string'
                id='cpf'
                maxLength={14}
                value={cpf}
                placeholder='000.000.000-00'
                onChange={(e) => setCpf(cpfMask(e.target.value))}
                className={error ? "error" : ""}
              />

              <label htmlFor='password'>Senha</label>
              <input
                type='password'
                id='password'
                value={password}
                placeholder='Insira sua senha'
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p>Usuário ou senha incorretos.</p>}

              <div className='forgot-password'>
                <NavLink to='/password-recovery'>Esqueceu a senha?</NavLink>
              </div>
              <button type='submit'>
                {isLoading ? "...Carregando" : "Entrar"}
              </button>
              <div className={styles.signupLink}>
                <span>Nao possui uma conta?</span>
                <NavLink to='/signup'>Cadastre-se</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

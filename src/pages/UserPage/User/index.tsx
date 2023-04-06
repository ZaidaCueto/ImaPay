import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./style.module.css";
import Money from "../../../assets/img/money-bold.svg";
import { Balance } from "../balance";
import HeaderUserPage from "../headerUserPage";
import Historic from "../historic";
import Transfer from "../Transfer";

export function UserPage() {
  const [userName, setUserName] = useState("Usuário");
  const [userList, setUserList] = useState([]);
  const [balance, setBalance] = useState(50);
  const [balanceAvailable, setBalanceAvailable] = useState(25);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () =>{
      setIsModalOpen(false);

    
  };

  useEffect(() => {
    axios
      .get("http://localhost:3333/users")
      .then(({ data }) => setUserList(data));
  }, []); 

  return (
    <div>
      <HeaderUserPage name={userName} />
      <Balance balance={balance} balanceAvailable={balanceAvailable} />
      <button className="button-for-transfer" onClick={openModal}>Fazer Transferência</button>
      <Transfer isOpen={isModalOpen} onClose={closeModal}/>
      <Historic users={userList} />
      
    </div>
  );
}

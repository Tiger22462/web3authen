//import 
import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadBlockchainData, loadWeb3 } from "../Web3helpers";

export default function Metamask() {

    //navigate const setup
    const navigate = useNavigate();
    //web 3 const setup
    const [accounts, setAccounts] = useState(null);
    const [auth, setAuth] = useState(null);
    const loadAccounts = async () => {
        try {
            // this const must have await to load it first so it can do anything else
            const { auth, accounts } = await loadBlockchainData();
            setAccounts(accounts);
            setAuth(auth);
        } catch (error) {
            console.log(error.message)
        }
    };
    //Connect Wallet
    const walletConnect = async () => {
        try {
            await loadWeb3();
            await loadAccounts();
            navigate("/Firstpage")
        } catch (error) {
            console.log(error.message)
        }
    };
    //Display Metamask Page
    return (
        <div>
            <h1>Questionnaire</h1>
            <button onClick={walletConnect}>
                Connect Metamask
            </button>
        </div>
    );
}



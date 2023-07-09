import Web3 from "../node_modules/web3/dist/web3.min.js";

import Auth from "./build/contracts/Auth.json";

//check with metamask
export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();  //request user permission to connect to their Ethereum accounts.
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.alert(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
};

//loading blockchain data
export const loadBlockchainData = async () => {
  const web3 = window.web3;
  // Load ETH account
  const accounts = await web3.eth.getAccounts();
  // Network ID 
  const networkId = await web3.eth.net.getId();
  // Network data
  if (networkId) {  //if valid create contract
    const auth = new web3.eth.Contract(
      Auth.abi,
      Auth.networks[networkId].address
    );
    return { auth, accounts: accounts[0] };
  }
};

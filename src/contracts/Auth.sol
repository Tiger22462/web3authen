// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Auth{
    
    uint public userCount=0;

    mapping(string => user) public usersList;

     struct user{
      string username;
      string email;
      string password;
      string phone;
  }

   // events

   event userCreated(
      string username,
      string email,
      string password,
      string phone
    );

  function createUser(string memory _username,string memory _email,string memory _password,string memory _phone) public {
      
        userCount++;

        usersList[_email] = user(_username,_email,_password,_phone);
      
        emit userCreated(_username,_email,_password,_phone);
    }


}
# SimpleRegistry DApp README

## Overview

#### The SimpleRegistry is a decentralized application (DApp) built on the Ethereum blockchain using the Solidity programming language. This DApp serves as a simple registry, allowing users to store and update information about an entity, including its name and age.

## License
This smart contract is released under the MIT License. Please refer to the SPDX-License-Identifier comment in the contract code for more details.

## solidity
Copy code
// SPDX-License-Identifier: MIT
Prerequisites
To interact with this DApp, you will need an Ethereum-compatible development environment, such as Remix, Truffle, or any other Solidity-compatible development environment.

## Contract Details
State Variables
entityName: A private string variable representing the name of the registered entity.
entityAge: A private uint variable representing the age of the registered entity.
Constructor
constructor(string memory name, uint age): Initializes the contract with the initial name and age of the registered entity.
Functions
updateName

Parameters: string memory newName
Visibility: Public
Description: Updates the entityName variable with a new name.
updateAge

Parameters: uint newAge
Visibility: Public
Description: Updates the entityAge variable with a new age.
getEntityDetails

Visibility: Public view
Returns: (string memory name, uint age)
Description: Retrieves the current name and age of the registered entity.
Usage
Deployment

Deploy the contract by providing an initial name and age during deployment.
Update Name

Call the updateName function with the desired new name.
Update Age

Call the updateAge function with the desired new age.
Retrieve Entity Details

Call the getEntityDetails function to retrieve the current name and age of the registered entity.
Example
solidity
Copy code
// Deploying the contract with an initial name and age
SimpleRegistry registryContract = new SimpleRegistry("John Doe", 25);

// Updating the name
registryContract.updateName("Jane Doe");

// Updating the age
registryContract.updateAge(30);

// Retrieving the current entity details
(string memory currentName, uint currentAge) = registryContract.getEntityDetail

### `Contract Address` : *0x1851043d77D2767fE72A16b05FCe7795BBCdB7BC*
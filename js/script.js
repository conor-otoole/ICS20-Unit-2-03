// Copyright (c) 2022 Conor All rights reserved
//
// Created by: Conor
// Created on: Oct 2022
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const StreetNumber = document.getElementById("street-number").value
  const StreetAddress = parseInt(document.getElementById("street-address").value)

  // output
  document.getElementById("address").innerHTML =
    "Your street number is " + StreetNumber + ", address " + StreetAddress + "."
}

// Copyright (c) 2024 Mohammed All rights reserved
//
// Created by: Mohammed
// Created on: May 2024
// This file contains the JS functions for index.html

'use strict'

function myButtonClicked() {
  // This function does multiplication using a loop
  // input
  const number = parseInt(document.getElementById("number").value)

  // process
  let answer = 0
  for (let counter = 0; counter < number; counter++) {
    answer += counter
  }
  answer += number

  // output
  document.getElementById('answer').innerHTML = "The sum of all the numbers between 1 and " + number + " is " + answer
}
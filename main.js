"use strict";

const initialAnswer = document.getElementById("initialAnswer");
const theRealWorld = "Fasten your seat belts, we're getting in.";
const candidateName = document.getElementById("candidateName");
const theFakeWorld = "You remain in blissful ignorance.";
const errorMessage = "You have to fill all the fields and check answers";
const person = document.getElementById("person");

function pillRed() {
  let initialAnswerValue = initialAnswer.value.toUpperCase();
  let candidateNameValue = candidateName.value;

  let abc =
    (initialAnswerValue == "YES" || initialAnswerValue == "NO") &&
    candidateNameValue != "";

  if (abc) {
    alert(theRealWorld);
    document.getElementById("intro").classList.add("disappear");
    document.getElementById("the_matrix").classList.add("appear-opacity");
    document.getElementById("person").innerHTML = candidateName.value;
  } else {
    initialAnswerValue = "";
    document
      .getElementById("error-message-1")
      .classList.add("appear-transform");
    alert(errorMessage);
  }
}

function pillBlue() {
  alert(theFakeWorld);
  document.getElementById("intro").classList.add("disappear");
  document.getElementById("blissful_ignorance").classList.add("appear-opacity");
}

candidateName.onkeydown = function (e) {
  if (e.keyCode == 13) {
    pillRed();
  }
};

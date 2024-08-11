'use strict'

console.log("Hello World!")

const btnShareFact = document.querySelector(".btn-share-fact")
const factForm = document.querySelector(".fact-form")

btnShareFact.addEventListener("click", function() {
   if (factForm.classList.contains("hidden")) {
      factForm.classList.remove("hidden")
      btnShareFact.textContent = "Close"
   } else {
      factForm.classList.add("hidden")
      btnShareFact.textContent = "Share a fact"
   }
})

'use strict'

const initialFacts = [
   {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
   },
   {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
         "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
   },
   {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
   },
];

// Sellect DOM elements
const btnShareFact = document.querySelector(".btn-share-fact")
const factForm = document.querySelector(".fact-form")
const factList = document.querySelector(".fact-list")

// Set fact-list (ul element) to blank 
factList.innerHTML = ""

// Load data from Supabase database
async function loadFacts() {
   const res = await fetch("https://nkbcnstwumvepwdkuumj.supabase.co/rest/v1/facts", {
      headers: {
         apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYmNuc3R3dW12ZXB3ZGt1dW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzMjYyNzUsImV4cCI6MjAzODkwMjI3NX0.JYOzuUAQHm7GBUfSUj64k4kNui3VDvLCyAzeXolpVzU",
         authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYmNuc3R3dW12ZXB3ZGt1dW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzMjYyNzUsImV4cCI6MjAzODkwMjI3NX0.JYOzuUAQHm7GBUfSUj64k4kNui3VDvLCyAzeXolpVzU",
      },
   })
   const data = await res.json()
   console.log(res)
   console.log(data)

   createFactList(data)
}

loadFacts()


function createFactList(dataArray) {

   const htmlArr = initialFacts.map((fact) => `<li class="fact">
<p>
   ${fact.text}
   <a class="source"
      href="${fact.source}"
      target="_blank">(Source)
   </a>
</p>
<span class="tag" style="background-color: #eab308;">${fact.category}</span>
</li>`)

   const html = htmlArr.join("")

   factList.insertAdjacentHTML("afterbegin", html)
}

createFactList(initialFacts)

btnShareFact.addEventListener("click", function () {
   if (factForm.classList.contains("hidden")) {
      factForm.classList.remove("hidden")
      btnShareFact.textContent = "Close"
   } else {
      factForm.classList.add("hidden")
      btnShareFact.textContent = "Share a fact"
   }
})


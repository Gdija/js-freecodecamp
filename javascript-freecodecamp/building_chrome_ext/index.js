let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

// localStorage.clear()
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
  myLeads = []
  renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    //clear out the input field
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()

    console.log( localStorage.getItem("myLeads") )

})

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
          <a target='_blank' href='${myLeads[i]}'> 
            ${myLeads[i]}
          </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}



document.addEventListener("DOMContentLoaded", () => {
  // your code here
  var count = 0
  
  document.getElementById("create-task-form").addEventListener("submit", (event) => { 
    event.preventDefault()
    
    count++
    let value = event.target[0].value;
    
    addTask(count, value)
  }, false);
});

function addTask(num, text){
  let li = document.createElement("li")
  li.innerHTML = text
  li.setAttribute("id", `task_${num}`)
  
  li.addEventListener("click", (event) => {
    event.preventDefault()
    
    let el = document.getElementById(event.target.id)
    removeTask(el)
  })
  
  document.getElementById("tasks").appendChild(li)
}

function removeTask(element){
  element.parentNode.removeChild(element);
}

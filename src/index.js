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
    console.log(event)
    debugger
    removeTask()
  })
  
  document.getElementById("tasks").appendChild(li)
}

function removeTask(){
  
}

    // <form id="create-task-form" action="#" method="post">
    //   <label for="new-task-description">Task description:</label>
    //   <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
    //   <input type="submit" value="Create New Task">
    // </form>

    // <div id="list">
    //   <h2>My Todos</h2>
    //   <ul id="tasks">
    //   </ul>
    // </div>

document.addEventListener("DOMContentLoaded", () => {
  // const taskPriority = document.createElement('select')
  // const priorityHigh = document.createElement('option')
  // const priorityMedium = document.createElement('option')
  // const priorityLow = document.createElement('option')
  // priorityHigh.innerText = 'High Priority'
  // priorityMedium.innerText = 'Medium Priority'
  // priorityLow.innerText = 'Low Priority'
  // taskPriority.id = 'priority'
  // const tPriority = document.getElementById('priority')
  // document.querySelector('#create-task-form').append(taskPriority)
  // taskPriority.append(priorityHigh, priorityMedium, priorityLow)
  document.querySelector("#create-task-form").addEventListener("submit", (event) =>{
    event.preventDefault()

    const newTask = document.querySelector("#new-task-description").value 
    const tasks = document.querySelector("#tasks")
    const element = document.createElement("li")
    element.innerText = newTask
    element.className = 'task'
    tasks.append(element)
    const button = document.createElement('button')
    button.id = 'btn'
    button.innerText = "X"  
    button.addEventListener('click', () => element.remove())
    element.append(button)

  })
})

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form")
  form.addEventListener ("submit", function (event){
    event.preventDefault()
    

    const taskInput = document.querySelector("#new-task-description")
    const taskValue = taskInput.value.trim()

    
    const listContainer = document.querySelector("#tasks")
    const taskItem = document.createElement('div')

    const p = document.createElement('p')
    p.innerText= taskValue
    

    const deleteButton = document.createElement ('button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener ('click', function (){
      listContainer.removeChild(taskItem)
    })
    taskItem.appendChild(p)
    taskItem.appendChild(deleteButton)
    
    listContainer.appendChild(taskItem)

    taskInput.value = ""

  })
});

// let input=document.getElementById("inp");
// let text=document.querySelector(".text");

// function Add(){
//     if(input.value==""){
//         alert("Please Enter Task")
//     }

//     else{
//         let newEle=document.createElement("ul");
//         newEle.innerHTML=`${input.value}<i class="fa-solid fa-trash"></i>`;
//         text.appendChild(newEle);
//         input.value="";

//         newEle.querySelector("i").addEventListener("click",remove);
//         function remove(){
//             newEle.remove();
//         }

//     }
// }

window.onload=function(){
    loadTasks();
};



function loadTasks(){
    const taskList=document.getElementById('taskList');
    taskList.innerHTML='';
    // let newEle=document.createElement("ul");

    const tasks=JSON.parse(localStorage.getItem('tasks')) || [];
    // console.log(tasks)

    tasks.forEach(function(task,index){
        const li = document.createElement('li');
        li.textContent = `${task}`;
        taskList.appendChild(li);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        deleteButton.addEventListener('click', function() {
          deleteTask(index);
        });

        li.appendChild(deleteButton);
        
        // taskList.appendChild(newEle);
    })
}
function AddTask() {
    const taskInput = document.getElementById('inp');
    const taskText = taskInput.value.trim();

    if (taskText == '') {
        
        alert("Please Enter Task")
        
    }
    else{
        const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
      taskList.push(taskText)+`<i class="fa-solid fa-trash"></i>`;
      localStorage.setItem('tasks', JSON.stringify(taskList));

      taskInput.value = '';

      loadTasks();
    }
  }

  function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }

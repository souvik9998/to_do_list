const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const taskList = document.getElementById("tasks");

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const task = input.value;

    if(!task){
        alert("alert please add a task");
        return;
    }
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_el_content = document.createElement('div');
    task_el_content.classList.add('content');

    const task_input = document.createElement('input');
    task_input.classList.add('text');
    task_input.type = "text";
    task_input.value = task;
    task_input.setAttribute("readonly", "readonly");

    const task_el_actions = document.createElement('div');
    task_el_actions.classList.add('actions');

    const task_edit = document.createElement('button');
    task_edit.classList.add('edit');

    const task_delete = document.createElement('button');
    task_delete.classList.add('delete');

    task_edit.innerText = "EDIT";
    task_delete.innerText = "DELETE";

    task_el.appendChild(task_el_content);
    taskList.appendChild(task_el);
    task_el.appendChild(task_el_actions);
    task_el_content.appendChild(task_input);
    task_el_actions.appendChild(task_edit);
    task_el_actions.appendChild(task_delete);

    input.value = "";
    
    task_edit.addEventListener("click", ()=>{
        if(task_edit.innerText === "EDIT"){
            task_input.removeAttribute("readonly");
            task_input.focus();
            task_edit.innerText = "SAVE";
        }
        else{
            task_input.setAttribute("readonly","readonly");
            task_edit.innerText = "EDIT";
        }
    })
    task_delete.addEventListener("click", ()=>{
        taskList.removeChild(task_el);
    })
})
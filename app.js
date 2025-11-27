const tasks = [];


// 1. Hae tarvittavat elementit DOMista:
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", addTask)
// 2. Tee funktio joka lisää uuden tehtävän:
function addTask() {
    const task = taskInput.value;
    
    if (task==="") {
        alert("Type something first")
        return;
    }

    tasks.push({
        text : task,
        done : false
    });

    taskInput.value = "";
    console.log(tasks)

    renderTasks();
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}



// 3. Tee funktio joka poistaa tehtävän arraysta:
function removeTask(index) {

    if (index < 0 || index >=tasks.length) {
        console.log("Virheellinen index");
        return;
    }
    tasks.splice(index, 1);

    renderTasks();
    
    console.log("Task removed");
    console.log("Seuraava tehtävä :", tasks);
}


// 4. Tee funktio joka päivittää näytön:
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((taskObj, index) => {
        const li = document.createElement("li");
        li.classList.add("task-item")

        li.innerHTML = `
            <input type="checkbox" ${taskObj.done ? "checked" : ""} 
                onclick="toggleDone(${index})">

            <span style="text-decoration: ${taskObj.done ? "line-through" : "none"};">
                ${taskObj.text}
            </span>

            <button class="delete-btn" onclick="removeTask(${index})">Poista</button>
        `;

        taskList.appendChild(li);
    });
}


// 5. Laita addBtn toimimaan:
addBtn.addEventListener("click", addTask);


// Extra: Enter-näppäin lisää tehtävän
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
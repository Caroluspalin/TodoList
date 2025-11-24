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

    tasks.push(task);

    taskInput.value = "";
    console.log(tasks)

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

    tasks.forEach((task, index) => {
        const li = document.createElement("li")
        li.innerHTML = `
        ${task}
        <button onclick="removeTask(${index})">Poista</button>
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
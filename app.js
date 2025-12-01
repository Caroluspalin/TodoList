const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskTime = document.getElementById("taskTime");


addBtn.addEventListener("click", addTask)
// 2. Tee funktio joka lisää uuden tehtävän:
const tasks = [];

function addTask() {
    const text = taskInput.value;
    const time = document.getElementById("taskTime").value;

    if (text === "") {
        alert("Kirjoita tehtävä!");
        return;
    }

    tasks.push({
        text: text,
        time: time,     
        done: false
    });

    taskInput.value = "";
    document.getElementById("taskTime").value = "";

    renderTasks();
}

function sortTasksByTime() {
    tasks.sort((a,b) => {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        return 0;
    });
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
    sortTasksByTime();
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("task-item");

        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.done ? "checked" : ""}>
            <span class="task-text" style="text-decoration:${task.done ? "line-through" : "none"}">
                ${task.text}
            </span>
            <span class="task-time">${task.time ? task.time : "--:--"}</span>
            <button class="delete-btn" onclick="removeTask(${index})">Poista</button>
        `;

        
        li.querySelector(".task-checkbox").addEventListener("change", function () {
            task.done = this.checked;
            renderTasks();
        });

        taskList.appendChild(li);
    });
}



// 5. Laita addBtn toimimaan:
addBtn.addEventListener("click", addTask);


// Extra: Enter-näppäin lisää tehtävän
function handleEnterKey(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

// Sama funktio molempiin
taskInput.addEventListener("keypress", handleEnterKey);
taskTime.addEventListener("keypress", handleEnterKey);
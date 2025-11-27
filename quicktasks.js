const quickTasks = [
    {text :"Gym", time: "18:00" },
    {text:"School", time: "8:45"},
    {text: "Work", time : "6:00"},
    {text:"Coding", time : "20:00"},
    {text: "Sleep", time : "22:30"}



];

function renderQuickTasks() {
    const quickButtons = document.querySelector('.quick-buttons');
    if (!quickButtons) return;

    quickButtons.innerHTML = '';
    quickTasks.forEach(quickTask => {
        const button = document.createElement('button');
        button.className = 'quick-btn';
        button.innerHTML = `
            <span>${quickTask.text}</span>
            <small>${quickTask.time}</small>
        `;
        
        button.addEventListener('click', () => {
            tasks.push({
                text: quickTask.text,
                time: quickTask.time,
                done: false,
                timestamp: new Date()
            });
            renderTasks();
        });
        
        quickButtons.appendChild(button);
    });
}

// Alusta kun sivu latautuu
document.addEventListener('DOMContentLoaded', renderQuickTasks);


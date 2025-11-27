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



function renderCalendar() {
    const weekDaysElement = document.querySelector('.week-days');
    if (!weekDaysElement) return;

    const today = new Date();
    const currentDay = today.getDay(); // 0=sun, 1=mon...
    
    // Suomenkieliset päivänimet
    const dayNames = ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'];
    const fullDayNames = ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'];
    
    // Päivitä nykyinen päivä
    const weekDayElement = document.querySelector('.week-day');
    const fullDateElement = document.querySelector('.full-date');
    
    if (weekDayElement) {
        weekDayElement.textContent = fullDayNames[today.getDay()];
    }
    if (fullDateElement) {
        fullDateElement.textContent = today.toLocaleDateString('fi-FI');
    }

    // Luo viikonpäivät
    weekDaysElement.innerHTML = '';
    
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const dayCell = document.createElement('div');
        dayCell.className = `day-cell ${i === 0 ? 'today' : ''}`;
        
        dayCell.innerHTML = `
            <div class="day-name">${dayNames[date.getDay()]}</div>
            <div class="day-number">${date.getDate()}</div>
        `;
        
        weekDaysElement.appendChild(dayCell);
    }
}

// Lisää DOMContentLoaded -käsittelijään
document.addEventListener('DOMContentLoaded', function() {
    renderQuickTasks();
    renderCalendar();
});
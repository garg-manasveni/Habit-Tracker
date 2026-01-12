// DOM Elements
const habitInput = document.getElementById('habit-input');
const addHabitBtn = document.getElementById('add-habit-btn');
const habitList = document.getElementById('habit-list');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const encouragementMessage = document.getElementById('encouragement-message');

// Load habits from LocalStorage
let habits = JSON.parse(localStorage.getItem('habits')) || [];

// Save habits
function saveHabits() {
    localStorage.setItem('habits', JSON.stringify(habits));
}

// Get today's date in YYYY-MM-DD
function getTodayDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

// Update progress
function updateProgress() {
    if(habits.length === 0){
        progressBar.style.width = '0%';
        progressText.textContent = '0% completed';
        encouragementMessage.textContent = 'Start small, grow big! 🌟';
        return;
    }

    const completedCount = habits.filter(habit => habit.completedDates && habit.completedDates.includes(getTodayDate())).length;
    const percent = Math.round((completedCount / habits.length) * 100);

    progressBar.style.width = percent + '%';
    progressText.textContent = `${percent}% completed`;

    if(percent === 0){
        encouragementMessage.textContent = 'Start small, grow big! 🌟';
    } else if(percent < 50){
        encouragementMessage.textContent = 'Good job! Keep going! 💪';
    } else if(percent < 100){
        encouragementMessage.textContent = 'Almost there! You got this! 🔥';
    } else {
        encouragementMessage.textContent = 'Perfect! You crushed it today! 🎉';
    }
}

// Calculate streak
function calculateStreak(habit) {
    if(!habit.completedDates || habit.completedDates.length === 0) return 0;

    const sortedDates = habit.completedDates.sort().reverse();
    let streak = 0;
    let today = new Date();

    for(let dateStr of sortedDates){
        const date = new Date(dateStr);
        const diffDays = Math.floor((today - date) / (1000 * 60 * 60 * 24));
        if(diffDays === streak){
            streak++;
        } else {
            break;
        }
    }
    return streak;
}

// Render habits
function renderHabits() {
    habitList.innerHTML = '';

    habits.forEach((habit, index) => {
        const li = document.createElement('li');
        li.classList.add('habit-item');

        const todayDone = habit.completedDates && habit.completedDates.includes(getTodayDate());
        if(todayDone) li.classList.add('completed');

        const streak = calculateStreak(habit);

        // Habit info
        const habitInfo = document.createElement('div');
        habitInfo.innerHTML = `<strong>${habit.name}</strong> <span class="streak">🔥 Streak: ${streak} day(s)</span>`;

        // Completion history dots
        const historyDiv = document.createElement('div');
        historyDiv.classList.add('completion-history');
        if(habit.completedDates){
            habit.completedDates.forEach(date => {
                const dot = document.createElement('div');
                dot.classList.add('dot', 'completed');
                dot.title = date; // hover shows date
                historyDiv.appendChild(dot);
            });
        }

        habitInfo.appendChild(historyDiv);

        // Buttons
        const buttonDiv = document.createElement('div');
        buttonDiv.innerHTML = `
            <button class="complete-btn">${todayDone ? 'Undo' : 'Done'}</button>
            <button class="delete-btn">Delete</button>
        `;

        // Complete button event
        buttonDiv.querySelector('.complete-btn').addEventListener('click', () => {
            if(!habit.completedDates) habit.completedDates = [];

            if(habit.completedDates.includes(getTodayDate())){
                habit.completedDates = habit.completedDates.filter(d => d !== getTodayDate());
            } else {
                habit.completedDates.push(getTodayDate());
            }

            saveHabits();
            renderHabits();
            updateProgress();
        });

        // Delete button event
        buttonDiv.querySelector('.delete-btn').addEventListener('click', () => {
            habits.splice(index, 1);
            saveHabits();
            renderHabits();
            updateProgress();
        });

        li.appendChild(habitInfo);
        li.appendChild(buttonDiv);
        habitList.appendChild(li);
    });
}

// Add habit
addHabitBtn.addEventListener('click', () => {
    const habitName = habitInput.value.trim();
    if(habitName === ''){
        alert('Please enter a habit!');
        return;
    }

    habits.push({ name: habitName, completedDates: [] });
    habitInput.value = '';
    saveHabits();
    renderHabits();
    updateProgress();
});

// Initial render
renderHabits();
updateProgress();

# 🌱 Healthy Habits Tracker

## Project Description
This project is a **Habit Tracker** designed to help users build healthier habits and stay self-aware. Users can add daily habits, mark them as done, track their progress, and visualize streaks and completion history in a colorful, interactive way.

---

## Problem Statement
Many people struggle to maintain daily habits consistently. This app provides a **fun, visual, and interactive way** to track habits, see daily progress, and stay motivated with streaks and encouraging messages.

---

## Features Implemented
- Add new habits dynamically.
- Mark habits as completed for the day or undo completion.
- Delete habits.
- **Daily streak tracking**: Shows how many consecutive days a habit has been completed.
- **Completion history**: Visual green dots indicate all the dates a habit was completed.
- **Progress bar**: Updates in real-time based on today's habit completion.
- **Encouraging messages**: Changes dynamically based on progress.
- Data is persisted in **LocalStorage**, so your habits remain after closing the browser.

---

## DOM Concepts Used
- **Creating elements dynamically**: `document.createElement` for habit items, buttons, and dots.
- **Updating DOM elements**: `innerHTML`, `appendChild`, `classList`.
- **Event handling**: `addEventListener` for clicks on buttons.
- **Conditional rendering**: Changing class names, styles, and content based on state (completed habits, streaks, progress).

---

## Steps to Run the Project
1. Clone or download the repository.
2. Open `index.html` in any modern web browser.
3. Add habits using the input box and track them daily.
4. Click “Done” to mark a habit for today; green dots show completion history.
5. Undo a completion by clicking “Undo” on the same day.
6. Track your streaks and see encouraging messages as you progress.

---

## Known Limitations
- No user authentication: habits are stored only in the local browser.
- Data is **not synced across devices**.
- Calendar view is simplified: only shows dots for completed dates.
- Streaks reset if a day is missed.

---

## Screenshots / UI Overview
- **Habit List**: Shows all habits with streaks and visual completion dots.
- **Progress Bar**: Shows percentage of habits completed today.
- **Encouragement Section**: Motivates users based on their progress.
- **Interactive Buttons**: “Done” / “Undo” / “Delete” for each habit.

---

**Made with ❤️ by a first-year CS student**
"# Habit-Tracker" 

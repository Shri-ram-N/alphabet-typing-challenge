# 🔤 Alphabet Typing Challenge

A simple and interactive typing game built with **HTML, CSS, and JavaScript**.

The goal is to type the alphabet in the correct order before the **30-second timer** runs out.

## 🚀 Live Demo

**[▶️ Play Alphabet Typing Challenge](https://shri-ram-n.github.io/alphabet-typing-challenge/)**

Try the game directly in your browser!

---

## 🎮 Features

* 🔤 **Ascending Mode** — Type A → Z
* 🔄 **Descending Mode** — Type Z → A
* ⏱️ **30-second countdown timer**
* ✅ **Correct answer tracking**
* ❌ **Wrong answer tracking**
* 🏆 **Score system**
* 🥇 **Best Score tracking**
* 💾 **Best Score persistence using Local Storage**
* 🎯 **Current letter highlighting**
* 🟢 **Correct-key visual feedback**
* 🔴 **Wrong-key visual feedback**
* ⚠️ **Timer warning when 5 seconds remain**
* 🎉 **Completion message**
* ⏰ **Time's Up message**
* 🔒 **Game mode selection is locked while the game is running**
* 🛡️ **Error handling using try...catch**

---

## 🕹️ How to Play

1. Open the **Live Demo**.
2. Select a game mode:

   * **Ascending:** A → Z
   * **Descending:** Z → A
3. Click **Start Game**.
4. Type the highlighted letter on your keyboard.
5. Continue typing the letters in the correct order.
6. Complete all 26 letters before the timer reaches zero.
7. View your score, correct answers, wrong answers, and best score.
8. Try again to beat your previous best score.

---

## 🧮 Scoring System

| Action         | Score |
| -------------- | ----: |
| Correct letter |    +2 |
| Wrong letter   |    -2 |
| Minimum score  |     0 |

The score cannot go below **0**.

Your **Best Score** is updated whenever you achieve a score higher than your previous best.

---

## 🏆 Best Score

The game uses the browser's **Local Storage** to save the player's best score.

This means the best score:

* 💾 Remains saved after refreshing the page
* 🔄 Is loaded automatically when the game starts
* 📈 Updates only when a new higher score is achieved
* 🏆 Allows the player to try to beat their previous record

---

## ⏱️ Timer

Each game starts with **30 seconds**.

When the remaining time reaches **5 seconds or less**, the timer changes appearance and provides a visual warning.

The game automatically ends when the timer reaches **0**.

---

## 🏁 Game Completion

The game can end in two ways.

### 🎉 Alphabet Completed

If all 26 letters are typed correctly before the timer reaches zero, the game displays a completion message and updates the final statistics.

If the score is higher than the previous best score, the new score is saved as the **Best Score**.

### ⏰ Time's Up

If the timer reaches zero before all 26 letters are completed, the game displays the **Time's UP!** message and checks whether the score is a new best score.

---

## 🛡️ Error Handling

The project uses JavaScript's **`try...catch`** statement to handle unexpected errors during important game operations.

Error handling is currently used for:

* ▶️ Starting the game
* ⌨️ Processing keyboard input

Errors are displayed in the browser console to make debugging easier during development.

---

## 🛠️ Technologies Used

### HTML5

Used to create the structure and layout of the game.

### CSS3

Used for:

* UI design
* Layout
* Colors
* Animations
* Hover effects
* Visual feedback
* Timer warning effects
* Game state styling

### JavaScript

Used for:

* Game logic
* Keyboard event handling
* Timer functionality
* Score calculation
* Best score management
* Local Storage
* Progress tracking
* DOM manipulation
* Game state management
* Mode selection
* Error handling

---

## 📚 JavaScript Concepts Practiced

This project was created to practice fundamental JavaScript concepts, including:

* Variables
* Arrays
* Functions
* `if / else` conditions
* Event listeners
* Keyboard events
* `setInterval()`
* `setTimeout()`
* DOM selection
* DOM manipulation
* `classList`
* `textContent`
* Array indexing
* `localStorage`
* `try...catch`
* Error handling
* Conditional game states

---

## 📁 Project Structure

```text
AlphabetTypingGame/
│
├── index.html
├── typingChallenge.css
├── typingChallenge.js
└── README.md
```

---

## 🔄 Game Flow

```text
Select Game Mode
       ↓
   Start Game
       ↓
   30s Timer
       ↓
Type Current Letter
       ↓
 ┌───────────────┐
 │ Correct Key?  │
 └───────┬───────┘
         │
    ┌────┴────┐
    │         │
   Yes       No
    │         │
    ↓         ↓
 +2 Score   -2 Score
    │         │
    ↓         │
Next Letter   │
    │         │
    └────┬────┘
         ↓
   All 26 Done?
      /     \
    Yes      No
     ↓        ↓
 Completed   Continue
     │
     ↓
Check Best Score
     │
     ↓
Save to Local Storage
```

---

## 🚀 Future Improvements

Possible future additions include:

* 🎚️ Difficulty levels
* 🔊 Sound effects
* 🎯 Multiple rounds
* 📊 Accuracy percentage
* 🥇 Online leaderboard
* 📱 Improved mobile support
* ⌨️ On-screen keyboard
* 🌙 Dark mode
* 📈 Detailed game statistics
* 🎨 Additional game themes

---

## 👨‍💻 Author

**Shri Ram**

Built as a JavaScript learning project to practice interactive web development, DOM manipulation, event handling, timers, browser storage, error handling, and game logic.

---

## ⭐ Feedback

If you try the game, feel free to explore the code and experiment with the features.

**Thanks for checking out the project! 🚀**

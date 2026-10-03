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
* ✅ Correct answer tracking
* ❌ Wrong answer tracking
* 🏆 Score system
* 🎯 Current letter highlighting
* 🟢 Correct-key visual feedback
* 🔴 Wrong-key visual feedback
* ⚠️ Timer warning when 5 seconds remain
* 🎉 Completion screen
* 🔒 Game mode selection is locked while the game is running

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
7. View your final score and statistics.
8. Click **Play Again** to start a new round.

---

## 🧮 Scoring System

| Action         | Score |
| -------------- | ----: |
| Correct letter |    +2 |
| Wrong letter   |    -2 |
| Minimum score  |     0 |

The score cannot go below **0**.

---

## ⏱️ Timer

Each game starts with **30 seconds**.

When the remaining time reaches **5 seconds or less**, the timer changes appearance and begins pulsing to provide a visual warning.

The game automatically ends when the timer reaches **0**.

---

## 🏁 Game Completion

The game can end in two ways:

### 🎉 Alphabet Completed

If all 26 letters are typed correctly before the timer reaches zero, the game displays a completion message and shows the final statistics.

### ⏰ Time's Up

If the timer reaches zero before all 26 letters are completed, the game displays the final score, correct answers, and wrong answers.

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
* Progress bar
* Visual feedback

### JavaScript

Used for:

* Game logic
* Keyboard event handling
* Timer functionality
* Score calculation
* Progress tracking
* DOM manipulation
* Game state management
* Mode selection

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
* Regular expressions
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
```

---

## 🚀 Future Improvements

Possible future additions include:

* 🎚️ Difficulty levels
* 🏆 High-score system
* 🔊 Sound effects
* 🎯 Multiple rounds
* 📈 Accuracy percentage
* ⭐ Personal best tracking
* 🥇 Leaderboard
* 📱 Improved mobile support
* ⌨️ On-screen keyboard
* 🌙 Dark mode

---

## 👨‍💻 Author

**Shri Ram**

Built as a JavaScript learning project to practice interactive web development, DOM manipulation, event handling, timers, and game logic.

---

## ⭐ Feedback

If you try the game, feel free to explore the code and experiment with the features.

**Thanks for checking out the project! 🚀**

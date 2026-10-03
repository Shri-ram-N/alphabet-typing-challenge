# 🔤 Alphabet Typing Challenge

A simple and interactive typing game built with **HTML, CSS, and JavaScript**.

The goal is to type the alphabet in the correct order before the **30-second timer** runs out.

## 🎮 Features

* 🔤 Ascending mode — type **A → Z**
* 🔄 Descending mode — type **Z → A**
* ⏱️ 30-second countdown timer
* ✅ Correct answer tracking
* ❌ Wrong answer tracking
* 🏆 Score system
* 🎨 Current letter highlighting
* 🟢 Correct-key visual feedback
* 🔴 Wrong-key visual feedback
* ⚠️ Timer warning when 5 seconds remain
* 🔒 Game mode selection is locked while the game is running

## 🛠️ Technologies Used

* **HTML5** — Structure of the game
* **CSS3** — Styling, animations, and responsive UI
* **JavaScript** — Game logic, keyboard events, timer, scoring, and DOM manipulation

## 🕹️ How to Play

1. Select a game mode:

   * **Ascending:** A → Z
   * **Descending:** Z → A
2. Click **Start Game**.
3. Type the highlighted letter on your keyboard.
4. Continue until you complete all 26 letters or the timer reaches zero.
5. Check your final score and accuracy statistics.
6. Click **Play Again** to start another round.

## 🧮 Scoring

| Action         | Score |
| -------------- | ----: |
| Correct letter |    +2 |
| Wrong letter   |    -2 |
| Minimum score  |     0 |

## 📊 Progress

The game tracks your progress through all **26 letters** using:

* Correct answer counter
* Progress percentage
* Visual progress bar

## 📁 Project Structure

```text
AlphabetTypingGame/
│
├── index.html
├── typingChallenge.css
├── typingChallenge.js
└── README.md
```

## 🚀 Future Improvements

Possible future additions include:

* Difficulty levels
* High-score system
* Sound effects
* Multiple rounds
* Accuracy percentage
* Personal best tracking
* Mobile-friendly keyboard support
* Leaderboard

## 👨‍💻 Author

**Shri Ram**

Built as a JavaScript learning project to practice:

* DOM manipulation
* Event listeners
* Keyboard events
* Timers
* Conditional logic
* Arrays
* CSS classes and animations
* Interactive web development

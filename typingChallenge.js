let alphaArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let currentIdx = 0;
let ascendingBtn = document.querySelector("#ascendingBtn");
let descendingBtn = document.querySelector("#descendingBtn");
let timeLeft = document.querySelector("#timeLeft");
let score = document.querySelector("#score");
let correct = document.querySelector("#correct");
let wrong = document.querySelector("#wrong");
let currentLetter = document.querySelector("#currentLetter");
let startBtn = document.querySelector("#startBtn");
let alphaEle = document.querySelectorAll(".alphabet");
let bestScoreEle = document.querySelector("#bestScore");
let bestScore = Number(localStorage.getItem("bestScore")) || 0;
bestScoreEle.textContent = bestScore;
let playerScore = 0;
let correctAns = 0;
let wrongAns = 0;
let timeRemain = 30;
let gameRunning = false;
let timer = null;
let gameMode = "ascending";
let typingArea = document.querySelector(".typing-section");
let resultArea = document.querySelector(".result-area");
let resultCorrect = document.querySelector(".result-correct");
let resultScore = document.querySelector(".result-score");
let resultWrong = document.querySelector(".result-wrong");
let msgShowing = document.querySelector(".msg-showing");

ascendingBtn.addEventListener("click",function(){
    gameMode = "ascending";
    ascendingBtn.classList.add("active");
    descendingBtn.classList.remove("active");
})

descendingBtn.addEventListener("click",function(){
    gameMode = "descending";
    ascendingBtn.classList.remove("active");
    descendingBtn.classList.add("active");
})

startBtn.addEventListener("click",function(){
    try{
        msgShowing.classList.remove("time-up");
        typingArea.style.display = "block";
        resultArea.style.display = "none";
        msgShowing.textContent = "Congratulations ! 🏅";
        startBtn.textContent = "⟳ Restart";
        startBtn.classList.add("rest-btn");
        ascendingBtn.disabled = true;
        descendingBtn.disabled = true;
        currentLetter.classList.remove("completed-msg");
        currentLetter.classList.remove("time-up");
        alphaEle.forEach(ele => ele.classList.remove("completed"));
        alphaEle.forEach(ele => ele.classList.remove("current"));
        alphaEle.forEach(ele => ele.classList.remove("wrong-key"))
        clearInterval(timer);
        if (gameMode === "ascending"){
            currentIdx = 0;
        }
        else{
            currentIdx = 25;
        }
        alphaEle[currentIdx].classList.add("current");
        playerScore = 0;
        correctAns = 0;
        wrongAns = 0;
        timeRemain = 30;
        timeLeft.classList.remove("timer-warning");
        timeLeft.textContent = timeRemain;
        gameRunning = true;
        currentLetter.textContent = alphaArr[currentIdx];
        score.textContent = playerScore;
        correct.textContent = correctAns;
        wrong.textContent = wrongAns;
        timer = setInterval(function(){
            timeRemain--;
            if (timeRemain <= 5){
                timeLeft.classList.add("timer-warning");
            }
            if (timeRemain === 0){
                typingArea.style.display = "none";
                resultArea.style.display = "block";
                clearInterval(timer);
                resultScore.textContent = playerScore;
                resultCorrect.textContent = correctAns;
                resultWrong.textContent = wrongAns;
                msgShowing.textContent = "Time's up !";
                msgShowing.classList.add("time-up");
                gameRunning = false;
                ascendingBtn.disabled = false;
                descendingBtn.disabled = false;
                currentLetter.classList.add("time-up");
                currentLetter.textContent = "Time's UP!";
                timeLeft.classList.remove("timer-warning");
                startBtn.textContent = "▶ Start Game";
                startBtn.classList.remove("rest-btn");
                if (playerScore > bestScore) {
                    bestScore = playerScore;
                    localStorage.setItem("bestScore", bestScore);
                    bestScoreEle.textContent = bestScore;
                }
            }
            timeLeft.textContent = timeRemain;
        },1000);
    }
    catch(e){
        console.error(e);
    }
})

document.addEventListener("keydown",function(ele){
    try{
        if (gameRunning){
            if (alphaArr[currentIdx] === ele.key.toUpperCase()){
                let currentAlpha = alphaEle[currentIdx];
                currentAlpha.classList.add("correct-key");
                setTimeout(function(){
                    currentAlpha.classList.remove("correct-key");
                }, 200);
                if (gameMode === "ascending"){
                    currentIdx++;
                    alphaEle[currentIdx - 1].classList.add("completed");
                    alphaEle[currentIdx - 1].classList.remove("current");
                }
                else{
                    currentIdx--;
                    alphaEle[currentIdx + 1].classList.add("completed");
                    alphaEle[currentIdx + 1].classList.remove("current");
                }
                playerScore+=2;
                score.textContent = playerScore;
                correctAns++;
                correct.textContent = correctAns;
                if ( (currentIdx === 26 && gameMode === "ascending" ) || ( currentIdx === -1 && gameMode === "descending" ) ){
                    gameRunning = false;
                    clearInterval(timer);
                    currentLetter.classList.add("completed-msg");
                    currentLetter.textContent = "Completed!";
                    startBtn.textContent = "▶ Start Game";
                    startBtn.classList.remove("rest-btn");
                    ascendingBtn.disabled = false;
                    descendingBtn.disabled = false;
                    typingArea.style.display = "none";
                    resultArea.style.display = "block";
                    if (playerScore > bestScore) {
                        bestScore = playerScore;
                        localStorage.setItem("bestScore", bestScore);
                        bestScoreEle.textContent = bestScore;
                    }
                    resultScore.textContent = playerScore;
                    resultCorrect.textContent = correctAns;
                    resultWrong.textContent = wrongAns;
                }
                else{
                    alphaEle[currentIdx].classList.add("current");
                    currentLetter.textContent = alphaArr[currentIdx];
                }
            }
            else{
                wrongAns++;
                wrong.textContent = wrongAns;
                playerScore = Math.max(0,playerScore-2);
                score.textContent = playerScore;
                let wrongAlpha = alphaEle[currentIdx];
                wrongAlpha.classList.add("wrong-key");
                if (gameMode == "ascending"){
                    currentIdx++;
                }
                else{
                    currentIdx--;
                }
                if ( (currentIdx === 26 && gameMode === "ascending" ) || ( currentIdx === -1 && gameMode === "descending" ) ){
                    gameRunning = false;
                    clearInterval(timer);
                    currentLetter.classList.add("completed-msg");
                    currentLetter.textContent = "Completed!";
                    ascendingBtn.disabled = false;
                    descendingBtn.disabled = false;
                    startBtn.textContent = "▶ Start Game";
                    startBtn.classList.remove("rest-btn");
                    typingArea.style.display = "none";
                    resultArea.style.display = "block";
                    resultScore.textContent = playerScore;
                    resultCorrect.textContent = correctAns;
                    resultWrong.textContent = wrongAns;
                }
                else{
                    alphaEle[currentIdx].classList.add("current");
                    currentLetter.textContent = alphaArr[currentIdx];
                }
            }
        }
    }
    catch(e){
        console.error(e)
    }
})
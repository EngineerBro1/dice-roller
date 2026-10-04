const dice = document.getElementById("dice");
const diceNumber = document.getElementById("diceNumber");
const result = document.getElementById("result");
const rollButton = document.getElementById("rollButton");
const rollCount = document.getElementById("rollCount");
const historyList = document.getElementById("historyList");
const clearButton = document.getElementById("clearButton");


// Roll count
let totalRolls = 0;

// Roll history
let history =[];

// Roll Dice
rollButton.addEventListener("click",function () {
    // Disable button during animation
    rollButton.disabled = true;

    // rolling animation
    dice.classList.add("rolling");

    // random number
    const randomNumber = Math.floor(Math.random()*6)+1;

    setTimeout(function () {
        // show number
        diceNumber.textContent = randomNumber;
        // update result
        result.textContent = "Dice Rolled " + randomNumber + "!";

        // increase roll count
        totalRolls++;

        rollCount.textContent = totalRolls;

        // add to history
        history.push(randomNumber);

        // update history
        updateHistory();


        dice.classList.remove("rolling");

        rollButton.disabled = false;

    },600);
});
// update history
function updateHistory() {
    // clear current list
    historyList.innerHTML = "";
    // display
    history.forEach(function(number,index){
        const listItem = document.createElement("li");
        listItem.textContent = "Roll " + (index + 1)+": 🎲 "+ number;
        historyList.appendChild(listItem);
    });
}

// clear history
clearButton.addEventListener("click",function () {
    history=[];
    totalRolls=0;
    rollCount.textContent = 0;

    historyList.innerHTML = "";
    // reset
    result.textContent = "Roll the Dice!";
    diceNumber.textContent=1;
});
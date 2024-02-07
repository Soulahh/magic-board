const mainContainer = document.querySelector(".main-container");
const startButton = document.getElementById("button");
let blockAmountCounter = 0;
const resetButton = document.getElementById("resetButton");

startButton.addEventListener('click', function () {
    const blockAmount = getUserPrompt();
    generateBlocks(blockAmount);
    console.log("Button clicked!");
});

function getUserPrompt() 
{
    if (blockAmountCounter > 0) {
        alert("Please, restart the page with F5.");
        return 0;
    } else if (blockAmountCounter === 0) {
        const blockAmount = prompt("Inform a grid size(1-100): ");
        if (isNaN(blockAmount) || blockAmount > 100 || blockAmount < 1) {
            alert("Please input a valid number.");
            return getUserPrompt();
        } else {
            blockAmountCounter += 1;
            return blockAmount;
        }
    }
}

function generateBlocks(blockAmount) 
{
    for (let i = 0; i < blockAmount; i++) {
        const squareRoot = Math.sqrt(blockAmount)
        const newBlock = document.createElement('div');
        newBlock.className = 'inner-box';
        newBlock.style.height = `calc(100% / ${squareRoot})`;
        newBlock.style.width =  `calc(100% / ${squareRoot})`;
        mainContainer.appendChild(newBlock);


        newBlock.addEventListener("mouseover", function(){
            changeColor(this)
        })
    }
}

function changeColor(element)
{
    element.style.backgroundColor = "#000000"
}

resetButton.addEventListener("click", function()
{
    blockAmountCounter = 0;
    mainContainer.innerHTML = '';
});
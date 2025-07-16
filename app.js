const inputBoxEl = document.getElementById("inputBox")

const equalToBoxEl = document.getElementById("equaltoBox")
const buttonsEl = document.querySelectorAll("button");

for (let i = 0; i < buttonsEl.length; i++) {
     buttonsEl[i].addEventListener("click", function(){
        const pressedBtn = buttonsEl[i].textContent;
        console.log(pressedBtn)
         if (pressedBtn === "AC") {
            clearResults()
            
} else if(pressedBtn === "="){
    calculateResults()
} else {
    appendResults(pressedBtn)
}
     })
    
}

function clearResults(){
    inputBoxEl.value = "0";
    equalToBoxEl.value = "=";
}


function calculateResults() {
    const result = eval(inputBoxEl.value);
    equalToBoxEl.value = result;
}


function appendResults(pressedBtn) {
    if (inputBoxEl.value === "0") {
        inputBoxEl.value = pressedBtn;
    } else {
        inputBoxEl.value += pressedBtn;
    }
}


const btn = document.querySelectorAll(".btn")
const input = document.querySelector("input")

let string = "";
Array.from(btn).forEach((button) => {
    button.addEventListener("click", (e)=> {
        if(e.target.innerText == "=") {
            let result = eval(string) // the eval method allow operations to work
            input.value = result  // the result 0f the operation is display on the screen
        } else if (e.target.innerText == "C") {
            string = " ";
            input.value = string; //this allow us to erase
        } else {
            string += e.target.innerText
            input.value = string;
        }
    })
})

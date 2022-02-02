let display = document.getElementById("display");
let digits = Array.from(document.getElementsByClassName("digits"));
console.log(digits);

digits.map(digit => {
digit.addEventListener('click', (e) => {
     switch(e.target.innerText){
        case 'AC':
            display.value = '';
            break;

        case '=':
            try{
            display.value = eval(display.value);
            } catch {
                display.value = 'Error!';
            }
        
            break;





        default:
                display.value += e.target.innerText;
    };
    


})

})


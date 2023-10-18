let userInput = document.getElementById("userInput");
let imgQr = document.getElementById("imgQr");
let box=document.getElementById("box");

function generateQR(){
    let userValue = userInput.value
    if (userValue.length>0){
        imgQr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+userValue;
        box.classList.add("done");
    }
    else{
        imgQr.src="https://th.bing.com/th/id/OIP.axSiOuJMtGUR0pcfzSSp6gHaHV?w=216&h=213&c=7&r=0&o=5&dpr=1.3&pid=1.7";
        box.classList.add("done");
    }
}
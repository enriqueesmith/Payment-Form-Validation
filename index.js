document.querySelector("#mainForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    let cardNumber = document.querySelector("#inputCardNumber");
    if (cardNumber.value.length !== 16) { 
        alert("Credit Card numbers must be 16 characters in length.");
        document.querySelector("#inputCardNumber").style.backgroundColor = "red";
        
        }
    let CVCNumber = document.querySelector("#inputCvcNumber") ;
    if ((CVCNumber.value.length !== 3) && (CVCNumber.value.length !== 4)) {
        alert("CVC numbers must be either 3 or 4 characters in length.");
        document.querySelector("#inputCvcNumber").style.backgroundColor = "red";
        }
        
    let numberAmount = document.querySelector("#inputAmount") ;
    if (numberAmount.value.length === 0) {
        alert("Amount cannot be $0.");
        document.querySelector("#inputAmount").style.backgroundColor = "red";
        }
        
    let firstName = document.querySelector("#inputFirstName") ;
    if (firstName.value.length === 0) {
        alert("First name cannot be empty.");
        document.querySelector("#inputFirstName").style.backgroundColor = "red";
        }
        
    let lastName = document.querySelector("#inputLastName") ;
    if (lastName.value.length === 0) {
        alert("Last name cannot be empty.");
        document.querySelector("#inputLastName").style.backgroundColor = "red";
        }
        
    let cityName = document.querySelector("#inputCity") ;
    if (cityName.value.length === 0) {
        alert("City name cannot be empty.");
        document.querySelector("#inputCity").style.backgroundColor = "red";
        }
    
    let zipNumber = document.querySelector("#inputZip") ;
    if (zipNumber.value.length === 0) {
        alert("Zip cannot be empty.");
        document.querySelector("#inputZip").style.backgroundColor = "red";
        }    
    
    let stateName = document.querySelector("#inputState") ;
    if (stateName.value === "Pick a state") {
        alert("State cannot be empty.");
        document.querySelector("#inputState").style.backgroundColor = "red";
        }
        
    let customRadioCheck = document.querySelectorAll(".custom-control-input");
    let creditBackground = document.querySelector("#customRadio");
    let z = false;
    for (let i = 0; i < customRadioCheck.length; i++){
        if (customRadioCheck[i].checked === true) z = true;
    }
    
    if (z === false) creditBackground.style.backgroundColor = "red";
});




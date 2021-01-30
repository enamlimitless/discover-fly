// First Class Value Increase
document.getElementById("first-increase").addEventListener("click", function(){
    calculateAmount('first-class', true)
})
// First Class Value Decrease
document.getElementById("first-decrease").addEventListener("click", function(){
    calculateAmount('first-class', false)
})
//Economy Class Value Increase
document.getElementById("economy-increase").addEventListener("click", function(){
    calculateAmount('economy-class', true)
})
//Economy Class Value Decrease
document.getElementById("economy-decrease").addEventListener("click", function(){
    calculateAmount('economy-class', false)
})


//Handling increment or decrement value
function calculateAmount(id, isAdd) {
    const inputData = document.getElementById(id)
    const inputValue = parseInt(inputData.value);
 
    //Input Value
    if (isAdd == false && inputValue > 0) {
        inputData.value = inputValue - 1;
    }else if (isAdd){
        inputData.value = inputValue + 1;  
    }

    grandTotalPrice();
}


function grandTotalPrice() { 
    // Cost of tickets via 'thePrice' function
    const firstClassTicketCost = thePrice('first-class');
    const economyClassTicketCost = thePrice('economy-class');
    
    // Calculating Sub-total Price
    const subtotalValue = document.getElementById('subtotal-price');
    const totalTicketCost = firstClassTicketCost + economyClassTicketCost;
    subtotalValue.innerText = '$' + totalTicketCost;

    // Calculating Vat
    const vatInclude = document.getElementById('vat');
    const totalVat = totalTicketCost * .10;
    vatInclude.innerText = '$' + totalVat;

    // Calculating Total Value
    const totalValue = document.getElementById('total-price');
    totalValue.innerText = totalTicketCost + totalVat;
}


function thePrice(id) {
    // Price Of The Per Ticket 
    const firstClassTicketPrice = 150;
    const economyClassTicketPrice = 100;

    // Number of the Tickets by 'id'
    const inputValue = document.getElementById(id)
    const totalNumberOfTickets = parseInt(inputValue.value);

    if (id == "first-class") {
        return firstClassTicketPrice * totalNumberOfTickets;
    }

    if (id == "economy-class") {
        return economyClassTicketPrice * totalNumberOfTickets;
    }
}


//Custom Area Successful Confirmation Output
function successArea(){
    const submitArea = document.getElementById("bookNow").addEventListener("click", function(){
        const submitArea = document.getElementById("submit-area");
        bookSection.style.display = "none";
    
       const customSection = document.getElementById("custom-section");
       customSection.style.display = "block";
    })   
}
successArea();





const restrictedPostcodes = ["AB12", "CD34", "EF56"]; 

function validatePostcodeAndCalculateQuote() {
    const postcodeInput = document.getElementById("companyPostcode").value.trim().toUpperCase();

    if (restrictedPostcodes.includes(postcodeInput)) {
        document.getElementById("QuoteResults").style.display = "none";
        alert("Sorry, we do not provide services in this area. Please contact us for more information.");
        return; 
    }

    calculateQuote();
}


function calculateQuote() {

    var companyName = document.getElementById("companyName").value;
    var companyPostcode = document.getElementById("companyPostcode").value;
    var companyType = document.getElementById("companyType").value;
    var numEmployees = parseInt(document.getElementById("numEmployees").value);

    if (!companyName || !companyPostcode || !companyType || isNaN(numEmployees)) {
        alert("Please fill in all fields with valid information.");
        return;
    }

    else {
        document.getElementById("QuoteResults").style.display = "block";
        document.getElementById("ExtraHelp").style.display = "block";
    }

    var goldMonthlyQuote;
    var silverMonthlyQuote;
    var bronzeMonthlyQuote;
    var goldAnnualQuote;
    var silverAnnualQuote;
    var bronzeAnnualQuote;

    if (numEmployees > 0 && numEmployees <= 75) {
        goldMonthlyQuote = "294.44 GBP";
        goldAnnualQuote = "3249 GBP";
        silverMonthlyQuote = "137.30 GBP";
        silverAnnualQuote = "1515 GBP";
        bronzeMonthlyQuote = "67.97 GBP";
        bronzeAnnualQuote = "750 GBP";
        document.getElementById("AltQuoteResults").style.display = "none";

    } else if (numEmployees < 75 && numEmployees <= 150) {
        goldMonthlyQuote = "345.64 GBP";
        goldAnnualQuote = "3814 GBP";
        silverMonthlyQuote = "193.03 GBP";
        silverAnnualQuote = "2130 GBP";
        bronzeMonthlyQuote = "95.16 GBP";
        bronzeAnnualQuote = "1050 GBP";
        document.getElementById("AltQuoteResults").style.display = "none";

    } else if (numEmployees < 150 && numEmployees <= 250) {
        goldMonthlyQuote = "368.30 GBP";
        goldAnnualQuote = "4064 GBP";
        silverMonthlyQuote = "215.69 GBP";
        silverAnnualQuote = "2380 GBP";
        bronzeMonthlyQuote = "110.11 GBP";
        bronzeAnnualQuote = "1215 GBP";
        document.getElementById("AltQuoteResults").style.display = "none";

    } else if (numEmployees < 250 && numEmployees <= 500) {
        goldMonthlyQuote = "£423.58";
        goldAnnualQuote = "£4674";
        silverMonthlyQuote = "£270.97";
        silverAnnualQuote = "£2990";
        bronzeMonthlyQuote = "£126.88";
        bronzeAnnualQuote = "£1400";
        document.getElementById("AltQuoteResults").style.display = "none";

    } else if (numEmployees > 500) {
        document.getElementById("QuoteResults").style.display = "none";
        document.getElementById("AltQuoteResults").style.display = "block";
    }

    document.getElementById("goldMonthlyQuoteResult").innerText = "Monthly Quote: " + goldMonthlyQuote;
    document.getElementById("goldAnnualQuoteResult").innerText = "Annual Quote: " + goldAnnualQuote;
    document.getElementById("silverMonthlyQuoteResult").innerText = "Monthly Quote: " + silverMonthlyQuote;
    document.getElementById("silverAnnualQuoteResult").innerText = "Annual Quote: " + silverAnnualQuote;
    document.getElementById("bronzeMonthlyQuoteResult").innerText = "Monthly Quote: " + bronzeMonthlyQuote;
    document.getElementById("bronzeAnnualQuoteResult").innerText = "Annual Quote: " + bronzeAnnualQuote;



}

function GOLDSelectButton(){
    document.getElementById("GOLDConfirm").style.display = "block";
    document.getElementById("SILVERConfirm").style.display = "none";
    document.getElementById("BRONZEConfirm").style.display = "none";

    document.getElementById("GOLDSelect").style.display = "none";
    document.getElementById("SILVERSelect").style.display = "block";
    document.getElementById("BRONZESelect").style.display = "block";

    document.getElementById("GOLDEdit").style.display = "block";
    document.getElementById("SILVEREdit").style.display = "none";
    document.getElementById("BRONZEEdit").style.display = "none";

    document.getElementById("CalculateQuote").style.display = "none";

    document.getElementById("GOLD").style.backgroundColor = "#d8232a";
    document.getElementById("GOLD").style.color = "white";
    document.getElementById("SILVER").style.backgroundColor = "white";
    document.getElementById("SILVER").style.color = "black";
    document.getElementById("BRONZE").style.backgroundColor = "white";
    document.getElementById("BRONZE").style.color = "black";


}
function SILVERSelectButton(){

    document.getElementById("SILVERConfirm").style.display = "block";
    document.getElementById("GOLDConfirm").style.display = "none";
    document.getElementById("BRONZEConfirm").style.display = "none";

    document.getElementById("SILVERSelect").style.display = "none";
    document.getElementById("GOLDSelect").style.display = "block";
    document.getElementById("BRONZESelect").style.display = "block";

    document.getElementById("GOLDEdit").style.display = "none";
    document.getElementById("SILVEREdit").style.display = "block";
    document.getElementById("BRONZEEdit").style.display = "none";

    document.getElementById("CalculateQuote").style.display = "none";

    document.getElementById("SILVER").style.backgroundColor = "#d8232a";
    document.getElementById("SILVER").style.color = "white";
    document.getElementById("GOLD").style.backgroundColor = "white";
    document.getElementById("GOLD").style.color = "black";
    document.getElementById("BRONZE").style.backgroundColor = "white";
    document.getElementById("BRONZE").style.color = "black";

}
function BRONZESelectButton(){
    document.getElementById("BRONZEConfirm").style.display = "block";
    document.getElementById("SILVERConfirm").style.display = "none";
    document.getElementById("GOLDConfirm").style.display = "none";

    document.getElementById("BRONZESelect").style.display = "none";
    document.getElementById("GOLDSelect").style.display = "block";
    document.getElementById("SILVERSelect").style.display = "block";

    document.getElementById("GOLDEdit").style.display = "none";
    document.getElementById("SILVEREdit").style.display = "none";
    document.getElementById("BRONZEEdit").style.display = "block";

    document.getElementById("CalculateQuote").style.display = "none";

    document.getElementById("BRONZE").style.backgroundColor = "#d8232a";
    document.getElementById("BRONZE").style.color = "white";
    document.getElementById("SILVER").style.backgroundColor = "white";
    document.getElementById("SILVER").style.color = "black";
    document.getElementById("GOLD").style.backgroundColor = "white";
    document.getElementById("GOLD").style.color = "black";

}

function Edit(){
    document.getElementById("CalculateQuote").style.display = "block";

    document.getElementById("BRONZEConfirm").style.display = "none";
    document.getElementById("SILVERConfirm").style.display = "none";
    document.getElementById("GOLDConfirm").style.display = "none";

    document.getElementById("BRONZESelect").style.display = "block";
    document.getElementById("GOLDSelect").style.display = "block";
    document.getElementById("SILVERSelect").style.display = "block";

    document.getElementById("BRONZE").style.border = "none";
    document.getElementById("GOLD").style.border = "none";
    document.getElementById("SILVER").style.border = "none";

    document.getElementById("GOLDEdit").style.display = "none";
    document.getElementById("SILVEREdit").style.display = "none";
    document.getElementById("BRONZEEdit").style.display = "none";
}

function Confirm() {
    document.getElementById("QuoteResults").style.display = "none";
    document.getElementById("ConfirmationPage").style.display = "block";
    document.getElementById("EXIT").style.display = "block";

    document.getElementById("companyName").style.display = "none";
    document.getElementById("companyPostcode").style.display = "none";
    document.getElementById("companyType").style.display = "none";
    document.getElementById("numEmployees").style.display = "none";
    document.getElementById("CalculateQuote").style.display = "none";

}

function Exit() {
    window.location.reload()
}
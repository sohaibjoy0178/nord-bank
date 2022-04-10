let loginb = document.getElementById("v_login");

loginb.addEventListener("click", function () { 
    let loginarea = document.getElementById("login");
    loginarea.style.display = "none";
    const t_area = document.getElementById("t_area");
    t_area.style.display = "block";
})


// Deposit Handeler

let depositbutton = document.getElementById("depositbutton");

depositbutton.addEventListener("click", function (event) {
    console.log("clicked");
    let deposit = document.getElementById("deposit").value;
    let depositnumber = parseFloat(deposit);
    
    addspantext("currentdeposit", depositnumber);
    addspantext("currentbalance", depositnumber);

    document.getElementById("deposit").value = "";

   
    
} )

function addspantext(id, inputvalue) {
    let currentdeposit = document.getElementById(id).innerText;

    let currentdepositnumber = parseFloat(currentdeposit);

    let total = inputvalue + currentdepositnumber;

    document.getElementById(id).innerText = total;
}

// withdraw handler

let withdrawbutton = document.getElementById("withdrawbutton");

withdrawbutton.addEventListener("click", function (event) { 

    let withdraw = document.getElementById("withdraw").value;
    let withawnumber = parseFloat(withdraw);
    
    let currentwithdraw = document.getElementById("currentwithdraw").innerText;
    let currentwithdrawnumber = parseFloat(currentwithdraw);

    let totalwithdraw = withawnumber + currentwithdrawnumber;
    document.getElementById("currentwithdraw").innerText = totalwithdraw;
    let currentbalance = document.getElementById("currentbalance").innerText;
    let currentbalancenumber = parseFloat(currentbalance);

    let totalbalance = currentbalancenumber - totalwithdraw;

    document.getElementById("currentbalance").innerText = totalbalance;

    document.getElementById("withdraw").value = "";


})



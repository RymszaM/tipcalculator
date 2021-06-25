"use strict";

let billAmount = document.getElementById('billamt');
let percentTip = document.getElementById('tipselect');
let tipAmount = document.getElementById('tipamt');
let total = document.getElementById('totalamt');
let calculate = document.getElementById('submit');

calculate.addEventListener('click', function(){
    billAmount = Number(billamt.value);
    percentTip = Number(tipselect.value);

    if (isNaN(billAmount) || billAmount <= 0 || billAmount === null){
    }
    
   else {
        let calculatedTip =  percentTip/100*billAmount;
        tipAmount.value = '$' + calculatedTip;

        let calculatedTotal = billAmount + calculatedTip;
        total.value = '$' + calculatedTotal;
    }
    
})

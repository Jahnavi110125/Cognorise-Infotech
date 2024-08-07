document.addEventListener('DOMContentLoaded', function() {
    const rates = {
        INR: 1,
        USD: 0.012,
        EUR: 0.011,
        JPY: 1.73,
        CNY: 0.08
    };
   document.getElementById("cal").addEventListener('click', function(){
        const amt = document.getElementById("amount").value;
        const from = document.getElementById("select1").value;
        const to = document.getElementById("select2").value;

        if(amt < 0){
            alert("Invalid Input!!!!");
        }
        
        if(from && to && !isNaN(amt)){
            const result = amt * (rates[to] / rates[from]);
            document.getElementById('result').value = result.toFixed(2);
        } else if(from == '' || to == '') {
            alert("Invalid Input!!!!");
        }
   });
});
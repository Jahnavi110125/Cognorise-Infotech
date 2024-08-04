document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("f").addEventListener('click', function(){
        document.getElementById("m").style.backgroundColor = "";
        document.getElementById("f").style.backgroundColor = "pink";
    });

    document.getElementById("m").addEventListener('click', function(){
        document.getElementById("f").style.backgroundColor = "";
        document.getElementById("m").style.backgroundColor = "lightblue";
    });

    document.getElementById("cal").addEventListener('click', function(){
        document.getElementById("headd").style.display = "none";
        document.getElementById("msgs").style.display = "block";
        document.getElementById("msgs1").style.display = "block";
        document.getElementById("msgs").style.fontSize = "40px";
        document.getElementById("msgs").style.fontWeight = "bold";
        document.getElementById("msgs1").style.fontSize = "20px";
        document.getElementById("msgs1").style.color = "white";
        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;
        let bmi = (weight / (height**2))

        if( height === "" || weight === "" || height == null || weight == null){
            document.getElementById("msgs").textContent = "OOPS!!!!";
            document.getElementById("msgs1").textContent = "Kindly enter the given fields!";   
            return;
        }


        if(bmi < 18.5){
            document.getElementById("msgs").textContent = "Underweight!!";
            document.getElementById("msgs1").textContent = "It's important to focus on a balanced diet and consult a healthcare provider.";
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
            document.getElementById("msgs").textContent = "Normal weight!!";
            document.getElementById("msgs1").textContent = " Keep up the good work with a balanced diet and regular physical activity to maintain your health.";
        }
        else if(bmi >= 25 && bmi <= 29.9){
            document.getElementById("msgs").textContent = "Overweight!!";
            document.getElementById("msgs1").textContent = "Try exercising more and talk to a doctor about your diet for personalized advice.";
        }
        else if(bmi >= 30 && bmi <= 34.9){
            document.getElementById("msgs").textContent = "Overweight!!";
            document.getElementById("msgs1").innerHTML = "This is Level1 of Obese! <br> Eat healthier and exercise more. It's also helpful to consult a doctor for a personalized plan.";
        }
        else if(bmi >= 35 && bmi <= 39.9){
            document.getElementById("msgs").textContent = "Overweight!!";
            document.getElementById("msgs1").innerHTML = "This is Level2 of Obese! <br>This level of obesity can lead to health issues. It's important to make healthy changes and consult a doctor for advice.";
        }
        else if(bmi >= 40 ){
            document.getElementById("msgs").textContent = "Overweight!!";
            document.getElementById("msgs1").innerHTML = "This is Level3 of Obese! <br>It is crucial to seek professional medical advice and develop a targeted plan to improve your health.";
    }

        
    });

});
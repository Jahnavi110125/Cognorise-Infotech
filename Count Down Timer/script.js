document.addEventListener('DOMContentLoaded', function(){
    let interval;
    const alertSound = document.getElementById('alert-sound');

    document.getElementById('button').addEventListener('click', function(event){
        event.preventDefault(); 
        const form = document.getElementById('form');
        if (!form.checkValidity()) {
            alert('Please fill in all required fields.');
            return;
        }
    
        document.getElementById('whole').style.display = 'none';
        document.getElementById('timer').style.display = 'block';
        var given_name = document.getElementById('name').value;
        document.getElementById('given_name').textContent = given_name;
        
        var given_date = document.getElementById('date').value;
        var dateParts = given_date.split('-');
        var given_year = parseInt(dateParts[0], 10);
        var given_month = parseInt(dateParts[1], 10) - 1; 
        var given_day = parseInt(dateParts[2], 10);

        var hours_and_period = document.getElementById('hours').value;
        var [given_hours_str, period] = hours_and_period.split(' ');
        var given_hours = parseInt(given_hours_str, 10);
        var given_mins = parseInt(document.getElementById('minutes').value, 10) || 0;
        var given_secs = parseInt(document.getElementById('seconds').value, 10) || 0;


        if (period === 'PM' && given_hours < 12) {
            given_hours += 12;
        } else if (period === 'AM' && given_hours === 12) {
            given_hours = 0;  
        }

        var target_date = new Date(given_year,given_month,given_day,given_hours,given_mins,given_secs);
        var now = new Date();
        if (target_date < now) {
            alert('Invalid Input!!!!');
            document.getElementById('timer').style.display = 'none';
            document.getElementById('whole').style.display = 'block';
            return;
        }

    
        function timer(){
            
            var now = new Date();
        
            var difference = target_date - now;
        
            if (difference < 0) {
                clearInterval(interval);
                document.getElementById('dayys').textContent = '00';
                document.getElementById('hrs').textContent = '00';
                document.getElementById('mins').textContent = '00';
                document.getElementById('secs').textContent = '00';
                alertSound.play();
                return;
            }

            var days_left = Math.floor(difference / (1000 * 60 * 60 * 24));
            var hours_left = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes_left = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds_left = Math.floor((difference % (1000 * 60)) / 1000);

            document.getElementById('dayys').textContent = days_left.toString().padStart(2,'0');
            document.getElementById('hrs').textContent = hours_left.toString().padStart(2,'0');
            document.getElementById('mins').textContent = minutes_left.toString().padStart(2,'0');
            document.getElementById('secs').textContent = seconds_left.toString().padStart(2,'0');
        }
        timer();
        interval = setInterval(timer, 1000);

    });

    document.getElementById('restart').addEventListener('click', function(){
        clearInterval(interval);
        alertSound.pause();     
        alertSound.currentTime = 0;
        document.getElementById('timer').style.display = 'none';
        document.getElementById('whole').style.display = 'block';
        document.getElementById('name').value = '';
        document.getElementById('date').value = '';
        document.getElementById('hours').selectedIndex = 0;
        document.getElementById('minutes').selectedIndex = 0;
        document.getElementById('seconds').selectedIndex = 0;
        
    });
});
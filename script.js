
        function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const meridiem = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            
            document.getElementById('clock').textContent = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
        }
        
        function padZero(number) {
            return number < 10 ? "0" + number : number;
        }
        
        setInterval(updateClock, 1000);
        updateClock();
        
        setTimeout(() => {
            document.getElementById('message').style.opacity = 1;
            document.getElementById('helicopter').style.opacity = 1;
        }, 10000);
    
//self- invoking function

(function(){ 

    let time = function(){

        let date = new Date(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds(),
            day = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear(),
            ampm = ('AM');
    

        let sHour = document.getElementById('hour'),
            sMinute = document.getElementById('minute'),
            sSecond = document.getElementById('second'),
            sDay = document.getElementById('day'),
            sMonth = document.getElementById('month'),
            sAMPM = document.getElementById('ampm'),
            sYear = document.getElementById('year');

        
        
        
            let months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
        
        if(hour>12){

            hour=hour-12;
            ampm = 'PM';
        }

        if(hour === 12){ hour = 12;}
        if(hour < 10){ hour= '0' + hour;}
        if(minute < 10){ minute= '0' + minute;}
        if(second < 10){ second= '0' + second;}

     

            sMonth.textContent = months[month];
        sDay.textContent = day;
        sYear.textContent = year;
        sHour.textContent = hour;
        sMinute.textContent = minute;
        sSecond.textContent = second;
        sAMPM.textContent = ampm;
         
    };

    time();
    setInterval(time,1000);

}())
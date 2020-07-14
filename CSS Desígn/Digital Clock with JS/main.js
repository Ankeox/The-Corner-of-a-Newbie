(function(){

    let time = function(){

        let date = new Date(),
            hour = date.getHours,
            minute = date.getMinutes,
            second = date.getSeconds,
            day = date.getDate,
            month = date.getMonth,
            year = date.getFullYear;
            //ampm,
    

        let sHour = document.getElementById('hour'),
            sMinute = document.getElementById('minute'),
            sSeconds = document.getElementById('second'),
            sDay = document.getElementById('day'),
            sMonth = document.getElementById('month'),
            sAMPM = document.getElementById('ampm'),
            sYear = document.getElementById('Year');

        let months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
        sMonth.textContent = months[month];
        sDay.textContent = day;

      
    };

}())
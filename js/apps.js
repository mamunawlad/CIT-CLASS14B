$(document).ready(function() {
    $('.flipTimer').flipTimer({ 
    
    // count up or countdown
    direction: 'down', 
    
    // the target <a href="https://www.jqueryscript.net/time-clock/">date</a>
    date: 'December 15, 2024 11:59:00', 
    
     //callback works only with direction = "down"
    callback: function() { alert('times up!'); }
    
    });
    });


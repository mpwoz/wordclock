$(function () {
  var updateTime = function () {
    var now = new Date();
    
    var hours = Math.round((now.getHours() % 12) * 30) + Math.floor(now.getMinutes() / 2);
    var minutes = Math.round(now.getMinutes() * 6);
    var seconds = Math.round(now.getSeconds() * 6);
    if (seconds === 0) {
      seconds = 360;
    }
    
    var duration = 200;
         
    $('.arrow-hour').transit({ rotate: hours }, duration, 'easeInOutQuart');
    $('.arrow-minute').transit({ rotate: minutes }, duration, 'easeInOutQuart');
    if (seconds === 6) {
      $('.arrow-second').transit({ rotate: 6 }, 0, 'easeInOutQuart');
      // Doesn't seem to work on CodePen?
      //.transit({ rotate: seconds }, duration, 'easeInOutQuart');      
    } else {
      $('.arrow-second').transit({ rotate: seconds }, duration, 'easeInOutQuart');
    }
  };  
  
  setInterval(updateTime, 1000);
});
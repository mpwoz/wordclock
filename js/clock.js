var Clock = (function () {
  // Initialize word frequency counter
  var options = {
      workerUrl: '/js/wordfreq.worker.js',
      minimumCount:1
  };
  var hourFreq = WordFreq(options);
  var minuteFreq = WordFreq(options);


  // Initialize the current time
  var now = new Date();
  var lastHour = now.getHours();
  var lastMinute = now.getMinutes();


  var addWords = function (words) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();

    console.log(minute);

    // Reset the frequency counters if the time has changed
    if (hour !== lastHour) {
      hourFreq.empty();
      lastHour = hour;
    }
    if (minute !== lastMinute) {
      minuteFreq.empty();
      lastMinute = minute;
    }

    minuteFreq.process(words).getList(function(list) {
      console.log(list);
      if (list.length > 0) {
        // Set the minute div to the most frequent word
        $('.m'+minute).html(
          '<div class="word rotation">' + 
          list[0][0] + 
          '</div>'
        );
      }
    });


    hourFreq.process(words).getList(function(list) {
      console.log(list);
      if (list.length > 0) {
        // Set the hour div to the most frequent word
        $('.h'+hour).html(
          '<div class="word rotation">' + 
          list[0][0] + 
          '</div>'
        );
      }
    });
  };  


  return {
    addWords: addWords,
    say: function(w) {
      console.log(w);
    }
  };

})();

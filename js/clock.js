var Clock = (function () {
  // Initialize word frequency counter
  var options = {
      workerUrl: 'js/wordfreq.worker.js',
      minimumCount:1
  };
  var hourFreq = WordFreq(options);
  var minuteFreq = WordFreq(options);


  // Initialize the current time
  var now = new Date();
  var lastHour = now.getHours() % 12;
  var lastMinute = now.getMinutes();

  var addWords = function (words) {
    var now = new Date();
    hour = now.getHours() % 12;
    hour = hour == 0 ? 12 : hour;
    minute = now.getMinutes();
    addWordsAtTime(words, hour, minute);
  };


  var addWordsAtTime = function (words, hour, minute) {
    hour = hour == 0 ? 12 : hour;
    // Reset the frequency counters if the time has changed
    if (hour !== lastHour) {
      console.log("Clearing Hours");
      hourFreq.empty(function() {
        lastHour = hour;
        addWordsAtTime(words, hour, minute);
      });
    }
    else if (minute !== lastMinute) {
      console.log("Clearing minutes");
      minuteFreq.empty(function() {
        lastMinute = minute;
        addWordsAtTime(words, hour, minute);
      });
    }
    else {
      console.log('Adding "', words, '" at Time ', hour, ":", minute);
      minuteFreq.process(words, function(list) {
        $('.min').removeClass('active');
        if (list.length > 0) {
          // Set the minute div to the most frequent word
          $('.m'+minute)
            .html(
              '<div class="word rotation">' + 
              list[0][0] + 
              '</div>'
            ).addClass('active');
        }
      });
      hourFreq.process(words, function(list) {
        $('.tick').removeClass('active');
        if (list.length > 0) {
          // Set the hour div to the most frequent word
          $('.h'+hour)
            .html(
              '<div class="word rotation">' + 
              list[0][0] + 
              '</div>'
            ).addClass('active');
        }
      });
    } // else
  };  


  return {
    addWords: addWords,
    addWordsAtTime: addWordsAtTime
  };

})();

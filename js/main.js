

var options = {
    workerUrl: '/js/wordfreq.worker.js',
    minimumCount:1
};
var wordfreq = WordFreq(options);


var recognition = new webkitSpeechRecognition();
recognition.continuous = true;

recognition.start();

recognition.onstart = function() {
  recognizing = true;
  console.log("Starting recognition");
};

recognition.onerror = function(event) {
  console.log(event);
};

recognition.onresult = function(event) {
  if (typeof(event.results) == 'undefined') {
    recognition.onend = null;
    recognition.stop();
    console.log("Stopped recognizing");
    return;
  }
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    var transcript = event.results[i][0].transcript;
    addWords(transcript);
    console.log(transcript);
  }
};

recognition.onend = function() {
  console.log("End recognition");
  recognition.start();
};


// Split all the words on spaces and add them to the cloud individually
var addWords = function(words) {
  wordfreq.process(words).getList(function(list) {
    console.log(list);
    WordCloud($('#canvas')[0], {
      list:list,
      shuffle:false,
      wait:500/list.length,
      weightFactor:40
    });
  });
};


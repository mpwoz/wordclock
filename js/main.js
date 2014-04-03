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
    recognized_text = event.results[i][0].transcript;
    console.log(recognized_text);
  }
};

recognition.onend = function() {
  console.log("End recognition");
  recognition.start();
};


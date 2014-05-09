// Ensure we are on https
//var host = "mpwoz.github.io";
//if ((host == window.location.host) && (window.location.protocol != "https:"))
    //window.location.protocol = "https";


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
    Clock.addWords(transcript);
    console.log(transcript);
  }
};

recognition.onend = function() {
  console.log("End recognition");
  recognition.start();
};


function runTest() {
  var testWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fringilla porta laoreet. Nunc ac pretium libero, id porta risus. Morbi congue lobortis ante quis malesuada. Etiam blandit luctus est sed imperdiet. Nulla nec tempus nunc, quis semper nulla. Aliquam tincidunt erat et facilisis cursus. Aliquam dignissim urna id tempus accumsan. Sed dolor lectus, congue at neque a, pulvinar consequat metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque vel sagittis lacus. Integer venenatis eu lacus id pulvinar. Vivamus at fringilla turpis, in faucibus quam. Quisque non accumsan mi. Integer lacinia elit id lorem pulvinar adipiscing";
  //var testWords = "test world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing world foxes sing";
  testWords = testWords.split(" ");
  var now = new Date();
  var m = now.getMinutes();
  var h = now.getHours() % 12;
  function test() {
    m++;
    if (m%60 == 1) { h++; }

    if (testWords.length < 1) {
      return;
    }
    word = testWords.pop();
    Clock.addWordsAtTime(word, h%12, m%60+1);
    setTimeout(test, 300);
  }
  test();
}




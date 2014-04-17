# Word Clock

Voice recognition and visualization clock based on 
[https://github.com/gregblaszczuk/soundcloud](soundcloud).

The clock displays the most common word for every minute and hour of the day,
leave it running for extended periods of time for the best effect. To see 
a demo of what it would look like over a prolonged period, run `runTest()`
in the developer console of your browser.


## Running locally

You'll need to have python installed, since the application requires an https server
for technical reasons having to do with the html5 microphone api.


* Run `python server.py` from the root directory
* Navigate to [https://localhost:8000](https://localhost:8000) in your browser
* Start talking!


Note: if you get an SSL error, try running `generate_cert.sh` and following the 
prompts. This will generate a new certificate for the https server to use. This 
is not secure, but it's necessary to avoid having to re-enable the microphone
every few seconds (allowing the voice recognition to run continuously)


## Team Members

Greg Blaszczuk : Clock visualization, styling
Martin Wozniewicz : Voice recognition, placing words on the clock face



# Sound Cloud

Voice recognition and visualization demo.


## Running locally

* Run `python server.py` from the root directory
* Navigate to [https://localhost:8000](https://localhost:8000) in your browser
* Start talking!


Note: if you get an SSL error, try running `generate_cert.sh` and following the 
prompts. This will generate a new certificate for the https server to use. This 
is not secure, but it's necessary to avoid having to re-enable the microphone
every few seconds (allowing the voice recognition to run continuously)

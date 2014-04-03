"""
A simple https server to serve the app's page. It needs to be https to avoid 
asking for permission to use the microphone repeatedly 
(This is a html5 SpeechRecognition API limitation)

There should be a 'server.pem' file already, but if you get an ssl error
run 'generate_cert.sh' to generate an new certificate
"""

import BaseHTTPServer, SimpleHTTPServer
import ssl

httpd = BaseHTTPServer.HTTPServer(('localhost', 8000), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, certfile='server.pem', server_side=True)
httpd.serve_forever()

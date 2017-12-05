# say.js
A very simple express app for routing commands into native voice synthesizers.

Provides one function: `say`

Say can be used in a few different ways:

After cloning run: `npm start`

If things go well, a web server should have been started and will be running at the specified port (default is 3000).

Now, you can browse to the address http://localhost/ and be greeted by your system's native voice synthesizer.

This app provides functionality similar to that of the old SimpleText .. but with only a REST-style api.

Here's a "Hello, World!" spoken in the default voice:

`http://localhost:3000/hello/world/` [working]

Here we can change the voice to `alex` and set the rate to `80` words per minute:

`http://localhost:3000/hello/world/?voice=alex` [working]

Here we can change the voice to `jane` and set the rate to `80` words per minute:

`http://localhost:3000/hello/world/?voice=jane?rate=80` [working]

Known Bugs:
When accessed from a web browser... the phrase is spoken twice. 

WordCount-FrontEnd
==================

### To Deploy to Production ###

<code>grunt</code>

This will create the dist folder for you.

### Setup Locally ###

You will have to run the following :

<code>npm install</code>
<code>bower install/<code>

### Run Locally ###

<code>grunt serve</code>

This will start up the application locally.

### Installation Issues Locally ###

After using yeoman to scaffold out the application I ran into an issue
where it did not know about Jasmine, therefore I had to add the following
to my package.json file.

    "karma-jasmine": "^0.1.5",
    "karma-safari-launcher": "^0.1.1",
    "karma-chrome-launcher": "^0.1.3"

Once this was done do an npm install

Now test this using
<code>grunt test</code>

It should come up with no issues.
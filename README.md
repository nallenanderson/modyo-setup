# General Gulp Setup

This is a basic Gulp setup to compile CSS and JS from your development to a production environment. The following features have been added to this Gulp setup:

* Gulp 3.9.1
* Gulp Autoprefixer 3.1.0
* Gulp Clean CSS 2.0.9
* Gulp LiveReload 3.8.1
* Gulp Notify 2.2.0
* Gulp SASS 2.3.1
* Gulp Uglify 1.4.2
* Babelify 6.4.0
* Browserify 13.0.1
* React 15.1.0
* ReactDOM 15.1.0
* React Router 2.4.1
* Watchify 3.7.0

## Dependencies

I hope that this comes as no surprise, but you need Node and Node Package Manager ("NPM") to use this Gulp starter kit. If you don't have NodeJS, download it [here](https://nodejs.org/en/ "NodeJS Installation"). NPM is included with NodeJS by default. But, just to be sure, run:

````
sudo npm install -g npm
````

Now, make sure to have Gulp installed globally on your machine.

````
sudo npm install -g gulp
````

In order for LiveReload to work, you need to install the Google Chrome LiveReload browser plugin (you can find it [here](https://chrome.google.com/webstore/search/livereload?hl=en "LiveReload Chrome Plugin")).

You also need the development environment to be running over a server. I use [http-server]("https://www.npmjs.com/package/http-server") to serve up my development files. You can download it by doing:

````
sudo npm install -g http-server
````

With that, you should have all the external dependencies taken care of. Onto the good stuff...

## Installation

Start by cloning this repository or downloading this repository as a zip file.

````
git clone https://nallenanderson@bitbucket.org/nallenanderson/gulp-setup.git
````

Next, install all of the node packages

````
npm install
````

After installing the NPM packages, you should have a file structure that looks like this:

```

├── gulp-setup
│   ├── node_modules
│   ├── public
│   │   ├── cs
│   │   │   ├── main.min.css
│   │   ├── js
│   │   │   ├── main.js
│   │   │   ├── main.min.js
│   │   ├── index.html
│   ├── src
│   │   ├── js
│   │   |   ├── components
│   │   |   |   ├── app.js
│   │   |   |   ├── box.js
│   │   │   ├── main.js
│   │   ├── sass
│   │   │   ├── _colors.scss
│   │   │   ├── main.scss
│   ├── gulpfile.js
│   ├── package.json
│   ├── README.md

```

Now, open the gulp-setup folder in a terminal and run ````gulp```` to start the process. Each time that you make a change to a Javascript file or a SASS file, Gulp will transpile, compile and re-package your assets. There's only one more step to go...

As mentioned earlier, you need to run your index.html file on a server for LiveReload to work. LiveReload is awesome because it refreshes your browser each time there is a change made to any of your assets. Assuming you downloaded the Chrome plugin above, open a new terminal window, and do the following:

````
cd public
````

````
http-server -p 8080
````

Do you have a favorite port? Don't worry, you can run this on any port that you would like by changing the number that comes after ````-p````.

That's it. Enjoy!
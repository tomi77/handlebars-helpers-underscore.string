[![Build Status](https://travis-ci.org/tomi77/handlebars-helpers-underscore.string.png)](https://travis-ci.org/tomi77/handlebars-helpers-underscore.string)
[![Coverage Status](https://img.shields.io/coveralls/tomi77/handlebars-helpers-underscore.string.svg)](https://coveralls.io/r/tomi77/handlebars-helpers-underscore.string)
[![Code Climate](https://codeclimate.com/github/tomi77/handlebars-helpers-underscore.string/badges/gpa.svg)](https://codeclimate.com/github/tomi77/handlebars-helpers-underscore.string)
[![Dependency Status](https://david-dm.org/tomi77/handlebars-helpers-underscore.string.png)](https://david-dm.org/tomi77/handlebars-helpers-underscore.string)
[![devDependency Status](https://david-dm.org/tomi77/handlebars-helpers-underscore.string/dev-status.png)](https://david-dm.org/tomi77/handlebars-helpers-underscore.string#info=devDependencies)
![Downloads](https://img.shields.io/npm/dt/handlebars-helpers-underscore.string.svg)

handlebars-helpers-underscore.string
====================================

Wrap underscore.string functions to Handlebars helpers

## Installation

Via ``bower``:

~~~bash
bower install handlebars-helpers-underscore.string
~~~

Via ``npm``:

~~~bash
npm install handlebars-helpers-underscore.string
~~~

## Usage

In ``node``:

~~~js
Handlebars = require('handlebars');
require('handlebars-helpers-underscore.string');

var source = "<p>Hello, my name is {{name}}. I am from {{underscored hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);

// Would render:
// <p>Hello, my name is Alan. I am from somewhere,_tx. I have 2 kids:</p>
// <ul>
//   <li>Jimmy is 12</li>
//   <li>Sally is 4</li>
// </ul>
~~~

In ``webpack`` remember to set `node.fs` to `empty`.

Handlebars = require('handlebars');
require('handlebars-helpers-underscore.string');

var source = "<p>Hello, my name is {{name}}. I am from {{underscored hometown}}. I have " +
             "{{kids.length}} kids:</p>" +
             "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
var template = Handlebars.compile(source);

var data = { "name": "Alan", "hometown": "Somewhere, TX",
             "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
var result = template(data);

document.getElementsByTagName('div')[0].innerHTML = result;

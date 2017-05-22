
/*
  Handlebars helpers underscore.string 1.0.2

  Copyright (c) 2014-2017 Tomasz Jakub Rup

  https://github.com/tomi77/handlebars-helpers-underscore.string

  Released under the MIT license
 */
var slice = [].slice;

(function(root, factory) {
  switch (false) {
    case !(typeof define === 'function' && define.amd):
      define(['handlebars', 'underscore.string'], factory);
      break;
    case typeof exports !== 'object':
      factory(require('handlebars'), require('underscore.string'));
      break;
    default:
      factory(root.Handlebars, root._.str);
  }
})(this, function(Handlebars, _s) {
  Handlebars.registerHelper('is_blank', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.isBlank.apply(null, args);
  });
  Handlebars.registerHelper('strip_tags', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.stripTags.apply(null, args);
  });
  Handlebars.registerHelper('capitalize', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.capitalize.apply(null, args);
  });
  Handlebars.registerHelper('chop', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.chop.apply(null, args);
  });
  Handlebars.registerHelper('clean', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.clean.apply(null, args);
  });
  Handlebars.registerHelper('count', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.count.apply(null, args);
  });
  Handlebars.registerHelper('chars', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.chars.apply(null, args);
  });
  Handlebars.registerHelper('swap_case', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.swapCase.apply(null, args);
  });
  Handlebars.registerHelper('splice', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.splice.apply(null, args);
  });
  Handlebars.registerHelper('insert', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.insert.apply(null, args);
  });
  Handlebars.registerHelper('include', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.include.apply(null, args);
  });
  Handlebars.registerHelper('join', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.join.apply(null, args);
  });
  Handlebars.registerHelper('lines', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.lines.apply(null, args);
  });
  Handlebars.registerHelper('reverse', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.reverse.apply(null, args);
  });
  Handlebars.registerHelper('starts_with', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.startsWith.apply(null, args);
  });
  Handlebars.registerHelper('ends_with', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.endsWith.apply(null, args);
  });
  Handlebars.registerHelper('succ', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.succ.apply(null, args);
  });
  Handlebars.registerHelper('titleize', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.titleize.apply(null, args);
  });
  Handlebars.registerHelper('camelize', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.camelize.apply(null, args);
  });
  Handlebars.registerHelper('underscored', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.underscored.apply(null, args);
  });
  Handlebars.registerHelper('dasherize', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.dasherize.apply(null, args);
  });
  Handlebars.registerHelper('classify', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.classify.apply(null, args);
  });
  Handlebars.registerHelper('humanize', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.humanize.apply(null, args);
  });
  Handlebars.registerHelper('trim', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.trim.apply(null, args);
  });
  Handlebars.registerHelper('ltrim', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.ltrim.apply(null, args);
  });
  Handlebars.registerHelper('rtrim', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.rtrim.apply(null, args);
  });
  Handlebars.registerHelper('truncate', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.truncate.apply(null, args);
  });
  Handlebars.registerHelper('prune', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.prune.apply(null, args);
  });
  Handlebars.registerHelper('words', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.words.apply(null, args);
  });
  Handlebars.registerHelper('pad', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.pad.apply(null, args);
  });
  Handlebars.registerHelper('lpad', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.lpad.apply(null, args);
  });
  Handlebars.registerHelper('rpad', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.rpad.apply(null, args);
  });
  Handlebars.registerHelper('lrpad', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.lrpad.apply(null, args);
  });
  Handlebars.registerHelper('sprintf', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.sprintf.apply(null, args);
  });
  Handlebars.registerHelper('vsprintf', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.vsprintf.apply(null, args);
  });
  Handlebars.registerHelper('to_number', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.toNumber.apply(null, args);
  });
  Handlebars.registerHelper('number_format', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.numberFormat.apply(null, args);
  });
  Handlebars.registerHelper('str_right', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.strRight.apply(null, args);
  });
  Handlebars.registerHelper('str_right_back', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.strRightBack.apply(null, args);
  });
  Handlebars.registerHelper('str_left', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.strLeft.apply(null, args);
  });
  Handlebars.registerHelper('str_left_back', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.strLeftBack.apply(null, args);
  });
  Handlebars.registerHelper('to_sentence', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.toSentence.apply(null, args);
  });
  Handlebars.registerHelper('to_sentence_serial', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.toSentenceSerial.apply(null, args);
  });
  Handlebars.registerHelper('slugify', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.slugify.apply(null, args);
  });
  Handlebars.registerHelper('surround', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.surround.apply(null, args);
  });
  Handlebars.registerHelper('quote', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.quote.apply(null, args);
  });
  Handlebars.registerHelper('unquote', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.unquote.apply(null, args);
  });
  Handlebars.registerHelper('repeat', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.repeat.apply(null, args);
  });
  Handlebars.registerHelper('levenshtein', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.levenshtein.apply(null, args);
  });
  Handlebars.registerHelper('to_boolean', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.toBoolean.apply(null, args);
  });
  Handlebars.registerHelper('clean_diacritics', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.cleanDiacritics.apply(null, args);
  });
  Handlebars.registerHelper('decapitalize', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.decapitalize.apply(null, args);
  });
  Handlebars.registerHelper('dedent', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.dedent.apply(null, args);
  });
  Handlebars.registerHelper('pred', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.pred.apply(null, args);
  });
  Handlebars.registerHelper('replace_all', function() {
    var args, i, options;
    args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
    return _s.replaceAll.apply(null, args);
  });
});

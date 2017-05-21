
/*
  Handlebars helpers underscore.string 1.0.1

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
  Handlebars.registerHelper('is_blank', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.isBlank.apply(null, args);
  });
  Handlebars.registerHelper('strip_tags', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.stripTags.apply(null, args);
  });
  Handlebars.registerHelper('capitalize', function(str, lowercaseRest) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.capitalize.apply(null, args);
  });
  Handlebars.registerHelper('chop', function(str, step) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.chop.apply(null, args);
  });
  Handlebars.registerHelper('clean', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.clean.apply(null, args);
  });
  Handlebars.registerHelper('count', function(str, substr) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.count.apply(null, args);
  });
  Handlebars.registerHelper('chars', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.chars.apply(null, args);
  });
  Handlebars.registerHelper('swap_case', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.swapCase.apply(null, args);
  });
  Handlebars.registerHelper('splice', function(str, i, howmany, substr) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.splice.apply(null, args);
  });
  Handlebars.registerHelper('insert', function(str, i, substr) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.insert.apply(null, args);
  });
  Handlebars.registerHelper('include', function(str, needle) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.include.apply(null, args);
  });
  Handlebars.registerHelper('join', function() {
    var args, separator, strings;
    separator = arguments[0], strings = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.join.apply(null, args);
  });
  Handlebars.registerHelper('lines', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.lines.apply(null, args);
  });
  Handlebars.registerHelper('reverse', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.reverse.apply(null, args);
  });
  Handlebars.registerHelper('starts_with', function(str, starts, position) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.startsWith.apply(null, args);
  });
  Handlebars.registerHelper('ends_with', function(str, ends, position) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.endsWith.apply(null, args);
  });
  Handlebars.registerHelper('succ', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.succ.apply(null, args);
  });
  Handlebars.registerHelper('titleize', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.titleize.apply(null, args);
  });
  Handlebars.registerHelper('camelize', function(str, decapitalize) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.camelize.apply(null, args);
  });
  Handlebars.registerHelper('underscored', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.underscored.apply(null, args);
  });
  Handlebars.registerHelper('dasherize', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.dasherize.apply(null, args);
  });
  Handlebars.registerHelper('classify', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.classify.apply(null, args);
  });
  Handlebars.registerHelper('humanize', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.humanize.apply(null, args);
  });
  Handlebars.registerHelper('trim', function(str, characters) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.trim.apply(null, args);
  });
  Handlebars.registerHelper('ltrim', function(str, characters) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.ltrim.apply(null, args);
  });
  Handlebars.registerHelper('rtrim', function(str, characters) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.rtrim.apply(null, args);
  });
  Handlebars.registerHelper('truncate', function(str, length, truncateStr) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.truncate.apply(null, args);
  });
  Handlebars.registerHelper('prune', function(str, length, pruneStr) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.prune.apply(null, args);
  });
  Handlebars.registerHelper('words', function(str, delimiter) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.words.apply(null, args);
  });
  Handlebars.registerHelper('pad', function(str, length, padStr, type) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.pad.apply(null, args);
  });
  Handlebars.registerHelper('lpad', function(str, length, padStr) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.lpad.apply(null, args);
  });
  Handlebars.registerHelper('rpad', function(str, length, padStr) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.rpad.apply(null, args);
  });
  Handlebars.registerHelper('lrpad', function(str, length, padStr) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.lrpad.apply(null, args);
  });
  Handlebars.registerHelper('sprintf', function() {
    var args, fmt;
    fmt = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.sprintf.apply(null, args);
  });
  Handlebars.registerHelper('vsprintf', function(fmt, argv) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.vsprintf.apply(null, args);
  });
  Handlebars.registerHelper('to_number', function(str, decimals) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.toNumber.apply(null, args);
  });
  Handlebars.registerHelper('number_format', function(number, dec, dsep, tsep) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.numberFormat.apply(null, args);
  });
  Handlebars.registerHelper('str_right', function(str, sep) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.strRight.apply(null, args);
  });
  Handlebars.registerHelper('str_right_back', function(str, sep) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.strRightBack.apply(null, args);
  });
  Handlebars.registerHelper('str_left', function(str, sep) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.strLeft.apply(null, args);
  });
  Handlebars.registerHelper('str_left_back', function(str, sep) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.strLeftBack.apply(null, args);
  });
  Handlebars.registerHelper('to_sentence', function(array, separator, lastSeparator, serial) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.toSentence.apply(null, args);
  });
  Handlebars.registerHelper('to_sentence_serial', function(array, separator, lastSeparator) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.toSentenceSerial.apply(null, args);
  });
  Handlebars.registerHelper('slugify', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.slugify.apply(null, args);
  });
  Handlebars.registerHelper('surround', function(str, wrapper) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.surround.apply(null, args);
  });
  Handlebars.registerHelper('quote', function(str, quoteChar) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.quote.apply(null, args);
  });
  Handlebars.registerHelper('unquote', function(str, quoteChar) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.unquote.apply(null, args);
  });
  Handlebars.registerHelper('repeat', function(str, qty, separator) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.repeat.apply(null, args);
  });
  Handlebars.registerHelper('levenshtein', function(str1, str2) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.levenshtein.apply(null, args);
  });
  Handlebars.registerHelper('to_boolean', function(str, trueValues, falseValues) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.toBoolean.apply(null, args);
  });
  Handlebars.registerHelper('clean_diacritics', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.cleanDiacritics.apply(null, args);
  });
  Handlebars.registerHelper('decapitalize', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.decapitalize.apply(null, args);
  });
  Handlebars.registerHelper('dedent', function(str, pattern) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.dedent.apply(null, args);
  });
  Handlebars.registerHelper('pred', function(str) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.pred.apply(null, args);
  });
  Handlebars.registerHelper('replace_all', function(str, find, replace, ignorecase) {
    var args;
    args = Array.prototype.slice.call(arguments);
    args.pop();
    return _s.replaceAll.apply(null, args);
  });
});


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
  var func, helper, helpers;
  helpers = {
    camelize: _s.camelize,
    capitalize: _s.capitalize,
    chars: _s.chars,
    chop: _s.chop,
    classify: _s.classify,
    clean: _s.clean,
    clean_diacritics: _s.cleanDiacritics,
    count: _s.count,
    decapitalize: _s.decapitalize,
    dedent: _s.dedent,
    dasherize: _s.dasherize,
    ends_with: _s.endsWith,
    humanize: _s.humanize,
    include: _s.include,
    insert: _s.insert,
    is_blank: _s.isBlank,
    join: _s.join,
    levenshtein: _s.levenshtein,
    lines: _s.lines,
    lpad: _s.lpad,
    lrpad: _s.lrpad,
    ltrim: _s.ltrim,
    number_format: _s.numberFormat,
    pad: _s.pad,
    pred: _s.pred,
    prune: _s.prune,
    quote: _s.quote,
    repeat: _s.repeat,
    replace_all: _s.replaceAll,
    reverse: _s.reverse,
    rpad: _s.rpad,
    rtrim: _s.rtrim,
    slugify: _s.slugify,
    splice: _s.splice,
    sprintf: _s.sprintf,
    starts_with: _s.startsWith,
    strip_tags: _s.stripTags,
    str_left: _s.strLeft,
    str_left_back: _s.strLeftBack,
    str_right: _s.strRight,
    str_right_back: _s.strRightBack,
    succ: _s.succ,
    surround: _s.surround,
    swap_case: _s.swapCase,
    titleize: _s.titleize,
    to_boolean: _s.toBoolean,
    to_number: _s.toNumber,
    to_sentence: _s.toSentence,
    to_sentence_serial: _s.toSentenceSerial,
    trim: _s.trim,
    truncate: _s.truncate,
    underscored: _s.underscored,
    unquote: _s.unquote,
    vsprintf: _s.vsprintf,
    words: _s.words
  };
  for (helper in helpers) {
    func = helpers[helper];
    Handlebars.registerHelper(helper, (function(func) {
      return function() {
        var args, i, options;
        args = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0, []), options = arguments[i++];
        return func.apply(null, args);
      };
    })(func));
  }
});

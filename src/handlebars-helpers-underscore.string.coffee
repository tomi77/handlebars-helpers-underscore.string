###
  Handlebars helpers underscore.string 1.0.0

  Copyright (c) 2014-2016 Tomasz Jakub Rup

  https://github.com/tomi77/handlebars-helpers-underscore.string

  Released under the MIT license
###

((root, factory) ->
  switch
    when typeof define is 'function' and define.amd
      define ['handlebars', 'underscore.string'], factory
    when typeof exports is 'object'
      factory require('handlebars'), require('underscore.string')
    else
      factory root.Handlebars, root._.str
  return
) @, (Handlebars, _s) ->
  Handlebars.registerHelper 'is_blank', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.isBlank.apply null, args

  Handlebars.registerHelper 'strip_tags', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.stripTags.apply null, args

  Handlebars.registerHelper 'capitalize', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.capitalize.apply null, args

  Handlebars.registerHelper 'chop', (str, step) ->
    args = Array::slice.call arguments
    args.pop()
    _s.chop.apply null, args

  Handlebars.registerHelper 'clean', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.clean.apply null, args

  Handlebars.registerHelper 'count', (str, substr) ->
    args = Array::slice.call arguments
    args.pop()
    _s.count.apply null, args

  Handlebars.registerHelper 'chars', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.chars.apply null, args

  Handlebars.registerHelper 'swap_case', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.swapCase.apply null, args

  Handlebars.registerHelper 'splice', (str, i, howmany, substr) ->
    args = Array::slice.call arguments
    args.pop()
    _s.splice.apply null, args

  Handlebars.registerHelper 'insert', (str, i, substr) ->
    args = Array::slice.call arguments
    args.pop()
    _s.insert.apply null, args

  Handlebars.registerHelper 'include', (str, needle) ->
    args = Array::slice.call arguments
    args.pop()
    _s.include.apply null, args

  Handlebars.registerHelper 'join', (separator, strings...) ->
    args = Array::slice.call arguments
    args.pop()
    _s.join.apply null, args

  Handlebars.registerHelper 'lines', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.lines.apply null, args

  Handlebars.registerHelper 'reverse', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.reverse.apply null, args

  Handlebars.registerHelper 'starts_with', (str, starts) ->
    args = Array::slice.call arguments
    args.pop()
    _s.startsWith.apply null, args

  Handlebars.registerHelper 'ends_with', (str, ends) ->
    args = Array::slice.call arguments
    args.pop()
    _s.endsWith.apply null, args

  Handlebars.registerHelper 'succ', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.succ.apply null, args

  Handlebars.registerHelper 'titleize', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.titleize.apply null, args

  Handlebars.registerHelper 'camelize', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.camelize.apply null, args

  Handlebars.registerHelper 'underscored', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.underscored.apply null, args

  Handlebars.registerHelper 'dasherize', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.dasherize.apply null, args

  Handlebars.registerHelper 'classify', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.classify.apply null, args

  Handlebars.registerHelper 'humanize', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.humanize.apply null, args

  Handlebars.registerHelper 'trim', (str, characters) ->
    args = Array::slice.call arguments
    args.pop()
    _s.trim.apply null, args

  Handlebars.registerHelper 'ltrim', (str, characters) ->
    args = Array::slice.call arguments
    args.pop()
    _s.ltrim.apply null, args

  Handlebars.registerHelper 'rtrim', (str, characters) ->
    args = Array::slice.call arguments
    args.pop()
    _s.rtrim.apply null, args

  Handlebars.registerHelper 'truncate', (str, length, truncateStr) ->
    args = Array::slice.call arguments
    args.pop()
    _s.truncate.apply null, args

  Handlebars.registerHelper 'prune', (str, length, pruneStr) ->
    args = Array::slice.call arguments
    args.pop()
    _s.prune.apply null, args

  Handlebars.registerHelper 'words', (str, delimiter) ->
    args = Array::slice.call arguments
    args.pop()
    _s.words.apply null, args

  Handlebars.registerHelper 'pad', (str, length, padStr, type) ->
    args = Array::slice.call arguments
    args.pop()
    _s.pad.apply null, args

  Handlebars.registerHelper 'lpad', (str, length, padStr) ->
    args = Array::slice.call arguments
    args.pop()
    _s.lpad.apply null, args

  Handlebars.registerHelper 'rpad', (str, length, padStr) ->
    args = Array::slice.call arguments
    args.pop()
    _s.rpad.apply null, args

  Handlebars.registerHelper 'lrpad', (str, length, padStr) ->
    args = Array::slice.call arguments
    args.pop()
    _s.lrpad.apply null, args

  Handlebars.registerHelper 'sprintf', (fmt, args...) ->
    args = Array::slice.call arguments
    args.pop()
    _s.sprintf.apply null, args

  Handlebars.registerHelper 'vsprintf', (fmt, argv) ->
    args = Array::slice.call arguments
    args.pop()
    _s.vsprintf.apply null, args

  Handlebars.registerHelper 'to_number', (str, decimals) ->
    args = Array::slice.call arguments
    args.pop()
    _s.toNumber.apply null, args

  Handlebars.registerHelper 'number_format', (number, dec, dsep, tsep) ->
    args = Array::slice.call arguments
    args.pop()
    _s.numberFormat.apply null, args

  Handlebars.registerHelper 'str_right', (str, sep) ->
    args = Array::slice.call arguments
    args.pop()
    _s.strRight.apply null, args

  Handlebars.registerHelper 'str_right_back', (str, sep) ->
    args = Array::slice.call arguments
    args.pop()
    _s.strRightBack.apply null, args

  Handlebars.registerHelper 'str_left', (str, sep) ->
    args = Array::slice.call arguments
    args.pop()
    _s.strLeft.apply null, args

  Handlebars.registerHelper 'str_left_back', (str, sep) ->
    args = Array::slice.call arguments
    args.pop()
    _s.strLeftBack.apply null, args

  Handlebars.registerHelper 'to_sentence', (array, separator, lastSeparator, serial) ->
    args = Array::slice.call arguments
    args.pop()
    _s.toSentence.apply null, args

  Handlebars.registerHelper 'to_sentence_serial', (array, separator, lastSeparator) ->
    args = Array::slice.call arguments
    args.pop()
    _s.toSentenceSerial.apply null, args

  Handlebars.registerHelper 'slugify', (str) ->
    args = Array::slice.call arguments
    args.pop()
    _s.slugify.apply null, args

  Handlebars.registerHelper 'surround', (str, wrapper) ->
    args = Array::slice.call arguments
    args.pop()
    _s.surround.apply null, args

  Handlebars.registerHelper 'quote', (str, quoteChar) ->
    args = Array::slice.call arguments
    args.pop()
    _s.quote.apply null, args

  Handlebars.registerHelper 'unquote', (str, quoteChar) ->
    args = Array::slice.call arguments
    args.pop()
    _s.unquote.apply null, args

  Handlebars.registerHelper 'repeat', (str, qty, separator) ->
    args = Array::slice.call arguments
    args.pop()
    _s.repeat.apply null, args

  Handlebars.registerHelper 'levenshtein', (str1, str2) ->
    args = Array::slice.call arguments
    args.pop()
    _s.levenshtein.apply null, args

  Handlebars.registerHelper 'to_boolean', (str, trueValues, falseValues) ->
    args = Array::slice.call arguments
    args.pop()
    _s.toBoolean.apply null, args

  return
###
  Handlebars helpers underscore.string 1.0.2

  Copyright (c) 2014-2017 Tomasz Jakub Rup

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
  Handlebars.registerHelper 'is_blank', (args..., options) -> _s.isBlank.apply null, args

  Handlebars.registerHelper 'strip_tags', (args..., options) -> _s.stripTags.apply null, args

  Handlebars.registerHelper 'capitalize', (args..., options) -> _s.capitalize.apply null, args

  Handlebars.registerHelper 'chop', (args..., options) -> _s.chop.apply null, args

  Handlebars.registerHelper 'clean', (args..., options) -> _s.clean.apply null, args

  Handlebars.registerHelper 'count', (args..., options) -> _s.count.apply null, args

  Handlebars.registerHelper 'chars', (args..., options) -> _s.chars.apply null, args

  Handlebars.registerHelper 'swap_case', (args..., options) -> _s.swapCase.apply null, args

  Handlebars.registerHelper 'splice', (args..., options) -> _s.splice.apply null, args

  Handlebars.registerHelper 'insert', (args..., options) -> _s.insert.apply null, args

  Handlebars.registerHelper 'include', (args..., options) -> _s.include.apply null, args

  Handlebars.registerHelper 'join', (args..., options) -> _s.join.apply null, args

  Handlebars.registerHelper 'lines', (args..., options) -> _s.lines.apply null, args

  Handlebars.registerHelper 'reverse', (args..., options) -> _s.reverse.apply null, args

  Handlebars.registerHelper 'starts_with', (args..., options) -> _s.startsWith.apply null, args

  Handlebars.registerHelper 'ends_with', (args..., options) -> _s.endsWith.apply null, args

  Handlebars.registerHelper 'succ', (args..., options) -> _s.succ.apply null, args

  Handlebars.registerHelper 'titleize', (args..., options) -> _s.titleize.apply null, args

  Handlebars.registerHelper 'camelize', (args..., options) -> _s.camelize.apply null, args

  Handlebars.registerHelper 'underscored', (args..., options) -> _s.underscored.apply null, args

  Handlebars.registerHelper 'dasherize', (args..., options) -> _s.dasherize.apply null, args

  Handlebars.registerHelper 'classify', (args..., options) -> _s.classify.apply null, args

  Handlebars.registerHelper 'humanize', (args..., options) -> _s.humanize.apply null, args

  Handlebars.registerHelper 'trim', (args..., options) -> _s.trim.apply null, args

  Handlebars.registerHelper 'ltrim', (args..., options) -> _s.ltrim.apply null, args

  Handlebars.registerHelper 'rtrim', (args..., options) -> _s.rtrim.apply null, args

  Handlebars.registerHelper 'truncate', (args..., options) -> _s.truncate.apply null, args

  Handlebars.registerHelper 'prune', (args..., options) -> _s.prune.apply null, args

  Handlebars.registerHelper 'words', (args..., options) -> _s.words.apply null, args

  Handlebars.registerHelper 'pad', (args..., options) -> _s.pad.apply null, args

  Handlebars.registerHelper 'lpad', (args..., options) -> _s.lpad.apply null, args

  Handlebars.registerHelper 'rpad', (args..., options) -> _s.rpad.apply null, args

  Handlebars.registerHelper 'lrpad', (args..., options) -> _s.lrpad.apply null, args

  Handlebars.registerHelper 'sprintf', (args..., options) -> _s.sprintf.apply null, args

  Handlebars.registerHelper 'vsprintf', (args..., options) -> _s.vsprintf.apply null, args

  Handlebars.registerHelper 'to_number', (args..., options) -> _s.toNumber.apply null, args

  Handlebars.registerHelper 'number_format', (args..., options) -> _s.numberFormat.apply null, args

  Handlebars.registerHelper 'str_right', (args..., options) -> _s.strRight.apply null, args

  Handlebars.registerHelper 'str_right_back', (args..., options) -> _s.strRightBack.apply null, args

  Handlebars.registerHelper 'str_left', (args..., options) -> _s.strLeft.apply null, args

  Handlebars.registerHelper 'str_left_back', (args..., options) -> _s.strLeftBack.apply null, args

  Handlebars.registerHelper 'to_sentence', (args..., options) -> _s.toSentence.apply null, args

  Handlebars.registerHelper 'to_sentence_serial', (args..., options) -> _s.toSentenceSerial.apply null, args

  Handlebars.registerHelper 'slugify', (args..., options) -> _s.slugify.apply null, args

  Handlebars.registerHelper 'surround', (args..., options) -> _s.surround.apply null, args

  Handlebars.registerHelper 'quote', (args..., options) -> _s.quote.apply null, args

  Handlebars.registerHelper 'unquote', (args..., options) -> _s.unquote.apply null, args

  Handlebars.registerHelper 'repeat', (args..., options) -> _s.repeat.apply null, args

  Handlebars.registerHelper 'levenshtein', (args..., options) -> _s.levenshtein.apply null, args

  Handlebars.registerHelper 'to_boolean', (args..., options) -> _s.toBoolean.apply null, args

  Handlebars.registerHelper 'clean_diacritics', (args..., options) -> _s.cleanDiacritics.apply null, args

  Handlebars.registerHelper 'decapitalize', (args..., options) -> _s.decapitalize.apply null, args

  Handlebars.registerHelper 'dedent', (args..., options) -> _s.dedent.apply null, args

  Handlebars.registerHelper 'pred', (args..., options) -> _s.pred.apply null, args

  Handlebars.registerHelper 'replace_all', (args..., options) -> _s.replaceAll.apply null, args

  return

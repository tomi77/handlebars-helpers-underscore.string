const Handlebars = require('handlebars');
require('../dist/handlebars-helpers-underscore.string');

describe('A Handlebars helpers underscore.string wrapper have function that', () => {
  it('should trims defined characters from beginning and ending of the string', () => {
    const template = Handlebars.compile('{{trim str characters}}');

    expect(template({str: 123})).toBe('123');
    expect(template({str: ' foo'})).toBe('foo');
    expect(template({str: 'foo '})).toBe('foo');
    expect(template({str: ' foo '})).toBe('foo');
    expect(template({str: '    foo     '})).toBe('foo');
    expect(template({str: '    foo     ', characters: ' '})).toBe('foo');
    expect(template({str: '\t    foo \t  ', characters: /\s/})).toBe('foo');
    expect(template({str: 'ffoo', characters: 'ff'})).toBe('oo');
    expect(template({str: 'ooff', characters: 'ff'})).toBe('oo');
    expect(template({str: 'ffooff', characters: 'ff'})).toBe('oo');
    expect(template({str: '_-foobar-_', characters: '_-'})).toBe('foobar');
    expect(template({str: 'http://foo/', characters: '/'})).toBe('http://foo');
    expect(template({str: 'c:\\', characters: '\\'})).toBe('c:');
    expect(template({str: 123})).toBe('123');
    expect(template({str: 123, characters: 3})).toBe('12');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should calculates Levenshtein distance between two strings', () => {
    const template = Handlebars.compile('{{levenshtein str1 str2}}');

    expect(template({str1: 'Godfather', str2: 'Godfather'})).toBe('0');
    expect(template({str1: 'Godfather', str2: 'Godfathe'})).toBe('1');
    expect(template({str1: 'Godfather', str2: 'odfather'})).toBe('1');
    expect(template({str1: 'Godfather', str2: 'godfather'})).toBe('1');
    expect(template({str1: 'Godfather', str2: 'Gdfthr'})).toBe('3');
    expect(template({str1: 'seven', str2: 'eight'})).toBe('5');
    expect(template({str1: '123', str2: 123})).toBe('0');
    expect(template({str1: 321, str2: '321'})).toBe('0');
    expect(template({str1: 'lol', str2: null})).toBe('3');
    expect(template({str1: null, str2: 'lol'})).toBe('3');
    expect(template({str1: void 0, str2: 'lol'})).toBe('3');
    expect(template({str1: '因為我是中國人所以我會說中文', str2: '因為我是英國人所以我會說英文'})).toBe('2');
  });

  it('should trims defined characters from beginning of the string', () => {
    const template = Handlebars.compile('{{ltrim str characters}}');

    expect(template({str: ' foo'})).toBe('foo');
    expect(template({str: '    foo'})).toBe('foo');
    expect(template({str: 'foo '})).toBe('foo ');
    expect(template({str: ' foo '})).toBe('foo ');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
    expect(template({str: 'ffoo', characters: 'f'})).toBe('oo');
    expect(template({str: 'ooff', characters: 'f'})).toBe('ooff');
    expect(template({str: 'ffooff', characters: 'f'})).toBe('ooff');
    expect(template({str: '_-foobar-_', characters: '_-'})).toBe('foobar-_');
    expect(template({str: 123, characters: 1})).toBe('23');
  });

  it('should trims defined characters from ending of the string', () => {
    const template = Handlebars.compile('{{rtrim str characters}}');

    expect(template({str: 'http://foo/', characters: '/'})).toBe('http://foo');
    expect(template({str: ' foo'})).toBe(' foo');
    expect(template({str: 'foo '})).toBe('foo');
    expect(template({str: 'foo     '})).toBe('foo');
    expect(template({str: 'foo  bar     '})).toBe('foo  bar');
    expect(template({str: ' foo '})).toBe(' foo');
    expect(template({str: 'ffoo', characters: 'f'})).toBe('ffoo');
    expect(template({str: 'ooff', characters: 'f'})).toBe('oo');
    expect(template({str: 'ffooff', characters: 'f'})).toBe('ffoo');
    expect(template({str: '_-foobar-_', characters: '_-'})).toBe('_-foobar');
    expect(template({str: 123, characters: 3})).toBe('12');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
  });

  it('should converts first letter of the string to uppercase', () => {
    const template = Handlebars.compile('{{capitalize str}}');
    const template2 = Handlebars.compile('{{capitalize str lowercaseRest}}');

    expect(template({str: 'fabio'})).toBe('Fabio');
    expect(template({str: 'FOO'})).toBe('FOO');
    expect(template2({str: 'FOO', lowercaseRest: false})).toBe('FOO');
    expect(template2({str: 'foO', lowercaseRest: false})).toBe('FoO');
    expect(template2({str: 'FOO', lowercaseRest: true})).toBe('Foo');
    expect(template2({str: 'foO', lowercaseRest: true})).toBe('Foo');
    expect(template2({str: 'f', lowercaseRest: false})).toBe('F');
    expect(template2({str: 'f', lowercaseRest: true})).toBe('F');
    expect(template({str: 'f'})).toBe('F');
    expect(template({str: 123})).toBe('123');
    expect(template2({str: 123, lowercaseRest: true})).toBe('123');
    expect(template2({str: 123, lowercaseRest: false})).toBe('123');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
    expect(template2({str: '', lowercaseRest: true})).toBe('');
    expect(template2({str: null, lowercaseRest: true})).toBe('');
    expect(template2({str: void 0, lowercaseRest: true})).toBe('');
    expect(template2({str: '', lowercaseRest: false})).toBe('');
    expect(template2({str: null, lowercaseRest: false})).toBe('');
    expect(template2({str: void 0, lowercaseRest: false})).toBe('');
  });

  it('should converts first letter of the string to lowercase', () => {
    const template = Handlebars.compile('{{decapitalize str}}');

    expect(template({str: 'Fabio'})).toBe('fabio');
    expect(template({str: 'FOO'})).toBe('fOO');
    expect(template({str: 123})).toBe('123');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should joins strings together with given separator', () => {
    const template2 = Handlebars.compile('{{join separator str1 str2}}');
    const template3 = Handlebars.compile('{{join separator str1 str2 str3}}');

    expect(template2({separator: '', str1: 'foo', str2: 'bar'})).toBe('foobar');
    expect(template3({separator: '', str1: 1, str2: 'foo', str3: 2})).toBe('1foo2');
    expect(template2({separator: ' ', str1: 'foo', str2: 'bar'})).toBe('foo bar');
    expect(template2({separator: '1', str1: '2', str2: '2'})).toBe('212');
    expect(template2({separator: 1, str1: 2, str2: 2})).toBe('212');
    expect(template2({separator: '', str1: 'foo', str2: null})).toBe('foo');
    expect(template2({separator: null, str1: 'foo', str2: 'bar'})).toBe('foobar');
    expect(template3({separator: 1, str1: 2, str2: 3, str3: 4})).toBe('21314');
    expect(template3({separator: '|', str1: 'foo', str2: 'bar', str3: 'baz'})).toBe('foo|bar|baz');
    expect(template3({separator: '', str1: 2, str2: 3, str3: null})).toBe('23');
    expect(template2({separator: null, str1: 2, str2: 3})).toBe('23');
  });

  it('should dedent unnecessary indentation or dedent by a pattern', () => {
    const template = Handlebars.compile('{{dedent str pattern}}');

    expect(template({str: 'Hello\nWorld'})).toBe('Hello\nWorld');
    expect(template({str: 'Hello\t\nWorld'})).toBe('Hello\t\nWorld');
    expect(template({str: 'Hello \nWorld'})).toBe('Hello \nWorld');
    expect(template({str: 'Hello\n  World'})).toBe('Hello\n  World');
    expect(template({str: '    Hello\n  World'})).toBe('  Hello\nWorld');
    expect(template({str: '  Hello\nWorld'})).toBe('  Hello\nWorld');
    expect(template({str: '  Hello World'})).toBe('Hello World');
    expect(template({str: '  Hello\n  World'})).toBe('Hello\nWorld');
    expect(template({str: '  Hello\n    World'})).toBe('Hello\n  World');
    expect(template({str: '\t\tHello\tWorld'})).toBe('Hello\tWorld');
    expect(template({str: '\t\tHello\n\t\tWorld'})).toBe('Hello\nWorld');
    expect(template({str: 'Hello\n\t\tWorld'})).toBe('Hello\n\t\tWorld');
    expect(template({str: '\t\tHello\n\t\t\t\tWorld'})).toBe('Hello\n\t\tWorld');
    expect(template({str: '\t\tHello\r\n\t\t\t\tWorld'})).toBe('Hello\r\n\t\tWorld');
    expect(template({str: '\t\tHello\r\n\r\n\t\t\t\tWorld'})).toBe('Hello\r\n\r\n\t\tWorld');
    expect(template({str: '\t\tHello\n\n\n\n\t\t\t\tWorld'})).toBe('Hello\n\n\n\n\t\tWorld');
    expect(template({str: '\t\t\tHello\n\t\tWorld', pattern: '\\t'})).toBe('\t\tHello\n\tWorld');
    expect(template({str: '    Hello\n    World', pattern: '  '})).toBe('  Hello\n  World');
    expect(template({str: '    Hello\n    World', pattern: ''})).toBe('    Hello\n    World');
    expect(template({str: '\t\tHello\n\n\n\n\t\t\t\tWorld', pattern: '\\t'})).toBe('\tHello\n\n\n\n\t\t\tWorld');
    expect(template({str: 'Hello\n\t\tWorld', pattern: '\t'})).toBe('Hello\n\t\tWorld');
    expect(template({str: 'Hello\n  World', pattern: ' '})).toBe('Hello\n  World');
    expect(template({str: '  Hello\nWorld', pattern: ' '})).toBe('  Hello\nWorld');
    expect(template({str: 123})).toBe('123');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should reversed string', () => {
    const template = Handlebars.compile('{{reverse str}}');

    expect(template({str: 'foo'})).toBe('oof');
    expect(template({str: 'foobar'})).toBe('raboof');
    expect(template({str: 'foo bar'})).toBe('rab oof');
    expect(template({str: 'saippuakauppias'})).toBe('saippuakauppias');
    expect(template({str: 123})).toBe('321');
    expect(template({str: 123.45})).toBe('54.321');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should compress some whitespaces to one', () => {
    const template = Handlebars.compile('{{clean str}}');

    expect(template({str: ' foo    bar   '})).toBe('foo bar');
    expect(template({str: 123})).toBe('123');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should replace diacritic characters with closest ASCII equivalents', () => {
    const template = Handlebars.compile('{{{clean_diacritics str}}}');

    expect(template({str: 'ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž'})).toBe('aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz');
    expect(template({str: 'ä'})).toBe('a');
    expect(template({str: 'Ä Ø'})).toBe('A O');
    expect(template({str: '1 foo ääkkönen'})).toBe('1 foo aakkonen');
    expect(template({str: 'Äöö ÖÖ'})).toBe('Aoo OO');
    expect(template({str: ' ä '})).toBe(' a ');
    expect(template({str: '- " , £ $ ä'})).toBe('- " , £ $ a');
    expect(template({str: 'ß'})).toBe('ss');
    expect(template({str: 'Schuß'})).toBe('Schuss');
  });

  it('should checks whether string starts with starts', () => {
    const template = Handlebars.compile('{{#if (starts_with str starts)}}true{{else}}false{{/if}}');
    const template2 = Handlebars.compile('{{#if (starts_with str starts position)}}true{{else}}false{{/if}}');

    expect(template({str: 'foobar', starts: 'foo'})).toBe('true');
    expect(template({str: 'oobar', starts: 'foo'})).toBe('false');
    expect(template({str: 'oobar', starts: 'o'})).toBe('true');
    expect(template({str: 12345, starts: 123})).toBe('true');
    expect(template({str: 2345, starts: 123})).toBe('false');
    expect(template({str: '', starts: ''})).toBe('true');
    expect(template({str: null, starts: ''})).toBe('true');
    expect(template({str: null, starts: 'foo'})).toBe('false');
    expect(template2({str: '-foobar', starts: 'foo', position: 1})).toBe('true');
    expect(template2({str: 'foobar', starts: 'foo', position: 0})).toBe('true');
    expect(template2({str: 'foobar', starts: 'foo', position: 1})).toBe('false');
    expect(template({str: 'Äpfel', starts: 'Ä'})).toBe('true');
  });

  it('should checks whether string ends with ends', () => {
    const template = Handlebars.compile('{{#if (ends_with str ends)}}true{{else}}false{{/if}}');
    const template2 = Handlebars.compile('{{#if (ends_with str ends position)}}true{{else}}false{{/if}}');

    expect(template({str: 'foobar', ends: 'bar'})).toBe('true');
    expect(template({str: 'foobarfoobar', ends: 'bar'})).toBe('true');
    expect(template({str: 'foo', ends: 'o'})).toBe('true');
    expect(template({str: '00018-0000062.Plone.sdh264.1a7264e6912a91aa4a81b64dc5517df7b8875994.mp4', ends: 'mp4'})).toBe('true');
    expect(template({str: 'fooba', ends: 'bar'})).toBe('false');
    expect(template({str: 12345, ends: 45})).toBe('true');
    expect(template({str: 2345, ends: 6})).toBe('false');
    expect(template({str: '', ends: ''})).toBe('true');
    expect(template({str: null, ends: ''})).toBe('true');
    expect(template({str: null, ends: 'foo'})).toBe('false');
    expect(template2({str: 'foobar?', ends: 'bar', position: 6})).toBe('true');
    expect(template2({str: 12345, ends: 34, position: 4})).toBe('true');
    expect(template2({str: 12345, ends: 45, position: 4})).toBe('false');
    expect(template({str: 'foobä', ends: 'ä'})).toBe('true');
  });

  it('should tests if string contains a substring', () => {
    const template = Handlebars.compile('{{#if (include str needle)}}true{{else}}false{{/if}}');

    expect(template({str: 'foobar', needle: 'bar'})).toBe('true');
    expect(template({str: 'foobar', needle: 'buzz'})).toBe('false');
    expect(template({str: 12345, needle: 34})).toBe('true');
    expect(template({str: 12345, needle: 6})).toBe('false');
    expect(template({str: '', needle: 34})).toBe('false');
    expect(template({str: null, needle: 34})).toBe('false');
    expect(template({str: null, needle: ''})).toBe('true');
  });

  it('should chop', () => {
    const template = Handlebars.compile('{{#each (chop str step)}}{{this}}, {{/each}}');

    expect(template({str: null, step: 2})).toBe('');
    expect(template({str: 'whitespace', step: 2})).toBe('wh, it, es, pa, ce, ');
    expect(template({str: 'whitespace', step: 3})).toBe('whi, tes, pac, e, ');
    expect(template({str: 'whitespace'})).toBe('whitespace, ');
    expect(template({str: 12345, step: 1})).toBe('1, 2, 3, 4, 5, ');
  });

  it('should count', () => {
    const template = Handlebars.compile('{{count str substr}}');

    expect(template({str: 'Hello world', substr: 'l'})).toBe('3');
    expect(template({str: 'Hello world', substr: 'Hello'})).toBe('1');
    expect(template({str: 'Hello world', substr: 'foo'})).toBe('0');
    expect(template({str: 'x.xx....x.x', substr: 'x'})).toBe('5');
    expect(template({str: '', substr: 'x'})).toBe('0');
    expect(template({str: null, substr: 'x'})).toBe('0');
    expect(template({str: void 0, substr: 'x'})).toBe('0');
    expect(template({str: 12345, substr: 1})).toBe('1');
    expect(template({str: 11345, substr: 1})).toBe('2');
    expect(template({str: 'Hello World', substr: ''})).toBe('0');
    expect(template({str: 'Hello World', substr: null})).toBe('0');
    expect(template({str: 'Hello World', substr: void 0})).toBe('0');
    expect(template({str: '', substr: ''})).toBe('0');
    expect(template({str: null, substr: null})).toBe('0');
    expect(template({str: void 0, substr: void 0})).toBe('0');
  });

  it('should insert', () => {
    const template = Handlebars.compile('{{insert str idx substr}}');

    expect(template({str: 'Hello ', idx: 6, substr: 'Jessy'})).toBe('Hello Jessy');
    expect(template({str: 'Hello', idx: 0, substr: 'Jessy '})).toBe('Jessy Hello');
    expect(template({str: 'Hello ', idx: 100, substr: 'Jessy'})).toBe('Hello Jessy');
    expect(template({str: '', idx: 100, substr: 'Jessy'})).toBe('Jessy');
    expect(template({str: null, idx: 100, substr: 'Jessy'})).toBe('Jessy');
    expect(template({str: void 0, idx: 100, substr: 'Jessy'})).toBe('Jessy');
    expect(template({str: 12345, idx: 6, substr: 'Jessy'})).toBe('12345Jessy');
    expect(template({str: 12345, idx: 3, substr: 'Jessy'})).toBe('123Jessy45');
  });

  it('should splice', () => {
    const template = Handlebars.compile('{{splice str idx cnt substr}}');

    expect(template({str: 'https://edtsech@bitbucket.org/edtsech/underscore.strings', idx: 30, cnt: 7, substr: 'epeli'})).toBe('https://edtsech@bitbucket.org/epeli/underscore.strings');
    expect(template({str: 12345, idx: 1, cnt: 2, substr: 321})).toBe('132145');
  });

  it('should returns the successor to str', () => {
    const template = Handlebars.compile('{{succ str}}');

    expect(template({str: 'a'})).toBe('b');
    expect(template({str: 'A'})).toBe('B');
    expect(template({str: '+'})).toBe(',');
    expect(template({str: 1})).toBe('2');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should returns the predecessor to str', () => {
    const template = Handlebars.compile('{{pred str}}');

    expect(template({str: 'b'})).toBe('a');
    expect(template({str: 'B'})).toBe('A');
    expect(template({str: ','})).toBe('+');
    expect(template({str: 2})).toBe('1');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should titleize', () => {
    const template = Handlebars.compile('{{{titleize str}}}');

    expect(template({str: 'the titleize string method'})).toBe('The Titleize String Method');
    expect(template({str: 'the titleize string  method'})).toBe('The Titleize String  Method');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
    expect(template({str: "let's have some fun"})).toBe("Let's Have Some Fun");
    expect(template({str: 'a-dash-separated-string'})).toBe('A-Dash-Separated-String');
    expect(template({str: 'A-DASH-SEPARATED-STRING'})).toBe('A-Dash-Separated-String');
    expect(template({str: 123})).toBe('123');
  });

  it('should converts underscored or dasherized string to a camelized one. Begins with a lower case letter unless it starts with an underscore or string', () => {
    const template = Handlebars.compile('{{camelize str}}');
    const template2 = Handlebars.compile('{{camelize str decapitalize}}');

    expect(template({str: 'the_camelize_string_method'})).toBe('theCamelizeStringMethod');
    expect(template({str: 'webkit-transform'})).toBe('webkitTransform');
    expect(template({str: '-the-camelize-string-method'})).toBe('TheCamelizeStringMethod');
    expect(template({str: '_the_camelize_string_method'})).toBe('TheCamelizeStringMethod');
    expect(template({str: 'The-camelize-string-method'})).toBe('TheCamelizeStringMethod');
    expect(template({str: 'the camelize string method'})).toBe('theCamelizeStringMethod');
    expect(template({str: ' the camelize  string method'})).toBe('theCamelizeStringMethod');
    expect(template({str: 'the camelize   string method'})).toBe('theCamelizeStringMethod');
    expect(template({str: ' with   spaces'})).toBe('withSpaces');
    expect(template({str: '_som eWeird---name-'})).toBe('SomEWeirdName');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
    expect(template({str: 123})).toBe('123');
    expect(template2({str: 'the_camelize_string_method', decapitalize: true})).toBe('theCamelizeStringMethod');
    expect(template2({str: 'webkit-transform', decapitalize: true})).toBe('webkitTransform');
    expect(template2({str: '-the-camelize-string-method', decapitalize: true})).toBe('theCamelizeStringMethod');
    expect(template2({str: '_the_camelize_string_method', decapitalize: true})).toBe('theCamelizeStringMethod');
    expect(template2({str: 'The-camelize-string-method', decapitalize: true})).toBe('theCamelizeStringMethod');
    expect(template2({str: 'the camelize string method', decapitalize: true})).toBe('theCamelizeStringMethod');
    expect(template2({str: ' the camelize  string method', decapitalize: true})).toBe('theCamelizeStringMethod');
    expect(template2({str: 'the camelize   string method', decapitalize: true})).toBe('theCamelizeStringMethod');
    expect(template2({str: ' with   spaces', decapitalize: true})).toBe('withSpaces');
    expect(template2({str: '_som eWeird---name-', decapitalize: true})).toBe('somEWeirdName');
    expect(template2({str: '', decapitalize: true})).toBe('');
    expect(template2({str: null, decapitalize: true})).toBe('');
    expect(template2({str: void 0, decapitalize: true})).toBe('');
    expect(template2({str: 123, decapitalize: true})).toBe('123');
  });

  it('should converts a camelized or dasherized string into an underscored one', () => {
    const template = Handlebars.compile('{{underscored str}}');

    expect(template({str: 'the-underscored-string-method'})).toBe('the_underscored_string_method');
    expect(template({str: 'theUnderscoredStringMethod'})).toBe('the_underscored_string_method');
    expect(template({str: 'TheUnderscoredStringMethod'})).toBe('the_underscored_string_method');
    expect(template({str: ' the underscored  string method'})).toBe('the_underscored_string_method');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
    expect(template({str: 123})).toBe('123');
  });

  it('should converts a underscored or camelized string into an dasherized one', () => {
    const template = Handlebars.compile('{{dasherize str}}');

    expect(template({str: 'the_dasherize_string_method'})).toBe('the-dasherize-string-method');
    expect(template({str: 'TheDasherizeStringMethod'})).toBe('-the-dasherize-string-method');
    expect(template({str: 'thisIsATest'})).toBe('this-is-a-test');
    expect(template({str: 'this Is A Test'})).toBe('this-is-a-test');
    expect(template({str: 'thisIsATest123'})).toBe('this-is-a-test123');
    expect(template({str: '123thisIsATest'})).toBe('123this-is-a-test');
    expect(template({str: 'the dasherize string method'})).toBe('the-dasherize-string-method');
    expect(template({str: 'the  dasherize string method  '})).toBe('the-dasherize-string-method');
    expect(template({str: 'téléphone'})).toBe('téléphone');
    expect(template({str: 'foo$bar'})).toBe('foo$bar');
    expect(template({str: 'input with a-dash'})).toBe('input-with-a-dash');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
    expect(template({str: 123})).toBe('123');
  });

  it('should converts string to camelized class name. First letter is always upper case', () => {
    const template = Handlebars.compile('{{classify str}}');

    expect(template({str: 1})).toBe('1');
    expect(template({str: 'some_class_name'})).toBe('SomeClassName');
    expect(template({str: 'my wonderfull class_name'})).toBe('MyWonderfullClassName');
    expect(template({str: 'my wonderfull.class.name'})).toBe('MyWonderfullClassName');
    expect(template({str: 'myLittleCamel'})).toBe('MyLittleCamel');
    expect(template({str: 'myLittleCamel.class.name'})).toBe('MyLittleCamelClassName');
    expect(template({str: 123})).toBe('123');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should converts an underscored, camelized, or dasherized string into a humanized one. Also removes beginning and ending whitespace, and removes the postfix \'_id\'.', () => {
    const template = Handlebars.compile('{{humanize str}}');

    expect(template({str: 'the_humanize_string_method'})).toBe('The humanize string method');
    expect(template({str: 'ThehumanizeStringMethod'})).toBe('Thehumanize string method');
    expect(template({str: '-ThehumanizeStringMethod'})).toBe('Thehumanize string method');
    expect(template({str: 'the humanize string method'})).toBe('The humanize string method');
    expect(template({str: 'the humanize_id string method_id'})).toBe('The humanize id string method');
    expect(template({str: 'the  humanize string method  '})).toBe('The humanize string method');
    expect(template({str: '   capitalize dash-CamelCase_underscore trim  '})).toBe('Capitalize dash camel case underscore trim');
    expect(template({str: 123})).toBe('123');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should truncate', () => {
    const template = Handlebars.compile('{{truncate str pos more}}');

    expect(template({str: 'Hello world', pos: 6, more: 'read more'})).toBe('Hello read more');
    expect(template({str: 'Hello world', pos: 5})).toBe('Hello...');
    expect(template({str: 'Hello', pos: 10})).toBe('Hello');
    expect(template({str: '', pos: 10})).toBe('');
    expect(template({str: null, pos: 10})).toBe('');
    expect(template({str: void 0, pos: 10})).toBe('');
    expect(template({str: 1234567890, pos: 5})).toBe('12345...');
  });

  it('should elegant truncate', () => {
    const template = Handlebars.compile('{{prune str pos more}}');

    expect(template({str: 'Hello, cruel world', pos: 6, more: ' read more'})).toBe('Hello read more');
    expect(template({str: 'Hello, world', pos: 5, more: 'read a lot more'})).toBe('Hello, world');
    expect(template({str: 'Hello, world', pos: 5})).toBe('Hello...');
    expect(template({str: 'Hello, world', pos: 8})).toBe('Hello...');
    expect(template({str: 'Hello, cruel world', pos: 15})).toBe('Hello, cruel...');
    expect(template({str: 'Hello world', pos: 22})).toBe('Hello world');
    expect(template({str: 'Привет, жестокий мир', pos: 6, more: ' read more'})).toBe('Привет read more');
    expect(template({str: 'Привет, мир', pos: 6, more: 'read a lot more'})).toBe('Привет, мир');
    expect(template({str: 'Привет, мир', pos: 6})).toBe('Привет...');
    expect(template({str: 'Привет, мир', pos: 8})).toBe('Привет...');
    expect(template({str: 'Привет, жестокий мир', pos: 16})).toBe('Привет, жестокий...');
    expect(template({str: 'Привет, мир', pos: 22})).toBe('Привет, мир');
    expect(template({str: 'alksjd!!!!!!....', pos: 100, more: ''})).toBe('alksjd!!!!!!....');
    expect(template({str: 123, pos: 10})).toBe('123');
    expect(template({str: 123, pos: 1, more: 321})).toBe('321');
    expect(template({str: '', pos: 5})).toBe('');
    expect(template({str: null, pos: 5})).toBe('');
    expect(template({str: void 0, pos: 5})).toBe('');
  });

  it('should test if string is empty', () => {
    const template = Handlebars.compile('{{#if (is_blank str)}}blank{{else}}not blank{{/if}}');

    expect(template({str: ''})).toBe('blank');
    expect(template({str: ' '})).toBe('blank');
    expect(template({str: '\n'})).toBe('blank');
    expect(template({str: 'a'})).toBe('not blank');
    expect(template({str: '0'})).toBe('not blank');
    expect(template({str: 0})).toBe('not blank');
    expect(template({str: null})).toBe('blank');
    expect(template({str: void 0})).toBe('blank');
    expect(template({str: false})).toBe('not blank');
  });

  it('should split string by delimiter', () => {
    const template = Handlebars.compile('{{#each (words str delimiter)}}{{this}} {{/each}}');

    expect(template({str: 'I love you!'})).toBe('I love you! ');
    expect(template({str: ' I    love   you!  '})).toBe('I love you! ');
    expect(template({str: 'I_love_you!', delimiter: '_'})).toBe('I love you! ');
    expect(template({str: 'I-love-you!', delimiter: '-'})).toBe('I love you! ');
    expect(template({str: 123})).toBe('123 ');
    expect(template({str: 0})).toBe('0 ');
    expect(template({str: ''})).toBe('');
    expect(template({str: '   '})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should split string by chars', () => {
    const template = Handlebars.compile('{{#each (chars str)}}{{this}} {{/each}}');

    expect(template({str: 'Hello'})).toBe('H e l l o ');
    expect(template({str: 123})).toBe('1 2 3 ');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should returns a copy of the string in which all the case-based characters have had their case swapped', () => {
    const template = Handlebars.compile('{{swap_case str}}');

    expect(template({str: 'AaBbCcDdEe'})).toBe('aAbBcCdDeE');
    expect(template({str: 'Hello World'})).toBe('hELLO wORLD');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should split string by lines', () => {
    const template = Handlebars.compile('{{#each (lines str)}}{{this}}<br/>{{/each}}');

    expect(template({str: 'Hello\nWorld'})).toBe('Hello<br/>World<br/>');
    expect(template({str: 'Hello\rWorld'})).toBe('Hello<br/>World<br/>');
    expect(template({str: 'Hello World'})).toBe('Hello World<br/>');
    expect(template({str: '\r\n\n\r'})).toBe('<br/><br/><br/><br/>');
    expect(template({str: 123})).toBe('123<br/>');
    expect(template({str: ''})).toBe('<br/>');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
    expect(template({str: 'Hello\r\nWorld'})).toBe('Hello<br/>World<br/>');
  });

  it('should pads the str with characters until the total string length is equal to the passed length parameter', () => {
    const template = Handlebars.compile('{{pad str len padstr type}}');

    expect(template({str: '1', len: 8})).toBe('       1');
    expect(template({str: 1, len: 8})).toBe('       1');
    expect(template({str: '1', len: 8, padstr: '0'})).toBe('00000001');
    expect(template({str: '1', len: 8, padstr: '0', type: 'left'})).toBe('00000001');
    expect(template({str: '1', len: 8, padstr: '0', type: 'right'})).toBe('10000000');
    expect(template({str: '1', len: 8, padstr: '0', type: 'both'})).toBe('00001000');
    expect(template({str: 'foo', len: 8, padstr: '0', type: 'both'})).toBe('000foo00');
    expect(template({str: 'foo', len: 7, padstr: '0', type: 'both'})).toBe('00foo00');
    expect(template({str: 'foo', len: 7, padstr: '!@$%dofjrofj', type: 'both'})).toBe('!!foo!!');
    expect(template({str: '', len: 2})).toBe('  ');
    expect(template({str: null, len: 2})).toBe('  ');
    expect(template({str: void 0, len: 2})).toBe('  ');
  });

  it('should left-pad a string', () => {
    const template = Handlebars.compile('{{lpad str len padstr}}');

    expect(template({str: '1', len: 8})).toBe('       1');
    expect(template({str: 1, len: 8})).toBe('       1');
    expect(template({str: '1', len: 8, padstr: '0'})).toBe('00000001');
    expect(template({str: '', len: 2})).toBe('  ');
    expect(template({str: null, len: 2})).toBe('  ');
    expect(template({str: void 0, len: 2})).toBe('  ');
  });

  it('should right-pad a string', () => {
    const template = Handlebars.compile('{{rpad str len padstr}}');

    expect(template({str: '1', len: 8})).toBe('1       ');
    expect(template({str: 1, len: 8})).toBe('1       ');
    expect(template({str: '1', len: 8, padstr: '0'})).toBe('10000000');
    expect(template({str: 'foo', len: 8, padstr: '0'})).toBe('foo00000');
    expect(template({str: 'foo', len: 7, padstr: '0'})).toBe('foo0000');
    expect(template({str: '', len: 2})).toBe('  ');
    expect(template({str: null, len: 2})).toBe('  ');
    expect(template({str: void 0, len: 2})).toBe('  ');
  });

  it('should left/right-pad a string', () => {
    const template = Handlebars.compile('{{lrpad str len padstr}}');

    expect(template({str: '1', len: 8})).toBe('    1   ');
    expect(template({str: 1, len: 8})).toBe('    1   ');
    expect(template({str: '1', len: 8, padstr: '0'})).toBe('00001000');
    expect(template({str: 'foo', len: 8, padstr: '0'})).toBe('000foo00');
    expect(template({str: 'foo', len: 7, padstr: '0'})).toBe('00foo00');
    expect(template({str: 'foo', len: 7, padstr: '!@$%dofjrofj'})).toBe('!!foo!!');
    expect(template({str: '', len: 2})).toBe('  ');
    expect(template({str: null, len: 2})).toBe('  ');
    expect(template({str: void 0, len: 2})).toBe('  ');
  });

  it('should parse string to number', () => {
    const template = Handlebars.compile('{{to_number str dec}}');

    expect(template({str: 'not a number'})).toBe('NaN');
    expect(template({str: 0/0})).toBe('NaN');
    expect(template({str: {}})).toBe('NaN');
    expect(template({str: [/a/]})).toBe('NaN');
    expect(template({str: 'alpha6'})).toBe('NaN');
    expect(template({str: 0})).toBe('0');
    expect(template({str: '0'})).toBe('0');
    expect(template({str: '0.0'})).toBe('0');
    expect(template({str: '        0.0    '})).toBe('0');
    expect(template({str: '0.1'})).toBe('0');
    expect(template({str: '0.1', dec: 1})).toBe('0.1');
    expect(template({str: '  0.1', dec: 1})).toBe('0.1');
    expect(template({str: '0000'})).toBe('0');
    expect(template({str: '2.345'})).toBe('2');
    expect(template({str: '2.345', dec: 0/0})).toBe('2');
    expect(template({str: '2.345', dec: 2})).toBe('2.35');
    expect(template({str: '2.344', dec: 2})).toBe('2.34');
    expect(template({str: '2', dec: 2})).toBe('2');
    expect(template({str: 2, dec: 2})).toBe('2');
    expect(template({str: -2})).toBe('-2');
    expect(template({str: '-2'})).toBe('-2');
    expect(template({str: '-2.5123', dec: 3})).toBe('-2.512');
    expect(template({str: -234, dec: -1})).toBe('-230');
    expect(template({str: 234, dec: -2})).toBe('200');
    expect(template({str: '234', dec: -2})).toBe('200');
    expect(template({str: ''})).toBe('0');
    expect(template({str: null})).toBe('0');
    expect(template({str: void 0})).toBe('0');
    expect(template({str: 2e308})).toBe('Infinity');
    expect(template({str: 2e308, dec: 2e308})).toBe('Infinity');
    expect(template({str: 1, dec: 2e308})).toBe('1');
    expect(template({str: -2e308})).toBe('-Infinity');
    expect(template({str: -2e308, dec: -2e308})).toBe('-Infinity');
    expect(template({str: 1, dec: -2e308})).toBe('1');
  });

  it('should formats the numbers', () => {
    const template = Handlebars.compile('{{number_format num dec dsep tsep}}');

    expect(template({num: 9000})).toBe('9,000');
    expect(template({num: 9000, dec: 0})).toBe('9,000');
    expect(template({num: 9000, dec: 0, dsep: '', tsep: ''})).toBe('9000');
    expect(template({num: 90000, dec: 2})).toBe('90,000.00');
    expect(template({num: 1000.754})).toBe('1,001');
    expect(template({num: 1000.754, dec: 2})).toBe('1,000.75');
    expect(template({num: 1000.755, dec: 2})).toBe('1,000.75');
    expect(template({num: 1000.756, dec: 2})).toBe('1,000.76');
    expect(template({num: 1000.754, dec: 0, dsep: ',', tsep: '.'})).toBe('1.001');
    expect(template({num: 1000.754, dec: 2, dsep: ',', tsep: '.'})).toBe('1.000,75');
    expect(template({num: 1000000.754, dec: 2, dsep: ',', tsep: '.'})).toBe('1.000.000,75');
    expect(template({num: 1000000000})).toBe('1,000,000,000');
    expect(template({num: 100000000})).toBe('100,000,000');
    expect(template({num: 'not number'})).toBe('');
    expect(template()).toBe('');
    expect(template({num: null, dec: 0, dsep: '.', tsep: ','})).toBe('');
    expect(template({num: void 0, dec: 0, dsep: '.', tsep: ','})).toBe('');
    expect(template({num: new Number(5000)})).toBe('5,000');
  });

  it('should searches a string from left to right for a pattern and returns a substring consisting of the characters in the string that are to the right of the pattern or all string if no match found', () => {
    const template = Handlebars.compile('{{str_right str pat}}');

    expect(template({str: 'This_is_a_test_string', pat: '_'})).toBe('is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: 'string'})).toBe('');
    expect(template({str: 'This_is_a_test_string'})).toBe('This_is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: ''})).toBe('This_is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: '-'})).toBe('This_is_a_test_string');
    expect(template({str: '', pat: 'foo'})).toBe('');
    expect(template({str: null, pat: 'foo'})).toBe('');
    expect(template({str: void 0, pat: 'foo'})).toBe('');
    expect(template({str: 12345, pat: 2})).toBe('345');
  });

  it('should searches a string from right to left for a pattern and returns a substring consisting of the characters in the string that are to the right of the pattern or all string if no match found', () => {
    const template = Handlebars.compile('{{str_right_back str pat}}');

    expect(template({str: 'This_is_a_test_string', pat: '_'})).toBe('string');
    expect(template({str: 'This_is_a_test_string', pat: 'string'})).toBe('');
    expect(template({str: 'This_is_a_test_string'})).toBe('This_is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: ''})).toBe('This_is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: '-'})).toBe('This_is_a_test_string');
    expect(template({str: '', pat: 'foo'})).toBe('');
    expect(template({str: null, pat: 'foo'})).toBe('');
    expect(template({str: void 0, pat: 'foo'})).toBe('');
    expect(template({str: 12345, pat: 2})).toBe('345');
  });

  it('should searches a string from left to right for a pattern and returns a substring consisting of the characters in the string that are to the left of the pattern or all string if no match found', () => {
    const template = Handlebars.compile('{{str_left str pat}}');

    expect(template({str: 'This_is_a_test_string', pat: '_'})).toBe('This');
    expect(template({str: 'This_is_a_test_string', pat: 'This'})).toBe('');
    expect(template({str: 'This_is_a_test_string'})).toBe('This_is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: ''})).toBe('This_is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: '-'})).toBe('This_is_a_test_string');
    expect(template({str: '', pat: 'foo'})).toBe('');
    expect(template({str: null, pat: 'foo'})).toBe('');
    expect(template({str: void 0, pat: 'foo'})).toBe('');
    expect(template({str: 123454321, pat: 3})).toBe('12');
  });

  it('should searches a string from right to left for a pattern and returns a substring consisting of the characters in the string that are to the left of the pattern or all string if no match found', () => {
    const template = Handlebars.compile('{{str_left_back str pat}}');

    expect(template({str: 'This_is_a_test_string', pat: '_'})).toBe('This_is_a_test');
    expect(template({str: 'This_is_a_test_string', pat: 'This'})).toBe('');
    expect(template({str: 'This_is_a_test_string'})).toBe('This_is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: ''})).toBe('This_is_a_test_string');
    expect(template({str: 'This_is_a_test_string', pat: '-'})).toBe('This_is_a_test_string');
    expect(template({str: '', pat: 'foo'})).toBe('');
    expect(template({str: null, pat: 'foo'})).toBe('');
    expect(template({str: void 0, pat: 'foo'})).toBe('');
    expect(template({str: 123454321, pat: 3})).toBe('123454');
  });

  it('should removes all html tags from string', () => {
    const template = Handlebars.compile('{{{strip_tags str}}}');

    expect(template({str: 'a <a href="#">link</a>'})).toBe('a link');
    expect(template({str: 'a <a href="#">link</a><script>alert("hello world!")</scr' + 'ipt>'})).toBe('a linkalert("hello world!")');
    expect(template({str: '<html><body>hello world</body></html>'})).toBe('hello world');
    expect(template({str: 123})).toBe('123');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should join an array into a human readable sentence', () => {
    const template = Handlebars.compile('{{to_sentence arr del last_del}}');

    expect(template({arr: ['jQuery']})).toBe('jQuery');
    expect(template({arr: ['jQuery', 'MooTools']})).toBe('jQuery and MooTools');
    expect(template({arr: ['jQuery', 'MooTools', 'Prototype']})).toBe('jQuery, MooTools and Prototype');
    expect(template({arr: ['jQuery', 'MooTools', 'Prototype', 'YUI']})).toBe('jQuery, MooTools, Prototype and YUI');
    expect(template({arr: ['jQuery', 'MooTools', 'Prototype'], del: ',', last_del: ' or '})).toBe('jQuery,MooTools or Prototype');
  });

  it('should join an array into a human readable sentence. Adjusts delimeters to use Serial comma', () => {
    const template = Handlebars.compile('{{to_sentence_serial arr del last_del}}');

    expect(template({arr: ['jQuery']})).toBe('jQuery');
    expect(template({arr: ['jQuery', 'MooTools']})).toBe('jQuery and MooTools');
    expect(template({arr: ['jQuery', 'MooTools', 'Prototype']})).toBe('jQuery, MooTools, and Prototype');
  });

  it('should transform text into a URL slug', () => {
    const template = Handlebars.compile('{{slugify str}}');

    expect(template({str: 'Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/'})).toBe('jack-jill-like-numbers-1-2-3-and-4-and-silly-characters');
    expect(template({str: 'Un éléphant à l\'orée du bois'})).toBe('un-elephant-a-l-oree-du-bois');
    expect(template({str: 'I know latin characters: á í ó ú ç ã õ ñ ü ă ș ț'})).toBe('i-know-latin-characters-a-i-o-u-c-a-o-n-u-a-s-t');
    expect(template({str: 'I am a word too, even though I am but a single letter: i!'})).toBe('i-am-a-word-too-even-though-i-am-but-a-single-letter-i');
    expect(template({str: 'Some asian 天地人 characters'})).toBe('some-asian-characters');
    expect(template({str: 'SOME Capital Letters'})).toBe('some-capital-letters');
    expect(template({str: ''})).toBe('');
    expect(template({str: null})).toBe('');
    expect(template({str: void 0})).toBe('');
  });

  it('should quotes a string', () => {
    const template = Handlebars.compile('{{{quote str quoteChar}}}');

    expect(template({str: 'foo'})).toBe('"foo"');
    expect(template({str: '"foo"'})).toBe('""foo""');
    expect(template({str: 1})).toBe('"1"');
    expect(template({str: 'foo', quoteChar: "'"})).toBe("'foo'");
    expect(template({str: ''})).toBe('""');
    expect(template({str: null})).toBe('""');
    expect(template({str: void 0})).toBe('""');
  });

  it('should unquotes a string', () => {
    const template = Handlebars.compile('{{{unquote str quoteChar}}}');

    expect(template({str: '"foo"'})).toBe('foo');
    expect(template({str: '""foo""'})).toBe('"foo"');
    expect(template({str: '"1"'})).toBe('1');
    expect(template({str: "'foo'", quoteChar: "'"})).toBe('foo');
  });

  it('should surround a string with another string', () => {
    const template = Handlebars.compile('{{surround str wrap}}');

    expect(template({str: 'foo', wrap: 'ab'})).toBe('abfooab');
    expect(template({str: 1, wrap: 'ab'})).toBe('ab1ab');
    expect(template({str: 1, wrap: 2})).toBe('212');
    expect(template({str: 'foo', wrap: 1})).toBe('1foo1');
    expect(template({str: '', wrap: 1})).toBe('11');
    expect(template({str: null, wrap: 1})).toBe('11');
    expect(template({str: 'foo', wrap: ''})).toBe('foo');
    expect(template({str: 'foo', wrap: null})).toBe('foo');
  });

  it('should repeats a string count times', () => {
    const template = Handlebars.compile('{{repeat str cnt sep}}');

    expect(template({str: 'foo'})).toBe('');
    expect(template({str: 'foo', cnt: 3})).toBe('foofoofoo');
    expect(template({str: 'foo', cnt: '3'})).toBe('foofoofoo');
    expect(template({str: 123, cnt: 2})).toBe('123123');
    expect(template({str: 1234, cnt: 2, sep: '*'})).toBe('1234*1234');
    expect(template({str: 1234, cnt: 2, sep: 5})).toBe('123451234');
    expect(template({str: '', cnt: 2})).toBe('');
    expect(template({str: null, cnt: 2})).toBe('');
    expect(template({str: void 0, cnt: 2})).toBe('');
  });

  it('should turn strings that can be commonly considered as booleans to real booleans', () => {
    const template = Handlebars.compile('{{#if (to_boolean str true_vals false_vals)}}true{{else}}{{#unless (to_boolean str true_vals false_vals)}}false{{else}}undefined{{/unless}}{{/if}}');

    expect(template({str: 'false'})).toBe('false');
    expect(template({str: 'False'})).toBe('false');
    expect(template({str: 'Falsy', true_vals: null, false_vals: ['false', 'falsy']})).toBe('false');
    expect(template({str: 'true'})).toBe('true');
    expect(template({str: 'the truth', true_vals: 'the truth', false_vals: 'this is falsy'})).toBe('true');
    expect(template({str: 'this is falsy', true_vals: 'the truth', false_vals: 'this is falsy'})).toBe('false');
    expect(template({str: 'true'})).toBe('true');
    expect(template({str: 'trUe'})).toBe('true');
    expect(template({str: 'trUe', true_vals: /tru?/i})).toBe('true');
    expect(template({str: () => {}})).toBe('true');
    expect(template({str: /regexp/})).toBe('true');
    expect(template({str: 0})).toBe('false');
    expect(template({str: 1})).toBe('true');
    expect(template({str: '1'})).toBe('true');
    expect(template({str: '0'})).toBe('false');
    expect(template({str: 'foo true bar', true_vals: /true/})).toBe('true');
    expect(template({str: 'foo FALSE bar', true_vals: null, false_vals: /FALSE/})).toBe('false');
    expect(template({str: ' true  '})).toBe('true');
  });

  it('Should replace all', () => {
    const template = Handlebars.compile('{{replace_all str find replace ignorecase}}');

    expect(template({str: 'a', find: 'a', replace: 'b'})).toBe('b');
    expect(template({str: 'aa', find: 'a', replace: 'b'})).toBe('bb');
    expect(template({str: 'aca', find: 'a', replace: 'b'})).toBe('bcb');
    expect(template({str: 'ccc', find: 'a', replace: 'b'})).toBe('ccc');
    expect(template({str: 'AAa', find: 'a', replace: 'b'})).toBe('AAb');
    expect(template({str: 'Aa', find: 'a', replace: 'b', ignorecase: true})).toBe('bb');
    expect(template({str: 'foo bar foo', find: 'foo', replace: 'moo'})).toBe('moo bar moo');
    expect(template({str: 'foo bar\n foo', find: 'foo', replace: 'moo'})).toBe('moo bar\n moo');
    expect(template({str: 'foo bar FoO', find: 'foo', replace: 'moo', ignorecase: true})).toBe('moo bar moo');
    expect(template({str: '', find: 'a', replace: 'b'})).toBe('');
    expect(template({str: null, find: 'a', replace: 'b'})).toBe('');
    expect(template({str: void 0, find: 'a', replace: 'b'})).toBe('');
    expect(template({str: 12345, find: 'a', replace: 'b'})).toBe('12345');
  });
});

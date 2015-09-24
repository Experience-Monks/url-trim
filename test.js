var trim = require('./')
var test = require('tape')

test('trims query and hash parameters off a URL', function (t) {
  // don't modify empty URLs
  t.equal(trim(''), '')
  t.equal(trim(), '')

  t.equal(trim('http://localhost:9966///'), 'http://localhost:9966/')
  t.equal(trim('http://localhost:9966'), 'http://localhost:9966/')
  t.equal(trim('http://localhost:9966/'), 'http://localhost:9966/')
  t.equal(trim('http://localhost:9966/#'), 'http://localhost:9966/')
  t.equal(trim('http://localhost:9966/?'), 'http://localhost:9966/')
  t.equal(trim('http://localhost:9966/#something'), 'http://localhost:9966/')
  t.equal(trim('http://localhost:9966/a#something'), 'http://localhost:9966/a')
  t.equal(trim('http://localhost:9966/foo/bar?test=2#something'), 'http://localhost:9966/foo/bar')
  
  t.equal(trim('/path?foo'), '/path')
  t.equal(trim('/path#test?foo'), '/path')
  t.equal(trim('/'), '/')
  t.equal(trim('//'), '/')
  t.end()
})

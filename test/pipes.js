'use strict'

/**
 * ISC License
 *
 * Copyright (c) 2017, Antoine Pous <gecko@dvp.io>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE
 * OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

let ts3utils = require('../index')
let assert = require('assert')

describe('Pipes', function() {

  it('Should escape pipe', function() {
    assert.equal(ts3utils.escapePipes('\|'), '\\p')
  })

  it('Should escape pipes', function() {
    assert.equal(ts3utils.escapePipes('\| \| \|'), '\\p \\p \\p')
  })

  it('Should escape pipes in string', function() {
    assert.equal(ts3utils.escapePipes('Hello \| World\|! \|'), 'Hello \\p World\\p! \\p')
  })

  it('Should unescape pipe', function() {
    assert.equal(ts3utils.unescapePipes('\\p'), '|')
  })

  it('Should unescape pipes', function() {
    assert.equal(ts3utils.unescapePipes('\\p \\p \\p'), '| | |')
  })

  it('Should unescape pipes in string', function() {
    assert.equal(ts3utils.unescapePipes('Hello \\p World\\p! \\p'), 'Hello | World|! |')
  })

})

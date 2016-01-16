'use strict'

const hljs = require('highlight.js')
const marked = require('marked')
const _ = require('lodash')
const pt = require('path')

/*
 * Markdown config
 */

marked.setOptions({
  highlight (code, lang) {
    const result = lang ? hljs.highlight(lang, code) : hljs.highlightAuto(code)
    return result.value
  }
})

/*
 * Change how marked compiles headers to add links to our source files.
 */

const regComponent = /^sf-[a-z-]+$/
const repoComponentDir = 'https://github.com/Mitranim/stylific/blob/master/scss/components/'

// Default heading renderer func.
const headingDef = marked.Renderer.prototype.heading

// Custom heading renderer func that adds a link to the component source.
marked.Renderer.prototype.heading = function (text, level) {
  if (regComponent.test(text)) {
    return `<h${level} id="${text}"><a href="${repoComponentDir + text}.scss" target="_blank">${text}</a></h${level}>`
  }
  return headingDef.apply(this, arguments)
}

/*
 * Change how marked compiles links to add target="_blank" to links to other sites.
 */

marked.Renderer.prototype.link = function (href, title, text) {
  if (this.options.sanitize) {
    let prot = ''
    try {
      prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase()
    } catch (e) {
      return ''
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return ''
    }
  }
  let out = '<a href="' + href + '"'
  if (title) {
    out += ' title="' + title + '"'
  }
  if (/^[a-z]+:\/\//.test(href)) {
    out += ' target="_blank"'
  }
  out += '>' + text + '</a>'
  return out
}

/*
 * Statil config
 */

module.exports = {
  ignorePaths: path => (
    /^partials|^svg/.test(path)
  ),
  imports: {
    getExamples: files => _.filter(_.keys(files), path => /^examples/.test(path)),
    getName: path => pt.parse(path).name
  },
  rename: '$&/index.html',
  renameExcept: ['index.html', '404.html'],
  pipeline: [
    (content, path) => {
      if (pt.extname(path) === '.md') {
        return marked(content).replace(/<pre><code class="(.*)">|<pre><code>/g, '<pre><code class="hljs $1">')
      }
    }
  ]
}

const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.resolve(__dirname, '../dia-11/index.html'), 'utf8')

let dom
let container

describe('dia 11', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  test('should match the login page challenge', () => {
    expect(container).toMatchSnapshot();
  });
})
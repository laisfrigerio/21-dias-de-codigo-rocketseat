const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.resolve(__dirname, '../dia-14/index.html'), 'utf8')

let dom
let container

describe('dia 14', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  test('should match the quiz world cup challenge', () => {
    expect(container).toMatchSnapshot();
  });
})
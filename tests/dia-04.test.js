const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.resolve(__dirname, '../dia-04/index.html'), 'utf8')

let dom
let container

describe('dia 04', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  test('should match the calculator challenge', () => {
    expect(container).toMatchSnapshot();
  });
})
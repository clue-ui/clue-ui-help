const container = require('markdown-it-container')

module.exports = (md) => {
  md.use(...createContainer(md, 'demo'))
}

function createContainer (md, klass) {
  return [container, klass, {
    render (tokens, idx) {
      const token = tokens[idx]
      // description
      const description = token.info.trim().slice(klass.length).trim()
      const descriptionHTML = description ? md.render(description).html : ''

      if (token.nesting === 1) {
        const html = tokens[idx + 1].content;
        return `<demo-block>
                  <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                  <div class="highlight" slot="highlight">`;
      } else {
        return '</div></demo-block>\n';
      }
    }
  }]
}
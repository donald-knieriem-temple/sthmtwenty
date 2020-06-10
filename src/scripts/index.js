const COMMIT = process.env.COMMIT || 'N.A.'
const VERSION = process.env.VERSION || 'N.A.'

function ready(init) {
  window.addEventListener('reload', init)
}

ready(function() {
  console.info('New version loaded.')
  new Button()
})
// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// app/javascript/packs/hello_react.js
// app/javascript/packs/hello_react.js

const Hello = props => (
  <div className='react-app-wrapper'>

      {props.titles.map((title) =>
        <div>
          <h1>{title.name}</h1>
          <p>{title.episode}</p>
        </div>
      )}

  </div>
)

// Render component with data
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('hello-react')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(<Hello {...data} />, node)
})

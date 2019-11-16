import { Link } from 'gatsby'
import React from 'react'

function BlockContent({ title, content, transparent }) {
  let backgroundColor = transparent ? 'transparent' : 'rgba(0,0,0,.3)'
  console.log('background: ' + backgroundColor)
  return (
    <div
      style={{
        padding: '2rem',
        width: '100%',
        backgroundColor: { backgroundColor },
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          fontSize: '4rem',
          color: '#E3D71B',
          margin: '0 20px',
        }}
      >
        {title}
      </h1>
      <div
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '2rem',
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  )
}

export default BlockContent

import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const DevButton = ({ color, text, onClick }) => {

  return (
    // <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>{ text }</button>
    <Button  onClick={onClick} className='btn' style={{ backgroundColor: color }}>{ text }</Button>
  )
}

DevButton.defaultProps = {
    color: 'black'
}

DevButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default DevButton
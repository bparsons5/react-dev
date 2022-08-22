import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onToggleAddTask, showAdd }) => {
    const location = useLocation()
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button onClick={onToggleAddTask} color={showAdd ? 'red' : 'black'} text={showAdd ? 'Close' : 'Add'}/>}
        </header>
    )
}

Header.defaultProps = {
  title: 'REACT'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
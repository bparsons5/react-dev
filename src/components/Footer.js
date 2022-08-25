import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
       <p>Copyright &copy; 2022</p> 
       <Link to='/dashboard'>dashboard</Link>
    </footer>
  )
}

export default Footer
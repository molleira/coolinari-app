import { Link } from 'react-router-dom'
import './navega.css'
import { FunctionComponent } from 'react'
import { Cerca } from '../cerca/cerca'

export const Navega: FunctionComponent = () => {
  return (
    <div className="navega">
      <nav className="navega_ul">
        <Link to="/" className="marca">
          <h1>coolinari</h1>
        </Link>
        <p>|</p>
        <Link to="/crea">Crea recepta</Link>
        {/* <p>|</p>
        <Cerca /> */}
      </nav>
    </div>
  )
}
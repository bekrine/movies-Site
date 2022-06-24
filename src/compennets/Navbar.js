import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div>
            <span>Logo</span>
            <div>
                <a>
                    films
                </a>
                <a>
                    en streaming
                </a>
            </div>
        </div>
        <div>
            <span>
                <Link to={'/recherche'}>
                recherch
                </Link>
            </span>
        </div>
    </div>
  )
}

export default Navbar
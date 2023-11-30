import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
           <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                 </button>
                <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item me-5">
                      <Link class="nav-link "  to="./Jawan">Jawan</Link>
                    </li>
                    <li class="nav-item me-5">
                      <Link class="nav-link" to="./Tiger3">Tiger 3</Link>
                    </li>
                    <li class="nav-item me-5">
                      <abbr class="nav-link" to="./Animal">Animal</abbr>
                    </li>
                    <li class="nav-item me-5">
                      <Link class="nav-link" to="./Pathaan">Pathan</Link>
                    </li>
                    <li class="nav-item me-5">
                      <Link class="nav-link" to="./Gadar2">Gadar 2</Link>
                    </li>
                  </ul>
                </div>
            </div>
      </nav>
    </div>
  )
}

export default Navbar
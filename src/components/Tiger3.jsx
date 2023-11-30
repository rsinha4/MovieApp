import React from 'react'
import tiger from './tiger.jpg'

function Tiger3() {
  return (
    <div className='d-flex justify-content-center mt-5'>
        <div className="card" style={{ width: '18rem' }}>
        <img src={tiger} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}

export default Tiger3
import React from 'react'

function ShortListItem({ shot }) {
  return (
    <div className="col-4 px-12">
      <div className="shot-preview">
        <a href="#">
          <div className="teaser">
            <img src={shot.images.normal} />
          </div>
        </a>
        <div className="info px-12">
          <p className="title">Fly Emirates Book App</p>
          <a href="#" className="like-btn"><i className="fa fa-heart" aria-hidden="true"></i></a>
        </div>

      </div>
    </div>
  )
}
export default ShortListItem

import React from 'react'

function ShortListItem() {
  return (
    <div className="col-4 px-12">
      <div className="shot-preview">
        <a href="#">
          <div className="teaser">
            <img src="https://d13yacurqjgara.cloudfront.net/users/311820/screenshots/2998193/cover_1x.png" />
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

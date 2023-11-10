import React from 'react'

const FooterList = ({title, item1, item2, item3, item4}) => {
  return (
      <div className="link-container">
          <div className="link-header">{title}</div>
              <div className="link-list">
                  <a className="link">{item1}</a>
                  <a className="link">{item2}</a>
                  <a className="link">{item3}</a>
                  <a className="link">{item4}</a>
            </div>
      </div>
  )
}

export default FooterList

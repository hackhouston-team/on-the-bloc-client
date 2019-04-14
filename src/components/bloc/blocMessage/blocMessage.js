import React from 'react'

export default ({name, content}) => {
  return (
    <div className="box box-is-75">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
                <strong>
                {name}
              </strong>{' '}
              <br />
              {content}
              <br />
              <br />
            </p>
            <div className="is-pulled-right">
              <a href={""} className="button is-link">
                Visit site
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
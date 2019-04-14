import React, { useState } from 'react'

export default ({
  isOpen,
  toggleModal,
  handleSubmit,
  bloc
}) => {

  const [text, setText] = useState('')

  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{`Add a ${bloc ? 'Bloc' : 'message'}`}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => toggleModal(false)}
          />
        </header>
        <section className="modal-card-body">
          {bloc ? (
            <input
              className="input"
              type="text"
              placeholder={'Enter Bloc text'}
              value={text}
              onChange={e => setText(e.target.value)}
            />
          ) : (
            <textarea
              className="textarea"
              placeholder="Enter a message"
              rows="10"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          )}
        </section>
        <footer className="modal-card-foot">
          <button
            className="button is-success"
            onClick={() => {
              alert(`New ${bloc ? 'Bloc' : 'message'} ${text} has been added`)
              handleSubmit(text)
              toggleModal(false)
              setText('')
            }}
          >
            Add
          </button>
          <button className="button" onClick={() => setText('')}>
            Clear
          </button>
        </footer>
      </div>
    </div>
  )
}

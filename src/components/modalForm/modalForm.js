import React, { useState } from 'react'

export default ({
  isOpen,
  toggleModal,
  handleSubmit,
  bloc
}) => {

  const [text, setText] = useState('')

  return (
    <div class={`modal ${isOpen ? 'is-active' : ''}`}>
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{`Add a ${bloc ? 'Bloc' : 'message'}`}</p>
          <button
            class="delete"
            aria-label="close"
            onClick={() => toggleModal(false)}
          />
        </header>
        <section class="modal-card-body">
          {bloc ? (
            <input
              class="input"
              type="text"
              placeholder={'Enter Bloc text'}
              value={text}
              onChange={e => setText(e.target.value)}
            />
          ) : (
            <textarea
              class="textarea"
              placeholder="Enter a message"
              rows="10"
              value={text}
              onChange={e => setText(e.target.value)}
            />
          )}
        </section>
        <footer class="modal-card-foot">
          <button
            class="button is-success"
            onClick={() => {
              alert(`New ${bloc ? 'Bloc' : 'message'} ${text} has been added`)
              handleSubmit(text)
              toggleModal(false)
              setText('')
            }}
          >
            Add
          </button>
          <button class="button" onClick={() => setText('')}>
            Clear
          </button>
        </footer>
      </div>
    </div>
  )
}

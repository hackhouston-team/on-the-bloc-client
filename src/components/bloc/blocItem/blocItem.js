import React, { useState } from 'react';

import Message from '../blocMessage/blocMessage';
import MessageModal from '../../modalForm/modalForm';

export default ({
  blocName,
  messages,
  addMessage,
  match
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  function handleSubmit(text) {
    addMessage({
      blocId: match.params.id,
      content: text
    })
  }

  if (!blocName) {
    blocName = 'Personal'
  }

  if (!messages) {
    messages = [
      {
        id: 1,
        name: 'name1',
        content: 'content1'
      },
      {
        id: 2,
        name: 'name2',
        content: 'content2'
      },
      {
        id: 3,
        name: 'name3',
        content: 'content3'
      },
      {
        id: 4,
        name: 'name4',
        content: 'content4'
      }
    ]
  }

  return (
    <>
      <MessageModal
        isOpen={modalOpen}
        toggleModal={setModalOpen}
        handleSubmit={handleSubmit}
      />
      <h1 className="title is-1">{blocName}</h1>
      <section className="section has-background-white-ter">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {messages.map(message => (
                <Message
                  key={message.id}
                  name={message.name}
                  content={message.content}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <button
        aria-label="add"
        onClick={() => setModalOpen(true)}
        style={{
          position: 'sticky',
          left: '40px',
          bottom: '40px'
        }}
      >
        <span class="icon is-big">
          <i class="fas fa-plus"></i>
        </span>
      </button>
    </>
  )
}
import React, { useState, useEffect } from 'react';

import Message from '../blocMessage/blocMessage';
import MessageModal from '../../modalForm/modalForm';

export default ({
  blocName,
  messages,
  addMessage,
  match,
  getBlocById
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bloc, setBloc] = useState(null)

  useEffect(() => {
    async function getBloc() {
      const bloc = await (getBlocById('5cb2d9b6cd408900044ac686'));
      setBloc(bloc);
    }
    getBloc();
  }, [])

  function handleSubmit(text) {
    addMessage({
      blocId: match.params.id,
      content: text
    })
  }

  if (!bloc) {
    return <div>No Bloc</div>
  }
  console.log(bloc)

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
      <h1 className="title is-1">{bloc.name}</h1>
      <section className="section has-background-white-ter">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              {bloc.messages.map(message => (
                <Message
                  key={message.id}
                  name={message.creatorId}
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
        <span className="icon is-big">
          <i className="fas fa-plus"></i>
        </span>
      </button>
    </>
  )
}
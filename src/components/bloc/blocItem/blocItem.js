import React, { useState, useEffect } from 'react';

import Message from '../blocMessage/blocMessage';
import MessageModal from '../../modalForm/modalForm';

export default ({
  addMessage,
  match,
  getBlocById
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bloc, setBloc] = useState(null)

  useEffect(() => {
    async function getBloc() {
      const bloc = await (getBlocById(match.params.id));
      setBloc(bloc);
    }
    getBloc();
  }, [])

  async function handleSubmit(text) {
    const newMessage = await addMessage(
      bloc.creatorId,
      bloc.id,
      text
    )
    setBloc({
      ...bloc,
      messages: [
        ...bloc.messages,
        newMessage
      ]
    })
  }

  if (!bloc) {
    return <div>No Bloc</div>
  }

  // if (!bloc.messages) {
  //   return <div>No Messages</div>
  // }

  return (
    <>
      <MessageModal
        isOpen={modalOpen}
        toggleModal={setModalOpen}
        handleSubmit={handleSubmit}
      />
      {
        bloc.messages && <>
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
        </>
      }
      <button
        className="floating-btn"
        aria-label="add"
        onClick={() => setModalOpen(true)}

      >
        <span className="icon is-big">
          <i className="fas fa-plus"></i>
        </span>
      </button>
    </>
  )
}
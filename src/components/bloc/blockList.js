import React, { useState, useEffect } from 'react';

import BlocModal from '../modalForm/modalForm';

export default ({ addBloc, getBlocs, history }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [blocs, setBlocs] = useState([]);

  useEffect(
    () => {
      async function userBlocs() {
        const user = await (getBlocs('elyalamillo'));
        
        if (user) {
          setBlocs(user.data.blocSummaries)
        }
      }
      userBlocs();
    }
    , [])

  async function submitBloc(text) {
    const newBloc = await addBloc('elyalamillo', text);

    if (newBloc) {
      setBlocs([...blocs, newBloc])
    }
  }

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {
              blocs.map(bloc =>
                <div
                  key={bloc.id}
                  onClick={() => history.push(`/bloc/${bloc.id}`)}
                  className="box box-is-70">
                  <p className="title is-4 is-spaced">{bloc.name}</p>
                  <p className="is-spaced">{bloc.creator}</p>
                  <p className="title is-5 is-spaced">{bloc.messageCount}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <BlocModal
        isOpen={modalOpen}
        toggleModal={setModalOpen}
        handleSubmit={submitBloc}
        bloc
      />
      <button
        aria-label="add"
        onClick={() => setModalOpen(true)}
        style={{
          position: 'absolute',
          right: '40px',
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
import React, { useState } from 'react';

import BlocModal from '../modalForm/modalForm';

export default ({ blocs, addBloc, history }) => {
  const [modalOpen, setModalOpen] = useState(false);

  if (!blocs) {
    blocs = [
      {id: 1, name: 'Work'},
      {id: 2, name: 'School'},
      {id: 3, name: 'Personal'},
    ]
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
                </div>
              )
            }
          </div>
        </div>
      </div>
      <BlocModal
        isOpen={modalOpen}
        toggleModal={setModalOpen}
        handleSubmit={addBloc}
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
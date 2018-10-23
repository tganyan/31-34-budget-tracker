import React from 'react';
import uuid from 'uuid/v4';
import NoteCreateForm from '../note-create-form/note-create-form';
import NoteList from '../note-list/note-list';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.state.notes = [];
  }

  handleAddNote = (note) => {
    note.id = uuid();
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
      }
    });
  }

  handleRemoveNote = (noteToRemove) => {
    this.setState((previousState) => ({
      notes: previousState.notes.filter(currentNote => currentNote.id !== noteToRemove.id),
    }));
  }

  handleUpdateNote = (noteToUpdate) => {
    return this.setState((previousState) => {
      return { notes: previousState.notes.map((currentNote) => {
        if (currentNote.id === noteToUpdate.id) {
          currentNote = noteToUpdate;
        }
        return currentNote;
      }),
    }
    });
  }

  render() {
    return (
        <section>
          <h2>Notes Dashboard</h2>
          <p>Add a new note</p>
          <NoteCreateForm
            handleComplete = {this.handleAddNote}
          />
          <NoteList
            notes = {this.state.notes}
            handleRemoveNote = {this.handleRemoveNote}
            handleComplete = {this.handleUpdateNote}
          />
        </section>
    );
  }
}

export default Dashboard;

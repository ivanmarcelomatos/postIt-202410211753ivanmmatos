import React, { useState } from 'react';

import api from './services/api';

import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

import Notes from './Components/Notes';


function App() {
  const [ title, setTitles ] = useState('');
  const [ notes, setNotes ] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false,
    });

    setTitles('');
    setNotes('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Notebook</strong>
        <form onSubmit={ handleSubmit }>
          <div className="input-block">
            <label htmlFor="title">note title</label>
            <input
              required 
              value={ title }
              onChange={ e => setTitles(e.target.value)  }
            />
          </div>
          <div className="input-block">
            <label htmlFor="note">notes</label>
            <textarea
              required 
              value={ notes }
              onChange={ e => setNotes(e.target.value) }
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </aside>
      <main>
        <ul>
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
        </ul>
      </main>
    </div>
  )
}

export default App;

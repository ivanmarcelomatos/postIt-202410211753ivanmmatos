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

  return (
    <div id="app">
      <aside>
        <strong>Notebook</strong>
        <form>
          <div className="input-block">
            <label htmlFor="title">note title</label>
            <input />
          </div>
          <div className="input-block">
            <label htmlFor="note">notes</label>
            <textarea></textarea>
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

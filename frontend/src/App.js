import React from 'react';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';

import Notes from './Components/Notes';


function App() {

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
        </ul>
      </main>
    </div>
  )
}

export default App;

import React from 'react';
import './global.css';
import './sidebar.css';


function App() {

  return (
    <div id="app">
      <aside>
        <strong>Notebook</strong>
        <form>
          <div className="input-block">
            <label htmlfor="title">note title</label>
            <input />
          </div>
          <div className="input-block">
            <label htmlfor="note">notes</label>
            <textarea></textarea>
          </div>
          <button type="submit">Save</button>
        </form>
      </aside>
      <main></main>
    </div>
  )
}

export default App;

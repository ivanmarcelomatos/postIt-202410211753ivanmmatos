import React from 'react';
import './global.css';
import './app.css';
import './sidebar.css';
import './main.css';


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
      <main>
        <ul>
          <li className="notepad-infos">
            <div>
              <strong>Fazer Compras</strong>
              <div>
                x
              </div>
            </div>
            <textarea>lorem20 asdf asdf 2 asdqweur asd;fljasdf qw8e</textarea>
            <span>!</span>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default App;

import React, { useState } from 'react';
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

import './styles.css';
import './styles-priority.css';

import api from '../../services/api';


function Notes({data}) {
    const [ changedNote, setChangedNote ] = useState('');

    function handleEdit(e, priority) {
      e.style.cursor = 'text';
      e.style.borderRadius = '5px';

      if(priority) {
        e.style.boxShadow = '0 0 5px white';
      } else {
        e.style.boxShadow = '0 0 5px gray';
      };
    }

    async function handleSave(e, notes) {

      if(changedNote && changedNote !== notes) {
        await api.post(`/contents/${data._id}`, {
          notes: changedNote,
        });
      }

    }

    return(
        <>
            <li className={data.priority ? "notepad-infos-priority": "notepad-infos"}>
            <div>
              <strong>{ data.title }</strong>
              <div>
                <AiTwotoneDelete size="20" />
              </div>
            </div>
            <textarea 
              defaultValue={ data.notes }
              onClick={e => handleEdit(e.target, data.priority)}
              onChange={e => setChangedNote(e.target.value)}
              onBlur={e => handleSave(e.target, data.notes)}
            />
            <span>
              <AiOutlineExclamationCircle size="20" />
            </span>
          </li>  
        </>
    )
}

export default Notes;
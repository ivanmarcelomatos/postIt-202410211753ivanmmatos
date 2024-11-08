import React from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'; 
import FormControlLabel from '@mui/material/FormControlLabel'; 
import FormControl from '@mui/material/FormControl'; 
import FormLabel from '@mui/material/FormLabel';

import './styles.css';

export default function TaskPriorityRadioButtons({ selectedValue, handleChange }) { 
     
    return ( 
            <FormControl component="fieldset"> 
                <FormLabel component="legend">Task Filter</FormLabel> 
                <RadioGroup 
                    aria-label="task-priority" 
                    name="taskPriority" 
                    onChange={handleChange} 
                > 
                    <div className="radioOptions">
                        <FormControlLabel 
                            value="all"
                            checked={selectedValue === 'all'}
                            onChange={e => handleChange(e.target)} 
                            control={<Radio sx={{ color: '#FFD3CA', '&.Mui-checked': { color: '#FB8F7A' } }} />} label="All" 
                        />
                        <FormControlLabel 
                            value="true" 
                            checked={selectedValue === 'true'}
                            onChange={e => handleChange(e.target)}
                            control={<Radio sx={{ color: '#FFD3CA', '&.Mui-checked': { color: '#FB8F7A' } }} />} label="Priority" 
                        />
                        <FormControlLabel 
                            value="false" 
                            checked={selectedValue === 'false'}
                            onChange={e => handleChange(e.target)}
                            control={<Radio sx={{ color: '#FFD3CA', '&.Mui-checked': { color: '#FB8F7A' } }} />} label="Normal" 
                        />  
                    </div>
                </RadioGroup> 
            </FormControl> 
    )
}
import React from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup'; 
import FormControlLabel from '@mui/material/FormControlLabel'; 
import FormControl from '@mui/material/FormControl'; 
import FormLabel from '@mui/material/FormLabel';

import './styles.css';

export default function TaskPriorityRadioButtons() { 
    const [value, setValue] = React.useState('normal'); 
    
    const handleChange = (event) => { 
        setValue(event.target.value); 
    }; 
    
    return ( 
            <FormControl component="fieldset"> 
                <FormLabel component="legend">Task Filter</FormLabel> 
                <RadioGroup 
                    aria-label="task-priority" 
                    name="taskPriority" 
                    value={value} 
                    onChange={handleChange} 
                > 
                    <div className="radioOptions">
                        <FormControlLabel value="normal" control={<Radio sx={{ color: '#FFD3CA', '&.Mui-checked': { color: '#FB8F7A' } }} />} label="Normal" />
                        <FormControlLabel value="priority" control={<Radio sx={{ color: '#FFD3CA', '&.Mui-checked': { color: '#FB8F7A' } }} />} label="Priority" /> 
                        <FormControlLabel value="all" control={<Radio sx={{ color: '#FFD3CA', '&.Mui-checked': { color: '#FB8F7A' } }} />} label="All" /> 
                    </div>
                </RadioGroup> 
            </FormControl> 
    )
}
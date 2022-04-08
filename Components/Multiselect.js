import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Multiselect({age,setAge,formdata,setformdata}) {
//   const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setAge(event.target.value);
    if(value==999){
        setformdata({ ...formdata, amount: value,planname:"1 month",days:30});
    }
    else if(value==5499){
        setformdata({ ...formdata, amount: value,planname:"6 month",days:180});
    }
    else if(value==9999){
        setformdata({ ...formdata, amount: value,planname:"1 Year",days:365});
    }

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button> */}
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Plans</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Plans"
          onChange={handleChange}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem  value={999}>1 Month</MenuItem>
          <MenuItem  value={5499}>6 Month</MenuItem>
          <MenuItem  value={9999}>1 Year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

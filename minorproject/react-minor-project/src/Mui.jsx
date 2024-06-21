import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function Mui(){
    let handleClick=()=>{
        console.log("Button Clicked")
    }
    return(
        <>
            <h1>MUI</h1><br />
            <Button variant="contained" onClick={handleClick}>Click Me</Button><br />
            <Button variant="outlined" onClick={handleClick} disabled>Click Me</Button><br />
            <Button variant="contained" onClick={handleClick} color="success" startIcon={<DeleteIcon />}></Button><br />
            <IconButton aria-label="delete" onClick={handleClick}><DeleteIcon /></IconButton>
        </>
    )
}
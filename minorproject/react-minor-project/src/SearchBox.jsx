import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';


export default function SearchBox(){
    
    return(
        <div>
            <h1>Search for the weather!</h1>
            <form>
                <TextField id="city" label="City Name" variant="outlined" required style={{width:"25rem"}}/><br /><br />
                <Button type="submit" variant="outlined" startIcon={<SearchRoundedIcon />}>Search</Button>
            </form>
        </div>
    )
}
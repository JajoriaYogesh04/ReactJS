import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';


export default function InfoBox({info}){

    let HOT_URL="https://plus.unsplash.com/premium_photo-1711662177249-138d96f8c4d6?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1603321544554-f416a9a11fcf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1548777123-e216912df7d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    // let info={
    //     city: "Delhi",
    //     description: "haze",
    //     feels_like: 37.74,
    //     humidity: 55,
    //     temp: 32.05,
    //     temp_max: 32.05,
    //     temp_min: 32.05,
    // }
    return(
        <div>
            <div style={{ display:"flex", justifyContent:"center", textAlign:"center"}}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={info.humidity > 60 ? RAIN_URL : info.temp < 15 ? COLD_URL : HOT_URL}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component={"span"}>
                                <p><b>{info.city}&nbsp;{info.humidity > 80 ? <ThunderstormTwoToneIcon/> : info.temp < 15 ? <AcUnitTwoToneIcon/> : <WbSunnyTwoToneIcon/>}</b></p>
                                
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                                <p>Temperature: <b>{info.temp}&deg;C</b></p>
                                <p>Minimum Temperature: <b>{info.temp_min}&deg;C</b></p>
                                <p>Maximum Temperature: <b>{info.temp_max}&deg;C</b></p>
                                <p>Humidity: <b>{info.humidity}</b></p>
                                <p>Weather can be described as <b><i>{info.description}</i></b> & feels like <b>{info.feels_like}&deg;C</b></p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}
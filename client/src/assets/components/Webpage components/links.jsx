import {BsFillFileMusicFill} from "react-icons/md"
import {AiFillMessage, AiFillVideoCamera, AiFillProfile} from 'react-icons/ai'

const links= [
    {id:1, text:'Posts',path:'Post', icon: <AiFillMessage/>},
    {id:2, text:'Music',path:'SpotifyDashboard', icon: <BsFillFileMusicFill/>},
    {id:3, text:'Youtube',path:'', icon: <AiFillVideoCamera/>},
    {id:4, text:'Profile',path:'Profile', icon: <AiFillProfile/>},
]

export default links
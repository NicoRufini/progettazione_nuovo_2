import './Navbar.css'
import Link from './Link'

const x = 3;
const img = "vite";
const imageStyle = {
    height : x >= 3 ? "300px" : "1000000000px",
    borderRadius : "90px"
}

function Navbar() {
    return (
        <>
        <div id = 'box' className ='rotated rounded'>Ciao0o</div>
        <img style = {imageStyle} src = {`/${img}.svg`} alt = "roba"/>
        <ul>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
        </ul>
        </>
    )
}

export default Navbar
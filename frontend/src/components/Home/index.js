import './index.css'
import {Link} from 'react-router-dom'
function Home() {
    return(
        <div>
            <h1>Home</h1>
            <button type='button'><Link to='/signup'>Logout</Link></button>
        </div>
    )
}

export default Home
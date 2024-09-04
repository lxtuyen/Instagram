import { Link } from "react-router-dom";
import logo from '../assets/logo.webp';

const Logo = () => {
    return ( 
        <Link to='/' className='flex justify-center gap-4 '>
      <img src={logo} alt='logo' className='object-cover w-16 h-16' />
    </Link>
     );
}
 
export default Logo;
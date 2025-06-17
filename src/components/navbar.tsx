// import {FaHome, FaBox, FaBlog, FaUser} from 'react-icons/fa'

// const NAVBAR_ITEMS = [

//     {name: 'Home', icon:<FaHome/>},
//     {name: 'Work', icon:<FaBox/>},
//     {name: 'Blog', icon:<FaBlog/>},
//     {name: 'About us', icon:<FaUser/>}
// ];

// export default function Navbar() {
//     return ( 
//     <nav className='navbar'>
//         {NAVBAR_ITEMS.map((item) => (
//                 <div className='navbar-Item'>{item.icon}<div/>

//         ))}
//     </nav>

//     );
// }

import { FaHome, FaBox, FaBlog, FaUser } from 'react-icons/fa';

const NAVBAR_ITEMS = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Work', icon: <FaBox /> },
    { name: 'Blog', icon: <FaBlog /> },
    { name: 'About us', icon: <FaUser /> }
];

export default function Navbar() {
    return (
        <nav className='navbar'>
            
            {NAVBAR_ITEMS.map((item) => (
                
                <div className='navbar-item'>
                    {item.icon}
                    {/* You likely want the name here too! */}
                    {/* <span>{item.name}</span> */}
                    
                </div>
            ))}
        </nav>
    );
}
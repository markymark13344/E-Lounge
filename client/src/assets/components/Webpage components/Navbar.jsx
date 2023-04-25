import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';
import { useAppContext } from '../../../Globals/appContext';

import {RxDropdownMenu} from 'react-icons/rx'
import logo from '../../images/E-lounge/android-chrome-192x192.png'

function Nav() {
  const {user, removeUserfromLocal} = useAppContext()
  return (
    <Wrapper>
      <Navbar expand="lg" variant="dark" bg="dark">
        <div className='navbar-nav me-auto'>
            <Button variant="dark" size='lg'  className='dropdown'><RxDropdownMenu/></Button>{''}
        </div>
        <div className='navbar-nav mx-auto'>
            <a href="">
                <Image className="brandLogo" src={logo} alt="logo"/>
            </a>
            
        </div>
        <div className='navbar-nav ms-auto'>
            <Button variant='dark' disabled={!user} className='logout' onSubmit={removeUserfromLocal()}>{user ? `Hello ${user.name}`: ''}</Button>
        </div>
           
        
        
      </Navbar>
    </Wrapper>
  );
}

const Wrapper = styled.main`
   .dropdown{
    font-size: calc(16px + 4vh);
   }
   .brandLogo{
    height: calc(16px + 5vh);
   }
   .brandLogo:hover {
    background-color: white;
    background-size: contain;
   }
   .logout{
     font-size: calc(12px + 1vh)
   }
`
{/* 
 @media (min-width:768px) {
        .dropdown{
            display:none;
        }
    }

*/}


export default Nav;


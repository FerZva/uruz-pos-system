import React from 'react';
import Image from 'next/image';
import URUZLogo from '../assets/URUZLogo.png'
import MenuLinkButton from './MenuLinkButton'

const Menu: React.FC = () => {
  return (
    <nav className='container_workplace-container_menu-container'>
      <div className='container_workplace-container_menu-container_software-logo-container'>
          <div className='container_workplace-container_menu-container_software-logo-container_image-container'>
            <Image 
              src={URUZLogo} 
              alt='Software logo image'
              className='container_workplace-container_menu-container_software-logo-container_image-container_logo'
            />
          </div>

          <div className='container_workplace-container_menu-container_software-logo-container_name-container'>
            <p className='container_workplace-container_menu-container_software-logo-container_name-container_name'>URUZ POS System</p>
          </div>
      </div>
        
      <div className='container_workplace-container_menu-container_nav-menu'>
        <MenuLinkButton linkName='Analytics' linkTo='/Analytics' />
        <MenuLinkButton linkName='Cashier' linkTo='./Cashier' />
        <MenuLinkButton linkName='Inventory' linkTo='./Inventory' />
        <MenuLinkButton linkName='Sales' linkTo='./Sales' />
        <MenuLinkButton linkName='Reports' linkTo='./Reports' />
        <MenuLinkButton linkName='Help & support' linkTo='./HelpAndSupport' />
      </div>
    </nav>
  )
}

export default Menu
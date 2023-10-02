import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Box, Spacer,
} from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div>
      <Flex>
        <Link to={"/"}>
          <Box p='4' bg='#d1d1d1'>
            <h3>MusicLegend</h3>
          </Box>
        </Link>
        
        <Spacer bg='#d1d1d1' />
        <Box p='4' bg='#d1d1d1'>
        <Menu>
            <MenuButton as={Box}>
              Category
            </MenuButton>
            <MenuList >
              <MenuItem as={NavLink} to="/category/music" activeClassName="active">
                Music
              </MenuItem>
      
              <MenuItem as={NavLink} to={"/category/merch"} activeClassName="active">
                Merch
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer bg='#d1d1d1' />
        <Box p='4' bg='#d1d1d1'>
        <CartWidget/>
        </Box>
      </Flex>
    </div>
    </>
  )
}

export default NavBar
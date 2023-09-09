import React from 'react'
import CartWidget from './CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex, Box, Spacer,
} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <>
    <div>
      <Flex>
        <Box p='4' bg='#d1d1d1'>
          <h3>MusicLegend</h3>
        </Box>
        <Spacer bg='#d1d1d1' />
        <Box p='4' bg='#d1d1d1'>
        <Menu>
            <MenuButton>
            Discos
            </MenuButton>
            <MenuList >
              <MenuItem color='#96305A'>Lana Del Rey</MenuItem>
              <MenuItem color='#96305A'>Arctic Monkeys</MenuItem>
              <MenuItem color='#96305A'>Radiohead</MenuItem>
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
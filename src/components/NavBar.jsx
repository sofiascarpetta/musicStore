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
        <Box p='4' bg=''>
          <h3>Lana Del Rey</h3>
        </Box>
        <Spacer />
        <Box p='4' bg=''>
        <Menu>
            <MenuButton>
            Discos
            </MenuButton>
            <MenuList>
              <MenuItem>Born to Die</MenuItem>
              <MenuItem>Ultraviolence</MenuItem>
              <MenuItem>Honeymoon</MenuItem>
              <MenuItem>Lust for life</MenuItem>
              <MenuItem>Blue Banisters</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Spacer />
        <Box p='4'>
        <CartWidget/>
        </Box>
      </Flex>
    </div>
    </>
  )
}

export default NavBar
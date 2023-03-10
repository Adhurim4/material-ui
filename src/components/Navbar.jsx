import { AppBar, Toolbar,styled, Typography,Box, InputBase, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react' 
import PetsIcon from '@mui/icons-material/Pets';
import { Mail, Notifications } from '@mui/icons-material';
import { Badge , NotificationsIcon } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
});

const Search = styled("div")(({ theme }) =>({
    backgroundColor: 'white',
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const  Icons = styled(Box)(({theme}) =>({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <AppBar position="sticky">
        <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:'none', sm:"block"}}}>Navbar</Typography>
        <PetsIcon sx={{display:{xs:'block', sm:"none"}}}/>
        <Search><InputBase placeholder="search..." /></Search>
        <Icons>
        <Mail />
        <Notifications/>
        <Avatar 
        sx={{width:30, height:30}} 
        src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        onClick={(e) => setOpen(true)} 
        /> 
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
        <Avatar
         sx={{width:30, height:30}} 
         src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        />
        </UserBox>
        </StyledToolbar>    
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>

      </Menu>  
    </AppBar>
  )
}

export default Navbar
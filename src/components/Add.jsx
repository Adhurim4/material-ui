import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon } from "@mui/icons-material"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px",
  padding:"20px"
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
   <>
   <Tooltip
   onClick={(e)=> setOpen(true)} 
    title="Delete" 
    sx={{position:"fixed", bottom:"20px" ,left:{xs:"calc(45%)", md:30}}}>
  
   <Fab color="primary" aria-label="add">
    <AddIcon />
    </Fab>
    </Tooltip>

        <StyledModal
        open={open} 
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} 
        height={280} 
        bgcolor={"background.default"} color={"text.primary"}
        borderRadius={5}>
          <UserBox>
          <Avatar 
           src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600" 
           />
            <Typography fontWeight={500} variant="h6">
              John Doe
            </Typography>
          </UserBox>

          <TextField
          sx={{width:"100%"}}
          id="outlined-multiline-static"
          multiline
          rows={3}
          placeholder="Whats on your mind"
        />   
        <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary"/>
            <ImageIcon color="secondary"/>
            <VideoCameraBackIcon color="success"/>
            <PersonAddIcon color="error"/>
        </Stack>
        <ButtonGroup
          fullWidth
         variant="contained"
          aria-label="outlined primary button group">
          <Button>Post</Button>
          <Button
          sx={{width:"100px"}}><DateRangeIcon/></Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
   </>
  )
}

export default Add
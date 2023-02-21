import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import {
  PaymentsOutlined,
  SettingsOutlined,
  NotificationsNoneOutlined,
  BookmarkBorderOutlined,
  SubscriptionsOutlined,
  DynamicFeedOutlined,
  Search,
  ShoppingCart
} from '@mui/icons-material'
import {
  BadgeProps,
  Card,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Badge
} from '@mui/material'
import { useContext, useState } from 'react'

import { theme } from '../../global/theme/theme'
import CartContext from '../../context/cart/CartContext'

const iconsStyle = { fontSize: 40, color: theme.colors.white }

const data = [
  { name: 'My Library', icon: <DynamicFeedOutlined sx={iconsStyle} /> },
  { name: 'Notification', icon: <NotificationsNoneOutlined sx={iconsStyle} /> },
  { name: 'Subscription', icon: <SubscriptionsOutlined sx={iconsStyle} /> },
  { name: 'Wishlist', icon: <BookmarkBorderOutlined sx={iconsStyle} /> },
  { name: 'Payment ', icon: <PaymentsOutlined sx={iconsStyle} /> },
  { name: 'Setting', icon: <SettingsOutlined sx={iconsStyle} /> }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { cartSize } = useContext(CartContext)

  const getList = () => (
    <div
      style={{ width: 250, flex: 1, backgroundColor: 'hsla(0, 0%, 8%, 0.37)' }}
      onClick={() => setOpen(false)}
    >
      {data.map((item, index) => (
        <ListItem key={index} button>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} sx={iconsStyle} />
        </ListItem>
      ))}
    </div>
  )

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `1px solid ${theme.palette.background.default}`,
      padding: '0 4px'
    }
  }))

  return (
    <AppBar position="static" sx={{ bgcolor: '#1A1A1A' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: {
                  background: 'transparent'
                }
              }}
              anchor={'left'}
              open={open}
              onClose={() => setOpen(false)}
            >
              <Card
                sx={{
                  display: 'flex',
                  p: 1,
                  pt: 5,
                  flexDirection: 'row',
                  bgcolor: '#303538'
                }}
                variant="outlined"
              >
                <Avatar alt="avatar icon" src="" sx={{ alignSelf: 'center' }} />
                <Box sx={{ alignSelf: 'center', ml: 2 }}>
                  <Typography
                    color="text.secondary"
                    sx={{ fontSize: 20, color: theme.colors.white }}
                  >
                    User Name
                  </Typography>
                  <Typography component="div" sx={{ fontSize: 12, color: theme.colors.subText }}>
                    email@email.com
                  </Typography>
                </Box>
              </Card>
              {getList()}
            </Drawer>
            <div style={{ flexGrow: 1 }} />
            <IconButton aria-label="cart" color="inherit" size="large">
              <StyledBadge badgeContent={cartSize} color="primary">
                <ShoppingCart />
              </StyledBadge>
            </IconButton>
            <IconButton aria-label="search" color="inherit" size="large">
              <Search />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

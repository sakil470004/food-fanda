import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo2 from './logo2.png';
import './TopAppBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';





export default function ToAppBar() {

    const [loggedInUser, setLoggedInUser] = React.useContext(UserContext)

    let history = useHistory()
    const handleLoginButton = () => {
        const url = '/login'
        history.push(url);
    }
    const handleSignUpButton = () => {
        const url = '/signup'
        history.push(url);
    }
    const handleLogout = () => {
        setLoggedInUser({})
    }
    const handleLogoClick = () => {
        const url = '/'
        history.push(url);
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const handleCart = () => {
        history.push('/cart')
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    {/* <Badge badgeContent={4} color="error"> */}
                    <MailIcon />
                    {/* </Badge> */}
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    {/* <Badge badgeContent={17} color="error"> */}
                    <NotificationsIcon />
                    {/* </Badge> */}
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    


    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" style={{ background: '#FFFFFF', boxShadow: "none" }}>
                <Toolbar>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: 'none', sm: 'block' }
                        }}
                    >
                        <img onClick={handleLogoClick} className='topappbar-logo' src={logo2} alt="Logo" />
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit"> */}
                        {/* <Badge badgeContent={0} color="black"> */}
                        <ShoppingCartIcon onClick={handleCart} className='top-app-bar-ShoppingCartIcon' />
                        {/* </Badge> */}
                        {/* </IconButton> */}
                        {!loggedInUser.email &&
                            <div>
                                <button className='topAppBar-login-btn' onClick={handleLoginButton}>Login</button>
                                <button className='topAppBar-singup-btn' onClick={handleSignUpButton} >Sign up</button>
                            </div>}
                        {loggedInUser.email &&
                            <div>
                                <button className='topAppBar-email-btn'>{loggedInUser.email}</button>
                                <button
                                    onClick={handleLogout}
                                    className='topAppBar-singup-btn' >LogOUt</button>
                            </div>
                        }
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

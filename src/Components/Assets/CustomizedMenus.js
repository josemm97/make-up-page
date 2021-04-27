/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import RateReviewIcon from '@material-ui/icons/RateReview';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import styles from './CustomizedMenus.module.css';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();

  const handleRouter = (route) => {
    router.push(`${route}`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.container}>
      <IconButton aria-label="menu" onClick={handleClick} className={styles.icon__button}>
        <MenuIcon className={styles.menu__button} fontSize="large" />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={styles.logo__container} onClick={() => handleRouter('/')}>
          <img
            src="/img/logo.png"
            alt="Logo"
            className={styles.logo}
          />
        </div>
        <StyledMenuItem onClick={() => handleRouter('cursos')}>
          <ListItemIcon>
            <AssignmentIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Cursos" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleRouter('testimonios')}>
          <ListItemIcon>
            <RateReviewIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Testimonios" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleRouter('quienes-somos')}>
          <ListItemIcon>
            <GroupIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Quiénes somos" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleRouter('contacto')}>
          <ListItemIcon>
            <PermContactCalendarIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Contacto" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

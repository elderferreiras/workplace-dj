import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import MusicNote from '@material-ui/icons/MusicNote';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import PeopleIcon from '@material-ui/icons/People';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import MusicVideo from '@material-ui/icons/MusicVideo';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MusicVideo />
            </ListItemIcon>
            <ListItemText primary="Jam of the day" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Jammers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BusinessCenter />
            </ListItemIcon>
            <ListItemText primary="Workplaces" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <CardGiftcard />
            </ListItemIcon>
            <ListItemText primary="Wild Card" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Lates Jams</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <MusicNote />
            </ListItemIcon>
            <ListItemText primary="Katy Perry - Roar" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MusicNote />
            </ListItemIcon>
            <ListItemText primary="Lady Gaga - Poker Face" />
        </ListItem>
    </div>
);
import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { routingTypes } from "../../../App";
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import ResetPassword from "../ResetPassword/ResetPassword";
import NewPassword from '../NewPassword/NewPassword';
import HomeBackground from '../../../assets/images/home-bg.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${HomeBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Home = (props) => {
    const classes = useStyles();

    useEffect(() => {
        console.log('Home | Did Mount');
    }, []);

    let routing = null;

    switch(props.action) {
        case routingTypes.SIGN_IN:
            routing = <SignIn classes={classes}/>;
            break;
        case routingTypes.SIGN_UP:
            routing = <SignUp classes={classes}/>;
            break;
        case routingTypes.RESET_PASSWORD:
            routing = <ResetPassword classes={classes}/>;
            break;
        case routingTypes.NEW_PASSWORD:
            routing = <NewPassword classes={classes}/>;
            break;
        default:
            routing = <SignIn classes={classes}/>;
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    {routing}
                </div>
            </Grid>
        </Grid>
    );
};

export default Home;
import React, {Fragment} from 'react';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Copyright from "../Copyright/Copyright";

const resetPassword = (props) => {
    return (
        <Fragment>
            <Typography component="h1" variant="h5">
                Reset your password
            </Typography>
            <form className={props.classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={props.classes.submit}
                >
                    Send Code
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link to="/sign-in" variant="body2">
                            Back to Sign In
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </form>
        </Fragment>
    );
};

export default resetPassword;
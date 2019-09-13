import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const title = (props) => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.children}
        </Typography>
    );
};

title.propTypes = {
    children: PropTypes.node,
};

export default title;
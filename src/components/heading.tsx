import React from 'react';
import "../App.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';



interface IProps {
    user: string,
    logout: Function,
}

class Heading extends React.Component<IProps, {}> {

    render() {
        return (
            <Box>
                <AppBar position="static" className="Heading">
                    <Toolbar>
                        {this.props.user != "" && (
                            <React.Fragment>
                            <Typography variant="h6">
                                Hello, {this.props.user}
                            </Typography>
                            <Button onClick={() => { this.props.logout() }} style={{marginRight: "10%", color: "White"}}>
                                Click here to logout
                            </Button>
                            </React.Fragment>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>

        )
    }
}

export default Heading
import React from 'react';
import "../App.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';



interface IProps {
    user: string,
}

class Heading extends React.Component <IProps, {}> {

    render(){
        return(
                <Box>
                    <AppBar position="static"  className="Heading">
                        <Toolbar>
                            {this.props.user != "" && 
                            <Typography>
                                Hello, {this.props.user}
                            </Typography>
                            }
                        </Toolbar>
                    </AppBar>
                </Box>

        )
    }
}

export default Heading
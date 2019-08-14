import React from 'react';
import "../App.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



interface IProps {
    user: string,
}

class Heading extends React.Component <IProps, {}> {

    render(){
        return(
            <div>
                <div>
                    <AppBar position="static"  className="Heading">
                        <Toolbar>
                            {this.props.user != "" && 
                            <Typography>
                                Hello, {this.props.user}
                            </Typography>
                            }
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        )
    }
}

export default Heading
import React, {Component} from 'react';
import {Page, Toolbar,Button, List,ListItem,ListHeader,
    Icon, ToolbarButton, Input, Modal, notification,  Carousel, CarouselItem} from 'react-onsenui';
import store from '../redux/store';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Preview extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){}
    render(){
        return <Page
            renderToolbar={() =>
                <Toolbar>
                    <div className='left' style={{backgroundColor:'white'}}>
                        <ToolbarButton onClick={()=>{

                        }}>
                            <Icon icon = "ion-chevron-left" style={{color:'#2c3e50'}} />
                        </ToolbarButton>
                    </div>
                    <div className='center' style={{}}>
                        Welcome
                    </div>
                    <div className='right' style={{backgroundColor:'white'}}></div>
                </Toolbar>
            }
        >
            <section style={{height:'100vh', overflow:'scroll', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <p>Welcome to Formelo Applet Bootstrap</p>
                <p>Happy Hacking!</p>
            </section>
        </Page>
    }
    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
}

Preview.childContextTypes = {
    muiTheme: getMuiTheme(baseTheme)
};
export default Preview;
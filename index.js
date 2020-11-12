import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader';


class App extends React.Component{
    state = {lat :null, errorMessage: '' };

    componentDidMount(){
            window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage :err.message })
        );
    }
    
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div>
                    <br />
                    <h1> Error: {this.state.errorMessage}</h1>
                </div>
            );        
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat} />
        }
        return <Loader message="Please accept the Location Request" />;
 
    }

    render(){
        return <div className="boarder red"> {this.renderContent()}</div>;
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

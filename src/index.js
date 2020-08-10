import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";

class App extends Component {
    state = {};
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    id:1, 
                    time: "10:00", 
                    title: "Breakfast with someone", 
                    location:"Caloocan", 
                    description:"asdfasdf"
                },
                {
                    id:2, 
                    time: "10:30", 
                    title: "Daily Standup Meeting (recurring)", 
                    location:"Caloocan", 
                    description:""
                },
                {
                    id:3, 
                    time: "11:00", 
                    title: "Call with HRs", 
                    location:"Pasig City", 
                    description:"asdfasdf"
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="9">
                        {this.state.events.map(event => (
                            <Event
                                key={event.id}
                                id={event.id} 
                                time={event.time} 
                                title={event.title}
                                location={event.location}
                                description={event.description}/>
                        ))}
                    </MDBCol>
                    <MDBCol md="3">Right Column</MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
        )
    }
    // without using map()
    myLoopFunction = () => {
        var myArray = [];
        var i;
        for (i = 0; i < this.state.events.length; i++) {
            myArray[i] = (
                <Event 
                    time={this.state.events[i].time}
                    title={this.state.events[i].title}
                />
            );
        }
        return myArray;
    }
}

class Event extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>
                    {this.props.time} - {this.props.title}
                </h3>
                <h6>
                    Location: {this.props.location}
                </h6>
                <p>Desc: {this.props.description}</p>
            </React.Fragment>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
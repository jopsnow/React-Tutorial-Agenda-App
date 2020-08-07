import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";

class App extends Component {
    state = {};
    style = {
        color: "red",
        fontSize: 10,
        border: "1px solid green"
    };
    spacing = "3";
    render() {
        return (
            <React.Fragment>
            <MDBContainer>
                <MDBRow>
                    
                    <MDBCol md="9">Left Column</MDBCol>
                    <MDBCol md="3">Right Column</MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
        )
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
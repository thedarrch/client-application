import React, { Component } from 'react';
import { MDBInputGroup, MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import SubmitButton from './SubmitButton.js';
import EventCard from './EventCard.js';
import axios from 'axios';
import './styles/LandingPage.css'

class LandingPage extends Component {
    constructor(){
        super();
        this.state = {
            email: ""
        }
    }

    render() {
        return(
            <MDBContainer id="landingpage">
                <MDBRow id="landingpage-section-1">
                    <MDBCol size="6" id="landingpage-header-col">
                        <div id="landingpage-header">
                            <h1>Welcome to Rootly.</h1>
                            <h3>Organize quick and casual events within the Waterloo Community</h3>
                            <h2>What does that look like?</h2>
                        </div>
                    </MDBCol>
                    <MDBCol size="6">
                        <form id="email-signup">
                            <h3>Your UW Email</h3>
                            <MDBInputGroup
                                material
                                containerClassName="mb-3 mt-0"
                                append="@uwaterloo.ca"
                                value={this.state.email}
                                onChange={(e) => this.setState({email: e.target.value})}
                            />
                            <SubmitButton id="email-signup-btn" email={this.state.email} type={"landingPage"} text="GO!"></SubmitButton>
                        </form>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="5">
                        <h2 id="section-2-h2">In a new city? Explore it with fellow students!</h2>
                    </MDBCol>
                    <MDBCol size="7">
                        <img src="section-2-image.jpg" id="section-2-img"></img>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12">
                        <EventCard title="Rockclimbing at Phil's" description="No one has made this event yet...It could be you!" sample={true}/>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol size="12">
                        <EventCard title="Bubble Tea at Icon" description="No one has made this event yet...It could be you!" sample={true}/>
                    </MDBCol>
                </MDBRow>
        </MDBContainer>
        );
    }
}

export default LandingPage
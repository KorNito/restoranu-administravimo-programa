import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom'

// Components
import Header from '../../components/HeaderComponent/header';
import Section from '../../components/SectionComponent/section';
import Footer from '../../components/FooterComponent/footer'



export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Section/>
                <Footer/> 
            </div>
        )
    }
}

export default Dashboard

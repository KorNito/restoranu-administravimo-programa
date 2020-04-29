import React, { Component } from 'react';

// Components
import Header from '../../components/HeaderComponent/header';
import RestaurantList from '../../components/RestaurantListComponent/restaurantList'
import Graph from '../../components/GraphComponent/graph'
import Months from '../../components/MonthsComponent/months'
import Dishes from '../../components/DishesComponent/dishes'
import DiscountApplicator from '../../components/DiscountApplicatorComponent/discountApplicator'
import Footer from '../../components/FooterComponent/footer'

import './Dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <div class="DashboardClass">
                <Header class='HeaderClass' />
                <RestaurantList class='RestaurantListClass'/>
                <Graph class='GraphClass'/>
                <Months class='MonthsClass'/>
                <Dishes class='DishesClass'/>
                <DiscountApplicator class='DiscountApplicatorClass'/>
                <Footer class='FooterClass'/> 
            </div>
        )
    }
}

export default Dashboard

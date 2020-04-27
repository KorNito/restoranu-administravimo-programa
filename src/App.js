import React, { Component } from 'react';

// Pages
import LoginPage from './pages/LoginPage/LoginPage';

// Components
import Section from './components/SectionComponent/section';
import Footer from './components/FooterComponent/footer';
import Header from './components/HeaderComponent/header';

// Test components
import GetList from './components/GetList';
import PostList from './components/PostList';

// Main css
import './App.css';



class App extends Component {

  render() {
    return(
      <div className="App">
        <LoginPage/>
        {/*<Header/>
        <Section/>
        <Footer/>*/}
      </div>
    );
  }
}

export default App;

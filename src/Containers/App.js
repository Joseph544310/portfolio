import React, { Component } from 'react';
import './App.css';
import About from '../Components/About';
import Navigation from '../Components/Navigation';
import Cards from '../Components/Cards';
import infoEn from '../info.json';
import Contact from '../Components/Contact';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios'


class App extends Component {

    state = {
        language: "English",
        info: { ...infoEn }
    }

    componentDidMount() {
        axios.get('https://cv-web-e8b8e.firebaseio.com/info.json').then(response => {
            this.setState({ info: { ...response.data } })
        }).catch(err => console.log(err))
    }

    render() {
        
        //if (this.state.language === "English") {
        //    info = infoEn
        //}
        //else if (this.state.language === "French") {
        //    info = infoFr
        //}

        return (
            <BrowserRouter>
                <div className="App">
                    <Navigation setFrench={() => this.setState({ language: "French" })} setEnglish={() => this.setState({ language: "English" })}/>
                    <Route path="/" exact render={() => <About info={this.state.info} />} />
                    <Route path="/Education" exact render={() => <Cards list={this.state.info.education} />} />
                    <Route path="/Projects" exact render={() => <Cards list={this.state.info.projects} />} />
                    <Route path="/Experience" exact render={() => <Cards list={this.state.info.experience} />} />
                    <Route path="/Contact" exact render={() => <Contact />} />
                </div>
            </BrowserRouter>
            );
    }
}

export default App;
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdCall, MdCallMade } from "react-icons/md";
import Solution from './components/Solution';
import Optimization from './components/Optimization';
import Contact from './components/Contact';
import Motto from './components/Motto';
import Footer from './components/Footer';
import Form from './components/form';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Solution/>
        <Motto/>
        <Optimization/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;

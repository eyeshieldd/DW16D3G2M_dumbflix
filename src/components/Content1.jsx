import React, { Component } from 'react';
import '../App.css';
import judul2 from '../images/judul2.png'; // Tell webpack this JS file uses this image
// import { Container, Row, Col } from 'reactstrap';


class Content1 extends Component {
    render() {
        return (
            <div className="kotak1">
                <img src={judul2} alt="Logo" className="centered-img" />
                <p className="centered-des">Geralt of Rivia, a solitary monster hunter, struggles to find his place in
                a world where people often prove more wicked than beast</p>
                <span class="year">Tv Series</span>
                <span class="tipe">2019</span>
                <button className="watch"><span><b>WATCH NOW !</b></span></button>
            </div >
        )
    }
}

export default Content1;
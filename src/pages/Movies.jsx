import React, { Component } from 'react';
import Content from '../components/Content1';
import Header from '../components/Header';
import '../App.css';
import { Container, Row, Col } from 'reactstrap';


class Movies extends Component {
    render() {
        return (
            <div className="backgorundcont">
                <Header />
                <Content />
                <Container>
                    <p className="App-bold">Movies</p>
                    <Row xs="12">
                        {projects.map((p) =>
                            <Col xs="2">
                                <img key={p.id} src={p.src} alt="sada" className="imagecontent" />
                                <p className="App-font"><b>{p.name}</b></p>
                                <p className="App-fontxs">{p.tahun}</p>
                            </Col>)}

                    </Row>
                    <p className="App-bold">Tv Series</p>
                    <Row xs="12">
                        {films.map((p) =>
                            <Col xs="2">
                                <img key={p.id} src={p.src} alt="sada" className="imagecontent" />
                                <p className="App-font"><b>{p.name}</b></p>
                                <p className="App-fontxs">{p.tahun}</p>
                            </Col>)}

                    </Row>
                </Container>


            </div>
        )
    }
}
const projects = [
    {
        id: 1,
        tahun: 2020,
        name: "Initial D fifth Stage",
        src: "https://www.oploverz.in/wp-content/uploads/2019/11/Initial-D-Fifth-Stage.jpg",
    },
    {
        id: 2,
        tahun: 2019,
        name: "Accel World",
        src: "https://www.oploverz.in/wp-content/uploads/2015/11/Accel-World1-120x150.jpg",
    },
    {
        id: 3,
        tahun: 2019,
        name: "Arcana Famiglia",
        src: "https://www.oploverz.in/wp-content/uploads/2015/11/2348-120x150.jpg"
    },
    {
        id: 4,
        tahun: 2019,
        name: "Haikyuu",
        src: "https://www.oploverz.in/wp-content/uploads/2015/11/2409-120x150.jpg"
    },
    {
        id: 5,
        tahun: 2019,
        name: "Tower of God",
        src: "https://www.oploverz.in/wp-content/uploads/2020/04/Tower-of-God-120x150.jpg",
    },
    {
        id: 6,
        tahun: 2019,
        name: "Plunderer",
        src: "https://www.oploverz.in/wp-content/uploads/2020/01/Screenshot_1-120x150.jpg",
    }





];
const films = [
    {
        id: 1,
        tahun: 2019,
        name: "Infinite Dendogram",
        src: "https://www.oploverz.in/wp-content/uploads/2020/01/Screenshot_2-120x150.jpg",
    },
    {
        id: 2,
        tahun: 2019,
        name: "Kaguya-sama",
        src: "https://www.oploverz.in/wp-content/uploads/2020/04/Kaguya-sama-Love-is-War-Season-2-120x150.jpg",
    },
    {
        id: 3,
        tahun: 2019,
        name: "Digimon Adventure",
        src: "https://www.oploverz.in/wp-content/uploads/2020/04/Digimon-Adventure-Sub-Indo-120x150.jpg",
    },
    {
        id: 4,
        tahun: 2019,
        name: "Shokugeki no souma",
        src: "https://www.oploverz.in/wp-content/uploads/2020/04/Shokugeki-no-Souma-Season-5-120x150.jpg",
    },
    {
        id: 5,
        tahun: 2019,
        name: "Tamoyami",
        src: "https://i0.wp.com/samehadaku.vip/wp-content/uploads/2020/04/106156.jpg?quality=80&resize=205,282",
    },
    {
        id: 6,
        tahun: 2019,
        name: "Shadowverse",
        src: "https://i0.wp.com/samehadaku.vip/wp-content/uploads/2020/05/103429.jpg?quality=80&resize=205,282",
    }





];
export default Movies;
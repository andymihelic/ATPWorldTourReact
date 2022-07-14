import {Carousel, Container, Button} from 'react-bootstrap';
import React from 'react';
import "./home.css";
import {Link} from "react-router-dom";

function Home() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/src/components/images/carousel1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
            <Container className="containerCarousel">                       
                    <h3>Djokovic is the Wimbledon 2022 Champion</h3>
                    <p>The Djoker defeated Nick Kyrgios in 4 sets in the finals and achieved his 6th Wimbledon title</p>
                    <Link to="/news" ><Button variant="outline-dark">Read more</Button></Link>
            </Container>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/src/components/images/carousel2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
            <Container className="containerCarousel">
                <h3>Rafa Nadal, out for injury</h3>
                <p>Nadal withdraws from Wimbledon ahead due to an abdominal injury in quarter-final against Fritz</p>
                <Link to="/news" ><Button variant="outline-dark">Read more</Button></Link>
            </Container>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/components/images/carousel3.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
            <Container className="containerCarousel">
                <h3>Roger Federer drops out of ATP Rankings for first time in 25 years</h3>
                <p>The swiss player had appeared in the singles rankings every week since he made his debut at age 16 in September 1997</p>
                <Link to="/news" ><Button variant="outline-dark">Read more</Button></Link>
            </Container>          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;
import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Learn More KNowledge</h3>
                        <p>Imporve Your Self </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1569141267000-6491d6822a5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWUlMjBsaWJyYXJ5fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Keeo Silence In Library</h3>
                        <p>Keep Cool And Came.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1419640303358-44f0d27f48e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZSUyMGxpYnJhcnl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=400&q=60"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Be alone With Your Self</h3>
                        <p>Alone With Your Soul.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider

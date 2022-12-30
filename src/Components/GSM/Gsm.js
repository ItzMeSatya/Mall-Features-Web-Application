import React from 'react'
import './gsm.css'
import Navbar from '../Navbar'

function Gsm() {
    return (
        <div>
            <Navbar />
            <div class="main">
                <ul class="cards">
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://images.creativemarket.com/0.1.0/ps/7414066/1820/1214/m1/fpnw/wm1/logo-design-for-movie-production-company-01-.jpg?1575502358&s=c37b3e6a8863b415070b669f6c8a457c" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Movies</h2>
                                <p class="card_text">Don't miss out on the Best Movies at the Box Office!! . We'll be screening a popular films across the world at our theater. Bring your friends and family and we'll see you there!</p>
                                <a href="/movies"><button class="btn card_btn">Watch Now</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://media.istockphoto.com/id/500466008/photo/beef-steak.jpg?s=612x612&w=0&k=20&c=tw-5wKCwwZ6lHRCbJToMIdiBt1VTNrBEcnifZQS6v_o=" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Food</h2>
                                <p class="card_text">Come a variety of delicious food at our food court with your Friends and Family. We'll have special offers for our customers and a variety of dishes to choose from. See you there!</p>
                                <a href="/food"><button class="btn card_btn">Bon Appetite</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Parking</h2>
                                <p class="card_text">NEWLY RENOVATED! View and Book your preferred Parking slots from the Available Lots. This Holiday season brings discounted prices for you to enjoy time with your family and friends.</p>
                                <a href="/parking"><button class="btn card_btn">Locate</button></a>
                            </div>
                        </div>
                    </li>
                    <li class="cards_item">
                        <div class="card">
                            <div class="card_image"><img src="https://cdn.writermag.com/2019/03/question-marks.jpg" /></div>
                            <div class="card_content">
                                <h2 class="card_title">Interactive Map</h2>
                                <p class="card_text">Map which can Identify and Showcase each individual establishment in the Mall</p>
                                <a href="/parking"><button class="btn card_btn">Coming Soon...</button></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Gsm
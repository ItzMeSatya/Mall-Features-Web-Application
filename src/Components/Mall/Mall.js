import React from 'react'
import './Mall.css'

function Mall() {
    return (
        <div class="main">
            <ul class="cards">
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="https://www.nexusmalls.com/cms/images/home-intro.png" /></div>
                        <div class="card_content">
                            <h2 class="card_title">Nexus Mall</h2>
                            <p class="card_text">Nexus Malls is one of India's largest retail real estate platforms with a bouquet of 17 marquee malls across 13 major cities. </p>
                            <a href="/gsm"><button class="btn card_btn">Enter</button></a>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="https://www.scai.in/wp-content/uploads/2019/09/inorbit-2.jpg" /></div>
                        <div class="card_content">
                            <h2 class="card_title">Inorbit Mall</h2>
                            <p class="card_text"> Inorbit mall has universal class and appeal and seek to provide a one-stop destination for fashion, lifestyle, food, and entertainment leading to an international experience.</p>
                            <a href="/gsm"><button class="btn card_btn">Enter</button></a>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/Prasad's%20Imax.jpg" /></div>
                        <div class="card_content">
                            <h2 class="card_title">Prasads Multiplex</h2>
                            <p class="card_text">Family complex containing a state-of-the-art cinema, a video game arcade, dining and shopping.</p>
                            <a href="/gsm"><button class="btn card_btn">Enter</button></a>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="https://www.malls2shop.com/admin/malls/19/19.jpg" /></div>
                        <div class="card_content">
                            <h2 class="card_title">GVK One</h2>
                            <p class="card_text">It hosts six screens of the INOX cinemas, an aquarium, three levels of shoppers stop, rich interiors and a dedicated 25000 sq feet kids arena called "Fun Zone".</p>
                            <button class="btn card_btn">Enter</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="https://www.holidify.com/images/cmsuploads/compressed/2847351611886806233043697088n_20210128174357.jpg" /></div>
                        <div class="card_content">
                            <h2 class="card_title">City Center Mall</h2>
                            <p class="card_text">Located at the heart of the city, as it is defined by its name, the City Centre Mall is a wholesome package for a great outing with you folks. This is one of the best malls in Hyderabad.</p>
                            <button class="btn card_btn">Enter</button>
                        </div>
                    </div>
                </li>
                <li class="cards_item">
                    <div class="card">
                        <div class="card_image"><img src="https://cdn.siasat.com/wp-content/uploads/2020/03/galleria.jpg" /></div>
                        <div class="card_content">
                            <h2 class="card_title">Next Galleria Mall</h2>
                            <p class="card_text">The mall confides a variety of restaurants, shopping complexes for clothes, jewellery, kids stuff and much more. Hosts the popular chain of PVR cinemas</p>
                            <button class="btn card_btn">Enter</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Mall
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
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=10" /></div>
                          <div class="card_content">
                              <h2 class="card_title">Movies</h2>
                              <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                              <a href="/movies"><button class="btn card_btn">Watch Now</button></a>
                          </div>
                      </div>
                  </li>
                  <li class="cards_item">
                      <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
                          <div class="card_content">
                              <h2 class="card_title">Food</h2>
                              <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                              <a href="/food"><button class="btn card_btn">Have It</button></a>
                          </div>
                      </div>
                  </li>
                  <li class="cards_item">
                      <div class="card">
                          <div class="card_image"><img src="https://picsum.photos/500/300/?image=5" /></div>
                          <div class="card_content">
                              <h2 class="card_title">Parking</h2>
                              <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                              <a href="/parking"><button class="btn card_btn">More Details</button></a>
                          </div>
                      </div>
                  </li>
                  
              </ul>
          </div>
    </div>
  )
}

export default Gsm
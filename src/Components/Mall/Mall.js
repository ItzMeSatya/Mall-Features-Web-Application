import React from 'react'
import './Mall.css'

function Mall() {
  return (
      <div class="main">
          <ul class="cards">
              <li class="cards_item">
                  <div class="card">
                      <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
                      <div class="card_content">
                          <h2 class="card_title">GSM Mall</h2>
                          <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                          <a href="/gsm"><button class="btn card_btn">Read More</button></a>
                      </div>
                  </div>
              </li>
              <li class="cards_item">
                  <div class="card">
                      <div class="card_image"><img src="https://picsum.photos/500/300/?image=5"/></div>
                      <div class="card_content">
                          <h2 class="card_title">Inorbit Mall</h2>
                          <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                          <a href="/gsm"><button class="btn card_btn">Read More</button></a>
                      </div>
                  </div>
              </li>
              <li class="cards_item">
                  <div class="card">
                      <div class="card_image"><img src="https://picsum.photos/500/300/?image=11"/></div>
                      <div class="card_content">
                          <h2 class="card_title">Forum Sujana Mall</h2>
                          <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                          <a href="/gsm"><button class="btn card_btn">Read More</button></a>
                      </div>
                  </div>
              </li>
              <li class="cards_item">
                  <div class="card">
                      <div class="card_image"><img src="https://picsum.photos/500/300/?image=14"/></div>
                      <div class="card_content">
                          <h2 class="card_title">GSM Mall</h2>
                          <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                          <button class="btn card_btn">Read More</button>
                      </div>
                  </div>
              </li>
              <li class="cards_item">
                  <div class="card">
                      <div class="card_image"><img src="https://picsum.photos/500/300/?image=17"/></div>
                      <div class="card_content">
                          <h2 class="card_title">GSM Mall</h2>
                          <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                          <button class="btn card_btn">Read More</button>
                      </div>
                  </div>
              </li>
              <li class="cards_item">
                  <div class="card">
                      <div class="card_image"><img src="https://picsum.photos/500/300/?image=2"/></div>
                      <div class="card_content">
                          <h2 class="card_title">GSM Mall</h2>
                          <p class="card_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat alias voluptatibus distinctio tempora nam voluptates.</p>
                          <button class="btn card_btn">Read More</button>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
  )
}

export default Mall
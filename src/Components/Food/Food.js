import React from 'react'
import './Food.css'
import Navbar from '../Navbar'

function Food() {
  return (
    <>
        <Navbar />
        <div style={{width: "70%", margin: "auto"}}>
              <section class="menu_list mt-60 mb-60">
                  <div class="containerr">
                      <div class="roww">
                          <div class="col-xl-12">
                              <div style={{textAlign: "center", marginTop: "60px"}} class="section-title text-center mb-60">
                                  <p>Famous for good food</p>
                                  <h4>our menu</h4>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <ul class="nav nav-tabs menu_tab" id="myTab" role="tablist">
                              <li class="nav-item">
                                  <a class="nav-link active show" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab" aria-selected="true">Breakfast</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab" aria-selected="false">Lunch</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link " id="dinner-tab" data-toggle="tab" href="#dinner" role="tab" aria-selected="false">Dinner</a>
                              </li>
                          </ul>
                      </div>
                      <div class="row">
                          <div class="tab-content col-xl-12" id="myTabContent">
                              <div class="tab-pane fade active show" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
                                  <div class="row">
                                      <div class="col-md-6">
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-5.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-6.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              
                              <div class="tab-pane fade " id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                                  <div class="row">
                                      <div class="col-md-6">
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-1.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-4.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-1.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                      </div>
                                      <div class="col-md-6">
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                                  <div class="menu_content"> 
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-2.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                          <div class="single_menu_list">
                                              <img src="http://infinityflamesoft.com/html/restarunt-preview/assets/img/menu/menu-3.jpg" alt="" />
                                                  <div class="menu_content">
                                                      <h4>Chicken Fried Salad  <span>$45</span></h4>
                                                      <p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                                                  </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-xl-12 text-center">
                              <div class="box_btn">
                                  <a href="#">view more</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
        </div>
    </>
  )
}

export default Food
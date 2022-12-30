import React from 'react'
import './Food.css'
import Navbar from '../Navbar'

function Food() {
    return (
        <>
            <Navbar />
            <div style={{ width: "70%", margin: "auto" }}>
                <section class="menu_list mt-60 mb-60">
                    <div class="containerr">
                        <div class="roww">
                            <div class="col-xl-12">
                                <div style={{ textAlign: "center", marginTop: "60px" }} class="section-title text-center mb-60">
                                    <h5><i>Famous for Good Food...</i></h5>
                                    <h4>our menu</h4>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <ul class="nav nav-tabs menu_tab" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <u>
                                        <a class="nav-link active show" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab" aria-selected="true">Breakfast</a>
                                    </u>
                                </li>
                                <li class="nav-item">
                                    <u>
                                        <a class="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab" aria-selected="false">Lunch</a>
                                    </u>
                                </li>
                                <li class="nav-item">
                                    <u>
                                        <a class="nav-link " id="dinner-tab" data-toggle="tab" href="#dinner" role="tab" aria-selected="false">Dinner</a>
                                    </u>
                                </li>
                            </ul>
                        </div>
                        <div class="row">
                            <div class="tab-content col-xl-12" id="myTabContent">
                                <div class="tab-pane fade active show" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h2><u>Breakfast</u></h2>
                                            <br></br>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://chakriskitchen.com/wp-content/uploads/2018/12/Idly19.jpg" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Idly <i class="best">[BestSeller]</i><span>₹79</span></h4>
                                                    <p>Nutritional values: Energy (335 Kcal), Protein (14g), carbs (48g), Fats (9g), Fibre (5g).Tasty and Soft Idli made off Foxtail Millet, which makes idli rich in fiber, Protein and healthy micros, makes you feel light and active.</p>
                                                </div>
                                            </div>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://static.toiimg.com/thumb/msid-78767001,width-1200,height-900,resizemode-4/.jpg" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Dosa <i class="best">[BestSeller]</i><span>₹109</span></h4>
                                                    <p>Nutritional values: Energy (341 Kcal), Protein (14g), carbs (25g), Fats (19g), Fibre (6g).Millet dosa with beaten egg well spread over the top which includes the goodness of proteins from the egg.</p>
                                                </div>
                                            </div>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Rava-Uttapam.jpg?v=1619150769" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Uttapam<span>₹159</span></h4>
                                                    <p>Nutritional values: Energy (479 Kcal), Protein (17g), carbs (59g), Fats (18g), Fibre (10g).A tri-colour dish with one piece each of Ragi Uttapam, Millet Uttapam and Multi Grain Uttapam</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade " id="lunch" role="tabpanel" aria-labelledby="dinner-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h2><u>Lunch</u></h2>
                                            <br></br>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Spicy Chicken Burger<span>₹250</span></h4>
                                                    <p>Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce</p>
                                                </div>
                                            </div>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://www.licious.in/blog/wp-content/uploads/2020/12/BBQ-Chicken-Pizza.jpg" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Smoked Chicken Sausage Pizza [Medium] <i class="best">[BestSeller]</i><span>₹399</span></h4>
                                                    <p>Smoked Chicken Sausages, Crunchy Capsicum, Onion, Mozzarella Cheese Savour the smokiness of chicken sausages with crunchy capsicums coated with a spread of Chipotle flavoured cheese.</p>
                                                </div>
                                            </div>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://5.imimg.com/data5/HG/OU/YC/SELLER-64733657/choco-lava-cake-500x500.jpg" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Chocolate Lava Cake <i class="best">[BestSeller]</i><span>₹110</span></h4>
                                                    <p>New Soft Chocolate cake with a gooey center- perfect chocolaty end to every meal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade " id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h2><u>Dinner</u></h2>
                                            <br></br>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://www.ruchiskitchen.com/wp-content/uploads/2019/01/Shahi-Veg-Biryani-Recipe-01.jpg" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Special Veg Biryani <i class="best">[BestSeller]</i><span>₹339</span></h4>
                                                    <p>Fresh assorted Vegetables are seasoned with exotic herbs and spices, and then cooked inside layers of the finest Basmati Rice. A treat for the vegeterians, it's served with a complimentary portion of Mirchi-ka-Salan and Raita.</p>
                                                </div>
                                            </div>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Royal Chicken Dum Biryani <i class="best">[BestSeller]</i><span>₹259</span></h4>
                                                    <p>Freshly Cooked Kachhi Dum Biryani made with the finest of long grain Basmati Rice and cooked with succulent 4 pieces of chicken (leg or breast), marinated in an exotic blend of handpicked spices, and then garnished with strands of saffron and aromatic ghee (clarified butter).</p>
                                                </div>
                                            </div>
                                            <div class="single_menu_list">
                                                <img id="food" src="https://www.whiskaffair.com/wp-content/uploads/2018/08/Double-ka-Meetha-2-3.jpg" alt="Image Not Found" />
                                                <div class="menu_content">
                                                    <h4>Double Ka Meetha <i class="best">[BestSeller]</i><span>₹69</span></h4>
                                                    <p>Mouth-watering dessert made from a combination of fried bread slices, milk, cardamom, saffron, and other spices.</p>
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
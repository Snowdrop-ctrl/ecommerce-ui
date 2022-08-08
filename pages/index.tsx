import type { NextPage } from 'next'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import indexStyle from '../styles/styleCss.module.css'

const Home: NextPage = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        swipeToSlide: true,
        swipe: true,
        nextArrow: <div><svg width="50" height="50" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 41L21 21L1 1" stroke="#616161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg></div>,
        prevArrow: <div><svg width="50" height="50" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 41L1 21L21 1" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg></div>
    };

  return (
    <div>
      <Head>
        <title>Majestic</title>
        <meta name="description" content="Ecommerce app" />
        <link rel="icon" href="/W.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com"/>
                  <link
                      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Jost:wght@200;400;700&display=swap"
                      rel="stylesheet"/>
          <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
          <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
          <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
      </Head>

        <div className={indexStyle.heroImg}>
            {/*<img src={"/background-image.png"} alt=''/>*/}
        </div>

        <div>
            <header className={indexStyle.header}>
                <div className={indexStyle.leftNav}>
                    <div className={indexStyle.logo}>
                        <a  href="#">
                            <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.856 22.656L19.76 22.656L17.168 15.136L14.544 22.656L10.48 22.656L14.384 12.32L11.504 5.088L5.072 22.72L0.272 22.72L9.36 -2.1541e-06L13.168 -1.82119e-06L17.168 9.536L21.136 -1.12461e-06L24.944 -7.91701e-07L34 22.72L29.264 22.72L22.8 5.088L19.984 12.32L23.856 22.656Z" fill="#212121"/>
                            </svg>
                        </a>
                        <span className={indexStyle.logoName}>Majestic</span>
                    </div>

                    <nav>
                        <ul className={`${indexStyle.leftMenu} ${indexStyle.listStyle}`}>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Collection</a></li>
                            <li><a href="#">Outlet</a></li>
                        </ul>
                    </nav>
                </div>


                <div className={indexStyle.rightIcons}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3333 13.0999V15.5999C17.3343 15.832 17.2867 16.0617 17.1937 16.2744C17.1008 16.487 16.9644 16.6779 16.7934 16.8348C16.6224 16.9917 16.4205 17.1112 16.2006 17.1855C15.9808 17.2599 15.7478 17.2875 15.5167 17.2666C12.9523 16.988 10.4892 16.1117 8.32498 14.7083C6.31151 13.4288 4.60443 11.7217 3.32499 9.70825C1.91663 7.53426 1.04019 5.05908 0.766652 2.48325C0.745827 2.25281 0.773214 2.02055 0.847069 1.80127C0.920923 1.58199 1.03963 1.38049 1.19562 1.2096C1.35162 1.03871 1.54149 0.902176 1.75314 0.808686C1.9648 0.715197 2.1936 0.666803 2.42499 0.666585H4.92498C5.32941 0.662604 5.72148 0.805817 6.02812 1.06953C6.33476 1.33324 6.53505 1.69946 6.59165 2.09992C6.69717 2.89997 6.89286 3.68552 7.17499 4.44158C7.2871 4.73985 7.31137 5.06401 7.24491 5.37565C7.17844 5.68729 7.02404 5.97334 6.79998 6.19992L5.74165 7.25825C6.92795 9.34454 8.65536 11.072 10.7417 12.2583L11.8 11.1999C12.0266 10.9759 12.3126 10.8215 12.6243 10.755C12.9359 10.6885 13.26 10.7128 13.5583 10.8249C14.3144 11.107 15.0999 11.3027 15.9 11.4083C16.3048 11.4654 16.6745 11.6693 16.9388 11.9812C17.203 12.2931 17.3435 12.6912 17.3333 13.0999Z" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50002 18.3332C7.96026 18.3332 8.33335 17.9601 8.33335 17.4998C8.33335 17.0396 7.96026 16.6665 7.50002 16.6665C7.03978 16.6665 6.66669 17.0396 6.66669 17.4998C6.66669 17.9601 7.03978 18.3332 7.50002 18.3332Z" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16.6666 18.3332C17.1269 18.3332 17.5 17.9601 17.5 17.4998C17.5 17.0396 17.1269 16.6665 16.6666 16.6665C16.2064 16.6665 15.8333 17.0396 15.8333 17.4998C15.8333 17.9601 16.2064 18.3332 16.6666 18.3332Z" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M0.833313 0.833496H4.16665L6.39998 11.9918C6.47618 12.3755 6.6849 12.7201 6.9896 12.9654C7.2943 13.2107 7.67556 13.341 8.06665 13.3335H16.1666C16.5577 13.341 16.939 13.2107 17.2437 12.9654C17.5484 12.7201 17.7571 12.3755 17.8333 11.9918L19.1666 5.00016H4.99998" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 17.5L13.875 13.875" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6666 17.5V15.8333C16.6666 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66665C5.78259 12.5 4.93474 12.8512 4.30962 13.4763C3.6845 14.1014 3.33331 14.9493 3.33331 15.8333V17.5" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 9.16667C11.841 9.16667 13.3334 7.67428 13.3334 5.83333C13.3334 3.99238 11.841 2.5 10 2.5C8.15907 2.5 6.66669 3.99238 6.66669 5.83333C6.66669 7.67428 8.15907 9.16667 10 9.16667Z" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.3667 3.84172C16.941 3.41589 16.4357 3.0781 15.8795 2.84763C15.3232 2.61716 14.7271 2.49854 14.125 2.49854C13.5229 2.49854 12.9268 2.61716 12.3705 2.84763C11.8143 3.0781 11.309 3.41589 10.8833 3.84172L10 4.72506L9.11666 3.84172C8.25692 2.98198 7.09086 2.49898 5.875 2.49898C4.65914 2.49898 3.49307 2.98198 2.63333 3.84172C1.77359 4.70147 1.29059 5.86753 1.29059 7.08339C1.29059 8.29925 1.77359 9.46531 2.63333 10.3251L3.51666 11.2084L10 17.6917L16.4833 11.2084L17.3667 10.3251C17.7925 9.89943 18.1303 9.39407 18.3608 8.83785C18.5912 8.28164 18.7099 7.68546 18.7099 7.08339C18.7099 6.48132 18.5912 5.88514 18.3608 5.32893C18.1303 4.77271 17.7925 4.26735 17.3667 3.84172V3.84172Z" stroke="#212121" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </header>
        </div>

      <main>
          {/*Hero content*/}
          <section>
              <div className={indexStyle.heroContent}>
                  <p className={indexStyle.firstSentence}>With an outstanding style, only for you</p>
                  <p className={indexStyle.secondSentence}> Exclusively designed for you</p>
              </div>
              <div className={indexStyle.heroMedia}>
                  <div className={indexStyle.heroContain}>
                      <img src="/hero-women.png" alt="standing women"/>
                      <button>For Her</button>
                  </div>
                  <div className={indexStyle.heroContain}>
                      <img src="/hero-men.png" alt="standing women"/>
                      <button>For Him</button>
                  </div>
              </div>
          </section>

          {/*Best deals*/}
          <section className={indexStyle.bestDeals}>
              <div>
                  <div>
                      <p className={indexStyle.bestDealText}> Best Deals</p>
                  </div>
                  <div className={indexStyle.bestDealSlider}>
                     <Slider {...settings}>
                      <div className={"slider-div"}>
                          <div className={indexStyle.imgDiv}>
                              <img src={"shoe.png"} alt={"shoe image"}/>
                          </div>
                          <div className={indexStyle.priceNameDiv}>
                              <p className={indexStyle.sliderText}>Flat Hill Slingback</p>
                              <p><del className={indexStyle.sliderDeletedPrice}>$299</del><span className={indexStyle.sliderPrice}>$163</span></p>
                          </div>
                      </div>
                      <div className={'slider-div'}>
                          <div className={indexStyle.imgDiv}>
                                <img src={"circle.png"} alt={"shoe image"}/>
                          </div>
                          <div className={indexStyle.priceNameDiv}>
                              <p className={indexStyle.sliderText}>Ocean Blue Ring</p>
                              <p><del className={indexStyle.sliderDeletedPrice}>$269</del><span className={indexStyle.sliderPrice}>$245</span></p>
                          </div>
                      </div>
                      <div className={'slider-div'}>
                          <div className={indexStyle.imgDiv}>
                              <img src={"wallet.png"} alt={"shoe image"}/>
                          </div>
                          <div className={indexStyle.priceNameDiv}>
                              <p className={indexStyle.sliderText}>Brown Leather Wallet</p>
                              <p><del className={indexStyle.sliderDeletedPrice}>$179</del><span className={indexStyle.sliderPrice}>$144</span></p>
                          </div>
                      </div>
                      <div className={'slider-div'}>
                          <div className={indexStyle.imgDiv}>
                              <img src={"apple-watch.png"} alt={"shoe image"}/>
                          </div>
                          <div className={indexStyle.priceNameDiv}>
                              <p className={indexStyle.sliderText}>Silverside Wristwatch</p>
                              <p><del className={indexStyle.sliderDeletedPrice}>$379</del><span className={indexStyle.sliderPrice}>$336</span></p>
                          </div>
                      </div>
                         <div className={'slider-div'}>
                             <div className={indexStyle.imgDiv}>
                                 <img src={"apple-watch.png"} alt={"shoe image"}/>
                             </div>
                             <div className={indexStyle.priceNameDiv}>
                                 <p className={indexStyle.sliderText}>Silverside Wristwatch</p>
                                 <p><del className={indexStyle.sliderDeletedPrice}>$379</del><span className={indexStyle.sliderPrice}>$336</span></p>
                             </div>
                         </div>
                     </Slider>
                  </div>
                  <div className={indexStyle.viewAllButton}>
                      <button>View All</button>
                  </div>
              </div>
          </section>

          {/*Exclusive collection */}
          <section className={indexStyle.exclusiveSection}>
              <div className={indexStyle.exclusiveItems}>
                  <div className={indexStyle.exclusiveFirstItem}>
                      <div className={`${indexStyle.exclusiveFirstItemDiv} ${indexStyle.exclusiveFirstItemContent}`}>
                          <div>
                              <p className={indexStyle.exclusiveText}>Exclusive collection 2021</p>
                              <h1 className={indexStyle.exclusiveHeading}>Be exclusive</h1>
                              <p className={indexStyle.exclusiveParagraph}>
                                  The best everyday option in a Super Saver range within a
                                  reasonable price. It is our responsibility to keep you
                                  100 percent stylish. Be smart & trendy with us.
                              </p>
                              <button className={indexStyle.ExploreButton}>Explore</button>
                          </div>
                      </div>
                      <div className={indexStyle.exclusiveFirstItemDiv}>
                          <div className={indexStyle.outfit}>
                              <img className={indexStyle.outfitImage} src={"./exclusive-collection/outfit.png"} alt={"outfit image"}/>
                              <div className={indexStyle.outfitView}>
                                  <a style={{paddingBottom:'73px'}} href={"#"}>Outfit
                                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </a>
                              </div>
                          </div>

                      </div>
                  </div>

                  <div className={indexStyle.exclusiveSecondItem}>
                      <div className={indexStyle.exclusiveDifferentItems}>
                          <img src={"./exclusive-collection/vanity-bag.png"} alt={""}/>
                        <div className={indexStyle.itemName}>
                            <a href={"#"}>Vanity Bags
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                      </div>
                      <div className={indexStyle.exclusiveDifferentItems}>
                          <img src={"./exclusive-collection/hats.png"} alt={""}/>
                        <div className={indexStyle.itemName}>
                            <a href={"#"}>Hats
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                      </div>
                      <div className={indexStyle.exclusiveDifferentItems}>
                          <img src={"./exclusive-collection/high-heels.png"} alt={""}/>
                          <div className={indexStyle.itemName}>
                              <a href={"#"}>High Heels
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/*checkout new arrivals*/}
          <section className={indexStyle.checkoutSection}>
              <div className={indexStyle.checkoutNewArrivalsSection}>
                  <div>
                      <h3 className={indexStyle.checkoutHeading}> Checkout New Arrivals </h3>
                      <div className={indexStyle.checkoutSliderItems}>
                          <Slider {...settings}>
                              <div className={indexStyle.checkoutItem}>
                                  <img src={'./checkout-new/Card-1.jpg'}/>
                                  <div className={indexStyle.checkoutItemDetails}>
                                      <div className={indexStyle.checkoutItemText}>
                                          <p className={indexStyle.checkoutItemFirstText}>B/W Full Body Outfit</p>
                                          <p className={indexStyle.checkoutItemSecondText}>jumper set for Women</p>
                                          <p className={indexStyle.checkoutItemPrice}>$89</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={indexStyle.checkoutItem}>
                                  <img src={'./checkout-new/Card-2.png'}/>
                                  <div className={indexStyle.checkoutItemDetails}>
                                      <div className={indexStyle.checkoutItemText}>
                                          <p className={indexStyle.checkoutItemFirstText}>Black Semi-Formal Coat</p>
                                          <p className={indexStyle.checkoutItemSecondText}>Coat for Women</p>
                                          <p className={indexStyle.checkoutItemPrice}>$159</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={indexStyle.checkoutItem}>
                                  <img src={'./checkout-new/Card-3.png'}/>
                                  <div className={indexStyle.checkoutItemDetails}>
                                      <div className={indexStyle.checkoutItemText}>
                                          <p className={indexStyle.checkoutItemFirstText}>Ocean Blue Fullsleeved</p>
                                          <p className={indexStyle.checkoutItemSecondText}>Denim Jacket for Men</p>
                                          <p className={indexStyle.checkoutItemPrice}>$79</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={indexStyle.checkoutItem}>
                                  <img src={'./checkout-new/Card-4.png'}/>
                                  <div className={indexStyle.checkoutItemDetails}>
                                      <div className={indexStyle.checkoutItemText}>
                                          <p className={indexStyle.checkoutItemFirstText}>Red Buttoned Sweater</p>
                                          <p className={indexStyle.checkoutItemSecondText}>Sweater for Men</p>
                                          <p className={indexStyle.checkoutItemPrice}>$89</p>
                                      </div>
                                  </div>
                              </div>
                              <div className={indexStyle.checkoutItem}>
                                  <img src={'./checkout-new/Card-4.png'}/>
                                  <div className={indexStyle.checkoutItemDetails}>
                                      <div className={indexStyle.checkoutItemText}>
                                          <p className={indexStyle.checkoutItemFirstText}>Red Buttoned Sweater</p>
                                          <p className={indexStyle.checkoutItemSecondText}>Sweater for Men</p>
                                          <p className={indexStyle.checkoutItemPrice}>$89</p>
                                      </div>
                                  </div>
                              </div>
                          </Slider>
                      </div>
                  </div>
              </div>
          </section>

          {/*shop by category*/}
          <section className={indexStyle.bestDeals}>
              <div>
                  <div>
                      <p className={indexStyle.bestDealText}> Shop By Category</p>
                  </div>
                  <div className={indexStyle.shopByCategoryActions}>
                      <div className={indexStyle.genderAction}>
                          <button style={{color:'#757575', borderBottom:'1px solid #F5F5F5'}}>For Women</button>
                          <button>For Men</button>
                      </div>
                      <div className={indexStyle.categoryAction}>
                          <button>T-Shirt</button>
                          <button>Shirt</button>
                          <button style={{backgroundColor:'#E0E0E0'}}>Shoes</button>
                          <button>Watch</button>
                          <button>Sunglasses</button>
                          <button>Bagpacks</button>
                      </div>
                  </div>
                  <div className={indexStyle.bestDealSlider}>
                      <Slider {...settings}>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./shoes/shoe-1.png"} alt={"shoe image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Flat Hill Slingback</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$299</del><span className={indexStyle.sliderPrice}>$163</span></p>
                              </div>
                          </div>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./shoes/shoe-2.png"} alt={"shoe image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Ocean Blue Ring</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$269</del><span className={indexStyle.sliderPrice}>$245</span></p>
                              </div>
                          </div>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./shoes/shoe-3.png"} alt={"shoe image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Brown Leather Wallet</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$179</del><span className={indexStyle.sliderPrice}>$144</span></p>
                              </div>
                          </div>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./shoes/shoe-4.png"} alt={"shoe image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Silverside Wristwatch</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$379</del><span className={indexStyle.sliderPrice}>$336</span></p>
                              </div>
                          </div>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./shoes/shoe-3.png"} alt={"shoe image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Silverside Wristwatch</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$379</del><span className={indexStyle.sliderPrice}>$336</span></p>
                              </div>
                          </div>
                      </Slider>
                  </div>
                  <div className={indexStyle.viewAllButton}>
                      <button>View All</button>
                  </div>
              </div>
          </section>

          {/*collection*/}
          <section className={indexStyle.collectionSection}>
                <div className={indexStyle.collectionItems}>
                    <img src={'./collection/collection-1.png'}/>
                    <div className={`${indexStyle.collectionTextDiv} ${indexStyle.collectionItem1LinearGradiant}`}>
                        <div className={indexStyle.collectionText} style={{marginTop:'116px'}}>
                            <h1 style={{fontWeight:'bold', color:"white", fontSize:"61px"}}>Urban Stories</h1>
                            <p style={{fontWeight:'bold', color:"white", fontSize:"25px"}}>Collection</p>
                        </div>
                    </div>
                </div>
                <div className={indexStyle.collectionItems} style={{alignItems:'flex-end'}}>
                    <img src={'./collection/collection-2.png'}/>
                    <div className={`${indexStyle.collectionTextDiv} ${indexStyle.collectionItem2LinearGradiant}`}>
                        <div className={indexStyle.collectionText}>
                            <h1 style={{fontWeight:'bold', color:"white", fontSize:"61px"}}>Country Lights</h1>
                            <p style={{fontWeight:'bold', color:"white", fontSize:"25px"}}>Collection</p>
                        </div>
                    </div>
                </div>
          </section>

          {/*Best sellers*/}
          <section className={indexStyle.bestDeals}>
              <div>
                  <div>
                      <p className={indexStyle.bestDealText}> Best Sellers</p>
                  </div>
                  <div className={indexStyle.bestDealSlider}>
                      <Slider {...settings}>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./best-sellers/Item-1.png"} alt={"best seller image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Marie Claire Handbag</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$399</del><span className={indexStyle.sliderPrice}>$365</span></p>
                              </div>
                          </div>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./best-sellers/Items2.png"} alt={"best seller image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Red Gem Earrings</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$489</del><span className={indexStyle.sliderPrice}>$466</span></p>
                              </div>
                          </div>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./best-sellers/Items3.png"} alt={"best seller image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Black Leathered Wristsatch</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$799</del><span className={indexStyle.sliderPrice}>$745</span></p>
                              </div>
                          </div>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./best-sellers/Items4.png"} alt={"best seller image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Red-White Stripped Tie</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$299</del><span className={indexStyle.sliderPrice}>$243</span></p>
                              </div>
                          </div>
                          <div>
                              <div className={indexStyle.imgDiv}>
                                  <img src={"./best-sellers/Items2.png"} alt={"best seller image"}/>
                              </div>
                              <div className={indexStyle.priceNameDiv}>
                                  <p className={indexStyle.sliderText}>Red Gem Earrings</p>
                                  <p><del className={indexStyle.sliderDeletedPrice}>$489</del><span className={indexStyle.sliderPrice}>$466</span></p>
                              </div>
                          </div>
                      </Slider>
                  </div>
              </div>
          </section>

          {/*summer section*/}
          <section className={indexStyle.summerSection}>
              <div className={indexStyle.summerPoster}>
                  <img src={'./summer-collection/summer-party.png'}/>
                  <div className={indexStyle.summerPosterText}>
                      <p className={indexStyle.summerItemsText}>Summer of ‘21</p>
                  </div>
              </div>
              <div>
                  <div className={indexStyle.summerItem}>
                      <img src={'./summer-collection/glass.png'}/>
                      <div className={indexStyle.summerItemText}>
                          <p className={indexStyle.summerItemsText}>Sunglasses</p>
                      </div>
                  </div>
                  <div className={indexStyle.summerItem}>
                      <img src={'./summer-collection/cap.png'}/>
                      <div className={indexStyle.summerItemText}>
                          <p className={indexStyle.summerItemsText}>Hat</p>
                      </div>
                  </div>
              </div>
              <div>
                  <div className={indexStyle.summerItem}>
                      <img src={'./summer-collection/slipper.png'}/>
                      <div className={indexStyle.summerItemText}>
                          <p className={indexStyle.summerItemsText}>Footwear</p>
                      </div>
                  </div>
                  <div className={indexStyle.summerItem}>
                      <img src={'./summer-collection/watch.png'}/>
                      <div className={indexStyle.summerItemText}>
                          <p className={indexStyle.summerItemsText}>Watches</p>
                      </div>
                  </div>
              </div>
          </section>

          {/*gentle form looks*/}
          <section className={indexStyle.summerSection} style={{gap:'7px'}}>
              <div className={`${indexStyle.GentleFormalExplore} ${indexStyle.exclusiveFirstItemContent}`}>
                  <div>
                      <h1 className={indexStyle.exclusiveHeading}>Gentle Formal Looks </h1>
                      <p className={indexStyle.exclusiveParagraph}>
                          We provide the top formal apparel package to make your job look confident
                          and comfortable. Stay connect.
                      </p>
                      <button className={indexStyle.ExploreButton}>Explore Collection</button>
                  </div>
              </div>
              <img className={indexStyle.outfitImage} src={'./gentle-formal.png'}/>
          </section>


          <section>

          </section>
      </main>

      <footer >
      </footer>
    </div>
  )
}

export default Home

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

    const setting2 = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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

    const showMenu = () => {
        const menuEle = document.getElementById("menuModel");
        menuEle.style.display = 'block'

        const navEle = document.getElementById("navSection");
        navEle.style.background = 'white'
    }

    const hideMenu = () => {
        const menuEle = document.getElementById("menuModel");
        menuEle.style.display = 'none'

        const navEle = document.getElementById("navSection");
        navEle.style.background = ''
    }

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
        </div>

        <div className={indexStyle.navSection} id={'navSection'}>
            <header className={indexStyle.header}>
                <nav className={indexStyle.nav}>
                    <div className={indexStyle.leftNav}>
                        <div className={indexStyle.logo}>
                            <a  href="#">
                                <svg width="34" height="23" viewBox="0 0 34 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.856 22.656L19.76 22.656L17.168 15.136L14.544 22.656L10.48 22.656L14.384 12.32L11.504 5.088L5.072 22.72L0.272 22.72L9.36 -2.1541e-06L13.168 -1.82119e-06L17.168 9.536L21.136 -1.12461e-06L24.944 -7.91701e-07L34 22.72L29.264 22.72L22.8 5.088L19.984 12.32L23.856 22.656Z" fill="#212121"/>
                                </svg>
                            </a>
                            <span className={indexStyle.logoName}>Majestic</span>
                        </div>
                        <div>
                            <ul className={`${indexStyle.leftMenu} ${indexStyle.listStyle}`}>
                                <li><a onMouseOver={() => showMenu()} href="#">Women</a></li>
                                <li><a onMouseOver={() => showMenu()} href="#">Men</a></li>
                                <li><a onMouseOver={() => showMenu()} href="#">Collection</a></li>
                                <li><a onMouseOver={() => showMenu()} href="#">Outlet</a></li>
                            </ul>
                        </div>
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
                </nav>
            </header>
        </div>

        {/*Menu dropdown*/}
        <div className={indexStyle.menuModel} id={'menuModel'}>
            <div style={{display:'flex', justifyContent:'center', backgroundColor:"white", height:'776.6px', borderBottomLeftRadius:'25px', borderBottomRightRadius:'25px'}} onMouseOver={() => showMenu()} onMouseOut={() => hideMenu()} onScroll={() => hideMenu()} className={indexStyle.test}>
                <div className={indexStyle.menuListDiv}>
                    <div className={indexStyle.leftMenuListDiv}>
                        <div className={indexStyle.leftMenuSubListDiv}>
                            <p className={indexStyle.leftMenuListHeading}>Products</p>
                            <div className={indexStyle.leftMenuLists}>
                                <p>Clothes</p>
                                <p>Bags</p>
                                <p>Accessories</p>
                                <p>Shoes</p>
                                <p>Beauty</p>
                                <p>Denim</p>
                                <p>Coats & Jackets</p>
                            </div>

                        </div>
                        <div className={indexStyle.leftMenuSubListDiv}>
                            <p className={indexStyle.leftMenuListHeading}>Designers</p>
                            <div className={indexStyle.leftMenuLists}>
                                <p>Balenciaga</p>
                                <p>Balmain</p>
                                <p>Bottega Veneta</p>
                                <p>Burbery</p>
                                <p>Dolce & Gabbana</p>
                                <p>Fendi</p>
                                <p>Off-white</p>
                            </div>
                        </div>
                        <div className={indexStyle.leftMenuSubListDiv}>
                            <p className={indexStyle.leftMenuListHeading}>Archived collections</p>
                            <div className={indexStyle.leftMenuLists}>
                                <p>All products</p>
                                <p>Accessories</p>
                                <p>Bags</p>
                                <p>Coats</p>
                                <p>Dresses</p>
                                <p>Shoes</p>
                                <p>Suits</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={'./menu-list-photo.png'}/>
                        <p style={{fontWeight: 400, fontSize: '24px', color: '#1B2437'}}>Sales on ChanelAccessories</p>
                    </div>
                </div>
            </div>
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


          {/*Post view section*/}
          <section className={indexStyle.postViewSection}>
              <div className={indexStyle.postView}>
                  <div>
                      <img src={'./user-posts/post1.png'}/>
                  </div>
                  <div className={indexStyle.postUserDiv}>
                      <div className={indexStyle.postUser}>
                          <div>
                              <img style={{width: '89px',height: '89px', objectFit:"cover"}} src={'./user-posts/user1.jpg'}/>
                          </div>
                          <div className={indexStyle.socialCountDiv}>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clipPath="url(#clip0_2_402)">
                                              <path d="M1.5 12.2505C1.5 12.2505 5.5 4.25049 12.5 4.25049C19.5 4.25049 23.5 12.2505 23.5 12.2505C23.5 12.2505 19.5 20.2505 12.5 20.2505C5.5 20.2505 1.5 12.2505 1.5 12.2505Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M12.5 15.25C14.1569 15.25 15.5 13.9069 15.5 12.25C15.5 10.5931 14.1569 9.25 12.5 9.25C10.8431 9.25 9.5 10.5931 9.5 12.25C9.5 13.9069 10.8431 15.25 12.5 15.25Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_2_402">
                                                  <rect width="24" height="22.5" fill="white" transform="translate(0.5 0.25)"/>
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </div>
                                  <div><p className={indexStyle.postNumberCount}>35</p></div>
                              </div>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M21.34 5.11012C20.8292 4.59912 20.2228 4.19376 19.5554 3.9172C18.8879 3.64064 18.1725 3.49829 17.45 3.49829C16.7275 3.49829 16.0121 3.64064 15.3446 3.9172C14.6772 4.19376 14.0708 4.59912 13.56 5.11012L12.5 6.17012L11.44 5.11012C10.4083 4.07842 9.00903 3.49883 7.55 3.49883C6.09096 3.49883 4.69169 4.07842 3.66 5.11012C2.6283 6.14181 2.04871 7.54108 2.04871 9.00012C2.04871 10.4592 2.6283 11.8584 3.66 12.8901L4.72 13.9501L12.5 21.7301L20.28 13.9501L21.34 12.8901C21.851 12.3794 22.2564 11.7729 22.5329 11.1055C22.8095 10.438 22.9518 9.7226 22.9518 9.00012C22.9518 8.27763 22.8095 7.56222 22.5329 6.89476C22.2564 6.2273 21.851 5.62087 21.34 5.11012V5.11012Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className={indexStyle.postNumberCount}>23</p>
                                  </div>
                              </div>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15.5 14.5002L20.5 9.50024L15.5 4.50024" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M4.49997 20.5V13.5C4.49997 12.4391 4.9214 11.4217 5.67154 10.6716C6.42169 9.92143 7.4391 9.5 8.49997 9.5H20.5" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className={indexStyle.postNumberCount}>14</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className={indexStyle.postContent}>
                              <div>
                                  <p className={indexStyle.postUserName}>Kelly Hudson  .  <span className={indexStyle.postUserProfession}>Fashion activist</span></p>
                              </div>
                              <div>
                                  <h4 className={indexStyle.postContentHeading}>How important are shoes in your style?</h4>
                                  <p className={indexStyle.postContentDate}>
                                      Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters
                                      for the outsiders that we meet every day...
                                  </p>
                              </div>
                              <div className={indexStyle.postContentReadMore}>
                                  <div>
                                      <a href={'#'} className={indexStyle.postViewReadMore}>Read more</a>
                                  </div>
                                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 11.4995H20.6667" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M11.3334 2.1665L20.6667 11.4998L11.3334 20.8332" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={indexStyle.postView}>
                  <div>
                      <img src={'./user-posts/post2.png'}/>
                  </div>
                  <div className={indexStyle.postUserDiv}>
                      <div className={indexStyle.postUser}>
                          <div>
                              <img style={{width: '89px',height: '89px', objectFit:"cover"}} src={'./user-posts/user2.jpg'}/>
                          </div>
                          <div className={indexStyle.socialCountDiv}>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clipPath="url(#clip0_2_402)">
                                              <path d="M1.5 12.2505C1.5 12.2505 5.5 4.25049 12.5 4.25049C19.5 4.25049 23.5 12.2505 23.5 12.2505C23.5 12.2505 19.5 20.2505 12.5 20.2505C5.5 20.2505 1.5 12.2505 1.5 12.2505Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M12.5 15.25C14.1569 15.25 15.5 13.9069 15.5 12.25C15.5 10.5931 14.1569 9.25 12.5 9.25C10.8431 9.25 9.5 10.5931 9.5 12.25C9.5 13.9069 10.8431 15.25 12.5 15.25Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_2_402">
                                                  <rect width="24" height="22.5" fill="white" transform="translate(0.5 0.25)"/>
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </div>
                                  <div><p className={indexStyle.postNumberCount}>35</p></div>
                              </div>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M21.34 5.11012C20.8292 4.59912 20.2228 4.19376 19.5554 3.9172C18.8879 3.64064 18.1725 3.49829 17.45 3.49829C16.7275 3.49829 16.0121 3.64064 15.3446 3.9172C14.6772 4.19376 14.0708 4.59912 13.56 5.11012L12.5 6.17012L11.44 5.11012C10.4083 4.07842 9.00903 3.49883 7.55 3.49883C6.09096 3.49883 4.69169 4.07842 3.66 5.11012C2.6283 6.14181 2.04871 7.54108 2.04871 9.00012C2.04871 10.4592 2.6283 11.8584 3.66 12.8901L4.72 13.9501L12.5 21.7301L20.28 13.9501L21.34 12.8901C21.851 12.3794 22.2564 11.7729 22.5329 11.1055C22.8095 10.438 22.9518 9.7226 22.9518 9.00012C22.9518 8.27763 22.8095 7.56222 22.5329 6.89476C22.2564 6.2273 21.851 5.62087 21.34 5.11012V5.11012Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className={indexStyle.postNumberCount}>23</p>
                                  </div>
                              </div>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15.5 14.5002L20.5 9.50024L15.5 4.50024" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M4.49997 20.5V13.5C4.49997 12.4391 4.9214 11.4217 5.67154 10.6716C6.42169 9.92143 7.4391 9.5 8.49997 9.5H20.5" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className={indexStyle.postNumberCount}>14</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className={indexStyle.postContent}>
                              <div>
                                  <p className={indexStyle.postUserName}>Kelly Hudson  .  <span className={indexStyle.postUserProfession}>Fashion activist</span></p>
                              </div>
                              <div>
                                  <h4 className={indexStyle.postContentHeading}>How important are shoes in your style?</h4>
                                  <p className={indexStyle.postContentDate}>
                                      Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters
                                      for the outsiders that we meet every day...
                                  </p>
                              </div>
                              <div className={indexStyle.postContentReadMore}>
                                  <div>
                                      <a href={'#'} className={indexStyle.postViewReadMore}>Read more</a>
                                  </div>
                                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 11.4995H20.6667" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M11.3334 2.1665L20.6667 11.4998L11.3334 20.8332" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={indexStyle.postView}>
                  <div>
                      <img src={'./user-posts/post3.png'}/>
                  </div>
                  <div className={indexStyle.postUserDiv}>
                      <div className={indexStyle.postUser}>
                          <div>
                              <img style={{width: '89px',height: '89px', objectFit:"cover"}} src={'./user-posts/user3.jpg'}/>
                          </div>
                          <div className={indexStyle.socialCountDiv}>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clipPath="url(#clip0_2_402)">
                                              <path d="M1.5 12.2505C1.5 12.2505 5.5 4.25049 12.5 4.25049C19.5 4.25049 23.5 12.2505 23.5 12.2505C23.5 12.2505 19.5 20.2505 12.5 20.2505C5.5 20.2505 1.5 12.2505 1.5 12.2505Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M12.5 15.25C14.1569 15.25 15.5 13.9069 15.5 12.25C15.5 10.5931 14.1569 9.25 12.5 9.25C10.8431 9.25 9.5 10.5931 9.5 12.25C9.5 13.9069 10.8431 15.25 12.5 15.25Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                          </g>
                                          <defs>
                                              <clipPath id="clip0_2_402">
                                                  <rect width="24" height="22.5" fill="white" transform="translate(0.5 0.25)"/>
                                              </clipPath>
                                          </defs>
                                      </svg>
                                  </div>
                                  <div><p className={indexStyle.postNumberCount}>35</p></div>
                              </div>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M21.34 5.11012C20.8292 4.59912 20.2228 4.19376 19.5554 3.9172C18.8879 3.64064 18.1725 3.49829 17.45 3.49829C16.7275 3.49829 16.0121 3.64064 15.3446 3.9172C14.6772 4.19376 14.0708 4.59912 13.56 5.11012L12.5 6.17012L11.44 5.11012C10.4083 4.07842 9.00903 3.49883 7.55 3.49883C6.09096 3.49883 4.69169 4.07842 3.66 5.11012C2.6283 6.14181 2.04871 7.54108 2.04871 9.00012C2.04871 10.4592 2.6283 11.8584 3.66 12.8901L4.72 13.9501L12.5 21.7301L20.28 13.9501L21.34 12.8901C21.851 12.3794 22.2564 11.7729 22.5329 11.1055C22.8095 10.438 22.9518 9.7226 22.9518 9.00012C22.9518 8.27763 22.8095 7.56222 22.5329 6.89476C22.2564 6.2273 21.851 5.62087 21.34 5.11012V5.11012Z" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className={indexStyle.postNumberCount}>23</p>
                                  </div>
                              </div>
                              <div className={indexStyle.socialCount}>
                                  <div>
                                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M15.5 14.5002L20.5 9.50024L15.5 4.50024" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M4.49997 20.5V13.5C4.49997 12.4391 4.9214 11.4217 5.67154 10.6716C6.42169 9.92143 7.4391 9.5 8.49997 9.5H20.5" stroke="#424242" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                  </div>
                                  <div>
                                      <p className={indexStyle.postNumberCount}>14</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div className={indexStyle.postContent}>
                              <div>
                                  <p className={indexStyle.postUserName}>Kelly Hudson  .  <span className={indexStyle.postUserProfession}>Fashion activist</span></p>
                              </div>
                              <div>
                                  <h4 className={indexStyle.postContentHeading}>How important are shoes in your style?</h4>
                                  <p className={indexStyle.postContentDate}>
                                      Is it possible to assess a person just on the basis of their footwear? Obviously, nobody should criticize, but certainly, shoes say a lot about someone. It matters
                                      for the outsiders that we meet every day...
                                  </p>
                              </div>
                              <div className={indexStyle.postContentReadMore}>
                                  <div>
                                      <a href={'#'} className={indexStyle.postViewReadMore}>Read more</a>
                                  </div>
                                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M2 11.4995H20.6667" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M11.3334 2.1665L20.6667 11.4998L11.3334 20.8332" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </main>


        {/*Footer section*/}
      <footer className={indexStyle.footer} >
          {/*visit our outlets*/}
          <div className={indexStyle.visitOutletDiv}>
              <img style={{width: '100%', height: '100%'}} src="./visitOutlet-bg.png" alt="img"/>
              <div className={indexStyle.outlet}>
                  <div className={indexStyle.outletSliderDiv}>
                      <div>
                          <p style={{fontWeight:400, fontSize:'39px'}}>Visit out outlets in</p>
                          <Slider {...setting2}>
                              <div>
                                  <p style={{fontWeight:'400', fontSize: '95px'}}>Berlin</p>
                              </div>
                          </Slider>
                      </div>
                      <div className={indexStyle.outletAddress}>
                          <div>
                              <a href={'#'} style={{fontWeight:'bold', fontSize:'20px', lineHeight: '29px', textDecoration: 'none', color: "white"}}>See Address</a>
                          </div>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
          {/*footer links*/}
          <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
              <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '80%', height: '100%'}}>
                  <div className={indexStyle.footerSecondSection}>
                      <div style={{display:'flex', gap: '112px'}}>
                          <div>
                              <h6 className={indexStyle.footerLinkHeading}>Company Info</h6>
                              <div className={indexStyle.footerLinkText}>
                                  <a href={'#'}>About Us</a>
                                  <a href={'#'}>Affliate</a>
                                  <a href={'#'}>Fashion Blogger</a>
                              </div>
                          </div>
                          <div>
                              <h6 className={indexStyle.footerLinkHeading}>Help & Support</h6>
                              <div className={indexStyle.footerLinkText}>
                                  <a href={'#'}>Shipping info</a>
                                  <a href={'#'}>Refunds</a>
                                  <a href={'#'}>How to Order</a>
                                  <a href={'#'}>How to Track</a>
                                  <a href={'#'}>Size Guides</a>
                              </div>
                          </div>
                          <div>
                              <h6 className={indexStyle.footerLinkHeading}>Customer Care</h6>
                              <div className={indexStyle.footerLinkText}>
                                  <a href={'#'}>Contact Us</a>
                                  <a href={'#'}>Payment Methods</a>
                                  <a href={'#'}>Bonus Point</a>
                              </div>
                          </div>
                      </div>
                      <div className={indexStyle.footerSignupSection}>
                          <div style={{display:'flex', flexDirection:'column', gap:'24px'}}>
                              <label style={{fontWeight:"bold", fontSize:'20px', color:'#212121'}}>Signup For The Latest News</label>
                              <div className={indexStyle.footerEmailInput}>
                                  <input style={{padding:'18px 16px', width:"86%"}} type={"email"} placeholder={'Enter Email'}/>
                                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1 8.5H15" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M8 1.5L15 8.5L8 15.5" stroke="#424242" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>

                              </div>
                          </div>
                          <div className={indexStyle.footerContactSection}>
                              <div className={indexStyle.footerContactDiv}>
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M3.33332 3.8335H16.6667C17.5833 3.8335 18.3333 4.5835 18.3333 5.50016V15.5002C18.3333 16.4168 17.5833 17.1668 16.6667 17.1668H3.33332C2.41666 17.1668 1.66666 16.4168 1.66666 15.5002V5.50016C1.66666 4.5835 2.41666 3.8335 3.33332 3.8335Z" stroke="#212121" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                      <path d="M18.3333 5.5L9.99999 11.3333L1.66666 5.5" stroke="#212121" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <div><p style={{fontWeight:400, fontSize:'16px', color:'#616161'}}>something@email.com</p></div>
                              </div>
                              <div className={indexStyle.footerContactDiv}>
                                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M18.3333 14.5999V17.0999C18.3343 17.332 18.2867 17.5617 18.1937 17.7744C18.1008 17.987 17.9644 18.1779 17.7934 18.3348C17.6224 18.4917 17.4205 18.6112 17.2006 18.6855C16.9808 18.7599 16.7478 18.7875 16.5167 18.7666C13.9523 18.488 11.4892 17.6117 9.32498 16.2083C7.31151 14.9288 5.60443 13.2217 4.32499 11.2083C2.91663 9.03426 2.04019 6.55908 1.76665 3.98325C1.74583 3.75281 1.77321 3.52055 1.84707 3.30127C1.92092 3.08199 2.03963 2.88049 2.19562 2.7096C2.35162 2.53871 2.54149 2.40218 2.75314 2.30869C2.9648 2.2152 3.1936 2.1668 3.42499 2.16658H5.92499C6.32941 2.1626 6.72148 2.30582 7.02812 2.56953C7.33476 2.83324 7.53505 3.19946 7.59165 3.59992C7.69717 4.39997 7.89286 5.18552 8.17499 5.94158C8.2871 6.23985 8.31137 6.56401 8.24491 6.87565C8.17844 7.18729 8.02404 7.47334 7.79998 7.69992L6.74165 8.75825C7.92795 10.8445 9.65536 12.572 11.7417 13.7583L12.8 12.6999C13.0266 12.4759 13.3126 12.3215 13.6243 12.255C13.9359 12.1885 14.26 12.2128 14.5583 12.3249C15.3144 12.607 16.0999 12.8027 16.9 12.9083C17.3048 12.9654 17.6745 13.1693 17.9388 13.4812C18.203 13.7931 18.3435 14.1912 18.3333 14.5999Z" stroke="#212121" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <div><p style={{fontWeight:400, fontSize:'16px', color:'#616161'}}>+2321354524</p></div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/*social icons*/}
                  <div className={indexStyle.footerSocialSection}>
                      <div className={indexStyle.footerSocialMedia}>
                          <a href={'#'}>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M24 2.6665H20C18.2319 2.6665 16.5362 3.36888 15.286 4.61913C14.0357 5.86937 13.3333 7.56506 13.3333 9.33317V13.3332H9.33334V18.6665H13.3333V29.3332H18.6667V18.6665H22.6667L24 13.3332H18.6667V9.33317C18.6667 8.97955 18.8071 8.64041 19.0572 8.39036C19.3072 8.14031 19.6464 7.99984 20 7.99984H24V2.6665Z" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </a>
                          <a href={'#'}>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22.6667 2.6665H9.33333C5.65144 2.6665 2.66667 5.65127 2.66667 9.33317V22.6665C2.66667 26.3484 5.65144 29.3332 9.33333 29.3332H22.6667C26.3486 29.3332 29.3333 26.3484 29.3333 22.6665V9.33317C29.3333 5.65127 26.3486 2.6665 22.6667 2.6665Z" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M21.3333 15.1599C21.4979 16.2696 21.3083 17.4029 20.7917 18.3986C20.275 19.3943 19.4575 20.2018 18.4555 20.7061C17.4535 21.2105 16.3179 21.386 15.2104 21.2078C14.1028 21.0296 13.0797 20.5067 12.2865 19.7135C11.4932 18.9202 10.9703 17.8971 10.7921 16.7895C10.6139 15.682 10.7894 14.5464 11.2938 13.5444C11.7981 12.5424 12.6056 11.7249 13.6013 11.2082C14.597 10.6916 15.7303 10.502 16.84 10.6666C17.9719 10.8344 19.0198 11.3619 19.8289 12.171C20.6381 12.9801 21.1655 14.028 21.3333 15.1599Z" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M23.3333 8.6665H23.3467" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </a>
                          <a href={'#'}>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M30.0533 8.56016C29.895 7.92738 29.5724 7.34759 29.1182 6.87937C28.664 6.41115 28.0943 6.07108 27.4667 5.8935C25.1733 5.3335 16 5.3335 16 5.3335C16 5.3335 6.82667 5.3335 4.53333 5.94683C3.90566 6.12441 3.33597 6.46448 2.8818 6.9327C2.42762 7.40093 2.10505 7.98071 1.94667 8.6135C1.52695 10.9409 1.32165 13.3019 1.33333 15.6668C1.31837 18.0496 1.52369 20.4286 1.94667 22.7735C2.12128 23.3866 2.45108 23.9444 2.90419 24.3928C3.35731 24.8412 3.91843 25.1652 4.53333 25.3335C6.82667 25.9468 16 25.9468 16 25.9468C16 25.9468 25.1733 25.9468 27.4667 25.3335C28.0943 25.1559 28.664 24.8158 29.1182 24.3476C29.5724 23.8794 29.895 23.2996 30.0533 22.6668C30.4698 20.3569 30.6751 18.0139 30.6667 15.6668C30.6816 13.2841 30.4763 10.9051 30.0533 8.56016V8.56016Z" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M13 20.0266L20.6667 15.6666L13 11.3066V20.0266Z" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </a>
                          <a href={'#'}>
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M30.6667 4.00022C29.3899 4.90086 27.9761 5.5897 26.48 6.04022C25.677 5.11691 24.6098 4.46248 23.4227 4.16546C22.2356 3.86844 20.986 3.94315 19.8428 4.3795C18.6996 4.81584 17.7179 5.59276 17.0306 6.60518C16.3434 7.6176 15.9836 8.81667 16 10.0402V11.3736C13.6568 11.4343 11.335 10.9146 9.24135 9.86082C7.14766 8.807 5.34709 7.25174 4 5.33356C4 5.33356 -1.33333 17.3336 10.6667 22.6669C7.92071 24.5308 4.64955 25.4655 1.33334 25.3336C13.3333 32.0002 28 25.3336 28 10.0002C27.9988 9.62883 27.9631 9.25835 27.8933 8.89356C29.2541 7.55155 30.2144 5.85717 30.6667 4.00022V4.00022Z" stroke="#212121" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </a>
                      </div>
                      <div>
                          <hr/>
                          <div style={{display:'flex', justifyContent:'space-between'}}>
                              <div>
                                  <div><p>All right &#169; Your Company,2022</p></div>
                              </div>
                              <div>
                                  <div><p style={{color:'#7E92B3', fontSize:'14px'}}>Made with ❤️ <span style={{color:'#6C7E99', fontSize:'14px', fontWeight:'bold'}}>propelius Technology</span> </p></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default Home

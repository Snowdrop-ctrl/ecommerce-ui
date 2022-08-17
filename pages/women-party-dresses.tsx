import indexStyle from "../styles/styleCss.module.css";
import womenDressStyle from "../styles/womenPartyDresses.module.css"
import Head from "next/head";

const WomenPartyDresses = () => {

    const womenPartyDressData = [
        {
            id:1,
            img:'./women-party-dresses/dress1.png',
            text1:'Louis vuitton',
            text2:'active wear',
            priceSymbol:'$',
            price:715,
        },
        {
            id:2,
            img:'./women-party-dresses/dress2.png',
            text1:'Shiny dress',
            text2:'Givenchy',
            priceSymbol:'$',
            price:1610,
        },
        {
            id:3,
            img:'./women-party-dresses/dress3.png',
            text1:'Dolce&Gabbana',
            text2:'Dress',
            priceSymbol:'$',
            price:540,
        },
        {
            id:4,
            img:'./women-party-dresses/dress4.png',
            text1:'Elegant dress',
            text2:'Dries van Noten',
            priceSymbol:'$',
            price:715,
        },
        {
            id:5,
            img:'./women-party-dresses/dress5.png',
            text1:'Women\'s white',
            text2:'jacket',
            priceSymbol:'$',
            price:1610,
        },
        {
            id:6,
            img:'./women-party-dresses/dress6.png',
            text1:'Black Valentino',
            text2:'dress with tulle',
            priceSymbol:'$',
            price:540,
        },
        {
            id:7,
            img:'./women-party-dresses/dress7.png',
            text1:'Women\'s black',
            text2:'vest Gucci',
            priceSymbol:'$',
            price:715,
        },
        {
            id:8,
            img:'./women-party-dresses/dress8.png',
            text1:'Red dress',
            text2:'Valentino',
            priceSymbol:'$',
            price:1610,
        },
        {
            id:9,
            img:'./women-party-dresses/dress9.png',
            text1:'Shiny dress',
            text2:'Givenchy',
            priceSymbol:'$',
            price:540,
        }
    ]

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
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&family=Josefin+Sans:wght@400;700&family=Jost:wght@200;400;700&display=swap"
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

            {/*Menu section*/}
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
                                    <li><a>Women</a></li>
                                    <li><a>Men</a></li>
                                    <li><a>Collection</a></li>
                                    <li><a>Outlet</a></li>
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

            <main>
                <section className={womenDressStyle.womenDressSection}>
                    <div className={womenDressStyle.womenDressSection1}>
                        <div style={{width: '40%',height: '80%', marginTop:'10px'}}>
                            <h4 className={womenDressStyle.filterHeading}>Filter</h4>
                            <div className={womenDressStyle.filterDiv}>
                                <div className={womenDressStyle.filterSubDiv}>
                                    <div className={womenDressStyle.nestedFilters}>
                                        <h6>PRICES</h6>
                                        <div className={womenDressStyle.filterPriceRange}>
                                            <label>Range</label>
                                            <div>
                                                <input type={'range'} value={'200'} min={'0'} max={'1000'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={womenDressStyle.nestedFilters}>
                                        <h6>FILTERS</h6>
                                        <div className={womenDressStyle.filterFilters}>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Women</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Ladies</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Girls</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Babies</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={womenDressStyle.nestedFilters}>
                                        <h6>brands</h6>
                                        <div className={womenDressStyle.filterFilters}>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>H&M</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Mark & Spencer</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Victoria’s Secret</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Dior</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Gucci</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Fendi</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Prada</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Chanel</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Versace</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Dolce & Gabbana</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Zara</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={womenDressStyle.nestedFilters}>
                                        <h6>Categories</h6>
                                        <div className={womenDressStyle.filterFilters}>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Dresses</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Tops</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Lingerie & Lounge Wear</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Blouse</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Vintage</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={womenDressStyle.nestedFilters}>
                                        <h6>Size</h6>
                                        <div className={womenDressStyle.filterFilters}>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Medium</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Large</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Plus Size</label>
                                            </div>
                                            <div className={womenDressStyle.checkBoxGender}>
                                                <input className={womenDressStyle.checkBoxInput} type={'checkbox'}/>
                                                <label className={womenDressStyle.inputLabel}>Sexy Plus Size</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{width:'100%', display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <div style={{display:"flex", flexDirection:'column', gap:0, justifyContent: "flex-start", alignItems: "flex-start"}}>
                                <p className={womenDressStyle.womenPartyHeading}>Women Party Dresses</p>
                                <p className={womenDressStyle.womenPartyResults}>568 results</p>
                            </div>

                            {/*women dresses section*/}
                            <div className={womenDressStyle.womenDressListDiv}>
                                {womenPartyDressData.map((item) =>
                                    <div key={item.id} style={{position:'relative', display: 'flex', justifyContent: 'flex-end', }}>
                                        <div key={item.id} className={womenDressStyle.womenDressDiv}>
                                            <img src={item.img}/>
                                            <div className={womenDressStyle.dressTextDiv}>
                                                <div className={womenDressStyle.dressTextPrice}>
                                                    <p>{item.text1}</p>
                                                    <p>{item.text2}</p>
                                                    <p style={{marginTop:'56px', fontSize:'26px'}}>{item.priceSymbol} <span>{item.price}</span></p>
                                                </div>
                                                <div>
                                                    <img src={'./women-party-dresses/cart.png'}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{background: 'rgba(0, 0, 0, 0.3)', position: "absolute",padding: '18px', margin: '18px'}}>
                                            <img src={'./women-party-dresses/dressLike.png'}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div style={{display: "flex", justifyContent: "flex-end", alignItems: "flex-end", gap: '13px'}}>
                                <div style={{ border: '1px solid #D1D5DB', backgroundColor: '#D1D5DB', width:'39px', height:'39px', display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                                    <img src={'./women-party-dresses/leftArrow.png'}/>
                                </div>
                                <div style={{border: '1px solid #D1D5DB', width:'39px', height:'39px', display: "flex", alignItems: 'center', justifyContent: 'center'}}><p>1</p></div>
                                <div style={{border: '1px solid #D1D5DB', width:'39px', height:'39px', display: "flex", alignItems: 'center', justifyContent: 'center'}}><p>2</p></div>
                                <div style={{border: '1px solid #D1D5DB', width:'39px', height:'39px', display: "flex", alignItems: 'center', justifyContent: 'center'}}><p>...</p></div>
                                <div style={{border: '1px solid #D1D5DB', width:'39px', height:'39px', display: "flex", alignItems: 'center', justifyContent: 'center'}}><p>15</p></div>
                                <div style={{ border: '1px solid #D1D5DB',backgroundColor: '#1F2937', width:'39px', height:'39px', display: "flex", alignItems: 'center', justifyContent: 'center'}}>
                                    <img src={'./women-party-dresses/rightArrow.png'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default WomenPartyDresses;
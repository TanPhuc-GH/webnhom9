const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const menu = $('.body__menu-items');

const menuPrevBtn = $('.menu__prev-btn');
const menuNextBtn = $('.menu__next-btn');

const topDestination = $('.top-destination__items');
const topDestinationNextBtn = $('.top-destination__next-btn');
const topDestinationPrevBtn = $('.top-destination__prev-btn');

const bestSellerElement = $('#BestSeller');
const bestSellerPrevBtn = $('#best-seller__prev-btn');
const bestSellerNextBtn = $('#best-seller__next-btn');

const bookNowElement = $('#BookNow');
const bookNowPrevBtn = $('#book-now__prev-btn');
const bookNowNextBtn = $('#book-now__next-btn');

const newActivityElement = $('#NewActivity');
const newActitityPrevBtn = $('#new-activity__prev-btn');
const newActitityNextBtn = $('#new-activity__next-btn');

const promotionElement = $('#Promotion');
const promotionPrevBtn = $('#promotion__prev-btn');
const promotionNextBtn = $('#promotion__next-btn');

const datingElement = $('#Dating');
const datingPrevBtn = $('#dating__prev-btn');
const datingNextBtn = $('#dating__next-btn');

const childrenElement = $('#Children');
const childrenPrevBtn = $('#children__prev-btn');
const childrenNextBtn = $('#children__next-btn');


const app = {
    menuItemIcon : [
        {
            img: 'https://res.klook.com/image/upload/v1639126249/brand%20refresh%20category%20icon/desktop/category_36_more_to_explore_l1_all.webp',
            description: 'Tất cả dịch vụ'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126247/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_theme_water_parks.webp',
            description: 'Công viên & công viên nước'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126244/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_camping_glamping.webp',
            description: 'Cắm trại'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126243/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_boat_tours_cruises_yachts.webp',
            description: 'Tour thuyền & du thuyền'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126245/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_museums_exhibitions.webp',
            description: 'Bảo tàng & triển lãm'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126246/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_spa_massages.webp',
            description: 'Spa & massages'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126247/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_thrill_seeking_activities.webp',
            description: 'Trải nghiệm cảm giác mạnh'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126248/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_walking_biking.webp',
            description: 'Tour đi bộ & đạp xe'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126247/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_vehicle_tours.webp',
            description: 'Tour phương tiện'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126243/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_attraction_passes.webp',
            description: 'Vé tham quan'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126246/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_observation_cable_cars.webp',
            description: 'Cáp treo & ngắm cảnh'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126248/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_workshops_cooking_classes.webp',
            description: 'Workshop & học nấu ăn'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126245/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_in_the_air.webp',
            description: 'Tour hàng không'
        },
        {
            img: 'https://res.klook.com/image/upload/v1639126245/brand%20refresh%20category%20icon/desktop/category_36_experiences_l2_historical_sights.webp',
            description: 'Di tích lịch sử'
        }
    ],
    topDestinationItem : [
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/gagpmpohflexp1kfy9vr.webp',
            name: 'TP. Hồ Chí Minh'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/rxqumcihtzatvhcnbedi.webp',
            name: 'Đà Nẵng'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/cycozeddqrt6cd2agt0n.webp',
            name: 'Nha Trang'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/ysnkhkzabobjbg72x3sz.webp',
            name: 'Hà Nội'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/gavvg3cqxgqveezzzez5.webp',
            name: 'Hội An'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/fdopxuk1tinxvtylpax8.webp',
            name: 'Phú Quốc'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/ktxokazpkmecanujqnzg.webp',
            name: 'Đà Lạt'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/c2fu1xwsbjcu27dzwbxh.webp',
            name: 'Hạ Long'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/ntvxdptpld8qjd9gv01h.webp',
            name: 'Huế'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/pv8gftuu2hmdi7sghimz.webp',
            name: 'Đồng Hới - Quảng Bình'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/h4frkpsjdbkbtm5ajtw1.webp',
            name: 'Cần Thơ - ĐB Sông Cửu Long'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/e21jepuleul1fjebaor4.webp',
            name: 'Sapa'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/n1rxvzy9amuwd0oz6etu.webp',
            name: 'Quy Nhơn'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/r2h9wrgikhis4pdubns3.webp',
            name: 'Vũng Tàu'
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_352,h_470/fl_lossy.progressive,q_85,f_auto/cities/m3ilnnn3zfy88sq8hzmf.webp',
            name: 'Mũi Né - Phan Thiết'
        }
    ]
    ,
    bestSeller : [
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/lvnxfcz989rlat8jndf0.webp',
            title: 'Vé Cáp Treo Sun World Ba Na Hills Đà Nẵng',
            rate: 4.7,
            review: '15K+',
            sellPrice: '835,000',
            oldPrice: '850,000',
            hasTagging: false
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/oklw8nrqcrhpxz2bjbpv.webp',
            title: 'Vé VinWonders Nha Trang',
            rate: 4.5,
            review: '3,300',
            sellPrice: '200,000',
            oldPrice: '',
            hasTagging: true
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/mzefblljuetiycoas1or.webp',
            title: 'Tour Ngày Khám Phá Đồng Bằng Sông Cửu Long, Khởi hành từ Tp. HCM',
            rate: 4.5,
            review: '5,434',
            sellPrice: '510,590',
            oldPrice: '660,062',
            hasTagging: true
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/zrx0bcfskdaryfq9sqcf.webp',
            title: 'Vé Cáp Treo Sun World Fansipan Legend',
            rate: 4.8,
            review: '1,907',
            sellPrice: '715,000',
            oldPrice: '737,000',
            hasTagging: true
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/plj4bu6khwrkiimbmwnh.webp',
            title: 'Vé Vui Chơi Công Viên Châu Á Đà Nẵng',
            rate: 4.6,
            review: '2,241',
            sellPrice: '95,000',
            oldPrice: '100,000',
            hasTagging: true
        },
        {
            img: 'https://res.klook.com/image/upload/c_fill,w_550,h_308/fl_lossy.progressive,q_85,f_auto/activities/jp6myjn3zt4jdblopcdk.webp',
            title: 'Vé Saigon Skydeck Tại Bitexco Financial Tower',
            rate: 4.8,
            review: '4,339',
            sellPrice: '200,000',
            oldPrice: '',
            hasTagging: true
        }
    ]
    ,
    menuCurX: 0,
    topDestinationCurX: 0,
    bestSellerCurX: 0,
    bookNowCurX: 0,
    newActivityCurX: 0,
    promotionCurX: 0,
    datingCurX: 0,
    childrenCurX: 0,

    render() {
        // Render menu
        let renderMenu = this.menuItemIcon.reduce(function (html, item, i) {
            return html + `
                    <div class="menu__item hover-effect" menu-item-index=${i}>
                        <a href="#" class="menu__item-link">
                            <img src="${item.img}" alt="" class="menu__item-img">
                            <span>${item.description}</span>
                        </a>
                    </div>
                    `
        }, '')
        menu.innerHTML = renderMenu;

        // Render top destination items
        let renderTopDestination = this.topDestinationItem.reduce(function(html, item, i) {
            return html + `
                <a href="#" class="top-destination__link ">
                    <div class="top-destination__item hover-effect" style="background-image: url('${item.img}');">
                        <div class="top-destination__item-cover"></div>
                        <div class="top-destination__item-text">
                            <div class="top-destination__item-title">
                                <p>${item.name}</p>
                            </div>
                        </div>
                    </div>
                </a>
                `
        }, '')
        topDestination.innerHTML = renderTopDestination;

        // Render best seller items
        let renderBestSeller = this.bestSeller.reduce(function(html, item, i) {
            return html + `
                <div class="category-swiper__item-wrapper"  >
                <div class="category-swiper__item hover-effect">
                    <div class="item__heading" style="background-image: url('${item.img}')">
                        
                    </div>
                    <div class="item__body">
                        <div class="item__body--top">
                            <div class="item__title">
                                <span>${item.title}</span>
                            </div>
                            <div class="item__activity">
                                <span class="item__activity-score">
                                    <i class="fa-solid fa-star"></i>
                                    <span class="activity-score__rate">${item.rate}</span>
                                </span>
                                <span class="item__activity-review">
                                    (
                                        <span class="activity-review__number">${item.review}</span>
                                    &nbsp;đánh giá)
                                </span>
                            </div>
                        </div>
                        
                        <div class="item__body--bottom">
                            <div class="item-price-box">
                                <span class="item-price-box__sell-price-box">₫ &nbsp<span class="sell-price__value">${item.sellPrice}</span> </span>
                                <span class="item-price-box__old-price-box">₫ &nbsp<span class="old-price__value">${item.oldPrice}</span> </span>
                            </div>
                            <div class="item__tagging-wrapper">
                                <div class="item__tagging">
                                    <p>Chính sách đảm bảo về giá</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        }, '');
        
        bestSellerElement.innerHTML = renderBestSeller;

        bookNowElement.innerHTML = renderBestSeller;
        newActivityElement.innerHTML = renderBestSeller;
        promotionElement.innerHTML = renderBestSeller;
        datingElement.innerHTML = renderBestSeller;
        childrenElement.innerHTML = renderBestSeller;

    },

    handleEvent() {

        const menuWidth = menu.offsetWidth;
        const hideMenuNextBtnValue = -(menuWidth -30 - 1176);

        menuPrevBtn.onclick = () => {

            this.swipe(menu, this.menuCurX, 1176);
            this.menuCurX = this.menuCurX + 1176;
            this.disPlaySwipeCardButton(this.menuCurX, menuNextBtn, menuPrevBtn, hideMenuNextBtnValue);

        }

        menuNextBtn.onclick = () => {

            this.swipe(menu, this.menuCurX, -1176);
            this.menuCurX = this.menuCurX - 1176;
            this.disPlaySwipeCardButton(this.menuCurX, menuNextBtn, menuPrevBtn, hideMenuNextBtnValue);

        }

        const topDestinationWidth = topDestination.offsetWidth;
        const hideTDNextBtnValue = -(topDestinationWidth -30 - 1180);

        // Handle event swipe topDestination
        topDestinationNextBtn.onclick = () => {
            this.swipe(topDestination, this.topDestinationCurX, -1180);
            this.topDestinationCurX = this.topDestinationCurX - 1180;
            this.disPlaySwipeCardButton(this.topDestinationCurX, topDestinationNextBtn, topDestinationPrevBtn, hideTDNextBtnValue);


        }

        topDestinationPrevBtn.onclick = () => {
            this.swipe(topDestination, this.topDestinationCurX, 1180);
            this.topDestinationCurX = this.topDestinationCurX + 1180;
            this.disPlaySwipeCardButton(this.topDestinationCurX, topDestinationNextBtn, topDestinationPrevBtn, hideTDNextBtnValue);

        }
        
        // Handle event swipe best seller
        bestSellerNextBtn.onclick = () => {
            this.swipe(bestSellerElement, this.bestSellerCurX, -944);
            this.bestSellerCurX = this.bestSellerCurX - 944;
            this.disPlaySwipeCardButton(this.bestSellerCurX, bestSellerNextBtn, bestSellerPrevBtn, -944);
        }

        bestSellerPrevBtn.onclick = () => {
            this.swipe(bestSellerElement, this.bestSellerCurX, 944);
            this.bestSellerCurX = this.bestSellerCurX + 944;
            this.disPlaySwipeCardButton(this.bestSellerCurX, bestSellerNextBtn, bestSellerPrevBtn, -944);
        }

        // Handle event swipe book-now
        bookNowNextBtn.onclick = () => {
            this.swipe(bookNowElement, this.bookNowCurX, -944);
            this.bookNowCurX = this.bookNowCurX - 944;
            this.disPlaySwipeCardButton(this.bookNowCurX, bookNowNextBtn, bookNowPrevBtn, -944);
        }

        bookNowPrevBtn.onclick = () => {
            this.swipe(bookNowElement, this.bookNowCurX, 944);
            this.bookNowCurX = this.bookNowCurX + 944;
            this.disPlaySwipeCardButton(this.bookNowCurX, bookNowNextBtn, bookNowPrevBtn, -944);
        }

        // Handle event swipe new activity
        newActitityNextBtn.onclick = () => {
            this.swipe(newActivityElement, this.newActivityCurX, -944);
            this.newActivityCurX = this.newActivityCurX - 944;
            this.disPlaySwipeCardButton(this.newActivityCurX, newActitityNextBtn, newActitityPrevBtn, -944);
        }

        newActitityPrevBtn.onclick = () => {
            this.swipe(newActivityElement, this.newActivityCurX, 944);
            this.newActivityCurX = this.newActivityCurX + 944;
            this.disPlaySwipeCardButton(this.newActivityCurX, newActitityNextBtn, newActitityPrevBtn, -944);
        }

        // Handle event swipe promotion
        promotionNextBtn.onclick = () => {
            this.swipe(promotionElement, this.promotionCurX, -944);
            this.promotionCurX = this.promotionCurX - 944;
            this.disPlaySwipeCardButton(this.promotionCurX, promotionNextBtn, promotionPrevBtn, -944);
        }

        promotionPrevBtn.onclick = () => {
            this.swipe(promotionElement, this.promotionCurX, 944);
            this.promotionCurX = this.promotionCurX + 944;
            this.disPlaySwipeCardButton(this.promotionCurX, promotionNextBtn, promotionPrevBtn, -944);
        }

        // Handle event swipe dating 
        datingNextBtn.onclick = () => {
            this.swipe(datingElement, this.datingCurX, -944);
            this.datingCurX = this.datingCurX - 944;
            this.disPlaySwipeCardButton(this.datingCurX, datingNextBtn, datingPrevBtn, -944);
        }

        datingPrevBtn.onclick = () => {
            this.swipe(datingElement, this.datingCurX, 944);
            this.datingCurX = this.datingCurX + 944;
            this.disPlaySwipeCardButton(this.datingCurX, datingNextBtn, datingPrevBtn, -944);
        }

        // Handle event swipe children 
        childrenNextBtn.onclick = () => {
            this.swipe(childrenElement, this.childrenCurX, -944);
            this.childrenCurX = this.childrenCurX - 944;
            this.disPlaySwipeCardButton(this.childrenCurX, childrenNextBtn, childrenPrevBtn, -944);
        }

        childrenPrevBtn.onclick = () => {
            this.swipe(childrenElement, this.childrenCurX, 944);
            this.childrenCurX = this.childrenCurX + 944;
            this.disPlaySwipeCardButton(this.childrenCurX, childrenNextBtn, childrenPrevBtn, -944);
        }



       
      

    },
    swipe(selector, curX, addValue) {
        let newX = curX + addValue;
        selector.style.transform = `translate(${newX}px, 0)`
    }
    ,

    disPlaySwipeCardButton(curX, nextBtn, prevBtn, hiddenNextBtnValue) {
        curX === hiddenNextBtnValue ? nextBtn.style.display = 'none' : nextBtn.style.display = 'flex';
        curX === 0 ? prevBtn.style.display = 'none' : prevBtn.style.display = 'flex';
    },

    start() {
        this.render();
        this.handleEvent();
    }


}

app.start();

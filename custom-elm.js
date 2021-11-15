// Reload the page if jQuery is not loaded.
window.onload = function () {
  if (window.jQuery) {
    // jQuery is loaded
    console.log('jQuery Loaded');
  } else {
    // jQuery is not loaded
    window.location.reload();
  }
};

(function ($) {
  function addCustomCssToSite(cssId, url) {
    if (!document.getElementById(cssId)) {
      var head = document.getElementsByTagName('head')[0];
      var link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';
      head.appendChild(link);
    }
  }

  addCustomCssToSite('custom-elm-css', 'https://envira57dev.wpengine.com/wp-content/themes/hungry-house/custom-elm.css');
  addCustomCssToSite('custom-elm-responsive-css', 'https://envira57dev.wpengine.com/wp-content/themes/hungry-house/custom-elm-responsive.css');

  $('body').append(`
  <div class="loading-screen-wrapper">
    <div class="loader"></div>
  </div>
  `);

  $(window).on('load', function () {
    $('.loading-screen-wrapper').fadeOut();
  });

  $(document).ready(function () {
    // console.log('on ready script');

    // (function (history) {
    //   var pushState = history.pushState;
    //   history.pushState = function (state) {
    //     if (typeof history.onpushstate == 'function') {
    //       history.onpushstate({ state: state });
    //     }
    //     // whatever else you want to do
    //     // maybe call onhashchange e.handler
    //     // console.log('on function call', arguments);

    //     $('body').append(`
    //     <div class="loading-screen-wrapper">
    //       <div class="loader"></div>
    //     </div>
    //     `);

    //     // window.location.reload();
    //     // window.location.href = `https://orderhungryhouse.square.site${arguments[2]}`;
    //     window.location.hash = window.location.lasthash[window.location.lasthash.length - 1];
    //     window.location.lasthash.pop();

    //     return pushState.apply(history, arguments);
    //   };
    // })(window.history);

    // window.onpopstate = history.onpushstate = function (e) {
    //   console.log('onpopstate', e);
    //   $('body').append(`
    //   <div class="loading-screen-wrapper">
    //     <div class="loader"></div>
    //   </div>`);
    //   // window.location.reload();
    //   // window.location.href = e.target.location.href;
    //   window.location.hash = window.location.lasthash[window.location.lasthash.length - 1];
    //   window.location.lasthash.pop();
    // };

    function fixSliderWidth(sectionId, item) {
      const pcWidth = $(`#${sectionId} .fluid-carousel`).width();
      if (pcWidth) {
        document.documentElement.style.cssText = `--carousel-item-width-lg: ${pcWidth / item}px`;
      }

      $(window).on('resize', function () {
        const pcWidth = $(`#${sectionId} .fluid-carousel`).width();
        if (pcWidth) {
          if ($(window).width() < 840) {
            document.documentElement.style.cssText = `--carousel-item-width-md: ${pcWidth / 2}px`;
          } else {
            document.documentElement.style.cssText = `--carousel-item-width-lg: ${pcWidth / item}px`;
          }
        }
      });
    }

    function fixInstagramSliderWidth(sectionId, item, instagramId, instagramUrl = '#', tiktokUrl = '#') {
      $(`#${sectionId}`).prepend(`
      <div class="container">
        <div class="insta-row">
          <div class="insta_url">
            <a href="${instagramUrl}" target="_blank">Instagram</a>
          </div>
          <div class="insta_id font-palmdale">${instagramId}</div>
          <div class="tiktok_url">
            <a href="${tiktokUrl}" target="_blank">Tiktok</a>
          </div>
        </div>
      </div>
      `);

      const pcWidth = $(`#${sectionId} .fluid-carousel`).width();
      if (pcWidth) {
        $(`#${sectionId} .fluid-carousel .gallery-carousel__item`).css('width', pcWidth / item);
        setTimeout(function () {
          $(window).trigger('resize');
        }, 700);
      }

      $(window).on('resize', function () {
        const pcWidth = $(`#${sectionId} .fluid-carousel`).width();
        if (pcWidth) {
          if ($(window).width() < 840) {
            $(`#${sectionId} .fluid-carousel .gallery-carousel__item`).css('width', pcWidth / 2);
          } else {
            $(`#${sectionId} .fluid-carousel .gallery-carousel__item`).css('width', pcWidth / item);
          }
        }
      });
    }

    function fixNewsletterSection(sectionId) {
      const newsletterInput = $(`#${sectionId} .w-cell .action-button .input-group__input`);
      const newsletterBtn = $(`#${sectionId} .action-button__button`);

      newsletterInput.attr('placeholder', 'Enter your email here');
      newsletterBtn.html(`
      <div class="button_with_hover button_with_hover_medium">
        <span class="button-before-text font-palmdale">ready?</span>
        <span class="button-after-text font-sharp">submit</span>
      </div>
      `);

      $(`#${sectionId}`).prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp">Subscribe now to receive updates about our lineup, giveaways, recipes, and more.</h2>
      </div>
      `);

      $(`#${sectionId}`).append(`
      <div class="container">
        <p class="sq_contact_disclaimer">By clicking SUBMIT, you agree to receive marketing communications from Hungry House.</p>
      </div>
      `);
    }

    function addButtonToImageTextSection(sectionId, label = 'order now', url, target = '_self') {
      $(`#${sectionId}`).addClass('image_text_section');

      $(`#${sectionId} .text-component p`).parent().append(`
      <a href="${url}" target="${target}" class="button_with_hover button_with_hover_smaller button_with_hover_transparent">
        <span class="button-before-text font-palmdale">${label}</span>
        <span class="button-after-text font-sharp">and learn more</span>
      </a>
      `);
    }

    function primaryBannerContent(sectionId, url = '#') {
      $(`#${sectionId} p`).parent().append(`
      <a href="${url}" class="button_with_hover button_with_hover_transparent button_with_hover_smaller">
        <span class="button-before-text font-palmdale">order now</span>
        <span class="button-after-text font-sharp">pickup & delivery</span>
      </a>

      <a href="https://orderhungryhouse.square.site/about-us" class="regular-line-button border-on-hover font-sharp">
        <span>*Check our delivery zone</span>
        <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="View Full Menu">
      </a>
      `);
    }

    function addMustHaveTitle(sectionId, name) {
      $(`#${sectionId}`).prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">${name}</span> must-haves</h2>
      </div>
      `);
    }

    function addAboutSliderTitle(sectionId, name) {
      $(`#${sectionId}`).prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">about</span> ${name}</h2>
      </div>
      `);
    }

    function addAboutSliderDetails(sectionId, details) {
      $(`#${sectionId}`).append(`
      <div class="container">
        <div class="about-bio-text font-sharp-italic">
          ${details}
        </div>
        <a href="#" class="button_with_hover button_with_hover_medium button_scroll_top">
          <span class="button-before-text font-palmdale">order now?</span>
          <span class="button-after-text font-sharp">pickup & delivery</span>
        </a>
      </div>
      `);
    }

    function viewAllSectionTitle(sectionId, name, tagline, url = '#') {
      $(`#${sectionId}`).prepend(`
      <div class="container">
        <h2 class="sq_section_heading sq_section_heading_reverse font-palmdale"><span class="font-sharp">${name}</span> ${tagline}</h2>
        <a href="${url}" class="regular-line-button border-on-hover sq_section_learn_more font-sharp">
          <span>Learn more</span>
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="Learn more">
        </a>
      </div>
      `);
    }

    setTimeout(() => {
      $('body').on('click', 'a', function (e) {
        e.preventDefault();
        const url = $(this).attr('href');
        const target = $(this).attr('target');
        if (!url) {
          return;
        }
        if (target === '_blank') {
          window.open(url);
        } else {
          window.location.href = url;
        }
      });

      const headerCart = $('button.nav-btn.cart-icon__wrap');
      headerCart.prepend(`
        <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/bag.svg" alt="cart" class="sq-cart-icon" />
      `);

      const oldFooterSection = $('#JwucGZ');

      const newFooterSection = $(`
      <div class="sq-section main-footer">
        <div class="container">
          <div class="footer-top">
            <div class="season-one has-flash-bg">
              <span class="font-palmdale">Season One</span>
            </div>
          </div>
          <div class="footer-menu">
            <div class="footer-left-menu">
              <a href="/woldy-kusina">Woldy Kusina</a>
              <a href="/the-food-sermon">The Food Sermon</a>
              <a href="/apocalypse-burger">Apocalypse Burger</a>
              <a href="/house-specials">House Specials</a>
              <a href="/the-goods-mart">The Goods Mart</a>
            </div>
            <div class="footer-right-menu">
              <div class="footer-right-menu-items">
                <a href="https://orderhungryhouse.square.site/view-all">Full Menu</a>
                <a href="https://orderhungryhouse.square.site/goodies">Goodies</a>
                <a href="https://orderhungryhouse.square.site/about-us">About Us</a>
                <a href="https://orderhungryhouse.square.site/faqs">FAQs</a>
                <a href="https://orderhungryhouse.square.site/careers">Careers</a>
              </div>
              <div class="footer-social-wrapper">
                <a href="https://www.instagram.com/orderhungryhouse/" target="_blank" class="has-flash-bg">Instagram</a>
                <a href="#" class="has-flash-bg">Tiktok</a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-bottom-menu">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
            <div class="footer-copyright">© HungryHouse 2021</div>
          </div>
        </div>
      </div>
      `);

      oldFooterSection.append(newFooterSection);

      // ==============================
      // ========= Home page ==========
      // ==============================
      const animateBanner = $(`
      <div class="container">
        <div class="hover-thumb-wrapper" id="woldy-thumb">
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/products/woldy-thumb.png" alt="woldy" />
        </div>
        <div class="hover-thumb-wrapper" id="sermon-thumb">
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/products/sermon-thumb.png" alt="sermon" />
        </div>
        <div class="hover-thumb-wrapper" id="apocalypse-thumb">
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/products/apocalypse-thumb.png" alt="apocalypse" />
        </div>
        <div class="hover-thumb-wrapper" id="house-thumb">
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/products/house-thumb.png" alt="house" />
        </div>
        <div class="hover-thumb-wrapper" id="good-thumb">
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/products/good-thumb.png" alt="good" />
        </div>
      </div>
      <nav class="menu">
        <div class="menu__item">
          <div class="container" data-id="woldy-thumb">
            <a class="menu__item-link" href="https://orderhungryhouse.square.site/woldy-kusina"><span class="font-sharp">Woldy Kusina</span> <span class="font-palmdale">modern filipino</span></a>
          </div>
          <div class="marquee">
            <div class="marquee__inner-wrap">
              <div class="marquee__inner" aria-hidden="true">
                <div>
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <div class="container" data-id="sermon-thumb">
            <a class="menu__item-link" href="https://orderhungryhouse.square.site/the-food-sermon"><span class="font-sharp">The Food Sermon</span> <span class="font-palmdale">caribbean-inspired</span></a>
          </div>
          <div class="marquee">
            <div class="marquee__inner-wrap">
              <div class="marquee__inner" aria-hidden="true">
                <div>
                  <span class="font-sharp">The Food Sermon</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">The Food Sermon</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">The Food Sermon</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">The Food Sermon</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <div class="container" data-id="apocalypse-thumb">
            <a class="menu__item-link" href="https://orderhungryhouse.square.site/apocalypse-burger"><span class="font-sharp">Apocalypse Burger</span> <span class="font-palmdale">spite snacks</span></a>
          </div>
          <div class="marquee">
            <div class="marquee__inner-wrap">
              <div class="marquee__inner" aria-hidden="true">
                <div>
                  <span class="font-sharp">Apocalypse Burger</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">Apocalypse Burger</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">Apocalypse Burger</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">Apocalypse Burger</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <div class="container" data-id="house-thumb">
            <a class="menu__item-link" href="https://orderhungryhouse.square.site/house-specials"><span class="font-sharp">House Specials</span> <span class="font-palmdale">from the kitchen</span></a>
          </div>
          <div class="marquee">
            <div class="marquee__inner-wrap">
              <div class="marquee__inner" aria-hidden="true">
                <div>
                  <span class="font-sharp">House Specials</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">House Specials</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">House Specials</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">House Specials</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu__item">
          <div class="container" data-id="good-thumb">
            <a class="menu__item-link" href="https://orderhungryhouse.square.site/the-goods-mart"><span class="font-sharp">The Goods Mart</span> <span class="font-palmdale">snacks & drinks</span></a>
          </div>
          <div class="marquee">
            <div class="marquee__inner-wrap">
              <div class="marquee__inner" aria-hidden="true">
                <div>
                  <span class="font-sharp">The Goods Mart</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">The Goods Mart</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">The Goods Mart</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
                <div>
                  <span class="font-sharp">The Goods Mart</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="container">
        <div class="home-banner-bottom">
          <div class="home-live-banner">
            <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star-green.svg" alt="Live in Brooklyn!">
            <span class="font-palmdale">Live in Brooklyn!</span>
          </div>
          <a href="https://orderhungryhouse.square.site/view-all" class="regular-line-button view-full-menu font-sharp">
            <span>View Full Menu</span>
            <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="View Full Menu" />
          </a>
        </div>
      </div>
      `);
      $('#dNjJIL').prepend(animateBanner);

      $('body').on('mouseenter', '.menu__item > .container', function (e) {
        const id = $(this).data('id');
        $('.hover-thumb-wrapper').removeClass('hover-active');
        $(`#${id}`).addClass('hover-active');
      });

      $('body').on('mouseleave', '.menu__item > .container', function (e) {
        $('.hover-thumb-wrapper').removeClass('hover-active');
      });

      $('#XcvNOf .text-component p').parent().append(`
      <a href="https://orderhungryhouse.square.site/about-us" class="button_with_hover">
        <span class="button-before-text font-palmdale">pretty sweet right?</span>
        <span class="button-after-text font-sharp">learn more about why we do what we do</span>
      </a>
      `);

      fixNewsletterSection('yeCMuv');

      $('#jpVBdt').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">meet</span> our lineup</h2>
        <p class="font-sharp-italic sq_section_sub_heading">Our inaugural season of Hungry House brings plant-based filipino food, caribbean-inspired cuisine, smashburger nostalgia and hearty salads. Each season we’ll drop new flavors, so stay tuned.</p>
      </div>
      `);

      addButtonToImageTextSection('jpVBdt', 'order now', 'https://orderhungryhouse.square.site/woldy-kusina');
      addButtonToImageTextSection('qPvofj', 'order now', 'https://orderhungryhouse.square.site/apocalypse-burger');
      addButtonToImageTextSection('iYEedf', 'order now', 'https://orderhungryhouse.square.site/the-food-sermon');
      addButtonToImageTextSection('mpRzHZ', 'order now', 'https://orderhungryhouse.square.site/house-specials');
      addButtonToImageTextSection('Bjopvb', 'order now', 'https://orderhungryhouse.square.site/the-goods-mart');

      $('#Bjopvb').append(`
      <div class="container">
        <a href="https://orderhungryhouse.square.site/view-all" class="button_with_hover button_with_hover_yellow">
          <span class="button-before-text font-palmdale">can't decide?</span>
          <span class="button-after-text font-sharp">see the full menu</span>
        </a>
      </div>
      `);

      $('#hSRIav').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">hungry</span> for more?</h2>
        <p class="font-sharp-italic sq_section_sub_heading">Check out our product selection, perfect to complement your meals, daily routines, or just to spice up your picnic at the park.</p>
      </div>
      `);

      fixSliderWidth('hSRIav', 3);

      $('#hSRIav').append(`
      <div class="container">
        <a href="https://orderhungryhouse.square.site/view-all" class="button_with_hover button_with_hover_yellow">
          <span class="button-before-text font-palmdale">can't decide?</span>
          <span class="button-after-text font-sharp">see the full menu</span>
        </a>
      </div>
      `);

      fixInstagramSliderWidth('SyVAwP', 3, '@orderhungryhouse', 'https://www.instagram.com/orderhungryhouse/', '#');

      /*===================================
        ============= Inner pages =========
        =================================*/

      // Woldy Kusina
      primaryBannerContent('VsDiNU');
      addMustHaveTitle('vrEVGZ', `Woldy’s`);
      fixSliderWidth('vrEVGZ', 3);
      addAboutSliderTitle('TyGiHO', `Woldy Kusina`);
      addAboutSliderDetails(
        'TyGiHO',
        `Woldy Reyes is a Chef and Founder of the boutique catering company, Woldy Kusina, based in Brooklyn, New York. Woldy Kusina’s cuisine is centered around a simple philosophy — to provide good food and good experiences, with sustainability and culture at the heart of it all. As a first-generation Filipino American, Reyes effortlessly infuses contemporary dishes with vibrant flavors and colors that are inspired by his Filipino roots. His menus are best described as fresh, natural and fulfilling.`
      );
      fixNewsletterSection('lJTXrj');
      fixInstagramSliderWidth('xQpjfA', 3, '@woldykusina', 'https://www.instagram.com/woldykusina/', '#');

      // The Food Sermon
      primaryBannerContent('PbpxoT');
      addMustHaveTitle('rXWvKs', `Rawlston’s`);
      fixSliderWidth('rXWvKs', 3);
      addAboutSliderTitle('muqkMH', `Rawlston Williams`);
      addAboutSliderDetails(
        'muqkMH',
        `After immigrating to New York at ten years old and living in the East Flatbush neighborhood of Brooklyn, Chef Williams studied theology at Oakwood University in Alabama, a private university operated by the Seventh-day Adventist Church. While faith still plays a large role in his life, he found his true calling in the kitchen. After graduating from New York’s famed French Culinary Institute (now the International Culinary Center) Williams opened the first Food Sermon location in 2015. Originally intended to be a small outpost for his catering business, the pint-sized restaurant quickly attracted loyal neighborhood fans, soon drawing the attention of food critics (The New York Times’ praised Williams’ “extraordinary brightness of flavors.”)`
      );
      fixNewsletterSection('yvjDQo');
      fixInstagramSliderWidth('vmeZgk', 3, '@iamrawlston', 'https://www.instagram.com/iamrawlston/', '#');

      // Apocalypse Burger
      primaryBannerContent('tihKAM');
      addMustHaveTitle('PamnJu', `Martha’s`);
      fixSliderWidth('PamnJu', 3);
      addAboutSliderTitle('BIUCWv', `Martha Hoover`);
      addAboutSliderDetails(
        'BIUCWv',
        `Martha Hoover owns a successful collection of restaurants in Indianapolis, Indiana —Cafés Patachou, Petite Chou Bistro & Champagne Bar, Napolese Pizzeria, Public Greens, Apocalypse Burger and Bar One Fourteen. Founded in 1989, Hoover used premium ingredients, prepared from scratch, and partnered with local vendors and farmers — years before the phrase “farm to table” was first uttered.`
      );
      fixNewsletterSection('MWwQxT');
      fixInstagramSliderWidth('RjsBSE', 3, '@apocalypseburger', 'https://www.instagram.com/apocalypseburger/', '#');

      // House Specials
      primaryBannerContent('NAhQMG');
      addMustHaveTitle('GeUDAP', `Hungry House`);
      fixSliderWidth('GeUDAP', 3);
      addAboutSliderTitle('wlFgeE', `the team`);
      $('#wlFgeE').append(`
      <div class="container">
        <a href="/" class="button_with_hover button_with_hover_medium">
          <span class="button-before-text font-palmdale">sounds fun?</span>
          <span class="button-after-text font-sharp">check out role openings</span>
        </a>
      </div>
      `);
      fixNewsletterSection('LNSIjq');
      fixInstagramSliderWidth('ckxHBM', 3, '@orderhungryhouse', 'https://www.instagram.com/orderhungryhouse/', '#');

      // The Goods Mart
      primaryBannerContent('ABFtDp');
      addMustHaveTitle('GqYTxR', `Rachel’s`);
      fixSliderWidth('GqYTxR', 3);
      addAboutSliderTitle('QtmjFN', `The Goods Mart`);
      addAboutSliderDetails(
        'QtmjFN',
        `The Goods Mart vets products to find those that not only taste great, but also do right by sourcing quality ingredients and upholding ethical standards across the board. The Goods Mart has made the experience of buying healthier, socially conscious, and environmentally friendly products easier, more enjoyable, and more accessible.`
      );
      fixNewsletterSection('iGjvPT');
      fixInstagramSliderWidth('DpKsPW', 3, '@thegoodsmart', 'https://www.instagram.com/thegoodsmart/', '#');

      $('#mOPZLD, #izPJVI, #iUeHtq, #xJPzqX, #glWFBA').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">the</span> menu</h2>
      </div>
      `);

      $('#igDyLN, #degirR, #BiqnRo, #XRGugI, #SEQUMY').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">the</span> addons</h2>
      </div>
      `);

      $('#igDyLN, #degirR, #BiqnRo, #XRGugI, #SEQUMY').append(`
      <div class="container">
        <a href="https://orderhungryhouse.square.site/view-all" class="button_with_hover button_with_hover_medium button_with_hover_yellow">
          <span class="button-before-text font-palmdale">can’t decide?</span>
          <span class="button-after-text font-sharp">see the full menu</span>
        </a>
      </div>
      `);

      $('#vrEVGZ, #PamnJu, #rXWvKs, #GeUDAP, #GqYTxR').append(`
      <div class="container">
        <a href="https://orderhungryhouse.square.site/view-all" class="button_with_hover button_with_hover_medium button_with_hover_transparent">
          <span class="button-before-text font-palmdale">can’t decide?</span>
          <span class="button-after-text font-sharp">see the full menu</span>
        </a>
      </div>
      `);

      $('.button_scroll_top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      });

      // View all page
      viewAllSectionTitle('qnYtAa', 'Woldy Kusina', 'modern filipino', 'https://orderhungryhouse.square.site/woldy-kusina');
      viewAllSectionTitle('MlUWwE', 'The Food Sermon', 'caribbean-inspired', 'https://orderhungryhouse.square.site/the-food-sermon');
      viewAllSectionTitle('sdRhmA', 'Apocalypse Burger', 'spite snacks', 'https://orderhungryhouse.square.site/apocalypse-burger');
      viewAllSectionTitle('bLdkpf', 'House Specials', 'from the kitchen', 'https://orderhungryhouse.square.site/house-specials');
      viewAllSectionTitle('LoJjMB', 'The Goods Mart', 'snacks & drinks', 'https://orderhungryhouse.square.site/the-goods-mart');
      fixNewsletterSection('MZPidF');
      fixInstagramSliderWidth('WgSjcG', 3, '@orderhungryhouse', 'https://www.instagram.com/orderhungryhouse/', '#');

      // Goodies page
      $('#PHKkOX').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">our</span> must-haves</h2>
      </div>
      `);
      fixNewsletterSection('COwPVL');
      fixInstagramSliderWidth('acXdie', 3, '@orderhungryhouse', 'https://www.instagram.com/orderhungryhouse/', '#');

      // About Us
      $('#jdkwUD').append(`
      <div class="container">
        <div class="about-header">
          <h2 class="sq_about_heading font-sharp">We’re Hungry House, where those who are <span class="font-palmdale">hungry</span> find what’s <span class="font-palmdale">fresh</span></h2>
        </div>
      </div>
      `);

      fixInstagramSliderWidth('meGlnx', 3, '@orderhungryhouse', 'https://www.instagram.com/orderhungryhouse/', '#');

      $('#dtiazq').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">where</span> to find us</h2>
        <p class="font-sharp-italic sq_section_sub_heading">You can find Hungry House at Building 77 in the Navy Yard, or order for delivery within a 2 mile radius in Brooklyn.</p>
      </div>
      `);

      fixNewsletterSection('sKmHWh');

      $('#woPJFK').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">our</span> commitment to transparency</h2>
        <p class="font-sharp-italic sq_section_sub_heading">We work with suppliers, farmers and producers who share our commitment to quality and sustainability. Our goal is to create long-term positive impact with the local food system and allowing our partners to support this mission through their work with Hungry House. Meet some of our partners below. </p>
      </div>
      `);

      addButtonToImageTextSection('woPJFK', 'check them out', 'https://www.smallhold.com/', '_blank');
      addButtonToImageTextSection('EtPBUy', 'check them out', 'https://shop.happyvalleymeat.com/', '_blank');
      addButtonToImageTextSection('zROXtU', 'check them out', 'https://www.burlapandbarrel.com/', '_blank');

      $('#kUyoZa form .w-button').html(`
      <div class="button_with_hover button_with_hover_medium">
        <span class="button-before-text font-palmdale">ready?</span>
        <span class="button-after-text font-sharp">submit</span>
      </div>
      `);

      $('#SAVlXv').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">come</span> work with us</h2>
      </div>
      `);

      $('#SAVlXv').append(`
      <div class="container">
        <a href="https://orderhungryhouse.square.site/careers" class="button_with_hover button_with_hover_medium button_with_hover_yellow">
          <span class="button-before-text font-palmdale">interested?</span>
          <span class="button-after-text font-sharp">view our openings</span>
        </a>
      </div>
      `);

      // FAQ page
      $('#LXATQZ').append(`
      <div class="container">
        <h1>
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star-yellow.svg" alt="FAQs" />
          <span>FAQs</span>
        </h1>
      </div>
      `);

      $('#BNDACL').append(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">General</span></h2>
        <div class="faq-section">
          <div class="faq-row">
            <h3 class="faq-question">How does this work?</h3>
            <div class="faq-answer">
              Hungry House partners with great culinary talent to launch new menus and concepts on our website. Our team cooks their signature dishes, selling the food for pick-up and delivery on our website, while our partner chef is able to spread the word.
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">Who does the sourcing & cooking?</h3>
            <div class="faq-answer">
              Hungry House takes care of all the cooking and sourcing ingredients, providing an easy way for our partner chefs to grow their business and brand. As their trusted operating partner, we work to source the highest quality ingredients. Specifically, we work with Happy Valley Meat Co. to source local ground beef, Smallhold for all our specialty mushrooms, Burlap & Barrel for select spices, and produce from Baldor. Our team cooks all menu items in our kitchen in brooklyn, taking the utmost care to execute perfectly.
            </div>
          </div>
        </div>
      </div>
      `);

      $('#DkFilf').append(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">Location + Hours</span></h2>
        <div class="faq-section">
          <div class="faq-row">
            <h3 class="faq-question">How do I order from Hungry House?</h3>
            <div class="faq-answer">
              You can order on this website for pickup & delivery or in-person at our kitchen located in Building 77 of The Navy Yard.
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">Where are you located?</h3>
            <div class="faq-answer">
              We’re located at 141 Flushing Ave in Building 77 of the Brooklyn Navy Yard. Walk inside the building (don’t worry, it’s publicly accessible right off the street!) and you’ll see our Hungry House sign on the right.
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">What are your hours?</h3>
            <div class="faq-answer">
              Right now, we’re open Monday through Friday 12PM - 8PM. However, if you’re finding yourself in the mood for more Hungry House, shoot us a note to let us know you’re interested in extended hours, we’d love to serve you!
            </div>
          </div>
        </div>
      </div>
      `);

      $('#TOavZI').append(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">Orders</span></h2>
        <div class="faq-section">
          <div class="faq-row">
            <h3 class="faq-question">I need to cancel my order, help!</h3>
            <div class="faq-answer">
              If you need to cancel your order and are having trouble doing that, please feel free to reach out to us at <a href="mailto:hello@orderhungryhouse.com">hello@orderhungryhouse.com</a> and we’ll get right on it.
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">Something was wrong with my order</h3>
            <div class="faq-answer">
              We all know things can go wrong sometimes, and please accept our apologies for anything that was not right with your order -- we’d love the opportunity to make it right. Shoot us a note at <a href="mailto:hello@orderhungryhouse.com">hello@orderhungryhouse.com</a> and we’ll get it sorted.
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">I have lots of dietary restrictions, how can I get more information?</h3>
            <div class="faq-answer">
              Our founder is a former raw vegan, so we’re familiar with this challenge. Check out our dietary restrictions page and you’ll be able to link to a full document detailing all ingredients in all of our dishes. If you have any other further questions, we’re happy to answer directly, just shoot us a note at <a href="mailto:hello@orderhungryhouse.com">hello@orderhungryhouse.com</a> and we’ll get you an answer ASAP.
            </div>
          </div>
        </div>
      </div>
      `);

      $('#YaUvxS').append(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">Events + Office Partnerships</span></h2>
        <div class="faq-section">
          <div class="faq-row">
            <h3 class="faq-question">Do you cater events?</h3>
            <div class="faq-answer">
              Yes! We’d love to work with you on an event. Just shoot us details at our inquiries page with the date, time, amount of people and vision for the event menu and we’ll get back to you immediately. We generally need at least 72 hours, but if it’s an urgent request, we’ll do our best to fulfill!
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">Do you work with offices to create lunch delivery programs?</h3>
            <div class="faq-answer">
              Yes, we do, in fact our menu was built with the office lunch in mind! We have a limited program where we’re actually able to offer an “outpost” and deliver to your office daily. Let us know if you’re interested in that and shoot us a note at <a href="mailto:hello@orderhungryhouse.com">hello@orderhungryhouse.com</a> or vai our inquiries page.
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">What is the lead time for a catering order?</h3>
            <div class="faq-answer">
              We generally need at least 48 hours for a catering order, but can make something happen faster if it’s smaller. Let us know!
            </div>
          </div>
        </div>
      </div>
      `);

      $('#sAfTbX').append(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">Partnerships</span></h2>
        <div class="faq-section">
          <div class="faq-row">
            <h3 class="faq-question">I want to showcase my brand product on Hungry House, what do I do next?</h3>
            <div class="faq-answer">
              Amazing, we’d love to chat. Shoot us a note at <a href="mailto:partnerships@orderhungryhouse.com">partnerships@orderhungryhouse.com</a> with details like your website, instagram and product and we’ll get back to you.
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">I know someone great who could be on Hungry House</h3>
            <div class="faq-answer">
              Amazing, we love to find new chefs. Shoot us a note at <a href="mailto:partnerships@orderhungryhouse.com">partnerships@orderhungryhouse.com</a> and let’s chat!
            </div>
          </div>
          <div class="faq-row">
            <h3 class="faq-question">I’m interested in working together in another capacity</h3>
            <div class="faq-answer">
              Send us a note via our inquiries page. We love ideas!
            </div>
          </div>
        </div>
      </div>
      `);

      $('body').on('click', '.faq-question', function () {
        $(this).parent('.faq-row').toggleClass('active');
        $(this).next('.faq-answer').slideToggle();
      });

      $('#Dxmztl').append(`
      <div class="container">
        <p>If you have more questions send us an email at hello@orderhungryhouse.com and we’ll get back to you ASAP.</p>
        <a href="/" class="button_with_hover button_with_hover">
          <span class="button-before-text font-palmdale">ready?</span>
          <span class="button-after-text font-sharp">Get in touch</span>
        </a>
      </div>
      `);
    }, 2500);

    setTimeout(function () {
      $('.card.item-card .image .figure__aspect-ratio').append(`
        <button type="button" class="menu_item_button">
          Order Now
        </button
      `);

      if ($('.menu_item_button').length < 1) {
        $('.card.item-card .image .figure__aspect-ratio').append(`
        <button type="button" class="menu_item_button">
          Order Now
        </button
      `);
      }

      if ($('.action-button__button .button_with_hover').length) {
        $('.action-button__button').html(`
        <div class="button_with_hover button_with_hover_medium">
          <span class="button-before-text font-palmdale">ready?</span>
          <span class="button-after-text font-sharp">submit</span>
        </div>
        `);
      }
    }, 4000);
  });
})(jQuery);

(function ($) {
  var cssId = 'myCss'; // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://envira57dev.wpengine.com/wp-content/themes/hungry-house/custom-elm.css';
    link.media = 'all';
    head.appendChild(link);
  }

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

    (function (history) {
      var pushState = history.pushState;
      history.pushState = function (state) {
        if (typeof history.onpushstate == 'function') {
          history.onpushstate({ state: state });
        }
        // whatever else you want to do
        // maybe call onhashchange e.handler
        // console.log('on function call', arguments);

        $('body').append(`
        <div class="loading-screen-wrapper">
          <div class="loader"></div>
        </div>
        `);

        // window.location.reload();
        window.location.href = `https://orderhungryhouse.square.site${arguments[2]}`;

        return pushState.apply(history, arguments);
      };
    })(window.history);

    window.onpopstate = history.onpushstate = function (e) {
      console.log('onpopstate', e);
      $('body').append(`
      <div class="loading-screen-wrapper">
        <div class="loader"></div>
      </div>`);
      // window.location.reload();
      window.location.href = e.target.location.href;
    };

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

    function fixNewsletterSection(sectionId) {
      const newsletterBtn = $(`#${sectionId} .action-button__button`);

      newsletterBtn.html(`
      <div class="button_with_hover button_with_hover_medium">
        <span class="button-before-text font-palmdale">ready?</span>
        <span class="button-after-text font-sharp">submit</span>
      </div>
      `);

      $(`#${sectionId}`).prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp">Subscribe now to receive the newsletter and SMS with updates about our lineup, giveaways, recipes, and more.</h2>
      </div>
      `);
    }

    setTimeout(() => {
      const headerCart = $('button.nav-btn.cart-icon__wrap');
      headerCart.prepend(`
        <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/bag.svg" alt="cart" class="sq-cart-icon" />
      `);

      const oldFooterSection = $('#JwucGZ');

      const newFooterSection = $(`
      <div class="sq-section main-footer">
        <div class="container">
          <div class="footer-menu">
            <div class="footer-surprize">
              <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/surprize.svg" alt="Surprize" />
            </div>
            <div class="footer-left-menu">
              <div>
                <a href="/woldy-kusina">Woldy Kusina</a>
                <a href="/apocalypse-burger">The Food Sermon</a>
                <a href="/the-food-sermon">Apocalypse Burger</a>
              </div>
              <div>
                <a href="/house-specials">House Specials</a>
                <a href="/the-goods-mart">The Goods Mart</a>
                <a href="/view-all">Full Menu</a>
              </div>
            </div>
            <div class="footer-middle-menu">
              <div>
                <a href="/goodies">Goodies</a>
              </div>
            </div>
            <div class="footer-right-menu">
              <div>
                <a href="/goodies">About Us</a>
                <a href="#">Our mission</a>
                <a href="#">FAQs</a>
              </div>
            </div>
          </div>
          <div class="footer-social-wrapper">
            <div>
              <a href="#" target="_blank" class="insta-username font-palmdale">@hungryhouse</a>
            </div>
            <div class="insta-ticktock">
              <a href="#" class="has-flash-bg">
                <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star-white.svg" alt="star" />
                <span>Instagram</span>
              </a>
              <a href="#" class="has-flash-bg">
                <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star-white.svg" alt="star" />
                <span>Tiktok</span>
              </a>
            </div>
            <div class="">
              <a href="#">Text Us</a>
            </div>
          </div>
        </div>
      </div>
      `);

      oldFooterSection.append(newFooterSection);

      // ==============================
      // ========= Home page ==========
      // ==============================

      const oldAboutSection = $('#jLvMhP');

      const animateBanner = $(`
      <div class="sq-section section-1">
        <div class="container">
          <div class="banner-surprize">
            <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/surprize.svg" alt="Surprize">
          </div>
          <div class="hover-thumb-wrapper" id="woldy-thumb">
            <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/products/woldy-thumb.png" alt="woldy" />
          </div>
          <div class="hover-thumb-wrapper" id="apocalypse-thumb">
            <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/products/apocalypse-thumb.png" alt="apocalypse" />
          </div>
          <div class="hover-thumb-wrapper" id="sermon-thumb">
            <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/products/sermon-thumb.png" alt="sermon" />
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
              <a class="menu__item-link" href="/woldy-kusina"><span class="font-sharp">Woldy Kusina</span> <span class="font-palmdale">modern filipino</span></a>
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
            <div class="container" data-id="apocalypse-thumb">
              <a class="menu__item-link" href="/apocalypse-burger"><span class="font-sharp">The Food Sermon</span> <span class="font-palmdale">caribbean inspired</span></a>
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
            <div class="container" data-id="sermon-thumb">
              <a class="menu__item-link" href="/the-food-sermon"><span class="font-sharp">Apocalypse Burger</span> <span class="font-palmdale">burgers to die for</span></a>
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
              <a class="menu__item-link" href="/house-specials"><span class="font-sharp">House Specials</span> <span class="font-palmdale">your everydays</span></a>
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
              <a class="menu__item-link" href="/the-goods-mart"><span class="font-sharp">The Goods Mart</span> <span class="font-palmdale">snacks & drinks</span></a>
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
          <a href="/view-all" class="regular-line-button view-full-menu font-sharp">
            <span>View Full Menu</span>
            <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="View Full Menu" />
          </a>
        </div>
      </div>
      `);
      oldAboutSection.prepend(animateBanner);

      $('body').on('mouseenter', '.menu__item > .container', function (e) {
        const id = $(this).data('id');
        $('.hover-thumb-wrapper').removeClass('hover-active');
        $(`#${id}`).addClass('hover-active');
      });

      $('body').on('mouseleave', '.menu__item > .container', function (e) {
        $('.hover-thumb-wrapper').removeClass('hover-active');
      });

      oldAboutSection.append(`
      <div class="sq-section section-2">
        <div class="container">
          <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">about</span> Hungry House</h2>
          <p class="font-sharp-italic"><span>“Our core values guide our</span> actions and we aim to empower our customers, team members and partners to be a positive force on the food system.”</p>
          <a href="/" class="button_with_hover">
            <span class="button-before-text font-palmdale">pretty sweet right?</span>
            <span class="button-after-text font-sharp">learn more about why we do what we do</span>
          </a>
        </div>
      </div>
      `);

      // const oldInstagramSection = $('#HgjPAk');

      const newsletterBtn = $('#yeCMuv .action-button__button');

      newsletterBtn.html(`
      <div class="button_with_hover">
        <span class="button-before-text font-palmdale">ready?</span>
        <span class="button-after-text font-sharp">subscribe</span>
      </div>
      `);

      $('#yeCMuv').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">daily</span> serves</h2>
        <p class="font-sharp-italic"><span>Sweet deals, hot news, recipes, and sometimes</span> half-baked ideas. Make sure you always get the latest updates delivered to your inbox. And don’t worry, we only sell good food, so your personal data is safe with us.</p>
      </div>
      `);

      const oldOrderSection = $('#hSRIav');
      const newOrderSection = $(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp">
        <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="Right Arrow" />
        <span class="font-palmdale">spice up</span> your order</h2>
      </div>
      `);
      oldOrderSection.prepend(newOrderSection);

      fixSliderWidth('hSRIav', 3);

      const newHotlineSection = $(`
      <div class="sq-section section-4">
        <div class="container">
          <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">our</span> hot line</h2>
          <p class="font-sharp-italic"><span>Who likes waiting on the other site of the line anyways?</span> Avoid those infamous tunes and text us for immediate updates, promos, recipes, and more. We’ll be waiting!</p>
          <a href="/" class="button_with_hover">
            <span class="button-before-text font-palmdale">ready?</span>
            <span class="button-after-text font-sharp">shoot us a text</span>
          </a>
        </div>
      </div>
      `);
      oldOrderSection.append(newHotlineSection);

      // ===================================
      // ==== Inner page (Woldy Kusina) ====
      // ===================================

      const woldyBanner = $('#VsDiNU');

      $('#VsDiNU p').parent().append(`
      <a href="/" class="button_with_hover button_with_hover_transparent button_with_hover_smaller">
        <span class="button-before-text font-palmdale">order now</span>
        <span class="button-after-text font-sharp">pickup & delivery</span>
      </a>

      <a href="/view-all" class="regular-line-button font-sharp">
        <span>*Check our delivery zone</span>
        <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="View Full Menu">
      </a>
      `);

      $('#qinWeQ').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">the</span> menu</h2>
      </div>
      `);

      $('#pNoduI').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">the</span> addons</h2>
      </div>
      `);

      $('#pNoduI').append(`
      <div class="container">
        <a href="/" class="button_with_hover button_with_hover_medium button_with_hover_yellow">
          <span class="button-before-text font-palmdale">can’t decide?</span>
          <span class="button-after-text font-sharp">see the full menu</span>
        </a>
      </div>
      `);

      $('#vrEVGZ').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">Woldy’s</span> must-haves</h2>
      </div>
      `);

      $('#vrEVGZ').append(`
      <div class="container">
        <a href="/" class="button_with_hover button_with_hover_medium button_with_hover_transparent">
          <span class="button-before-text font-palmdale">can’t decide?</span>
          <span class="button-after-text font-sharp">see the full menu</span>
        </a>
      </div>
      `);

      fixSliderWidth('vrEVGZ', 3);

      $('#TyGiHO').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">about</span> Waldy Kusina</h2>
      </div>
      `);

      $('#TyGiHO').append(`
      <div class="container">
        <div class="about-bio-text font-sharp-italic">
          Woldy Kusina is recognized as one of New York’s top caterers, featured in Goop and New York Magazine, with a noteworthy clientele that includes brands like 3.1 Phillip Lim, West Elm, Kosas, and Well+Good.
        </div>
        <a href="/" class="button_with_hover button_with_hover_medium">
          <span class="button-before-text font-palmdale">want to know more?</span>
          <span class="button-after-text font-sharp">read the interview</span>
        </a>
      </div>
      `);

      fixNewsletterSection('lJTXrj');
    }, 1000);
  });
})(jQuery);

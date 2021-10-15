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

    function fixInstagramSliderWidth(sectionId, item, instagramId, instagramUrl = '#', tiktokUrl = '#') {
      $(`#${sectionId}`).prepend(`
      <div class="container">
        <div class="insta-row">
          <div class="insta_url">
            <a href="${instagramUrl}" target="_blank">Instagram</a>
          </div>
          <div class="insta_id font-palmdale">${instagramId}</div>
          <div class="tiktok_url">
            <a href="${tiktokUrl}" target="_blank">Instagram</a>
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
        <h2 class="sq_section_heading font-sharp">Subscribe now to receive the newsletter and SMS with updates about our lineup, giveaways, recipes, and more.</h2>
      </div>
      `);

      $(`#${sectionId}`).append(`
      <div class="container">
        <p class="sq_contact_disclaimer">By clicking SUBMIT, you agree to receive marketing text messages from Hungry House at the number provided. Consent is not condition of any purchase. Messages and data rate may apply. Message frequency varies. Reply HELP for help or STOP to cancel. View Terms & Privacy Policy.</p>
      </div>
      `);
    }

    function addButtonToImageTextSection(sectionId, url, buttonText) {
      $(`#${sectionId}`).addClass('image_text_section');

      $(`#${sectionId} .text-component p`).parent().append(`
      <a href="${url}" class="button_with_hover button_with_hover_smaller button_with_hover_transparent">
        <span class="button-before-text font-palmdale">learn more</span>
        <span class="button-after-text font-sharp">${buttonText}</span>
      </a>
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
      const animateBanner = $(`
      <div class="container">
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
        <div class="home-banner-bottom">
          <div class="home-live-banner">
            <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/star-green.svg" alt="Live in Brooklyn!">
            <span class="font-palmdale">Live in Brooklyn!</span>
          </div>
          <a href="/view-all" class="regular-line-button view-full-menu font-sharp">
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
      <a href="/" class="button_with_hover">
        <span class="button-before-text font-palmdale">pretty sweet right?</span>
        <span class="button-after-text font-sharp">learn more about why we do what we do</span>
      </a>
      `);

      fixNewsletterSection('yeCMuv');

      $('#jpVBdt').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">meet</span> the lineup</h2>
        <p class="font-sharp-italic sq_section_sub_heading">In our inaugural season of Hungry House, we’re are humbled and excited to introduce these incredible concepts to the world.</p>
      </div>
      `);

      addButtonToImageTextSection('jpVBdt', 'https://orderhungryhouse.square.site/woldy-kusina', 'about Woldy Kusina');
      addButtonToImageTextSection('qPvofj', 'https://orderhungryhouse.square.site/apocalypse-burger', 'about The Food Sermon');
      addButtonToImageTextSection('iYEedf', 'https://orderhungryhouse.square.site/the-food-sermon', 'about Apocalypse Burger');
      addButtonToImageTextSection('mpRzHZ', 'https://orderhungryhouse.square.site/house-specials', 'about House Specials');
      addButtonToImageTextSection('Bjopvb', 'https://orderhungryhouse.square.site/the-goods-mart', 'about The Goods Mart');

      $('#Bjopvb').append(`
      <div class="container">
        <a href="/" class="button_with_hover button_with_hover_yellow">
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
        <a href="/" class="button_with_hover button_with_hover_yellow">
          <span class="button-before-text font-palmdale">can't decide?</span>
          <span class="button-after-text font-sharp">see the full menu</span>
        </a>
      </div>
      `);

      fixInstagramSliderWidth('SyVAwP', 3, '@orderhungryhouse', '#', '#');

      // ===================================
      // ==== Inner page (Woldy Kusina) ====
      // ===================================

      $('#VsDiNU p').parent().append(`
      <a href="/" class="button_with_hover button_with_hover_transparent button_with_hover_smaller">
        <span class="button-before-text font-palmdale">order now</span>
        <span class="button-after-text font-sharp">pickup & delivery</span>
      </a>

      <a href="/view-all" class="regular-line-button border-on-hover font-sharp">
        <span>*Check our delivery zone</span>
        <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="View Full Menu">
      </a>
      `);

      $('#mOPZLD').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">the</span> menu</h2>
      </div>
      `);

      $('#igDyLN').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">the</span> addons</h2>
      </div>
      `);

      $('#igDyLN').append(`
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

      // View all page
      $('#qnYtAa').prepend(`
      <div class="container">
        <h2 class="sq_section_heading sq_section_heading_reverse font-palmdale"><span class="font-sharp">Woldy Kusina</span> modern filipino</h2>
        <a href="https://orderhungryhouse.square.site/woldy-kusina" class="regular-line-button border-on-hover sq_section_learn_more font-sharp">
          <span>Learn more</span>
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="Learn more">
        </a>
      </div>
      `);

      $('#MlUWwE').prepend(`
      <div class="container">
        <h2 class="sq_section_heading sq_section_heading_reverse font-palmdale"><span class="font-sharp">The Food Sermon</span> caribbean inspired</h2>
        <a href="https://orderhungryhouse.square.site/apocalypse-burger" class="regular-line-button border-on-hover sq_section_learn_more font-sharp">
          <span>Learn more</span>
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="Learn more">
        </a>
      </div>
      `);

      $('#sdRhmA').prepend(`
      <div class="container">
        <h2 class="sq_section_heading sq_section_heading_reverse font-palmdale"><span class="font-sharp">Apocalypse Burger</span> burgers to die for</h2>
        <a href="https://orderhungryhouse.square.site/the-food-sermon" class="regular-line-button border-on-hover sq_section_learn_more font-sharp">
          <span>Learn more</span>
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="Learn more">
        </a>
      </div>
      `);

      $('#bLdkpf').prepend(`
      <div class="container">
        <h2 class="sq_section_heading sq_section_heading_reverse font-palmdale"><span class="font-sharp">House Specials</span> your everydays</h2>
        <a href="https://orderhungryhouse.square.site/house-specials" class="regular-line-button border-on-hover sq_section_learn_more font-sharp">
          <span>Learn more</span>
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="Learn more">
        </a>
      </div>
      `);

      $('#LoJjMB').prepend(`
      <div class="container">
        <h2 class="sq_section_heading sq_section_heading_reverse font-palmdale"><span class="font-sharp">The Goods Mart</span> snacks & drinks</h2>
        <a href="https://orderhungryhouse.square.site/the-goods-mart" class="regular-line-button border-on-hover sq_section_learn_more font-sharp">
          <span>Learn more</span>
          <img src="https://envira57dev.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="Learn more">
        </a>
      </div>
      `);

      $('.card.item-card .image .figure__aspect-ratio').append(`
        <button type="button" class="menu_item_button">
          Order Now
        </button>
      `);

      fixNewsletterSection('MZPidF');

      // Goodies page
      $('#PHKkOX').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">daily</span> must-haves</h2>
      </div>
      `);

      fixNewsletterSection('COwPVL');

      // About Us
      $('#jdkwUD').append(`
      <div class="container">
        <div class="about-header">
          <h2 class="sq_about_heading font-sharp">Welcome to Hungry House, a place for those <span class="font-palmdale">always hungry, always fresh.</span></h2>
        </div>
      </div>
      `);

      $('#dtiazq').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">our</span> locations</h2>
        <p class="font-sharp-italic sq_section_sub_heading">Hungry House is currently operating from the Navy Yard, delivering within a 2 mile radios in Brooklyn, NYC.</p>
      </div>
      `);

      fixNewsletterSection('sKmHWh');

      $('#woPJFK').prepend(`
      <div class="container">
        <h2 class="sq_section_heading font-sharp"><span class="font-palmdale">our</span> commitment to transparency</h2>
        <p class="font-sharp-italic sq_section_sub_heading">We work with suppliers, farmers and producers who share our commitment to quality and sustainability. Our goal is to create long-term positive impact with the local food system and allowing our partners to support this mission through their work with Hungry House. Meet some of our partners below. </p>
      </div>
      `);

      $('#woPJFK .text-component p').parent().append(`
      <a href="/" class="button_with_hover button_with_hover_smaller button_with_hover_transparent">
        <span class="button-before-text font-palmdale">learn more</span>
        <span class="button-after-text font-sharp">visit Smallhold</span>
      </a>
      `);

      $('#EtPBUy .text-component p').parent().append(`
      <a href="/" class="button_with_hover button_with_hover_smaller button_with_hover_transparent">
        <span class="button-before-text font-palmdale">learn more</span>
        <span class="button-after-text font-sharp">visit Smallhold</span>
      </a>
      `);

      $('#zROXtU .text-component p').parent().append(`
      <a href="/" class="button_with_hover button_with_hover_smaller button_with_hover_transparent">
        <span class="button-before-text font-palmdale">learn more</span>
        <span class="button-after-text font-sharp">visit Smallhold</span>
      </a>
      `);

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
        <a href="/" class="button_with_hover button_with_hover_medium button_with_hover_yellow">
          <span class="button-before-text font-palmdale">interested?</span>
          <span class="button-after-text font-sharp">view our openings</span>
        </a>
      </div>
      `);
    }, 1000);
  });
})(jQuery);

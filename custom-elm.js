(function ($) {
  var cssId = 'myCss'; // you could encode the css path itself to generate id..
  if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.id = cssId;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://pauli81.wpengine.com/wp-content/themes/hungry-house/custom-elm.css';
    link.media = 'all';
    head.appendChild(link);
  }

  $('body').append(`<div class="loading-screen-wrapper">Loading</div>`);

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

        $('body').append(`<div class="loading-screen-wrapper">Loading</div>`);

        // window.location.reload();
        window.location.href = `https://orderhungryhouse.square.site${arguments[2]}`;

        return pushState.apply(history, arguments);
      };
    })(window.history);

    window.onpopstate = history.onpushstate = function (e) {
      console.log('onpopstate', e);
      $('body').append(`<div class="loading-screen-wrapper">Loading</div>`);
      // window.location.reload();
      window.location.href = e.target.location.href;
    };

    setTimeout(() => {
      const oldAboutSection = $('#jLvMhP');

      const animateBanner = $(`
      <div class="sq-section section-1">
        <div class="container">
          <div class="hover-thumb-wrapper" id="woldy-thumb">
            <img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/products/woldy-thumb.png" alt="woldy" />
          </div>
          <div class="hover-thumb-wrapper" id="sermon-thumb">
            <img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/products/sermon-thumb.png" alt="sermon" />
          </div>
          <div class="hover-thumb-wrapper" id="apocalypse-thumb">
            <img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/products/apocalypse-thumb.png" alt="apocalypse" />
          </div>
          <div class="hover-thumb-wrapper" id="house-thumb">
            <img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/products/house-thumb.png" alt="house" />
          </div>
          <div class="hover-thumb-wrapper" id="good-thumb">
            <img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/products/good-thumb.png" alt="good" />
          </div>
        </div>
        <nav class="menu">
          <div class="menu__item" data-id="woldy-thumb">
            <div class="container">
              <a class="menu__item-link" href="#"><span class="font-sharp">Woldy Kusina</span> <span class="font-palmdale">modern filipino</span></a>
            </div>
            <div class="marquee">
              <div class="marquee__inner-wrap">
                <div class="marquee__inner" aria-hidden="true">
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Dom Dom</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Santa Maria</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
          <div class="menu__item" data-id="sermon-thumb">
            <div class="container">
              <a class="menu__item-link" href="#"><span class="font-sharp">The Food Sermon</span> <span class="font-palmdale">caribbean inspired</span></a>
            </div>
            <div class="marquee">
              <div class="marquee__inner-wrap">
                <div class="marquee__inner" aria-hidden="true">
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Dom Dom</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Santa Maria</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
          <div class="menu__item" data-id="apocalypse-thumb">
            <div class="container">
              <a class="menu__item-link" href="#"><span class="font-sharp">Apocalypse Burger</span> <span class="font-palmdale">burgers to die for</span></a>
            </div>
            <div class="marquee">
              <div class="marquee__inner-wrap">
                <div class="marquee__inner" aria-hidden="true">
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Dom Dom</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Santa Maria</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
          <div class="menu__item" data-id="house-thumb">
            <div class="container">
              <a class="menu__item-link" href="#"><span class="font-sharp">House Specials</span> <span class="font-palmdale">your everydays</span></a>
            </div>
            <div class="marquee">
              <div class="marquee__inner-wrap">
                <div class="marquee__inner" aria-hidden="true">
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Dom Dom</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Santa Maria</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
          <div class="menu__item" data-id="good-thumb">
            <div class="container">
              <a class="menu__item-link" href="#"><span class="font-sharp">The Goods Mart</span> <span class="font-palmdale">snacks & drinks</span></a>
            </div>
            <div class="marquee">
              <div class="marquee__inner-wrap">
                <div class="marquee__inner" aria-hidden="true">
                  <span class="font-sharp">Woldy Kusina</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Dom Dom</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-sharp">Santa Maria</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                  <span class="font-palmdale">Order Now</span> <span class="star"><img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/star.svg" alt="star"/></span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="container">
          <a href="/" class="view-full-menu font-sharp">View Full Menu</a>
        </div>
      </div>
      `);
      oldAboutSection.prepend(animateBanner);

      $('body').on('mouseenter', '.menu__item', function (e) {
        const id = $(this).data('id');
        $('.hover-thumb-wrapper').removeClass('hover-active');
        $(`#${id}`).addClass('hover-active');
      });

      $('body').on('mouseleave', '.menu__item', function (e) {
        $('.hover-thumb-wrapper').removeClass('hover-active');
      });

      const newAboutSection = $(`
      <div class="sq-section section-2">
        <div class="container">
          <h2 class="font-sharp"><span class="font-palmdale">about</span> Hungry House</h2>
          <p class="font-sharp-italic"><span>“Our core values guide our</span> actions and we aim to empower our customers, team members and partners to be a positive force on the food system.”</p>
          <a href="/" class="button-with-hover">
            <span class="button-before-text font-palmdale">pretty sweet right?</span>
            <span class="button-after-text font-sharp">learn more about why we do what we do</span>
          </a>
        </div>
      </div>
      `);
      oldAboutSection.append(newAboutSection);

      // const oldInstagramSection = $('#HgjPAk');

      const oldNewsLetter = $('#yeCMuv');
      const newsletterBtn = $('#yeCMuv .action-button__button');

      newsletterBtn.html(`
      <div class="button-with-hover">
        <span class="button-before-text font-palmdale">ready?</span>
        <span class="button-after-text font-sharp">subscribe</span>
      </div>
      `);

      const newNewsletterSection = $(`
      <div class="container">
        <h2 class="font-sharp"><span class="font-palmdale">daily</span> serves</h2>
        <p class="font-sharp-italic"><span>Sweet deals, hot news, recipes, and sometimes</span> half-baked ideas. Make sure you always get the latest updates delivered to your inbox. And don’t worry, we only sell good food, so your personal data is safe with us.</p>
      </div>
      `);
      oldNewsLetter.prepend(newNewsletterSection);

      const oldOrderSection = $('#hSRIav');
      const newOrderSection = $(`
      <div class="container">
        <h2 class="font-sharp">
        <img src="https://pauli81.wpengine.com/wp-content/themes/hungry-house/img/arrow-right.svg" alt="Right Arrow" />
        <span class="font-palmdale">spice up</span> your order</h2>
      </div>
      `);
      oldOrderSection.prepend(newOrderSection);

      const newHotlineSection = $(`
      <div class="sq-section section-4">
        <div class="container">
          <h2 class="font-sharp"><span class="font-palmdale">our</span> hot line</h2>
          <p class="font-sharp-italic"><span>Who likes waiting on the other site of the line anyways?</span> Avoid those infamous tunes and text us for immediate updates, promos, recipes, and more. We’ll be waiting!</p>
          <a href="/" class="button-with-hover">
            <span class="button-before-text font-palmdale">ready?</span>
            <span class="button-after-text font-sharp">shoot us a text</span>
          </a>
        </div>
      </div>
      `);
      oldOrderSection.append(newHotlineSection);
    }, 1000);
  });
})(jQuery);

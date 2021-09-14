(function ($) {
  $(document).ready(function () {
    console.log('on ready script');

    setTimeout(() => {
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

      const oldSection2 = $('#jLvMhP');

      const newSection2 = $(`
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
      oldSection2.append(newSection2);

      const newSection3 = $(`
      <div class="sq-section section-3">
        <div class="container">
          <h2 class="font-sharp"><span class="font-palmdale">daily</span> serves</h2>
          <p class="font-sharp-italic"><span>Sweet deals, hot news, recipes, and sometimes</span> half-baked ideas. Make sure you always get the latest updates delivered to your inbox. And don’t worry, we only sell good food, so your personal data is safe with us.</p>
          <a href="/" class="button-with-hover">
            <span class="button-before-text font-palmdale">ready?</span>
            <span class="button-after-text font-sharp">subscribe</span>
          </a>
        </div>
      </div>
      `);
      oldSection2.append(newSection3);

      const newSection4 = $(`
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
      oldSection2.append(newSection4);

      // $('a').on('click', function (e) {
      //   e.preventDefault();

      //   window.location.href = 'https://orderhungryhouse.square.site/text-us';
      // });
    }, 500);
  });
})(jQuery);

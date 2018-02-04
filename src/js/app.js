(function ($) {
  const noop = () => {};
  const err = Symbol(':err');
  const ok = Symbol(':ok');

  const doc = $(document);
  const win = $(window);

  let header = null;
  let expandMenuDrawer = null;
  let menuDrawer = null;
  let modal = null;
  let showContactForm = null;
  let hideContactForm = null;
  let contactForm = null;
  let submitContactForm = null;

  doc.ready((_event) => {
    body = $("body");
    header = $("#white-bg-on-scroll");
    expandMenuDrawer = $("#expand-menu-drawer");
    menuDrawer = $("#menu-drawer");
    modal = $("#modal-backdrop");
    showContactForm = $(".show-contact-form");
    hideContactForm = $("#modal-backdrop .close-btn");
    contactForm = $("#contact-form");
    submitContactForm = $("#submit-contact-form");

    init();
  });

  function init() {
    win.scroll(onScroll);
    onScroll();

    expandMenuDrawer.click((_event) => {
      expandMenuDrawer.toggleClass("active");
      menuDrawer.toggleClass("active");
    });

    $('#menu-drawer > li a:not(.nav-button)').click((_event) => {
      const $this = $(this);
      $this.parent().siblings().removeClass('active').end().addClass('active');
    });

    showContactForm.click((_event) => {
      modal.addClass("active").animate({ opacity: 1 });
      body.addClass("noscroll");
    });

    hideContactForm.click((_event) => {
      modal.animate({ opacity: 0 }, () => {
        body.removeClass("noscroll");
        modal.removeClass("active");
        modal.removeClass('success');
      });
    });

    initFormHandler();

    new SmoothScroll("a[href*=\"#\"]", {
      speed: 500,
      offset: 80,
      easing: "easeInOutCubic"
    });

    // TODO: Replace scrollspy or smoothscroll as they conflict
    // menuDrawer.scrollspy({ offset: -100 });
  }

  function toggleHeaderSolidClass(amount) {
    const hasSolidClass = header.hasClass("solid-bg");

    if (amount === 0) {
      header.removeClass("solid-bg");
    } else if (!hasSolidClass) {
      header.addClass("solid-bg");
    }
  }

  function onScroll() {
    const amount = win.scrollTop();
    toggleHeaderSolidClass(amount);
  }

  function initFormHandler() {
    submitContactForm.click((event) => {
      event.preventDefault();

      const payload = contactForm.serialize();

      console.info(`Submitting form ... ${payload}`);

      $.post("https://threestup.com/aporosa/contact", payload)
        .done((data) => {
          console.log(ok, data);
          submitContactForm.parent('#contact-form')[0].reset();
          modal.addClass('success');
        })
        .fail((error) => {
          console.error(err, error);
          // @TODO display error notification
        });
    });
  }
})(jQuery);

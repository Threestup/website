(function ($) {
  const doc = $(document);
  const win = $(window);

  let header = null;
  let expandMenuDrawer = null;
  let menuDrawer = null;
  let modal = null;
  let showContactForm = null;
  let hideContactForm = null;

  doc.ready((_event) => {
    header = $("#white-bg-on-scroll");
    expandMenuDrawer = $("#expand-menu-drawer");
    menuDrawer = $("#menu-drawer");
    modal = $("#modal-backdrop");
    showContactForm = $(".show-contact-form");
    hideContactForm = $("#modal-backdrop .close-btn");

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
    });

    $("#modal-backdrop .close-btn").click((_event) => {
      modal.animate({ opacity: 0 }, () => {
        modal.removeClass("active");
      });
    });

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
})(jQuery);

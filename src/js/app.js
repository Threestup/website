(function ($) {
  const doc = $(document);
  const win = $(window);
  
  let header = null;
  let expandMenuDrawer = null;
  let menuDrawer = null;
  let modal = null;
  let showContactForm = null;
  
  doc.ready((_event) => {
    header = $("#white-bg-on-scroll");
    expandMenuDrawer = $("#expand-menu-drawer");
    menuDrawer = $("#menu-drawer");
    modal = $("#modal-backdrop");
    showContactForm = $(".show-contact-form");

    new SmoothScroll("a[href*=\"#\"]", {
      speed: 500,
      offset: 80,
      easing: "easeInOutCubic"
    });

    init();
  });
  
  function init() {
    win.scroll(onScroll);
    onScroll();
  
    expandMenuDrawer.click((_event) => {
      expandMenuDrawer.toggleClass("active");
      menuDrawer.toggleClass("active");
    });
  
    $("#menu-drawer > li a").click((_e) => {
      const $this = $(this);
      $this.parent().siblings().removeClass("active").end().addClass("active");
    });

    showContactForm.click((_e) => {
      modal.addClass("active");
    });

    menuDrawer.scrollspy({ offset: -100 });
  }
  
  function toggleHeaderSolidClass(amount) {
    const hasSolidClass = header.hasClass("solid-bg");
  
    if (amount === 0) {
      header.removeClass("solid-bg")
    } else if (!hasSolidClass) {
      header.addClass("solid-bg");
    }
  }
  
  function onScroll() {
    const amount = win.scrollTop();
    toggleHeaderSolidClass(amount);
  }
  
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.querySelector('.menu');
  const menuLinks = document.querySelectorAll('.header-item a');

  // Переключение состояния меню при клике на бургер-меню
  mobileMenu.addEventListener('click', function() {
    const isOpen = this.classList.toggle('open');

    // Блокировка/разблокировка ссылок при закрытом/открытом меню
    menuLinks.forEach(link => {
      if (!isOpen) {
        link.addEventListener('click', preventDefaultAction);
      } else {
        link.removeEventListener('click', preventDefaultAction);
      }
    });
  });

  // Функция, предотвращающая стандартное действие ссылки
  function preventDefaultAction(event) {
    event.preventDefault();
  }
});




// SOFT-NUMBER
window.addEventListener("DOMContentLoaded",() => {
  const ctl = new CollapsibleTimeline("#timeline");
});

class CollapsibleTimeline {
  constructor(el) {
    this.el = document.querySelector(el);

    this.init();
  }
  init() {
    this.el?.addEventListener("click",this.itemAction.bind(this));
  }
  animateItemAction(button,ctrld,contentHeight,shouldCollapse) {
    const expandedClass = "timeline__item-body--expanded";
    const animOptions = {
      duration: 300,
      easing: "cubic-bezier(0.65,0,0.35,1)"
    };

    if (shouldCollapse) {
      button.ariaExpanded = "false";
      ctrld.ariaHidden = "true";
      ctrld.classList.remove(expandedClass);
      animOptions.duration *= 2;
      this.animation = ctrld.animate([
        { height: `${contentHeight}px` },
        { height: `${contentHeight}px` },
        { height: "0px" }
      ],animOptions);
    } else {
      button.ariaExpanded = "true";
      ctrld.ariaHidden = "false";
      ctrld.classList.add(expandedClass);
      this.animation = ctrld.animate([
        { height: "0px" },
        { height: `${contentHeight}px` }
      ],animOptions);
    }
  }
  itemAction(e) {
    const { target } = e;
    const action = target?.getAttribute("data-action");
    const item = target?.getAttribute("data-item");

    if (action) {
      const targetExpanded = action === "expand" ? "false" : "true";
      const buttons = Array.from(this.el?.querySelectorAll(`[aria-expanded="${targetExpanded}"]`));
      const wasExpanded = action === "collapse";

      for (let button of buttons) {
        const buttonID = button.getAttribute("data-item");
        const ctrld = this.el?.querySelector(`#item${buttonID}-ctrld`);
        const contentHeight = ctrld.firstElementChild?.offsetHeight;

        this.animateItemAction(button,ctrld,contentHeight,wasExpanded);
      }

    } else if (item) {
      const button = this.el?.querySelector(`[data-item="${item}"]`);
      const expanded = button?.getAttribute("aria-expanded");

      if (!expanded) return;

      const wasExpanded = expanded === "true";
      const ctrld = this.el?.querySelector(`#item${item}-ctrld`);
      const contentHeight = ctrld.firstElementChild?.offsetHeight;

      this.animateItemAction(button,ctrld,contentHeight,wasExpanded);
    }
  }
}



// PROJECT.HTML // SOFTS-DETAIL
  function openCity(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

 
  openCity(event, 'EBILIM');



function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

// Закрыть выпадающее меню при щелчке вне его
window.onclick = function(event) {
  if (!event.target.matches('.tablinks')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
















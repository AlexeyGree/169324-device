var link = document.querySelector(".write-us");

var popup = document.querySelector(".modal-connect");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var yname = popup.querySelector("[name=your-name]");
var yemail = popup.querySelector("[name=your-email]");
var ytext = popup.querySelector("[name=your-letter]");

//IE не отрабатывает getItem из-за этого не работает поп-ап перенес в конец кода

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (str_name) {
    if (str_email) {
    yname.value = str_name;
    yemail.value = str_email;
    ytext.focus();
    } else {
      yname.value = str_name;
      yemail.focus();
    }
  } else {
    yname.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!yname.value || !yemail.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("yname", yname.value);
    localStorage.setItem("yemail", yemail.value);
  }
  if (!yname.value) {
    yname.classList.add("invalid__input");
  } else {
    yname.classList.remove("invalid__input");
  }
  if (!yemail.value) {
    yemail.classList.add("invalid__input");
  } else {
    yemail.classList.remove("invalid__input");
  }
  if (!ytext.value) {
    ytext.classList.add("invalid__input");
  } else {
    ytext.classList.remove("invalid__input");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

var mapLink = document.querySelector(".contacts__map-link");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
var str_name = localStorage.getItem("yname");
var str_email = localStorage.getItem("yemail");

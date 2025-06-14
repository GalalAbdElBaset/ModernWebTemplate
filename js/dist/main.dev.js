"use strict";

var up = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    up.style.display = "flex";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

var startTime = new Date('2025-06-08T12:11:00').getTime();

function updateTimer() {
  var now = new Date().getTime();
  var difference = now - startTime;
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(difference % (1000 * 60) / 1000);
  document.querySelector('.days').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000); // error validation

var form = document.getElementById("contact-form");
var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please Write Your E-mail";
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
    alert("Submitted successfully!");
    form.reset();
  }
}); // Smoth the-progress

window.addEventListener("load", function () {
  var spans = document.querySelectorAll(".the-progress span");
  spans.forEach(function (span) {
    span.style.width = span.dataset.width;
  });
}); // change Images 

document.addEventListener("DOMContentLoaded", function () {
  var imageLastItimes = document.querySelectorAll(".list ul li ");
  var previewImage = document.querySelector(".preview img");
  var previewInfo = document.querySelector(".preview .info");
  var imageData = [{
    title: "team-01",
    image: "imgs/team-01.jpg"
  }, {
    title: "team-02",
    image: "imgs/team-02.jpg"
  }, {
    title: "Image preview",
    image: "imgs/video-preview.jpg"
  }, {
    title: "cat-06",
    image: "imgs/cat-06.jpg"
  }, {
    title: "cat-03",
    image: "imgs/cat-03.jpg"
  }, {
    title: "cat-04",
    image: "imgs/cat-04.jpg"
  }, {
    title: "cat-05",
    image: "imgs/cat-05.jpg"
  }];
  imageLastItimes.forEach(function (item, index) {
    item.addEventListener("click", function () {
      imageLastItimes.forEach(function (li) {
        return li.classList.remove("active");
      });
      this.classList.add("active");
      previewImage.src = imageData[index].image;
      previewInfo.textContent = imageData[index].title;
    });
  });
}); // Increament Number 

window.addEventListener("load", function () {
  var _this = this;

  var Numbers = document.querySelectorAll(".stats .box .number");
  Numbers.forEach(function (num) {
    var number = num.dataset.number;

    var _loop = function _loop(i) {
      _this.setTimeout(function () {
        num.textContent = i;
      }, i * 10);
    };

    for (var i = 0; i <= number; i++) {
      _loop(i);
    }
  });
});
//# sourceMappingURL=main.dev.js.map

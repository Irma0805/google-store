document.addEventListener("DOMContentLoaded", function() {

  // imagen principal
  const mainImage = document.getElementById("main-product-image");

  // thumbnails
  const thumbnails = document.querySelectorAll(".thumbnails img");

  thumbnails.forEach(thumb => {

    thumb.addEventListener("click", function() {

      const newImage = this.getAttribute("data-image");

      mainImage.src = newImage;

    });

  });

});
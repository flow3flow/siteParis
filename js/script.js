
      let carousel = document.querySelector(".carousel");
      let pictures = document.querySelector(".item");
      let currdeg = 0;


      function rotate(e) {
        if (e.target.className === "prev") {
          currdeg = currdeg - 120;
        }
        if (e.target.className === "next") {
          currdeg = currdeg + 120;
        }
        carousel.style.transform = "rotateY(" + currdeg + "deg)";
        pictures.style.transform = "rotateY(" + -currdeg + "deg)";
      };
      
      const a = document.querySelector(".next");
      a.addEventListener("click", rotate);
      const b = document.querySelector(".prev");
      b.addEventListener("click", rotate);

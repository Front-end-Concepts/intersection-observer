const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      //   console.log("Element:", entry.target);
      //   console.log("Is intersecting:", entry.isIntersecting);
      entry.target.classList.toggle("show", entry.isIntersecting);
      //   if (entry.isIntersecting) observer.unobserve(entry.target); To stop animating if scroll up
    });
  }
  //   {
  //     rootMargin: "10px",
  //   }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

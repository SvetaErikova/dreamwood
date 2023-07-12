
/* Page navigation Company */

let block_with_navigation = document.querySelectorAll(".js-page_navigation");

if ( block_with_navigation ) {

  let anchor_links = document.querySelectorAll('.js-anchor_link');

  anchor_links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      let hash = event.currentTarget.hash.substring(1);
      let target = document.getElementById(hash);

      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    });
  });

  let callback = (entries, observer) => {
    entries.forEach(entry => {
      let link = document.querySelector("a[href='#"+ entry.target.id +"']");

      if ( entry.isIntersecting ) {
        link.classList.add("is_active")

      } else {
        link.classList.remove("is_active")
      }

    })
  }

  let observer = new IntersectionObserver(callback, {
    threshold: [0.5]
  });


  window.addEventListener("scroll", (event) => {

    anchor_links.forEach(link => {

      let hash = link.hash.substring(1)

      let section = document.getElementById(hash);
      if ( section ) observer.observe(section);
    });

  });
}

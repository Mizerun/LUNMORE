document.addEventListener("DOMContentLoaded", function() {
    const navbarToggle = document.querySelector("#navbar-toggle");
    const navbarMenu = document.querySelector("#navbar-menu");
    const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
    let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
    
    const toggleNavbarVisibility = () => {
      isNavbarExpanded = !isNavbarExpanded;
      navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    };
    
    navbarToggle.addEventListener("click", toggleNavbarVisibility);
    
    navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
    navbarMenu.addEventListener("click", toggleNavbarVisibility);
  });
  window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

document.getElementById("commentForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;
  const photo = document.getElementById("preview").src;

  const displayedComment = document.createElement("div");
  displayedComment.classList.add("comment");
  displayedComment.innerHTML = `
      <strong>${name}</strong> (${email}): ${comment}
      <br>
      <img src="${photo}" alt="Uploaded photo" class="preview-img">
  `;
  
  document.getElementById("comments").appendChild(displayedComment);

  document.getElementById("commentForm").reset();
  document.getElementById("preview").style.display = "none";
});

function previewImage(event) {
  const preview = document.getElementById("preview");
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function() {
      preview.src = reader.result;
      preview.style.display = "block";
  }

  if (file) {
      reader.readAsDataURL(file);
  }
}
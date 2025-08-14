// Make header sticky on scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed", "top-0", "left-0", "right-0", "z-50");
  } else {
    header.classList.remove("fixed", "top-0", "left-0", "right-0", "z-50");
  }
});

// JS for modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll(".modal-target").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

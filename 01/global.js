window.addEventListener("load", function () {
  const showMoreBtn = document.querySelector("#more_text_link");
  showMoreBtn.addEventListener("click", () => {
    const textToReveal = document.querySelector("#more_text_content");
    textToReveal.style.display = "block";
    showMoreBtn.style.display = "none";
  });
});

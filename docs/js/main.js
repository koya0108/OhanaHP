const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");
  });
});

const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach((el) => observer.observe(el));

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");

  if (!loading) return;

  const isLoadingShown = sessionStorage.getItem("loadingShown");

  if (isLoadingShown) {
    loading.style.display = "none";
    return;
  }

  setTimeout(() => {
    loading.classList.add("fade-out");
    sessionStorage.setItem("loadingShown", "true");
  }, 600);
});
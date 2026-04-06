// Scroll Animation
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity-100", "translate-y-0");
    }
  });
});

elements.forEach((el) => {
  el.classList.add("opacity-0", "translate-y-10", "transition", "duration-700");
  observer.observe(el);
});

// Scroll menu active
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("text-blue-500");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("text-blue-500");
    }
  });
});

// Button View my work
document.querySelector("#view-work-btn").onclick = () => {
  document.querySelector("#Projects").scrollIntoView({
    behavior: "smooth",
  });
};

// Button get in touch
document.querySelector("#contact-btn").onclick = () => {
  document.querySelector("#Contact").scrollIntoView({
    behavior: "smooth",
  });
};

// Form validation
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");

  let valid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      valid = false;
      input.classList.add("border-red-500");
    } else {
      input.classList.remove("border-red-500");
    }
  });

  if (valid) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Please fill all fields!");
  }
});

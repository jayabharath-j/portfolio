// ========================================
// 1. GET HTML ELEMENTS
// ========================================

const themeToggle = document.getElementById("themeToggle");

const menuToggle = document.getElementById("menuToggle");

const nav = document.getElementById("nav");

// ========================================
// 2. LOAD SAVED THEME
// ========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

// ========================================
// 3. UPDATE THEME ICON
// ========================================

function updateThemeIcon() {
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀";
  } else {
    themeToggle.textContent = "☾";
  }
}

updateThemeIcon();

// ========================================
// 4. THEME TOGGLE
// ========================================

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }

  updateThemeIcon();
});

// ========================================
// 5. MOBILE MENU
// ========================================

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});

// ========================================
// 6. CLOSE MOBILE MENU
// ========================================

const navLinks = nav.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});

// ========================================
// 7. SCROLL REVEAL
// ========================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

// ========================================
// 8. APPLY SCROLL REVEAL
// ========================================

revealElements.forEach(function (element) {
  observer.observe(element);
});

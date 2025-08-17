window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var header = document.querySelector("header");

  // Calculate the scroll position relative to the document height
  var scrollPercentage =
    (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

  // Change the header color when scrolled 50% of the page
  if (scrollPercentage >= 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function downloadResume() {
  var link = document.createElement("a");
  link.href = "asset/BE.pdf";
  link.download = "GOWTHAM_KUMAR_SOLLETI.pdf";
  link.click();
}

function downloadaws() {
  var link = document.createElement("a");
  link.href = "asset/AWS Certified Developer - Associate certificate.pdf";
  link.download = "GOWTHAM_AWS_Certificate.pdf";
  link.click();
}
function togglePortfolio() {
  var moreCards = document.querySelectorAll(".portfolio-card.hidden");
  moreCards.forEach((card) => {
    card.classList.remove("hidden");
  });
  var viewMoreButton = document.querySelector("button");
  viewMoreButton.style.display = "none";
}

function togglePortfolio() {
  var portfolioCards = document.querySelectorAll(".portfolio-card");
  portfolioCards.forEach(function (card) {
    card.classList.toggle("show");
    // Check if the card is being hidden, then show the button
    if (!card.classList.contains("show")) {
      card.querySelector("button").style.display = "inline-block";
    }
  });
  var viewMoreButton = document.querySelector("button");
  if (viewMoreButton.textContent === "View More") {
    viewMoreButton.textContent = "View Less";
  } else {
    viewMoreButton.textContent = "View More";
  }
}
function toggleCard(card) {
  card.classList.toggle("flipped");
}

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to flip the card after 1 second and then unflip it
function flipAndUnflipFirstCard() {
  // Get the first portfolio card
  const firstCard = document.querySelector(".portfolio-card");

  // Add the flipped class after 1 second if the portfolio section is in viewport
  if (isInViewport(firstCard)) {
    setTimeout(() => {
      firstCard.classList.add("flipped");
    }, 2000);

    // Remove the flipped class after 2 seconds to unflip the card
    setTimeout(() => {
      firstCard.classList.remove("flipped");
    }, 3000);
  }
}

// Call the flipAndUnflipFirstCard function when the window is scrolled
window.addEventListener("scroll", flipAndUnflipFirstCard);

// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = mobileMenuBtn.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navLinks.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  });
});

// Project Data
// const projects = [
//   {
//     title: "Portfolio Website",
//     subtitle: "Personal Portfolio",
//     description:
//       "A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and interactive elements.",
//     image: "asset/portfolio.png",
//     category: "web",
//     techStack: ["HTML5", "CSS3", "JavaScript"],
//     links: {
//       live: "#",
//       github: "https://github.com/gowtham012/Portfolio",
//     },
//   },
//   {
//     title: "Decentralized Exchange",
//     subtitle: "Web3 Project",
//     description:
//       "A decentralized cryptocurrency exchange platform built on Ethereum blockchain with smart contracts.",
//     image: "asset/dex.png",
//     category: "blockchain",
//     techStack: ["Solidity", "Web3.js", "React", "Node.js"],
//     links: {
//       live: "#",
//       github: "https://github.com/gowtham012/dex",
//     },
//   },
//   {
//     title: "Cloud File Storage",
//     subtitle: "AWS Cloud Project",
//     description:
//       "Secure file storage system built using AWS S3, Lambda, and API Gateway with user authentication.",
//     image: "asset/cloud-storage.png",
//     category: "cloud",
//     techStack: ["AWS", "Node.js", "React", "MongoDB"],
//     links: {
//       live: "#",
//       github: "https://github.com/gowtham012/cloud-storage",
//     },
//   },
// ];

// Experience Data
const experiences = [
  {
    date: "2023 - Present",
    title: "Software Developer",
    company: "Self-Employed",
    description:
      "Working on innovative web3 and cloud projects, focusing on decentralized applications and cloud architecture.",
    tags: ["Web3", "AWS", "React", "Node.js"],
  },
  {
    date: "2022 - 2023",
    title: "Graduate Research Assistant",
    company: "University",
    description:
      "Conducted research in cloud computing and distributed systems, published papers in leading conferences.",
    tags: ["Research", "Cloud Computing", "Academic Writing"],
  },
  {
    date: "2021 - 2022",
    title: "Software Engineering Intern",
    company: "Tech Company",
    description:
      "Developed and maintained web applications, worked with modern JavaScript frameworks and cloud services.",
    tags: ["JavaScript", "React", "AWS", "Node.js"],
  },
];

// DOM Elements
const portfolioGrid = document.querySelector(".portfolio-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const experienceTimeline = document.querySelector(".experience-timeline");
const mouseTrail = document.querySelector(".mouse-trail");
const scrollProgress = document.querySelector(".scroll-progress");
const loadingBar = document.querySelector(".loading-bar");
const navContainer = document.querySelector(".nav-container");

// Create Project Cards
function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "portfolio-card";
  card.dataset.category = project.category;

  card.innerHTML = `
    <div class="project-category">${project.subtitle}</div>
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="tech-stack">
      ${project.techStack
        .map((tech) => `<span class="tech-item">${tech}</span>`)
        .join("")}
    </div>
    <div class="project-links">
      <a href="${project.links.live}" class="project-link">
        <i class="ri-external-link-line"></i>
        <span>Live Demo</span>
      </a>
      <a href="${project.links.github}" class="project-link">
        <i class="ri-github-line"></i>
        <span>Source Code</span>
      </a>
    </div>
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}">
      <div class="image-overlay"></div>
    </div>
  `;

  return card;
}

// Create Experience Items
function createExperienceItem(experience) {
  const item = document.createElement("div");
  item.className = "timeline-item";

  item.innerHTML = `
    <div class="timeline-content">
      <span class="timeline-date">${experience.date}</span>
      <h3 class="timeline-title">${experience.title}</h3>
      <h4 class="timeline-subtitle">${experience.company}</h4>
      <p class="timeline-description">${experience.description}</p>
      <div class="timeline-tags">
        ${experience.tags
          .map((tag) => `<span class="timeline-tag">${tag}</span>`)
          .join("")}
      </div>
    </div>
    <div class="timeline-dot"></div>
  `;

  return item;
}

// Initialize Portfolio Grid
function initPortfolio() {
  projects.forEach((project) => {
    portfolioGrid.appendChild(createProjectCard(project));
  });
}

// Initialize Experience Timeline
function initExperience() {
  experiences.forEach((experience) => {
    experienceTimeline.appendChild(createExperienceItem(experience));
  });
}

// Filter Projects
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".portfolio-card").forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Custom Cursor
const cursor = document.querySelector(".custom-cursor");
let cursorVisible = true;
let cursorEnlarged = false;

// Update cursor position with smooth animation
const onMouseMove = (e) => {
  requestAnimationFrame(() => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
};

// Ensure cursor is always visible
document.addEventListener("mousemove", onMouseMove);

// Handle cursor enlargement
const cursorEnlarge = () => {
  if (!cursorEnlarged) {
    cursorEnlarged = true;
  }
};

const cursorReset = () => {
  if (cursorEnlarged) {
    cursorEnlarged = false;
  }
};

// Add hover effect for all clickable elements
const clickableElements = document.querySelectorAll(
  "a, button, .tech-item, .project-link, .nav-links a, .social-link, .scroll-dot, .submit-btn, .hero-cta, .filter-btn, .mobile-menu-btn, .certification-badge"
);

clickableElements.forEach((elem) => {
  elem.addEventListener("mouseover", cursorEnlarge);
  elem.addEventListener("mouseout", cursorReset);
});

// Add text cursor for text input elements
const textElements = document.querySelectorAll(
  'input[type="text"], input[type="email"], textarea, [contenteditable]'
);

textElements.forEach((elem) => {
  elem.classList.add("text-select");
});

// Scroll Progress
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  scrollProgress.style.transform = `scaleX(${scrolled / 100})`;

  if (window.scrollY > 50) {
    navContainer.classList.add("scrolled");
  } else {
    navContainer.classList.remove("scrolled");
  }
});

// Intersection Observer for Timeline Items
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Floating Elements Animation
function createFloatingElements() {
  const container = document.querySelector(".floating-elements");
  const numElements = 10;

  for (let i = 0; i < numElements; i++) {
    const element = document.createElement("div");
    element.className = "floating-element";

    const size = Math.random() * 100 + 50;
    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;

    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = `${startX}px`;
    element.style.top = `${startY}px`;
    element.style.setProperty("--moveX", `${Math.random() * 200 - 100}px`);
    element.style.setProperty("--moveY", `${Math.random() * 200 - 100}px`);

    container.appendChild(element);
  }
}

// Contact Form Handling
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const formProps = Object.fromEntries(formData);

  // Add loading state to button
  const submitBtn = contactForm.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="ri-loader-4-line"></i> Sending...';
  submitBtn.disabled = true;

  try {
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message
    alert("Message sent successfully!");
    contactForm.reset();
  } catch (error) {
    // Show error message
    alert("Failed to send message. Please try again.");
  } finally {
    // Reset button state
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
});

// Initialize Everything
document.addEventListener("DOMContentLoaded", () => {
  initPortfolio();
  initExperience();
  createFloatingElements();

  // Observe timeline items
  document.querySelectorAll(".timeline-item").forEach((item) => {
    observer.observe(item);
  });

  // Hide loading bar after page load
  setTimeout(() => {
    loadingBar.style.display = "none";
  }, 2000);
});

// Portfolio scroll indicators
const scrollDots = document.querySelectorAll(".scroll-dot");
const cards = document.querySelectorAll(".portfolio-card");

// Update active dot based on scroll position
portfolioGrid.addEventListener("scroll", () => {
  const scrollPosition = portfolioGrid.scrollLeft;
  const cardWidth = cards[0].offsetWidth + 32; // Including gap
  const activeIndex = Math.round(scrollPosition / cardWidth);

  scrollDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeIndex);
  });
});

// Scroll to card when clicking dots
scrollDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const cardWidth = cards[0].offsetWidth + 32; // Including gap
    portfolioGrid.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  });
});

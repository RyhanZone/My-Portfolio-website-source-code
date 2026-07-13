// header related
let menuOpenerIcon = document.getElementsByClassName("bi-list")[0];
let header_right = document.getElementsByClassName("right")[0];

menuOpenerIcon.addEventListener("click", menuopenFunction);

function menuopenFunction() {
  header_right.classList.toggle("active");
}

// Resume related
let resumebtns = document.querySelectorAll(".expaeance-btn");
let sections = document.querySelectorAll(".RR-section");

resumebtns.forEach((btn, indx) => {
  btn.addEventListener("click", () => {
    resumebtns.forEach((b) => {
      b.classList.remove("active-border");
    });
    sections.forEach((b) => {
      b.classList.remove("active-section");
    });

    sections[indx].classList.add("active-section");
    btn.classList.add("active-border");
  });
});
// portfolio section related
let proarray = [
  {
    no: "01",
    title: "Full Stack Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tecnology: "HTML, CSS, JS, PHP",
    photo: "images/portfolio1.jpg",
  },
  {
    no: "02",
    title: "Frontend Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tecnology: "HTML, CSS, JS",
    photo: "images/portfolio2.jpg",
  },
  {
    no: "03",
    title: "Frontend Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tecnology: "HTML, TailwindCSS, JS",
    photo: "images/portfolio3.jpg",
  },
  {
    no: "04",
    title: "Full Stack Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tecnology: "HTML, CSS, JS",
    photo: "images/portfolio4.jpg",
  },
];

let projectno = document.getElementById("projectNo");
let projecttype = document.getElementById("protype");
let projectdescription = document.getElementById("prodes");
let usestecnology = document.getElementById("usestec");
let projectscreenshot = document.getElementById("pross");

let leftarrowbtn = document.getElementsByClassName("arrow")[0];
let rightarrowbtn = document.getElementsByClassName("arrow")[1];

let procount = 0;

// 🔹 function to update UI
function updateProject() {
  projectno.innerText = proarray[procount].no;
  projecttype.innerText = proarray[procount].title;
  projectdescription.innerText = proarray[procount].description;
  usestecnology.innerText = proarray[procount].tecnology;
  projectscreenshot.src = proarray[procount].photo;
}

function updateArrows() {
  // left arrow
  if (procount === 0) {
    leftarrowbtn.classList.add("disabled");
  } else {
    leftarrowbtn.classList.remove("disabled");
  }

  // right arrow
  if (procount === 3) {
    rightarrowbtn.classList.add("disabled");
  } else {
    rightarrowbtn.classList.remove("disabled");
  }
  if (procount > 0 && procount < 3) {
    leftarrowbtn.classList.add("main-c-border");
    rightarrowbtn.classList.add("main-c-border");
  } else {
    leftarrowbtn.classList.remove("main-c-border");
    rightarrowbtn.classList.remove("main-c-border");
  }
}
updateArrows();
// initial load
updateProject();

// left arrow
leftarrowbtn.addEventListener("click", () => {
  if (procount > 0) {
    procount--;
  } else if (procount == 0) {
    return;
  }
  updateProject();
  updateArrows();
});

// right arrow
rightarrowbtn.addEventListener("click", () => {
  if (procount < 3) {
    procount++;
  } else if (procount == 4) {
    return;
  }
  updateProject();
  updateArrows();
});
/* ======== pag transition related ========= */
// let homeMenu = document.getElementById("homeMI");
// let serviceMenu = document.getElementById("serviceMI");
// let resumeMenu = document.getElementById("resumeMI");
// let portfolioMenu = document.getElementById("portfolioMI");
// let contactMenu = document.getElementById("contactMI");
// // pages
// let homepage = document.getElementsByClassName("home")[0];
// let servicepage = document.getElementsByClassName("service")[0];
// let resumepage = document.getElementsByClassName("resume")[0];
// let portfoliopage = document.getElementsByClassName("portfolio")[0];
// let contactpage = document.getElementsByClassName("contact")[0];

// homeMenu.addEventListener("click", () => {
//   homeMenu.style.color = 'var(--main-color)';
//   homepage.style.display = "flex";
//   servicepage.style.display = "none";
//   resumepage.style.display = "none";
//   portfoliopage.style.display = "none";
//   contactpage.style.display = "none";
// });
// serviceMenu.addEventListener("click", () => {
//   homeMenu.style.color = 'var(--main-color)';
//   homepage.style.display = "none";
//   servicepage.style.display = "flex";
//   resumepage.style.display = "none";
//   portfoliopage.style.display = "none";
//   contactpage.style.display = "none";
// });
// resumeMenu.addEventListener("click", () => {
//   homeMenu.style.color = 'var(--main-color)';

//   homepage.style.display = "none";
//   servicepage.style.display = "none";
//   resumepage.style.display = "flex";
//   portfoliopage.style.display = "none";
//   contactpage.style.display = "none";
// });
// portfolioMenu.addEventListener("click", () => {
//   homeMenu.style.color = 'var(--main-color)';

//   homepage.style.display = "none";
//   servicepage.style.display = "none";
//   resumepage.style.display = "none";
//   portfoliopage.style.display = "flex";
//   contactpage.style.display = "none";
// });
// contactMenu.addEventListener("click", () => {
//   homeMenu.style.color = 'var(--main-color)';

//   homepage.style.display = "none";
//   servicepage.style.display = "none";
//   resumepage.style.display = "none";
//   portfoliopage.style.display = "none";
//   contactpage.style.display = "flex";
// });

// menus
let homeMenu = document.getElementById("homeMI");
let serviceMenu = document.getElementById("serviceMI");
let resumeMenu = document.getElementById("resumeMI");
let portfolioMenu = document.getElementById("portfolioMI");
let contactMenu = document.getElementById("contactMI");

// pages
let homepage = document.getElementsByClassName("home")[0];
let servicepage = document.getElementsByClassName("service")[0];
let resumepage = document.getElementsByClassName("resume")[0];
let portfoliopage = document.getElementsByClassName("portfolio")[0];
let contactpage = document.getElementsByClassName("contact")[0];

// menu + page mapping
const menuMap = [
  { menu: homeMenu, page: homepage },
  { menu: serviceMenu, page: servicepage },
  { menu: resumeMenu, page: resumepage },
  { menu: portfolioMenu, page: portfoliopage },
  { menu: contactMenu, page: contactpage },
];

// function to reset
function resetAll() {
  menuMap.forEach((item) => {
    item.menu.style.color = "var(--white-color)";
    item.page.style.display = "none";
  });
}

// click handler
menuMap.forEach((item) => {
  item.menu.addEventListener("click", () => {
    resetAll();
    item.menu.style.color = "var(--main-color)";
    item.page.style.display = "flex";
  });
});

// default state
resetAll();
homeMenu.style.color = "var(--main-color)";
homepage.style.display = "flex";


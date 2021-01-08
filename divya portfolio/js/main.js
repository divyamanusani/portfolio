/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// show menu
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
})

//hide menu
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
});


// hide menu on clicking links
const navLinks = document.querySelectorAll('.nav__link');

function closeMenuNav() {
    navMenu.classList.remove('show');
}

navLinks.forEach(link => {
    link.addEventListener('click', closeMenuNav);
});


/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;

        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active');
        }
        else {
            document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active');
        }
    })
}

let skillsObj = [
    { sub: 'js', val: '80' },
    { sub: 'bootstrap', val: '60' },
    { sub: 'react', val: '40' },
    { sub: 'html', val: '80' },
    { sub: 'css', val: '70' },
    { sub: 'node', val: '60' },
    { sub: 'sql', val: '80' },
    { sub: 'mongo', val: '60' },
    { sub: 'oops', val: '70' },
    { sub: 'ds', val: '40' }
]



var i = 0;
function move() {
    if (i == 0) {
        i = 1;
        skillsObj.forEach((skill) => {
            var elem = document.querySelector(`.skills__${skill.sub}`);
            var width = 1;
            var id = setInterval(frame, 20);
            function frame() {
                if (width >= skill.val) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                }
            }
        })

    }

}

var modal = document.querySelector("#modal");
var modalOverlay = document.querySelector("#modal-overlay");
var closeButton = document.querySelector("#close-button");
var openButtons = document.querySelectorAll(".open-button");

closeButton.addEventListener("click", function () {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

for (let i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener("click", function () {
        modal.style.display = 'block';
        modalOverlay.style.display = 'block';
    });
}

// modal description
const projectWorks = [
    {
        id: 0,
        name: 'Cricket Game',
        desp: "Cricket is a fun game where there are 2 players.On clicking on HIT button,the runs are generated\nand will be entered as scores.Each player has only 20 sec to play the game.The player with highest score wins the game and the results are\ndisplayed.",
        technology: 'HTML, CSS, JavaScript, TypeScript, OOPS',
        webUrl: 'https://divya-cricket-oops.netlify.app/',
        gitUrl: 'https://github.com/divyamanusani/guvi/tree/master/cricket'
    },

    {
        id: 1,
        name: 'Calculator',
        desp: "A simple Calculator Application which is used for basic mathematical operations.",
        technology: 'HTML, CSS, JavaScript',
        webUrl: 'https://calculator-divya.netlify.app/',
        gitUrl: 'https://github.com/divyamanusani/guvi/tree/master/sep%2018%20tasks'
    },

    {
        id: 2,
        name: 'Music Player',
        desp: `A music album where the songs are fetched from Shazam Api.This album also contains a search 
        field where one can search for any songs and play them. 
        Multiple playlists can also be created by user.`,
        technology: 'HTML, CSS, JavaScript, TypeScript, OOPS',
        webUrl: 'https://github.com/divyamanusani/musicPlayer',
        gitUrl: 'https://divya-music-player.netlify.app/'
    },

    {
        id: 3,
        name: 'The Rising India',
        desp: `This is a Rising India newspaper which displays 
        news as in newspapers.`,
        technology: 'Bootstrap, CSS, JavaScript',
        webUrl: 'https://bootstrap-news.netlify.app/',
        gitUrl: 'https://github.com/divyamanusani/guvi/tree/master/sep%2016%20tasks'
    },

    {
        id: 4,
        name: 'ToDo App React',
        desp: "A todo application in React where we can add,edit,strike or delete tasks.",
        technology: 'React, CSS, JavaScript',
        webUrl: 'https://divya-reacttodoapp.netlify.app',
        gitUrl: 'https://github.com/divyamanusani/React-TodoApp'
    },

    {
        id: 5,
        name: 'TV Remote',
        desp: "TV remote application in OOPS where the remote can operate many functionalities like volume,channels,power on TV.",
        technology: 'HTML, CSS, JavaScript, TypeScript, OOPS',
        webUrl: 'https://divya-tv-oops-js.netlify.app/',
        gitUrl: 'https://github.com/divyamanusani/guvi/tree/master/oct%208%20tasks'
    },

    {
        id: 6,
        name: 'Weather Report',
        desp: "This shows current weather report of all countries using openWeatherApi.",
        technology: 'Bootstrap, JavaScript, HTML, CSS',
        webUrl: 'https://asyncawait999.netlify.app/',
        gitUrl: 'https://github.com/divyamanusani/guvi/tree/master/oct%201%20tasks'
    },

    {
        id: 7,
        name: 'NewYork Times News',
        desp: "This website brings you the latest news from New York Times Api with a fresh design and responsive view.",
        technology: 'HTML, CSS, JavaScript,Bootstrap',
        webUrl: 'https://newyork-times-api-mds.netlify.app',
        gitUrl: 'https://github.com/divyamanusani/new-york-times-api'
    },
]

// let values=document.querySelectorAll('.works_home__button');
// console.log(values);

function openModal(index) {
    let title = document.querySelector('.project-title h1');
    title.innerHTML = projectWorks[index].name;
    let desp = document.querySelector('.project-desc p');
    desp.innerHTML = projectWorks[index].desp;
    let tech = document.querySelector('.project-tech');
    tech.innerHTML = projectWorks[index].technology;
}

let webLink = document.querySelector('.project-weblink');
let gitlink = document.querySelector('.project-gitlink');

webLink.addEventListener('click', function () {
    let title = document.querySelector('.project-title h1');

    projectWorks.forEach((project) => {

        if (project.name === title.innerHTML) {
            webLink.href = project.webUrl;
        }
    });

    return false;
});

gitlink.addEventListener('click', function () {
    let title = document.querySelector('.project-title h1');

    projectWorks.forEach((project) => {

        if (project.name === title.innerHTML) {
            gitlink.href = project.gitUrl;
        }
    });

    return false;
});
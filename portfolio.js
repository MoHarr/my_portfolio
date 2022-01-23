/*
    Setting variables
****************************************************************/
let active = document.querySelector('.active');

const tabList = document.querySelectorAll('li');

const sBar = document.querySelectorAll(".bar_fill");
const python = 80;
const java = 60;
const c = 45;
const git = 55;
const javascript = 30;
const html = 25;
const css = 20;

var skillsMap = new Map([
    ["python", 80],
    ["java", 60],
    ["c", 45],
    ["git", 55],
    ["javascript", 30],
    ["html", 25],
    ["css", 20]

]);

const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
/****************************************************************/

/* 
    This code is used for highlighting tabs by clicking
****************************************************************/
function toggleTab(elem) {
    active.classList.remove('active');
    elem.classList.add('active')
    active = elem;

}

tabList.forEach( tab => {
    let currTab = tab;
    tab.addEventListener('click', function() {
        toggleTab(currTab);
    }, false);
});
/****************************************************************/

/*
    This code is for highlighting tabs by scrolling
****************************************************************/
window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const headerHeight = header.clientHeight;
        yPosition = window.scrollY + headerHeight;
        if(yPosition >= sectionTop) {
            current = section.getAttribute('id');
        }
        if(current === "skills") {
            sBar.forEach( bar => {
                bar_id = bar.getAttribute('id');
                percentage = skillsMap.get(bar_id);
                bar.style.width = `${percentage}%`;
            });
        }
        else {
            sBar.forEach( bar => {
                bar.style.width = `0%`;
            });
        }
    });
    tabList.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)) {
            li.classList.add("active")
        }
    });
});







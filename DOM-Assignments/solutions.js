
// Q-2
var productsList = [];

let list = document.querySelectorAll(".as-imagegrid-item");

for (let i of list){productsList.push(i.innerText)}; // 7

console.log(productsList); 
// ['iPhone\nSupport', 'Mac\nSupport', 'iPad\nSupport', 'Watch\nSupport', 
//  'AirPods\nSupport', 'Music\nSupport', 'TV\nSupport']


//Q-3

// const navlist = document.querySelector(".accordion-homepage");
// const newsectiontag = document.createElement("section");
// newsectiontag.classList.add("parent");
// newsectiontag.style.padding = ".875rem 3.25rem .875rem 1.75rem";
// newsectiontag.style.color = "#1f1f1f";
// newsectiontag.style.fontSize = "1rem";
// newsectiontag.style.fontWeight = "500";
// newsectiontag.style.lineHeight = "1.25rem";
// newsectiontag.style.borderTop = "thin solid #a9acaa";

// newsectiontag.style.margin = "0";
// let newfaq = document.createTextNode("My New FAQ");

// newsectiontag.appendChild(newfaq);


// let newsection = document.querySelector(".main-content .article");

// newsection.appendChild(newfaq);

// Q-6

let inputtag = document.querySelector(".glass-search-redesign___2yl_k .searchinput-wrapper___3YrvF .searchinput___19uW0");


function hoverbg() {
    inputtag.style.backgroundColor = "red";
}

inputtag.addEventListener("mouseenter", hoverbg);

hoverbg();

// Q-8

var langs = document.querySelectorAll("#SIvCob a");

console.log(langs);


for(let val=0;val<langs.length;val++)
{ 
        if(val%2 == 0)
        {
            langs[val].remove()
        }
}

//Q-19

var nav = document.querySelector(".navbar-header a");

var navimg = document.querySelector(".navbar-header a img");

navimg.src;
// 'https://in.canon/assets/brand/logo-300-002e45a4aec98fd92899838da9d5560f.png'
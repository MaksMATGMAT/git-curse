console.log('проверка');


setTimeout(() => console.log(123), 1000)
const user = {
    name: 'Maksim',
    age: 31,
    printThis1: function () {
        console.log(this);
    },
    printThis2: () => console.log(this)
}

console.log(user.printThis1());
console.log(user.printThis2());

// const user = {
//     firsName: 'Maks'

// }


// function printSalary(salaary) {
//     return console.log('my salary ' + salaary);
// }
// printSalary();


















// function sum(a, b) {
//     console.log(10, 20);
// }
// sum();

// const sum = (a, b) => {
//     console.log(10, 20);
// }


// sum();












// const car = {
//     model: 'BMW',
//     color: 'Red'
// }
// console.log(car);
// car.color = 'green';
// console.log(car);

// const citties = ['Moscow', 'NNow', 'Ekb', 'NewYork'];

// console.log(citties);

// citties.push('kaliningrad');
// console.log(citties);
// citties.slise('kaliningrad');

// var buttons = document.querySelectorAll('.button');
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {
//         console.log(i);
//     })
// }

// var car = {
//     company: 'tayota',
//     model: 'land',
//     get printCar() {
//         console.log(this.company + ' ' + this.model);
//     },
//     set printCar(text) {
//         console.log("I" + " " + text + " " + this.company);
//     }
// };
// car.printCar;
// car.printCar = 'люблю';
// var dogs = {
//     name: 'Baron',
//     age: 14,
//     weight: 30
// }



// var dog = Object.create({}, {
//     name: {
//         value: 'Baron',
//         enumerable: true
//     },
//     age: {
//         value: 14
//     },
//     weight: {
//         value: 30
//     }
// })

// console.log(dogs);
// console.log(dog);

// var human = {
//     drink: function () {
//         console.log('I can drink');
//     },
//     swim: function () {
//         console.log('I can Swim');
//     }
// }
// var girl = {
//     sleep: function () {
//         console.log('I can sleep');
//     }
// }
// var man = {
//     eat: function () {
//         console.log('I can eat');
//     }
// }
// girl.__proto__ = human;
// man.__proto__ = human
// girl.drink();
// girl.swim();
// man.drink();



// function CreateUsers(name, age, position) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.getSelary = function () {
//         console.log('Hello my frends');
//     }
// }
// CreateUsers.prototype.happyBirthday = function () {
//     console.log('happyBirthday');
// }
// var yura = new CreateUsers('Yura', 30, 'designer');
// console.log(yura);
// yura.happyBirthday();















// function CreateUser(name, age, position) {
//     this.name = name,
//         this.age = age,
//         this.position = position,
//         this.getSalary = function () {
//             console.log('Зарплата получена');
//         }
// }
// CreateUser.prototype.happyBirthday = function () {
//     console.log('HappyBirthDay');
// }
// var yura = new CreateUser('yura', 30, 'designer');
// console.log(yura);
// yura.happyBirthday();


// var smartphone = {
//     company: 'Aple',
//     model: 'iphone',
//     call: function () {
//         console.log('Начинаю набор');
//     }
// }

// console.log(smartphone);













// var mas = new Array();
// console.log(mas);

// mas[0] = 'newYork'
// mas.push('12345');
// console.log(mas);

// var Math







// var myDate = new Date('October 4 1989');
// console.log(myDate);







// var now = new Date();
// console.log(now);
// var theYear = now.getHours();
// console.log(theYear);

// function CreateUser(params) {
//     this.firsName = params.firsName;
//     this.lastName = params.lastName;
//     this.age = params.age;
//     this.job = params.job;
//     this.position = params.position;
// };

// var MaksParam = {
//     firstName: 'Maks',
//     lastName: 'Trikmenidi',
//     age: 31,
//     job: 'frilanse',
//     position: 'Masters'
// }

// var Maks = new CreateUser(MaksParam);
// console.log(Maks);
// console.log(Maks instanceof CreateUser);





// var users = {
//     name: 'Leo',
//     age: 1,
//     weight: 4
// }




// console.log(users);



// function Cat(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//     this.voise = function () {
//         console.log(`miau`);
//     }
// };
// var Leo = new Cat('leo', 1, 4);
// var mars = new Cat('Mars', 2, 100);
// Leo.voise()
// console.log(Leo);
// console.log(mars);




























// console.log(select.options[2].selected);

// var prev = document.getElementById('btn-prev'),
//     next = document.getElementById('btn-next'),
//     slides = document.querySelectorAll('.slide');
// var index = 0;


// function activeSlide(n) {
//     for (slide of slides) {
//         slide.classList.remove('active');
//     }
//     slides[n].classList.add('active');
// }


// function nextSlide() {
//     console.log(index);
//     if (index == slides.length - 1) {
//         index = slides.length - 1;
//     } else {
//         index++;
//         activeSlide(index);
//     }
// }

// function prevSlide() {
//     if (index == 0) {
//         index = 0;
//     } else {
//         index--;
//         activeSlide(index);
//     }
// }
// next.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);


// var btnOpen = document.getElementById('btn-open'),
//     modal = document.getElementById('wrapper-modal'),
//     overlay = document.getElementById('overlay'),
//     btnClose = document.getElementById('btn-close');

// btnOpen.addEventListener('click', function () {
//     modal.classList.add('active');
// });

// function closeModal() {
//     modal.classList.remove('active');
// };
// overlay.addEventListener('click', closeModal);
// btnClose.addEventListener('click', closeModal);








// var tabs = document.getElementById('tabs'),
//     content = document.querySelectorAll('.content');

// function changeClass(el) {
//     for (var i = 0; i < tabs.children.length; i++) {
//         tabs.children[i].classList.remove('active');
//     }  // мы прошлись по псевдомасиву tabs и удалили все active
//     el.classList.add('active'); // добавляем при клике класс active
// }
// tabs.addEventListener('click', function (e) {
//     var currentTab = event.target.dataset.btn;
//     // значение элемента на который нажали и его значения из data.btn
//     changeClass(event.target); // закинули элемент на который нажали
//     for (var i = 0; i < content.length; i++) {
//         content[i].classList.remove('active');
//         if (content[i].dataset.content === currentTab) {
//             content[i].classList.add('active');
//         }
//     }
// });























// var tabs = document.getElementById('tabs'),
//     content = document.querySelectorAll('.content');

// function changeClass(el) {
//     for (var i = 0; i < tabs.children.length; i++) {
//         tabs.children[i].classList.remove('active');
//     }
//     el.classList.add('active');
// }

// tabs.addEventListener('click', function (e) {
//     var currTab = event.target.dataset.btn;
//     changeClass(event.target);
//     for (var i = 0; i < content.length; i++) {
//         content[i].classList.remove('active');
//         if (content[i].dataset.content === currTab) {
//             content[i].classList.add('active');
//         }
//     }
// });




// GENERATOR
// var rangeTl = document.getElementById('tlr'),
//     rangeTr = document.getElementById('trr'),
//     rangeBl = document.getElementById('blr'),
//     rangeBr = document.getElementById('brr');
// console.log(rangeTl);
// var resultTl = document.getElementById('result-tlr'),
//     resultTr = document.getElementById('result-trr'),
//     resultBl = document.getElementById('result-blr'),
//     resultBr = document.getElementById('result-brr');
// console.log(resultTl);
// var input = document.querySelectorAll('.input');
// var cube = document.getElementById('cube');

// var resultFinish = document.getElementById('resultFinish');
// var copyResult = document.getElementById('copyResult');
// resultFinish.innerHTML = "000"
// function changeRadius() {
//     resultTl.innerHTML = rangeTl.value;
//     resultTr.innerHTML = rangeTr.value;
//     resultBl.innerHTML = rangeBl.value;
//     resultBr.innerHTML = rangeBr.value;
//     cube.style.borderRadius = rangeTl.value + 'px ' + rangeTr.value + 'px ' + rangeBr.value + 'px ' + rangeBl.value + 'px ';
//     resultFinish.innerHTML = cube.style.borderRadius;
// }

// for (node of input) {
//     node.addEventListener('input', changeRadius);
// }
// copyResult.addEventListener{

// }
// resultFinish.innerHTML = cube.style.borderRadius;













// var input = document.getElementById('input');
// input.addEventListener('input', function (param) {
//     console.log(param);
// })
// console.log(input);








// var boxWrapper = document.querySelector('.box-wrapper');

// boxWrapper.addEventListener('mouseover', function () {
//     boxWrapper.classList.toggle('yellow');
// });
// // ----------------------гамбургер-----------------------------------
// var cubeWrapper = document.querySelector('.cube-wrapper');
// cubeWrapper.addEventListener('click', function (event) {
//     var target = event.target;
//     console.log(target);
//     target.classList.toggle('greenz');
// })
// // ----------------------/гамбургер----------------------------------
// var PreventDefouts = document.getElementById('PreventDef');
// PreventDefouts.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('Ссылка не перейшла');
// });
// var div = document.getElementById('div'),
//     div2 = document.getElementById('div2'),
//     ul = document.getElementById('ul'),
//     li = document.getElementById('li');
// div.addEventListener('click', function (event) {
//     event.stopPropagation();
//     console.log('вы нажали на div');
// });
// div2.addEventListener('click', function (event) {
//     event.stopPropagation();
//     console.log('вы нажали на div2');
// });
// ul.addEventListener('click', function (event) {
//     event.stopPropagation();
//     console.log('вы нажали на ul');
// })
// li.addEventListener('click', function (event) {
//     event.stopPropagation();
//     console.log('вы нажали на li3');
// })
// var ul = document.querySelector('.ul'),
//     p = document.getElementById('p'),
//     li2 = document.querySelector('.li-3');
// ul.addEventListener('click', function () {
//     console.log(event.target);
// });
// li3.addEventListener('click', function () {
//     console.log('Ты нажал на Li-3');
// })
// var wrapper = document.getElementById('wrapper'),
//     cube = document.getElementById('cube'),
//     btn = document.getElementById('btn');
// console.log(wrapper.offsetTop);
// console.log(wrapper.offsetLeft);
// console.log(cube.offsetTop);
// console.log(cube.offsetLeft);
// btn.addEventListener('click', function () {
    // cube.scrollTop = cube.scrollTop - cube.scrollTop;
// });
// cube.addEventListener('scroll', function () {
    // console.log(cube.scrollTop);
// })
// console.log(cube.scrollTop);
// console.log('-----------------------');
// console.log(cube.scrollHeight);
// console.log(cube.scrollWidth);
// console.log('______');
// console.log(cube.clientWidth);
// console.log(cube.clientHeight);

// console.log(cube.offsetParent);
// console.log(wrapper.offsetWidth);
// console.log(wrapper.offsetHeight);
// console.log(cube.offsetWidth);
// console.log(cube.offsetHeight);



// var btn = document.getElementById('btn');
// style = getComputedStyle(btn);
// console.log(style.fontSize);
// console.log(getComputerStyle(btn));
// console.log(getComputedStyle(div));



// var div = document.querySelector('.div');
// var btn = document.querySelector('.btn');
// var divClass = div.className;
// div.className = 'div-green';
// div.classList.add('div-big');


// btn.addEventListener('mousemove', function () {
//     div.classList.toggle('div-big');
// })

// btn.style.fontSize = 50 + 'px';
// btn.style.fontSize = '200px';
// var div = document.querySelector('.div');
// var clon = div.cloneNode(true);
// div.prepend(clon);
// var div = document.createElement('div');
// var p = document.createElement('p');
// p.innerHTML = "its P";
// div.innerHTML = 'Hello world';
// console.log(div);
// document.body.append(div);
// div.replaceWith(p);

// var parent = document.createElement("div");
// var child = document.createElement("p");
// parent.appendChild(child);
// var span = document.createElement("span");
// console.log(span);
// child.replaceWith(span);

// console.log(parent.outerHTML);
// "<div><span></span></div>"
// var dvi1 = document.getElementById('div1'),
//     dvi2 = document.getElementById('div1'),
//     dvi3 = document.getElementById('div1');
// var arr = [div1, div2, div3];
// var btn = document.getElementById('btn');
// btn.onclick = function () {
//     arr[0].remove();
//     arr.splice(0, 1);
// }

// var li1 = document.getElementById('li-1');
// var li3 = document.getElementById('li-3');
// var li5 = document.getElementById('li-5');

// var li2 = document.createElement('li');
// var li4 = document.createElement('li');
// li2.innerHTML = '2';
// li4.innerHTML = '4';
// li1.after(li2);
// li3.after(li4);
// var btn1 = document.getElementById('btn1');
// var btn2 = document.getElementById('btn2');
// function btnclick1() {
//     console.log('Добро пожаловать');
// }
// function btnclick2() {
//     console.log('Пока');
// }
// btn1.addEventListener('click', btnclick1);
// btn2.addEventListener('click', btnclick2);
// var liClick = document.querySelectorAll('.li-elem');
// console.log(liClick);
// for (var item of liClick) {
//     item.onclick = function () {
//         console.log(this);
//     }
// }
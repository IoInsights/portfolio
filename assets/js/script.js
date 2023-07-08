'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
    elem
        .classList
        .toggle("active");
}

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    if (window.scrollY >= 10) {
        header
            .classList
            .add("active");
        goTopBtn
            .classList
            .add("active");
    } else {
        header
            .classList
            .remove("active");
        goTopBtn
            .classList
            .remove("active");
    }

});

/**
 * navbar toggle
*/

/*
Old

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});
*/

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
});

const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        elemToggleFunc(navToggleBtn);
        elemToggleFunc(navbar);
        elemToggleFunc(document.body);
    });
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener("click", function () {

        elemToggleFunc(toggleBtnBox);
        for (let i = 0; i < toggleBtns.length; i++) {
            elemToggleFunc(toggleBtns[i]);
        }
        elemToggleFunc(skillsBox);

    });
}

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

    elemToggleFunc(themeToggleBtn);

    if (themeToggleBtn.classList.contains("active")) {
        document
            .body
            .classList
            .remove("dark_theme");
        document
            .body
            .classList
            .add("light_theme");

        localStorage.setItem("theme", "light_theme");
    } else {
        document
            .body
            .classList
            .add("dark_theme");
        document
            .body
            .classList
            .remove("light_theme");

        localStorage.setItem("theme", "dark_theme");
    }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
    themeToggleBtn
        .classList
        .add("active");
    document
        .body
        .classList
        .remove("dark_theme");
    document
        .body
        .classList
        .add("light_theme");
} else {
    themeToggleBtn
        .classList
        .remove("active");
    document
        .body
        .classList
        .remove("light_theme");
    document
        .body
        .classList
        .add("dark_theme");
}

/**
 * Switch language
 */

function changeLang() {
    var ddl = document.getElementById("lang");
    var selectedValue = ddl
        .options[ddl.selectedIndex]
        .value;
    document
        .documentElement
        .setAttribute("lang", selectedValue);
    var lang = selectedValue;
    var elements = document.querySelectorAll("[lang]");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].getAttribute("lang") === lang) {
            elements[i].style.display = "";
        } else {
            elements[i].style.display = "none";
        }
    }
}

var select = document.getElementById("lang");
select.addEventListener("change", function () {
    changeLang();
});

changeLang();



//  função para enviar o email

(function(){
    emailjs.init("n-uoSFberrPnSWpZm");
 })  ();
 
 // Criar uma função para enviar o email
 
 function enviarEmail() {
    // Pegar os dados do formulário
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var fone = document.getElementById("phone").value;
    var mensagem = document.getElementById("message").value;
 
    // Validar se os campos estão preenchidos
    if (nome == "" || email == "" || fone == "" || mensagem == "") {
       alert("Por favor, preencha todos os campos.");
       return;
    }
 
    // Validar se o email é válido
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
       alert("Por favor, digite um email válido.");
       return;
    }
 
    // Criar um objeto com os dados do email
    var params = {
       from_name: nome,
       from_email: email,
       from_tel: fone,
       message: mensagem
    };
 
    // Enviar o email usando o EmailJS
    
    emailjs.send("service_6he4v5i","template_ns25bmt", params)
       .then(function(response) {
          // Mostrar uma mensagem de sucesso se o email foi enviado
          alert("Email enviado com sucesso!");
       }, function(error) {
          // Mostrar uma mensagem de erro se ocorreu algum problema
          alert("Ocorreu um erro ao enviar o email: " + error);
       });
 }
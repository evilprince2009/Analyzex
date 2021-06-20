"use strict";
const container = document.querySelector("body");
const password = document.querySelector(".password input");
const uppercase_box = document.querySelector("#uppercase");
const passwordString = password.value;
password.addEventListener("keyup", (e) => {
    if (passwordString === passwordString.toUpperCase()) {
        uppercase_box.checked = true;
    }
});

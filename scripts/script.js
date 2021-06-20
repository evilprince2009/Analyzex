"use strict";
const container = document.querySelector("body");
const passwordInput = document.querySelector(".password input");
const upper_label = document.querySelector("#upper-label");
const lower_label = document.querySelector("#lower-label");
const minimum_label = document.querySelector("#minimum-label");
const numchar_label = document.querySelector("#numchar-label");
const minimum_box = document.querySelector("#minimum");
const lowercase_box = document.querySelector("#lowercase");
const uppercase_box = document.querySelector("#uppercase");
window.addEventListener("DOMContentLoaded", () => {
    passwordInput.focus();
});
container.addEventListener("keyup", (e) => {
    e.preventDefault();
    const eventTarget = e.target;
    const passwordString = eventTarget.value;
    if (!checkCapital(passwordString)) {
        uppercase_box.checked = false;
    }
    else {
        uppercase_box.checked = true;
        upper_label.classList.add("success");
    }
    if (!checkLower(passwordString)) {
        lowercase_box.checked = false;
    }
    else {
        lowercase_box.checked = true;
        lower_label.classList.add("success");
    }
    if (passwordString.length >= 8) {
        minimum_box.checked = true;
        minimum_label.classList.add("success");
    }
    else {
        minimum_box.checked = false;
    }
});
const checkCapital = (input) => {
    var _a;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ((_a = input[i]) === null || _a === void 0 ? void 0 : _a.toUpperCase())) {
            return true;
        }
    }
    return false;
};
const checkLower = (input) => {
    var _a;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === ((_a = input[i]) === null || _a === void 0 ? void 0 : _a.toLowerCase())) {
            return true;
        }
    }
    return false;
};

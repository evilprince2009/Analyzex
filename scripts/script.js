"use strict";
const container = document.querySelector("body");
const passwordInput = document.querySelector(".password input");
const numchar_box = document.querySelector("#numchar");
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
    }
    if (!checkLower(passwordString)) {
        lowercase_box.checked = false;
    }
    else {
        lowercase_box.checked = true;
    }
    if (passwordString.length >= 8) {
        minimum_box.checked = true;
    }
    else {
        minimum_box.checked = false;
    }
    if (!checkNumber(passwordString)) {
        numchar_box.checked = false;
    }
    else {
        numchar_box.checked = true;
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
const checkNumber = (input) => {
    const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    for (let i = 0; i < input.length; i++) {
        if (format.test(input.charAt(i))) {
            return true;
        }
    }
    return false;
};

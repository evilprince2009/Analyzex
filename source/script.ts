const container: HTMLBodyElement = document.querySelector(
  "body"
) as HTMLBodyElement;
const passwordInput: HTMLInputElement = document.querySelector(
  ".password input"
) as HTMLInputElement;

const numchar_box: HTMLInputElement = document.querySelector(
  "#numchar"
) as HTMLInputElement;
const minimum_box: HTMLInputElement = document.querySelector(
  "#minimum"
) as HTMLInputElement;
const lowercase_box: HTMLInputElement = document.querySelector(
  "#lowercase"
) as HTMLInputElement;
const uppercase_box: HTMLInputElement = document.querySelector(
  "#uppercase"
) as HTMLInputElement;

window.addEventListener("DOMContentLoaded", () => {
  passwordInput.focus();
});

container.addEventListener("keyup", (e: KeyboardEvent) => {
  e.preventDefault();
  const eventTarget: HTMLInputElement = e.target as HTMLInputElement;
  const passwordString: string = eventTarget.value;
  if (!checkCapital(passwordString)) {
    uppercase_box.checked = false;
  } else {
    uppercase_box.checked = true;
  }

  if (!checkLower(passwordString)) {
    lowercase_box.checked = false;
  } else {
    lowercase_box.checked = true;
  }

  if (passwordString.length >= 8) {
    minimum_box.checked = true;
  } else {
    minimum_box.checked = false;
  }

  if (!checkNumber(passwordString)) {
    numchar_box.checked = false;
  } else {
    numchar_box.checked = true;
  }
});

const checkCapital: (input: string) => boolean = (input: string) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i]?.toUpperCase()) {
      return true;
    }
  }
  return false;
};

const checkLower: (input: string) => boolean = (input: string) => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i]?.toLowerCase()) {
      return true;
    }
  }
  return false;
};

const checkNumber: (input: string) => boolean = (input: string) => {
  const format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  for (let i = 0; i < input.length; i++) {
    if (format.test(input.charAt(i))) {
      return true;
    }
  }
  return false;
};

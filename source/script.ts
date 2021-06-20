const container: HTMLBodyElement = document.querySelector(
  "body"
) as HTMLBodyElement;
const passwordInput: HTMLInputElement = document.querySelector(
  ".password input"
) as HTMLInputElement;
const upper_label: HTMLLabelElement = document.querySelector(
  "#upper-label"
) as HTMLLabelElement;
const lower_label: HTMLLabelElement = document.querySelector(
  "#lower-label"
) as HTMLLabelElement;
const minimum_label: HTMLLabelElement = document.querySelector(
  "#minimum-label"
) as HTMLLabelElement;
const numchar_label: HTMLLabelElement = document.querySelector(
  "#numchar-label"
) as HTMLLabelElement;
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
  upper_label.classList.remove("success");
  lower_label.classList.remove("success");
  minimum_label.classList.remove("success");
});

if (
  passwordInput.value === "" ||
  !passwordInput.value ||
  passwordInput.value == null
) {
  upper_label.classList.remove("success");
  lower_label.classList.remove("success");
  minimum_label.classList.remove("success");
}

container.addEventListener("keyup", (e: KeyboardEvent) => {
  e.preventDefault();
  const eventTarget: HTMLInputElement = e.target as HTMLInputElement;
  const passwordString: string = eventTarget.value;
  if (!checkCapital(passwordString)) {
    uppercase_box.checked = false;
  } else {
    uppercase_box.checked = true;
    upper_label.classList.add("success");
  }

  if (!checkLower(passwordString)) {
    lowercase_box.checked = false;
  } else {
    lowercase_box.checked = true;
    lower_label.classList.add("success");
  }

  if (passwordString.length >= 8) {
    minimum_box.checked = true;
    minimum_label.classList.add("success");
  } else {
    minimum_box.checked = false;
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

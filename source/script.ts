const container: HTMLBodyElement = document.querySelector(
  "body"
) as HTMLBodyElement;
const password: HTMLInputElement = document.querySelector(
  ".password input"
) as HTMLInputElement;
const uppercase_box: HTMLInputElement = document.querySelector(
  "#uppercase"
) as HTMLInputElement;
const passwordString: string = password.value as string;

password.addEventListener("keyup", (e: KeyboardEvent) => {
  if (passwordString === passwordString.toUpperCase()) {
    uppercase_box.checked = true;
  }
});

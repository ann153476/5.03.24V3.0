function onToggle(event) {
  let openedIco = event.target.querySelector(".accordion__ico");
  openedIco.classList.toggle("a_i_close");
  openedIco.classList.toggle("a_i_open");

  if (event.target.open) {
    document.querySelectorAll(".accordion > details[open]").forEach((el) => {
      // Исключаем из перебора елемент который мы только что открыли
      if (el === event.target) {
        return;
      }

      // Закрываем все остальные елементы <details>
      el.open = false;
    });
  }
}

// Вешаем наблюдатель на все елементы <details> внутри акордиона
document
  .querySelectorAll(".accordion > details")
  .forEach((el) => el.addEventListener("toggle", onToggle));
///////////////////////////////////////////////////

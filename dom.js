window.onload = function() {
  const imgs = document.querySelectorAll("img");
  const basket = document.getElementById("basket");
  const basketStat = document.getElementById("basketstat");
  const text = document.getElementById("text1");
  const title = document.getElementById("title");
  const btnText = document.getElementById("chtext");
  const btnBg = document.getElementById("bccol");

  let flowerCount = 0;

  imgs.forEach(img => {
    img.addEventListener("click", function() {
      const clone = img.cloneNode(true);
      clone.addEventListener("click", function() {
        basket.removeChild(clone);
        flowerCount--;
        basketStat.textContent = `The flower basket currently contains ${flowerCount} flowers.`;
      });
      basket.appendChild(clone);
      flowerCount++;
      basketStat.textContent = `The flower basket currently contains ${flowerCount} flowers.`;
    });
  });

  btnText.addEventListener("click", function() {
    let color = prompt("Input text color:");
    if (color) text.style.color = color;
    if (color) title.style.color = color;
  });

  btnBg.addEventListener("click", function() {
    let bgColor = prompt("Input background color:");
    if (bgColor) document.body.style.backgroundColor = bgColor;
  });
};

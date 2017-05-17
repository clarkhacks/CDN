var amount = 0;
var index = 0;
var easyTyper = function easyTyper() {
  var text = easyText[index];
  if (amount < text.length) {
    setTimeout(function () {
      easyTarget.innerHTML += text[amount];
      amount++;
      easyTyper();
    }, Math.floor(Math.random(10) * 100));
  } else {
    amount = 0;
    index = index + 1 < easyText.length ? index + 1 : 0;
    setTimeout(function () {
      easyTarget.innerHTML = '';
      easyTyper();
    }, 1500);
  }
};

window.onload = async function chart() {
  const dataURL = "data.json";
  var hoverList = document.querySelectorAll(".hidden-total");
  hoverList = Array.prototype.slice.call(hoverList, 0);
  var barList = document.querySelectorAll(".bar-container");
  barList = Array.prototype.slice.call(barList, 0);
  var bars = document.querySelectorAll(".bar");
  bars = Array.prototype.slice.call(bars, 0);

  const spendingData = await fetch(dataURL);
  spendingData.json().then((result) => {
    for (var i = 0; i < hoverList.length; i++) {
      hoverList[i].innerHTML = "<p>$" + result[i].amount + "</p>";
    }

    for (var i = 0; i < barList.length; i++) {
      var amount = result[i].amount;
      barList[i].style.height = amount + "%";
    }

    var max = result[0].amount;
    var highest = 0;
    for (var i = 0; i < result.length; i++) {
      if (result[i].amount > max) {
        max = result[i].amount;
        highest = i;
      }
    }
    bars[highest].style.backgroundColor = "var(--cyan)";
  });
};

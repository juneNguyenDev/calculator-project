const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

let daTinhXong = false;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const valueBtn = button.innerText;

    if (valueBtn === "AC") {
      screen.value = "";
      daTinhXong = false;
    } else if (valueBtn === "DEL") {
      screen.value = screen.value.slice(0, -1);
    } else if (valueBtn === "%") {
      if (screen.value !== "") {
        screen.value = eval(screen.value) / 100;
        daTinhXong = true;
      }
    } else if (valueBtn === "=") {
      try {
        let ketQua = eval(screen.value);
        if (ketQua === Infinity || ketQua === -Infinity) {
          screen.value = "Không thể chia cho số 0";
        } else {
          screen.value = ketQua;
        }
        daTinhXong = true;
      } catch {
        screen.value = "Lỗi rồi!";
        daTinhXong = true;
      }
    } else {
      const cacPhepTinh = ["+", "-", "*", "/"];

      if (daTinhXong && !cacPhepTinh.includes(valueBtn)) {
        screen.value = valueBtn;
      } else {
        screen.value += valueBtn;
      }
      daTinhXong = false;
    }
  });
});

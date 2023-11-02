let input = document.querySelector("input");

let search = document.querySelector(".search");

let headingThird = document.querySelector("h3");

let year = document.querySelector(".year");

let boxs = document.querySelector(".boxs");

let result = document.querySelector(".result");

let myDate = new Date();

let myDateYear = myDate.getFullYear();

year.innerHTML = myDateYear;

search.addEventListener("click", () => {
  if (input.value === "") {
    result.innerHTML = `<h2> ادخل اسم المدينه</h2>`;
    
    setTimeout(() => {
      result.innerHTML = ``;
    }, 2000);
  } else {
    headingThird.innerHTML = input.value;
    fetch(` https://api.aladhan.com/v1/timingsByAddress?address=${input.value}`)
      .then((result) => result.json())
      .then((resultFinish) => {
        console.log(resultFinish.data.timings);
        console.log(resultFinish.data.timings.Fajr);
        console.log(resultFinish.data.timings.Sunrise);
        console.log(resultFinish.data.timings.Dhuhr);
        console.log(resultFinish.data.timings.Asr);
        console.log(resultFinish.data.timings.Maghrib);
        console.log(resultFinish.data.timings.Isha);

        document.querySelector(".one").innerHTML =
          resultFinish.data.timings.Fajr;
        document.querySelector(".two").innerHTML =
          resultFinish.data.timings.Sunrise;
        document.querySelector(".three").innerHTML =
          resultFinish.data.timings.Dhuhr;
        document.querySelector(".four").innerHTML =
          resultFinish.data.timings.Asr;
        document.querySelector(".five").innerHTML =
          resultFinish.data.timings.Maghrib;
        document.querySelector(".six").innerHTML =
          resultFinish.data.timings.Isha;
      })
      .catch(() => {
        headingThird.remove();
        document.querySelector(".one").innerHTML = "";
        document.querySelector(".two").innerHTML = "";
        document.querySelector(".three").innerHTML = "";
        document.querySelector(".four").innerHTML = "";
        document.querySelector(".five").innerHTML = "";
        document.querySelector(".six").innerHTML = "";
        result.innerHTML = `<h3 class="notfound">المدينه غير موجودة</h3>`;
        setTimeout(() => {
          result.innerHTML = ``;
          location.reload();
        }, 2000);
      });
    input.value = "";
  }
});

document.onkeyup = function (e) {
  if (e.key == "Enter") {
    search.click();
  }
};
window.onload = function () {
  input.focus();
};

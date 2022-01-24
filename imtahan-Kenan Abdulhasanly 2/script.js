
let arr = ["car7.jpeg", "car8.jpeg", "car9.jpeg", "car10.jpeg", "car11.jpeg", "car12.jpeg"];

let count = 0;
let next = document.querySelector("#right");
let prev = document.querySelector('#left');
let sp = document.querySelector("#speed");
let long = 0;


Deyis(arr[count]);



function Deyis(x) {
    document.getElementById('images').src = x;
};


next.onclick = () => {
    long = 0;
    Time()
    if (count < arr.length - 1) {
        count++;
    } else {
        count = 0;
    }
    Deyis(arr[count]);


};

prev.onclick = () => {
    long = 0;
    Time();
    if (count == 0) {
        count = arr.length - 1;
    } else {
        count--;
    }

    Deyis(arr[count]);
};

function Time() {
    long += 6;
   let y=  Deyis(arr[count]);
    if (long <= 800) {
        sp.style.width = long + "px";
      y

    } else {
        long = 0;
        count++
      

    }
}


setInterval(Time, 30);







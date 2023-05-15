const socket = io();
let video = document.getElementById("video");
let subvideo = document.getElementById("sub-video");
let one = "https://www.youtube.com/embed/054XRy6EvT0?autoplay=1&loop=1";
let two = "https://www.youtube.com/embed/J5fNURSTkNY?autoplay=1&loop=1";
let three = "https://www.youtube.com/embed/1E2iM2MYXg0?autoplay=1&loop=1";
let four = "https://www.youtube.com/embed/9cWt2G0NuxM?autoplay=1&loop=1";
let five = "https://www.youtube.com/embed/TqG7ixtVm3w?autoplay=1&loop=1";
let six = "https://www.youtube.com/embed/ONUDFo5VkAw?autoplay=1&loop=1";

let showreel = "/public/videos/fy.mp4"
let aboutus = "/public/videos/about.mp4"

function doSomeThing(e) {
  video.src= ''
  video.style.display = "block"
  document.getElementById(1).className = ""
  document.getElementById(2).className = ""
  document.getElementById(3).className = ""
  document.getElementById(4).className = ""
  
  document.getElementById(5).className = ""
  document.getElementById(6).className = ""
  if (e === "1") {
    console.log(e);
    document.getElementById(`${e}`).className = "animate__animated animate__heartBeat animate__infinite	infinite"
    video.className = "animate__animated animate__bounceInLeft"
    video.src = one;
      }
  if (e === "2") {
    console.log(e);
    document.getElementById(`${e}`).className = "animate__animated animate__heartBeat animate__infinite	infinite"
      video.className = "animate__animated animate__zoomInDown"
      video.src = two;
      }
  if (e === "3") {
    console.log(e);
    document.getElementById(`${e}`).className = "animate__animated animate__heartBeat animate__infinite	infinite"
    video.className = "animate__animated animate__bounceInRight"
      video.src = three;
      }
  if (e === "4") {
    console.log(e);
    document.getElementById(`${e}`).className = "animate__animated animate__heartBeat animate__infinite	infinite"
    video.className = "animate__animated animate__bounceInUp"
      video.src = four;
      }
  if (e === "5") {
    document.getElementById(`${e}`).className = "animate__animated animate__heartBeat animate__infinite	infinite"
    console.log(e);
    video.className = "animate__animated animate__bounceInDown"
      video.src = five;
      }

  if (e === "6") {
    document.getElementById(`${e}`).className = "animate__animated animate__heartBeat animate__infinite	infinite"
    console.log(e);
    video.className = "animate__animated animate__zoomInUp"
      video.src = six;
  }
}

function goTo() {
  document.getElementById('bg').style.display = 'none'
  document.getElementById('leftDiv').style.display = 'none'
  document.getElementById('img').style.display = 'none'
  document.getElementById('logo').style.display = 'block'
  document.getElementById('back').style.display = 'block'
  document.getElementById('main').style.display = 'flex'
}
function goToFuture() {
  location.href = '/one'
  // document.getElementById('bg').style.display = 'none'
  // document.getElementById('leftDiv').style.display = 'none'
  // document.getElementById('img').style.display = 'none'
  // document.getElementById('logo').style.display = 'block'
  // document.getElementById('back').style.display = 'block'
  // document.getElementById('sub-main').style.display = 'flex'
}

function playSomeThing(e) {
  subvideo.src= ''
  subvideo.style.display = "block"
  document.getElementById(7).className = ""
  document.getElementById(8).className = ""
  if (e === "7") {
    console.log(e);
    document.getElementById(`${e}`).className = "animate__animated animate__heartBeat animate__infinite	infinite"
    subvideo.className = "animate__animated animate__bounceInLeft"
    subvideo.src = one;
    subvideo.muted = false
      }
  if (e === "8") {
    console.log(e);
    document.getElementById(`${e}`).className = "animate__animated animate__heartBeat animate__infinite	infinite"
      subvideo.className = "animate__animated animate__zoomInDown"
      subvideo.src = two;
      subvideo.muted = false
      }
}
function goBack() {
  window.location.reload();
}

function goToAbout(){
  document.getElementById('bg').style.display = 'none'
  document.getElementById('leftDiv').style.display = 'none'
  document.getElementById('img').style.display = 'none'
  document.getElementById('logo').style.display = 'block'
  document.getElementById('back').style.display = 'block'
  document.getElementById('about').style.display = 'block'
  document.getElementById('about').src = aboutus
  document.getElementById('about').muted= false
}

function goToShow(){
  document.getElementById('bg').style.display = 'none'
  document.getElementById('leftDiv').style.display = 'none'
  document.getElementById('img').style.display = 'none'
  document.getElementById('logo').style.display = 'block'
  document.getElementById('back').style.display = 'block'
  document.getElementById('show').style.display = 'block'
  document.getElementById('show').src = showreel
  document.getElementById('show').muted= false
}

function goToForm() {
  location.href = '/form'
}

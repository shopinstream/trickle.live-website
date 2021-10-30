
var div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.background = "red";
// div.style.color = "white";
div.setAttribute('id',"trickle_root");
//6159a79e09f1a150d9a2b54b

var uid = document.currentScript.getAttribute('uid');
window.uid = uid;
document.body.appendChild(div);

let prefix_local = "./rct_build/static/js";
let prefix_trickle = "https://cdn.jsdelivr.net/gh/shopinstream/trickle.live-website@main/js/video-widget";

document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${prefix_trickle+'/main.679dad83.chunk.css'}" type="text/css"/>`;


var trickle_app_script = document.createElement('script');
trickle_app_script.setAttribute('src', prefix_trickle + "/2.a99ae0b0.chunk.js");
document.body.appendChild(trickle_app_script);

var trickle_app_script2 = document.createElement('script');
trickle_app_script2.setAttribute('src', prefix_trickle + "/3.72a0d38f.chunk.js");
document.body.appendChild(trickle_app_script2);


var trickle_runtime = document.createElement('script');
trickle_runtime.setAttribute('src', prefix_trickle + "/runtime-main.38330eb0.js");
document.body.appendChild(trickle_runtime);

var trickle_main = document.createElement('script');
trickle_main.setAttribute('src', prefix_trickle + "/main.fa6f45ea.chunk.js");
document.body.appendChild(trickle_main);
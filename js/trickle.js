
var trickle_app_version_script = document.createElement('script');
var uid = document.currentScript.getAttribute('uid');
fetch('https://trickle-dashboard.herokuapp.com/web/client').then(response=>response.json())
.then(data => {
    trickle_app_version_script.setAttribute('src', data.uri);
    trickle_app_version_script.setAttribute('uid', uid);
    document.body.appendChild(trickle_app_version_script);
})

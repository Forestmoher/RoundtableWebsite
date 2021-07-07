//Main app JS code goes here


//*****Challenge Page code*****//

// declaring variables that will be reasigned with each new script loaded in
var instructions;
var example;

//dynamically load script tag into head tag based on option selected from dropdown
function selectChallenge() {
    var file = document.getElementById('options').value;
    if (document.head.lastChild.id == "challenge-script"){
        document.head.lastChild.remove();
    }
    var newScriptTag = document.createElement('script');
    newScriptTag.id = 'challenge-script';
    newScriptTag.src = `scripts/${file}.js`;
    document.head.appendChild(newScriptTag);
}

function clearResult() {
    document.getElementById("instructions-text").innerHTML = '';
    document.getElementById("example-text").innerHTML = '';
    document.getElementById("result-box").innerHTML = '';
    document.getElementById('options').value = "-- Select Date --";
    document.getElementById('challenge-script').remove();
}

function showTab(container, tab){
    var containers = document.getElementsByClassName("content-container");
    for (let i = 0; i < containers.length; i++) {
        containers[i].style.display = "none";
    }
    document.getElementById(container).style.display = "flex";
    var tabs = document.getElementsByClassName("tab");
    for (let j = 0; j < tabs.length; j++) {
        tabs[j].style.backgroundColor = "white";
    }
    document.getElementById(tab).style.backgroundColor = 'var(--color-pop)';
}


var head = document.getElementsByClassName("head")
var topics = document.getElementsByClassName("innerRow")
var subtopic = document.getElementsByClassName("subtopic")
var menu = document.getElementById("menu")
var sidebar = document.getElementById("sidebar")
var i;
var j;
var height;
// var disp;


for(i = 0; i < head.length; i++) {
    head[i].addEventListener("click", function(){
        // var sp = this.getElementsByClassName("arrow");
        // console.log(sp[0].innerHTML == "&#9660;")
        // if(sp[0].innerHTML == "&#9660;") {
        //     sp[0].innerHTML = "&#9650;"
        // }
        // else {
        //     sp[0].innerHTML = "&#9660;"
        // }
        var topic = this.nextElementSibling;
        if(topic) {
            topic.style.display == "block" ? topic.style.display = "none" : topic.style.display = "block"
        }
        if(topic.style.maxHeight) {
            topic.style.maxHeight = null;
        }
        else {
            height = topic.scrollHeight
            topic.style.maxHeight = 3*height + topic.scrollHeight + "px";
        }

        const sub = topic.getElementsByClassName("subtopic")
        
        if(topic.style.display == "none") {
            for(var s of sub) {
                s.style.display = "none"
            }
        }
    })
}

for(j = 0; j < topics.length; j++) {
    topics[j].addEventListener("click", function(){

        var topic = this.nextElementSibling;
        if(topic) {
            topic.style.display == "block" ? topic.style.display = "none" : topic.style.display = "block"
        }

        topic.style.maxHeight = topic.scrollHeight + "px";

    })
}


menu?.addEventListener("click", function() {
    if(sidebar) {
        sidebar.classList.toggle("active")
    }
})
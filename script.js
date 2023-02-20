var head = document.getElementsByClassName("head")
var topics = document.getElementsByClassName("innerRow")
var i;
var j;
var height;
// var disp;

for(i = 0; i < head.length; i++) {
    head[i].addEventListener("click", function(){
        var topic = this.nextElementSibling;
        if(topic) {
            topic.style.display == "block" ? topic.style.display = "none" : topic.style.display = "block"
        }
        // disp = topic.style.display
        // console.log(disp)
        // if(disp == "none") {
        //     for(var k = 0; k < topics.length; k++) {
        //         var sub = topics[k].nextElementSibling;
        //         console.log(sub)
        //         if(sub) {
        //             sub.style.display = "none"
        //         }
        //     }
        // }
        if(topic.style.maxHeight) {
            topic.style.maxHeight = null;
        }
        else {
            height = topic.scrollHeight
            topic.style.maxHeight = 2*height + topic.scrollHeight + "px";
        }
    })
}

for(j = 0; j < topics.length; j++) {
    topics[j].addEventListener("click", function(){

        var topic = this.nextElementSibling;
        if(topic) {
            topic.style.display == "block" ? topic.style.display = "none" : topic.style.display = "block"
        }
        if(topic.style.maxHeight) {
            topic.style.maxHeight = null;
        }
        else {
            topic.style.maxHeight = topic.scrollHeight + "px";
        }
    })
}
const h1 = React.createElement("h1",{},"Learn Web Development");

const firstPara = React.createElement("p",{},"Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.");

const firstDiv = React.createElement("div",{},firstPara);

const firstSpan = React.createElement("span",{},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from');

const secondSpan = React.createElement("span",{},', and other intermediate to advanced resources that assume a lot of previous knowledge.');

const anchor = React.createElement("a",{href:"https://developer.mozilla.org/en-US/"}," the rest of MDN");

const secondPara = React.createElement("p",{},[firstSpan,anchor,secondSpan]);

const secondDiv = React.createElement("div",{},secondPara);

const thirdPara = React.createElement("p",{},"If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.")

const thirdDiv = React.createElement("div",{},thirdPara);

const div = React.createElement("div",{},[h1,firstDiv,secondDiv,thirdDiv]);


ReactDOM.render(div,document.querySelector("#root"))
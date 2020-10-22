function hello() {
    console.log("starting hello()...");

    const hello = document.createElement("h1");
    const helloText = document.createTextNode("Mäkisen autokaupa! (^.^)/");
    hello.appendChild(helloText);
    document.body.appendChild(hello);
    
    console.log("...done");
    
}


function lorem() {
    console.log("starting lorem()...");

    const lorem = document.createElement("p");
    const loremText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet nisi non arcu ullamcorper tristique. Vestibulum vitae efficitur ligula. Nunc elit velit, fringilla ut libero ac, blandit malesuada quam. Quisque tristique auctor nisl, vel gravida lacus. Vivamus nisl turpis, porttitor nec arcu non, dictum lobortis urna. Curabitur molestie ornare velit in facilisis. Suspendisse finibus dolor facilisis diam lobortis, vel gravida mauris pretium. Donec placerat enim et mauris finibus, id egestas est imperdiet. Aliquam sed scelerisque orci. Donec leo arcu, ultricies sit amet scelerisque et, consequat in metus. Mauris ultrices lacinia imperdiet. Duis convallis ipsum at faucibus porttitor. Praesent quis nisi lectus. Integer mollis semper varius.");
    lorem.appendChild(loremText);
    document.body.appendChild(lorem);
    
    console.log("...done");
    
}


console.log("call hello()");
hello();
console.log("call lorem()");
lorem();
console.log("We are Done..almost");
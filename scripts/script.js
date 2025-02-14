let btn = document.getElementBuId('btn');

btn.addEventListener('click', () => {
    let v1 = document.SelectBuId('v1').value();
    let v2 = document.SelectBuId('v2').value();
    let input = document.SelectBuId('inp').value();
    if (v1 == 'R'){
        if (v2 == v1){
            const newP = document.createElement("p");
            const newContent = document.createTextNode(input);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        } else if (v2 == 'D'){
            let int = input * 0.011;
            const newP = document.createElement("p");
            const newContent = document.createTextNode(int);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        } else if (v2 == 'E'){
            let int = input * 0.010;
            const newP = document.createElement("p");
            const newContent = document.createTextNode(int);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        }
    } else if (v1 == 'D'){
        if (v2 == v1){
            const newP = document.createElement("p");
            const newContent = document.createTextNode(input);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        } else if (v2 == 'R'){
            let int = input * 91.88;
            const newP = document.createElement("p");
            const newContent = document.createTextNode(int);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        } else if (v2 == 'E'){
            let int = input * 0.95;
            const newP = document.createElement("p");
            const newContent = document.createTextNode(int);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        }
    } else if (v1 == 'E'){
        if (v2 == v1){
            const newP = document.createElement("p");
            const newContent = document.createTextNode(input);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        } else if (v2 == 'D'){
            let int = input * 1.05;
            const newP = document.createElement("p");
            const newContent = document.createTextNode(int);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        } else if (v2 == 'R'){
            let int = input * 96.47;
            const newP = document.createElement("p");
            const newContent = document.createTextNode(int);
            newDiv.appendChild(newContent);
            document.body.insertBefore(newP);
        }
    } else {
        console.log('uncnown error: ');
        console.log(v1);
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode("Hi there and greetings!");
        newDiv.appendChild(newContent);
        document.body.insertBefore(newDiv);
    }
});
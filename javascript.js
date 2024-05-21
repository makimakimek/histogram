function dataFetching() {
    const url = "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";

    fetch(url)
        .then(response => response.text())
        .then(data => {
            let eachLine = data.split('\n');
            let length = eachLine.length - 1;

            for(let i = 0; i < length; i++) {
                let eachLineInt = parseInt(eachLine[i]);
                
                const theNumberFound = document.querySelector(`#xAxisNumber${eachLineInt}`);

                let currentHeight = parseInt(getComputedStyle(theNumberFound).height, 10);

                let newHeight = currentHeight + 10;

                theNumberFound.style.height = `${newHeight}px`;
            }
            
        })
        .catch(error => {
            console.error("error fetching suggestions: ", error);
        });
            
}

function histogram() {
    dataFetching();
}

histogram();
function loadJSON(callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    // req.open('GET', 'https://api.myjson.com/bins/l1gyk', true); 
    req.open('GET', 'https://api.myjson.com/bins/ebhjg', true);
    req.onreadystatechange =
        function() {
            if (req.readyState == 4 && req.status == "200") {
                callback(req.responseText);
            }
        };
    req.send(null);
}

function get(data) {
    el = document.createElement(data.type);

    if (typeof data.id === 'string') {
        el.id = data.id;
    }
    if (typeof data.className === 'string') {
        el.className = data.className;
    }
    if (typeof data.src === 'string') {
        el.src = data.src;
    }
    if (typeof data.href === 'string') {
        el.href = data.href;
    }
    if (typeof data.innerHTML === 'string') {
        el.innerHTML = data.innerHTML;
    }
    if (typeof data.alt === 'string') {
        el.alt = data.alt;
    }
    if (typeof data.inputType === 'string') {
        el.type = data.inputType;
    }
    if (typeof data.inputFor === 'string') {
        el.type = data.inputFor;
    }

    return el;
}


function recurseJSON(data, container) {
    for (let i of data.content) {
        let newContainer = get(i);
        if (typeof i.content === 'object') {
            recurseJSON(i, newContainer);
        }
        container.appendChild(newContainer);

    }
}

function initJSON() {
    loadJSON(function(res) {
        recurseJSON(JSON.parse(res), document.getElementsByTagName('body')[0]);
    });
}
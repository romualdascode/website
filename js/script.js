function loadJSON(callback) {
    var req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    // req.open('GET', 'https://api.myjson.com/bins/l1gyk', true);
    // req.open('GET', 'https://api.myjson.com/bins/16rte0', true);
    req.open('GET', 'https://api.myjson.com/bins/11g7e8', true);
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
    if (typeof data.htmlFor === 'string') {
        el.htmlFor = data.htmlFor;
    }
    if (typeof data.inputType === 'string') {
        el.type = data.inputType;
    }

    return el;
}


function recurseJSON(data, container) {
    for (let i of data.content) {
        let newContainer = get(i);
        container.appendChild(newContainer);
        catchEventListeners(i);
        if (typeof i.content === 'object') {
            recurseJSON(i, newContainer);
        }


    }
}

function initJSON() {
    loadJSON(function(res) {
        recurseJSON(JSON.parse(res), document.getElementsByTagName('body')[0]);
        initSlider();
        initMenu();
        underline();
    });
}

function catchEventListeners(el) {

    if (el.id === 'sliderbtn1') {
        document.getElementById('sliderbtn1').addEventListener("click", function() {
            document.getElementsByClassName('slide')[0].style.display = 'block';
            document.getElementsByClassName('slide')[1].style.display = 'none';
            document.getElementsByClassName('slide')[2].style.display = 'none';
            document.getElementsByClassName('slide')[3].style.display = 'none';
        });
    }
    if (el.id === 'sliderbtn2') {
        document.getElementById('sliderbtn2').addEventListener("click", function() {
            document.getElementsByClassName('slide')[0].style.display = 'none';
            document.getElementsByClassName('slide')[1].style.display = 'block';
            document.getElementsByClassName('slide')[2].style.display = 'none';
            document.getElementsByClassName('slide')[3].style.display = 'none';
        });
    }
    if (el.id === 'sliderbtn3') {
        document.getElementById('sliderbtn3').addEventListener("click", function() {
            document.getElementsByClassName('slide')[0].style.display = 'none';
            document.getElementsByClassName('slide')[1].style.display = 'none';
            document.getElementsByClassName('slide')[2].style.display = 'block';
            document.getElementsByClassName('slide')[3].style.display = 'none';
        });
    }
    if (el.id === 'sliderbtn4') {
        document.getElementById('sliderbtn4').addEventListener("click", function() {
            document.getElementsByClassName('slide')[0].style.display = 'none';
            document.getElementsByClassName('slide')[1].style.display = 'none';
            document.getElementsByClassName('slide')[2].style.display = 'none';
            document.getElementsByClassName('slide')[3].style.display = 'block';
        });
    }
    if (el.id === 'templates') {
        document.getElementById('templates').addEventListener("click", function() {
            document.getElementsByClassName('hideh1')[0].style.display = 'none';
            document.getElementsByClassName('hideh1')[1].style.display = 'block';
            document.getElementsByClassName('imghide')[0].style.display = 'block';
            document.getElementsByClassName('hidebtn')[0].style.display = 'none';
            document.getElementsByClassName('prices')[0].style.display = 'none';
        });
    }
    if (el.id === 'home') {
        document.getElementById('home').addEventListener("click", function() {
            document.getElementsByClassName('hideh1')[1].style.display = 'none';
            document.getElementsByClassName('hideh1')[0].style.display = 'block';
            document.getElementsByClassName('imghide')[0].style.display = 'block';
            document.getElementsByClassName('hidebtn')[0].style.display = 'block';
            document.getElementsByClassName('prices')[0].style.display = 'none';
        });
    }
    if (el.id === 'products') {
        document.getElementById('products').addEventListener("click", function() {
            document.getElementsByClassName('imghide')[0].style.display = 'none';
            document.getElementsByClassName('hidebtn')[0].style.display = 'block';
            document.getElementsByClassName('prices')[0].style.display = 'none';
        });
    }
    if (el.id === 'pricing') {
        document.getElementById('pricing').addEventListener("click", function() {
            document.getElementsByClassName('imghide2')[0].style.display = 'none';
            document.getElementsByClassName('prices')[0].style.display = 'block';
            document.getElementsByClassName('hidebtn')[0].style.display = 'none';
        });
    }
}



function initSlider() {
    document.getElementsByClassName('slide')[0].style.display = 'block';
    document.getElementsByClassName('slide')[1].style.display = 'none';
    document.getElementsByClassName('slide')[2].style.display = 'none';
    document.getElementsByClassName('slide')[3].style.display = 'none';
}


function initMenu() {
    document.getElementsByClassName('hideh1')[1].style.display = 'none';
    document.getElementsByClassName('hideh1')[0].style.display = 'block';
    document.getElementsByClassName('prices')[0].style.display = 'none';
}

function underline() {
    let items = document.getElementsByClassName('item');
    let activeClassName = 'active';

    function unselectItems() {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove(activeClassName);
        }
    }

    function selectItem(item) {
        unselectItems();
        item.classList.add(activeClassName);
    }

    function onItemClick(event) {
        selectItem(event.target);
    }

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', onItemClick);
    }
}
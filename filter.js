const filter_t = document.querySelector("#filter_top")
const filter_b = document.querySelector("#filter_bottom")
const on_off = document.querySelector("#on_off")
const white = document.querySelector("#white")
const yellow = document.querySelector("#yellow")
const green = document.querySelector("#green")


function change_color(color) {
    filter_t.className = "";
    filter_b.className = "";
    filter_t.classList.add("filter_top_" + color);
    filter_b.classList.add("filter_bottom_" + color);
}

function turn_of_filter() {
    const filter_t_class = filter_t.className
    if(filter_t_class !== "filter_none"){  //필터가 켜져있는 상태라면
        filter_t.className = "";
        filter_b.className = ""; 
        filter_t.classList.add('filter_none')
        filter_b.classList.add('filter_none')
    }else if(filter_t_class === "filter_none"){
        change_color("w");
    }
    change_btn();
}
function change_btn() {
    const current_state = on_off.innerHTML
    if(current_state === "ON"){
        on_off.innerHTML = "OFF";
        on_off.style = `
        background-color: rgb(240, 0, 0);
        cursor: pointer;
        width: 55px;
        height: 40px;
        font-size: 27px;
        background-color 1s 
        `
    }else if(current_state === "OFF"){
        on_off.innerHTML = "ON";
        on_off.style = `
        background-color: rgb(24, 97, 255);
        border-radius: 5px;
        width: 56px;
        height: 40px;
        margin-top: 1px;
        color: white;
        font-size: 25px;
        text-align: center;
        line-height: 150%;
        `
    }
}

function change_filter_color(target) {
    const t_color = target.target.className
    const filter_t_class = filter_t.className;
    if(filter_t_class !== `filter_top_${t_color}`){  //필터의 색이 click한 버튼의 색깔과 동일하지 않을 경우
        change_color(t_color);
    }else{

    }
}


function filter_EventListener() {
    on_off.addEventListener('click', turn_of_filter);
    yellow.addEventListener('click', change_filter_color )
    green.addEventListener('click', change_filter_color )
    white.addEventListener('click', change_filter_color )
}

function init() {
    filter_EventListener();
    console.log('working_js');
}

init()





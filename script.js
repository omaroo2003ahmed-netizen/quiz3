let i_num = 0; 
let total_cart = 0; 


function add() {
    document.getElementById("nums_pro").textContent = i_num+=1;
}

function min() {
    if (i_num > 0) {
        document.getElementById("nums_pro").textContent = i_num-=1;
    }
    else{
        i_num=0
    }
}

function sumbit() {
    document.getElementById("num_cart").textContent = total_cart += i_num;
    i_num = 0;
    document.getElementById("nums_pro").textContent = i_num;
}


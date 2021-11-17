
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')

    $('#nav-tabContent div').removeClass('show');
    $('#nav-tabContent div').removeClass('active');

    const any = $(`#nav-tabContent div#${this.id}.tab-pane.fade`);
    any.addClass('show');
    any.addClass('active');
})

cardContainer = document.getElementsByClassName('card-container');

for(var i=0;i<cardContainer.length;i++){
    cards = [].slice.call(cardContainer[i].getElementsByClassName('card'));
    for(var i=0;i<cards.length;i++){
        let addBtn = cards[i].getElementsByClassName('addBtn')[0];
        addBtn.addEventListener("click",function(){
            if(addBtn.innerHTML == '+'){
                addBtn.innerHTML = '✓';
            }else{
                addBtn.innerHTML = '+'
            }
        });

        let infoBtn = cards[i].getElementsByClassName('infoBtn')[0];
        let img = cards[i].getElementsByClassName('card-img-top')[0];
        let dishName = cards[i].getElementsByClassName('dishName')[0];
        infoBtn.addEventListener("click",function(){
            let mainPopUp = document.getElementById('ingredientPopUp');
            mainPopUp.style.backgroundImage = `url(${img.src})`;
            mainPopUp.getElementsByClassName('popUpDishName')[0].innerHTML = dishName.innerHTML;
            var current = document.getElementById('nav-tabContent');
            current.classList.add('blur');
            mainPopUp.style.display = 'flex';
        });
    }
}
var isBillOpen = false;


function closePopUp(){
    document.getElementById('ingredientPopUp').style.display = 'none';
    var current = document.getElementsByClassName('blur');
    current[0].className = current[0].className.replace("blur", "");
}

function dragBill(){

    if(isBillOpen){
        document.getElementById("billdiv").style.transform = "translate(0%,100%)";
        isBillOpen = false
    }else{
        document.getElementById("billdiv").style.transform = "translate(0%,0%)";
        // document.getElementById("billdiv").style.transitionDuration = "4s";
        isBillOpen = true;
    }
}


document.getElementById('backBtn').addEventListener('click',function(){
    location.href = "../html_files/home.html";
});

// allAddBtns = document.getElementsByClassName('addBtn');
// console.log(allAddBtns);
// for(var i=0;i<allAddBtns.length;i++){
//     allAddBtns[i].addEventListener("click",function(){
//         console.log(allAddBtns[i].innerHTML);
//     });
// }
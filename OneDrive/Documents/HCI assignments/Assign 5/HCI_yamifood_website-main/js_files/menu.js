
console.log('Hi');
$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')

    $('#nav-tabContent div').removeClass('show');
    $('#nav-tabContent div').removeClass('active');

    const any = $(`#nav-tabContent div#${this.id}.tab-pane.fade`);
    any.addClass('show');
    any.addClass('active');
})

// const tabC = document.getElementById('myTab');
// const tabs = tabC.getElementsByClassName('nav-link');
// for(var i=0;i<tabs.length;i++){
//     tabs[i].addEventListener('click',function(){
//         const current = tabC.getElementsByClassName('active');
//         current[0].removeClass('active');
//         // current[0].className = current[0].className.replace(" active", "");
//         this.addClass('active');
//     })
// }
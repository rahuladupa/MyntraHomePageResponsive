// document.getElementById('#changeMode').addEventListener('click', function (e) {
//     e.preventDefault();
//     DarkMode();
// })
$('#changeMode').click(function(e) {
    DarkMode();
    return false;
});
const  DarkMode = (e) =>{
          let mybody = document.body;
          mybody.classList.toggle('mydark')
        }


        
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
myModal.toggle()



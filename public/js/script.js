function handleBar(e){
  if(e.srcElement.classList.contains('fa-bars')){
    e.srcElement.classList.remove('fa-bars');  
    e.srcElement.classList.add('fa-x');
    // document.getElementById('navbar').setAttribute('style','display:block;')
  }
  else{
    e.srcElement.classList.remove('fa-x');
    e.srcElement.classList.add('fa-bars');  
  }
  document.getElementById('navbar').classList.toggle('hidClass')
}

// let mainframe = document.getElementById('videoframe')
// if(mainframe){
//   fetch('api/v1/lec/')
// }
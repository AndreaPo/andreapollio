
function showNav(){
    var elems = document.getElementsByClassName('navbar-links');
    
    if(document.getElementsByClassName('navbar-links')[0].style.getPropertyValue('display') === ""){
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display="flex";
        }
    }else if(document.getElementsByClassName('navbar-links')[0].style.getPropertyValue('display') === "flex"){
        for (var i=0;i<elems.length;i+=1){
            elems[i].style.display="";
        }
    }
        

}
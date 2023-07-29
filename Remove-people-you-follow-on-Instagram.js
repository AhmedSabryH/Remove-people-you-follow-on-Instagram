//First, you must open the following page
//And download some of the users manually
//I have turned off auto-scrolling so as not to take Ban

let i;
function selectone(i){
x= document.getElementsByClassName("_aj1-");
    if (i<=x.length) {   
        x[i].click();
        setTimeout(() => {
            y= document.getElementsByClassName("a9-")
            if (y.length!=0) {
                peivate() ;
            }else{
                donedeleted()
            }
        },1000);
    }else{
        console.log("done");
    }
}
function peivate(){
    setTimeout(() => {
        y[0].click();
        donedeleted()
    }, 1000);
}
function donedeleted(){
    setTimeout(() => {
        selectone(i++);
    }, 3000);
}
selectone(i=0);
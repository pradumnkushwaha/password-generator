var copied =""

console.log("ok");
function copy_clicked(){
    console.log("okk");
    copied = document.getElementById("copi1")
    console.log(copied.innerHTML);
     

}
console.log(copied+"ye hai")
function slides(){
    let slide= document.getElementById("slide1");
    //slide.value= 2;
    document.getElementById("num").innerHTML= slide.value;
    console.log(slide.value)
}


function gpass(){
    var char="";
    if (document.getElementById("UPPERCASE") !== null) 
    if( document.getElementById("UPPERCASE").checked==true)
    {
     char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+char; 
    }
    if (document.getElementById("LOWERCASE") !== null) 
    console.log("lower");
    if( document.getElementById("LOWERCASE").checked==true)
    {console.log("lower");
        char = "abcdefghijklmnopqrstuvwxyz"+char; 
    }
    if (document.getElementById("NUMBERS") !== null) 
    if( document.getElementById("NUMBERS").checked==true)
    {
     char = "1234567890"+char; 
    }
    if (document.getElementById("SPECIAL") !== null) 
    if( document.getElementById("SPECIAL").checked==true)
    {
     char = "!@#$%^&*()_-"+char; 
    }
     console.log(char);
    var pass="";
    let ok;
    
    //console.log(char.charAt(ok));
    for (let i = 0;i <8;i++)
    {
        ok = Math.floor((Math.random()*26)+1);
        pass= char.charAt(ok)+pass
        console.log(pass);
    }
}
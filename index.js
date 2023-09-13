var copied =""
let flag = 0;
// console.log("ok");
function copy_clicked(){
    // console.log("okk");
    const copied = document.getElementById("copi1")
    console.log(copied.innerHTML+"copied to clicp");
    
    copied.addEventListener("copy", (event) => {
        const selection = document.getSelection();
        event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
        event.preventDefault();
      });
     

}
let slide =8 ;

// console.log(copied+"ye hai")
function slides(){
    slide= document.getElementById("slide1").value;
    //slide.value= 2;
    document.getElementById("num").innerHTML= slide;
    console.log(slide)
}

var lower = document.querySelector("#LOWERCASE");
//console(lower.checked==true);

function gpass(){
    const UPPERCASE = document.getElementById("UPPERCASE").checked;
    const LOWERCASE = document.getElementById("LOWERCASE").checked;
    const Numbers = document.getElementById("NUMBERS").checked;
    const SPECIAL = document.getElementById("SPECIAL").checked;

    console.log(slide);
    let char="";
    
    
    if( UPPERCASE)
    { flag =1+flag;
     char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+char; 
    }
    
    if(LOWERCASE )
    { flag =1+flag;
        char = "abcdefghijklmnopqrstuvwxyz"+char; 
    }
    
    if( Numbers)
    {flag =1+flag;
        
     char = "1234567890"+char; 
    }
    
    if( SPECIAL)
    {flag =1+flag;
     char = "!@#$%^&*()_-"+char; 
    }
    // console.log(char);
    var pass="";
    let num;
    
    //console.log(char.charAt(ok));
    for (let i = 0;i <slide;i++)
    {
    if(char.length==0)
        char="1A@aPc*9"
        num = Math.floor((Math.random()*char.length));
        
        pass= char.charAt(num)+pass
        console.log(num);
        console.log(pass);
        document.getElementById("copi1").innerHTML=pass
    }
    console.log(flag+"..........")
    if(flag==4){
        console.log(flag+".!!!!!.")
      let circle_button=  document.getElementById("circle_button");
      circle_button.style.backgroundColor= "green";
    }
}
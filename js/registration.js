window.addEventListener('DOMContentLoaded',function(){


    let regexName =RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexLName =RegExp('^[A-Z]{1}[a-z]{0,}$');
    let regexEmail =RegExp('^[a-z]{2,}[@][a-z]{2,5}[.][a-z]{3}$');
    let regexPass =RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0,9])(?=.*[@!#])$');

    let fName=document.getElementById('firstName')
    let lName=document.getElementById('lastName')
    let uName=document.getElementById('userName')
    let pswd=document.getElementById('password')
    let cpswd=document.getElementById('cpassword')
    let nxt=document.getElementById('btn');

    let a;
    let fn=0,ln=0,em=0,psw=0,cpsw=0,nt=0;


    const showError = (input,message,oldcls,newcls,divid) =>{
        document.getElementById(divid).classList.remove(oldcls);
        document.getElementById(divid).classList.add(oldcls);
        document.getElementById(input).innerHTML= message;
        document.getElementById(input).style.color="black";
        return false;
    };

    const showSuccess = (input,oldcls,newcls,divid) =>{
        document.getElementById(input).textContent = "";
        document.getElementById(divid).classList.add(oldcls);
        document.getElementById(divid).classList.remove(newcls);
        return true;



};

fName.addEventListener('keyup', ()=>{
    fn=check(fName,'name','first',regexName)
    console.log("first name",fn);
});

lName.addEventListener('keyup', ()=>{
    fn=check(fName,'name','last',regexLName)
    console.log("last name",ln);
});

uName.addEventListener('keyup', ()=>{
    fn=check(fName,'username','user',regexEmail)
    console.log("user name",em);
});

pswd.addEventListener('keyup', ()=>{
    fn=check(fName,'pass','pas', regexPass)
    console.log("password",psw);
});

cpswd.addEventListener('keyup', ()=>{
    fn=check(fName,'pass','psd', regexPass)
    console.log("cpassword",cpsw);
});

nxt.addEventListener('keyup', ()=>{
    fn=check(fName,'nxt', regexPass)
    console.log(nt);
});

function check(inputid,errid,oldcls,newcls,reg){
    if (!reg.text(inputid,value)){
        a = showError(errid,"use valid value",oldcls,newcls,divid);
        console.log("show error value",a);
        return 0;
    } else{
        a = showSuccess(errid,oldcls,newcls,divid);
        console.log("show success value",a);
        return 1;
    }
};
}

)
function check(form){
    if(form.userid.value == "同志" ||form.userid.value == "comrade"&& form.pswrd.value == "forthepeople"){
        window.open("HomePage.html",target = "_self");
    }else{
        alert("YOU GO TO GULAG NOW");
        window.open("stalinGulag.html","_self");  
    }
}
function getValue(){

    var username = document.getElementById('name')
    var userfathername = document.getElementById('father-name')
    var email= document.getElementById('email')
    var number= document.getElementById('number')
    var dob= document.getElementById('DOB')
    var address= document.getElementById('Address')
    var qualification=document.getElementById("LstQualf")
    var Hobbies= document.getElementsByName('hobbies')
    var gendervalue=document.getElementsByName("Gender")
    var aboutme=document.getElementById("aboutme")  
    var work=document.getElementById("work")
    var Achievement=document.getElementById("Achievement")
    var hobbiesarr = [] ;

    username=username.value
    
for(i=0;i<Hobbies.length;i++){
    if(Hobbies[i].checked){
        hobbiesarr.push(Hobbies[i].value)
    }
}
  
    
    for(i=0;i<gendervalue.length;i++){
        if(gendervalue[i].checked){
            gendervalue=gendervalue[i].value
        }
    }
    
 document.getElementById('cv').classList.remove("d-none")   
 document.getElementById('form').classList.add("d-none")

 document.getElementById("nme").innerHTML=`${username}`





}
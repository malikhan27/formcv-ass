
function getValue () {
  var username = document.getElementById ('name');
  var userfathername = document.getElementById ('father-name');
  var email = document.getElementById ('email');
  var number = document.getElementById ('number');
  var dob = document.getElementById ('DOB');
  var address = document.getElementById ('Address');
  var qualification = document.getElementById ('LstQualf');
  var Hobbies = document.getElementsByName ('hobbies');
  var gendervalue = document.getElementsByName ('Gender');
  var aboutme = document.getElementById ('aboutme');
  var work = document.getElementById ('work');
  var Achievement = document.getElementById ('Achievement');
  var hobbiesarr = [];
  var gender = '';
  

  for (i = 0; i < Hobbies.length; i++) {
    if (Hobbies[i].checked) {
      hobbiesarr.push (Hobbies[i].value);
    }
  }
  console.log (hobbiesarr);
  for (i = 0; i < gendervalue.length; i++) {
    if (gendervalue[i].checked) {
      gender = gendervalue[i].value;
    }
  }

  if (username.value.trim () !== '') {
    if (userfathername.value.trim () !== '') {
      if (email.value.trim () !== '') {
        if (number.value !== '' && number.value.length >= 11) {
          if (dob.value.trim () !== '') {
            if (gender !== '') {
              if (address.value !== '') {
                if (qualification.value !== 'Last-Qualification') {
                  if (hobbiesarr.length !== 0) {
                    if (aboutme.value.trim () !== '') {
                      if (work.value.trim () !== '') {
                        if (Achievement.value.trim () !== '') {
                        
                          document.getElementById ('form').classList.add ('d-none');
                          document.getElementById ('cv').classList.remove ('d-none');
                          document.getElementById ('cv').innerHTML = `
                           <div class=" bg-dark text-light text-center pt-2 mt-3">                         
                           <div class="text-center">
                              <h2 id="nme" class:"mt-2">
                              ${username.value}</h2>
                            </div>
                            
                            <div class="my-1">
                            <small><b>S/o</b></small>
                            </div>
                          
                            <div>
                            <h4 id="fathernm">
                            ${userfathername.value}
                            </h4>
                            </div>
                          
                            <div class="row mt-4 ">
                              <div class="col-md-3 text-wrap d-flex flex-wrap justify-content-center">
                              <p id="adres" >
                              ADDRESS: ${address.value}
                              </p>
                              </div>
                              <div class="col-md-3 text-wrap d-flex flex-wrap justify-content-center ">
                              <p id="mail" >
                              EMAIL : ${email.value}
                              </p>
                              </div>
                              <div class="col-md-3 text-wrap d-flex flex-wrap justify-content-center">
                                <p id="gnd" >
                                GENDER : ${gender}
                                </p>
                          
                              </div>
                              <div class="col-md-3 text-wrap d-flex flex-wrap justify-content-center">
                                <p id="Phn" >
                                Ph : ${number.value}
                                </p>
                                </div>
                            </div>
                            </div>
                          
                             <div class="d-flex flex-column container flex-wrap align-items-center align-items-md-start justify-content-center justify-content-md-start  mt-4">
                                <div class="ms-0 ms-md-2 text-center text-md-start ">
                                  <h5> ABOUT ME  </h5>
                                  <p class="ms-md-3 ">
                                  ${aboutme.value}
                                  </p>
                                </div>
                          
                                <div class="ms-0 ms-md-2 text-center text-md-start">
                                  <h5>WORK EXPERIENCE</h5>
                                  <p class="ms-md-3">${work.value}</p>
                                </div>
                          
                                <div class="ms-0 ms-md-2 text-center text-md-start">
                                  <h5>ACHIEVEMENT </h5>
                                  <p class="ms-md-3">${Achievement.value}</p>
                                </div>

                                 <div class="ms-0 ms-md-2 text-center text-md-start">
                          
                                  <h5>HOBBIES</h5>
                                  <ul class="me-2" id="hobbieslist">
                          
                                  </ul>
                                </div>
                          
                              </div> `;
                              for(i=0;i<hobbiesarr.length;i++){
                                document.getElementById("hobbieslist").innerHTML+=`<li>${hobbiesarr[i]}</li>`
                              }
                            } 
                             
                        
                        
                        else {
                          alert ('enter your achivement');
                        }
                      } else {
                        alert ('enter your work');
                      }
                    } else {
                      alert ('enter about yourself');
                    }
                  } else {
                    alert ('enter your hobbies');
                  }
                } else {
                  alert ('enter your qualification');
                }
              } else {
                alert ('enter your address');
              }
            } else {
              alert ('select your gender');
            }
          } else {
            alert ('enter your dob');
          }
        } else {
          alert ('incorrect number');
        }
      } else {
        alert ('enter your email');
      }
    } else {
      alert ('enter your father name');
    }
  } else {
    alert ('enter your name ');
  }
}



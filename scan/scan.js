// // // // const scanner = document.getElementById("scanner");

// // // // const startbus = 5 + " "+ 14; // start bus working  at one day

const scanner = document.getElementById("scanner");
// console.log(scanner);
 

scanner.addEventListener("click", function(wastetimeaverage, timeBetwenStationToaAother,wasteTimeOfLetPublicMoveOn) { {
 const date = new Date();
 const fullwaste = wastetimeaverage + timeBetwenStationToaAother + wasteTimeOfLetPublicMoveOn; 
 const numberofbus = prompt("put your bus target");
 alert("hello world");
 const numberofstaion =prompt("put number of station");
 if (date.getHours() >= 9 && date.getMinutes() >= 39 && date.getMinutes() <= 59  && numberofbus === '39' && numberofstaion === '1' || numberofstaion === '30') {
       alert("bus come after 01 minutes");
}
if (date.getHours() === 6  && date.getMinutes() >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '2' ||numberofstaion === '29'){
        alert(`bus will come after: ${fullwaste} minutes`)   
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '3' ||numberofstaion === '28') {alert(`bus will come after: ${fullwaste * 2} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '4' ||numberofstaion === '27') { 
        alert(`bus will come after: ${fullwaste * 3} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '5' ||numberofstaion === '26') { 
        alert(`bus will come after: ${fullwaste * 4}minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '5' ||numberofstaion === '25') { 
        alert(`bus will come after: ${fullwaste * 5}minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '7' ||numberofstaion === '24') { 
        alert(`bus will come after: ${fullwaste * 6} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '8' ||numberofstaion === '23') { 
        alert(`bus will come after: ${fullwaste* 7} minutes`)
}if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '9' ||numberofstaion === '22') { 
        alert(`bus will come after: ${fullwaste * 8} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '10' ||numberofstaion === '21') { 
        alert(`bus will come after: ${ fullwaste * 9}minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '11' ||numberofstaion === '20') {  
        alert(`bus will come after: ${fullwaste * 10} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '12' ||numberofstaion === '19') { 
        alert(`bus will come after: ${fullwaste* 11} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '13' ||numberofstaion === '18') { 
        alert(`bus will come after: ${fullwaste * 12} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '14' ||numberofstaion === '17') { 
        alert(`bus will come after: ${fullwaste* 13} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '15' ||numberofstaion === '16') { 
        alert(`bus will come after: ${fullwaste * 14} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '16' ||numberofstaion === '15') { 
        alert(`bus will come after: ${fullwaste * 15} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '17' ||numberofstaion === '14') { 
        alert(`bus will come after: ${fullwaste* 16} minutes`)
}
if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '18' ||numberofstaion === '13') { 
        alert(`bus will come after: ${fullwaste* 17} minutes`)
}
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '19' ||numberofstaion === '12') { 
         alert(`bus will come after: ${fullwaste * 18} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '20' ||numberofstaion === '11') { 
         alert(`bus will come after: ${fullwaste * 19} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '21' ||numberofstaion === '10') { 
         alert(`bus will come after: ${fullwaste* 20} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '22'  ||numberofstaion === '9') { 
         alert(`bus will come after: ${fullwaste * 21} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '23' ||numberofstaion === '8') { 
         alert(`bus will come after: ${fullwaste* 22} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '24' ||numberofstaion === '7') { 
         alert(`bus will come after: ${fullwaste* 23} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '25' ||numberofstaion === '6') { 
         alert(`bus will come after: ${fullwaste * 24} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '26' ||numberofstaion === '5') { 
         alert(`bus will come after: ${fullwaste* 25} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '27' ||numberofstaion === '4') { 
         alert(`bus will come after: ${fullwaste * 26} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '28' ||numberofstaion === '3') { 
         alert(`bus will come after: ${fullwaste * 27} minutes`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '29' ||numberofstaion === '2') { 
          alert(`bus will come after: ${fullwaste * 28} hello im here`)
 }
 if (date.getHours() === 6  && date.getMinutes()  >= 0 && date.getMinutes() <= 5  && numberofbus === '39' && numberofstaion === '34' ||numberofstaion === '1') { 
         alert(`bus will come after: ${fullwaste * 29}`)
 }
 else {
         alert("something went wrong bro");
 }

 }
});

 busone(10,10,5);









































































// // // // const html = document.querySelectorAll("html")



// // // // const IDbus1 = {
// // // //   ID:111111,
// // // //   name: "Alsa",
// // // //   number: 39,
// // // //   direction: "https://www.google.maps.com",
// // // //   station: 20,
// // // //   location: "Air tag Signal https://www.google.maps.com",
// // // //   // anonymous function can handling with All Object 
// // // //   removeAndPush: function(para1)  {
// // // //   this.number = para1
// // // //   if (para1 === 39) {
// // // //      let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station and his location is " + this.location;
// // // //        return  alert(resultif)
// // // //    }else  { 
// // // //        alert("nothing here im else");
// // // //    }
// // // // }
// // // // };

// // // // function removehref() {
// // // //   document.getElementById("scanner").removeAttribute("href")
// // // // }
// // // // scanner.addEventListener("click", function() {
// // // //    let confirmMsg = confirm("give us a premision to access your location Maps")
// // // //    if (confirmMsg === true) {
// // // //     alert("it's oki ")
// // // //    } else if (confirmMsg === false) {
// // // //     removehref()
// // // //    }
// // // //   let promptMsg = prompt("good day to you?","write the number of bus");
// // // //   if (promptMsg === '39') {
// // // //    alert(IDbus1.removeAndPush(39))
// // // //   }else {nothing here}
// // // // 





























// // // // const IDbus2 = {
// // // //     name: "Alsa",
// // // //     number: 39,
// // // //     ID:111111,
// // // //      direction: "https://www.google.maps.com",
// // // //      station: 20,     location: "Air tag Signal https://www.google.maps.com",
// // // //      // anonymous function can handling with All Object 

// // // //      removeAndPush: function(para)  {
// // // //      this.number = para
// // // //      if (para === 39) {
// // // //         let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station  and his location is " + this.location;
// // // //           return  alert(resultif)
// // // //       } 
// // // //     else  { 
// // // //          //  alert("nothing here im else");      }
// // // //   }
// // // //    };

// // // // IDbus2.removeAndPush(3)


// // // //  const IDbus3 = {
// // // //     name: "Alsa",
// // // //     number: 39,
// // // //     ID:111111,
// // // //     direction: "https://www.google.maps.com",
// // // //     station: 20,
// // // //     location: "Air tag Signal https://www.google.maps.com",

// // // //     // anonymous function can handling with All Object 

// // // //     removeAndPush: function(para)  {
// // // //     this.number = para
// // // //     if (para === 39) {
// // // //        let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station  and his location is " + this.location;
// // // //          return  alert(resultif)
// // // //      } 
// // // //    else  { 
// // // //         //  alert("nothing here im else");
// // // //      }
// // // //  }
// // // //   };

// // // //  console.log(IDbus3.removeAndPush(31));



// // // //  const IDbus4 = {
// // // //     name: "Alsa",
// // // //     number: 39,
// // // //     ID:111111,
// // // //     direction: "https://www.google.maps.com",
// // // //     station: 20,
// // // //     location: "Air tag Signal https://www.google.maps.com",

// // // //     // anonymous function can handling with All Object 

// // // //     removeAndPush: function(para)  {
// // // //     this.number = para
// // // //     if (para === 39) {
// // // //        let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station  and his location is " + this.location;
// // // //          return  alert(resultif)
// // // //      } 
// // // //    else  { 
// // // //         //  alert("nothing here im else");
// // // //      }
// // // //  }
// // // //   };

// // // //  console.log(IDbus4.removeAndPush(31));



// // // //  const IDbus5 = {
// // // //     name: "Alsa",
// // // //     number: 39,
// // // //     ID:111111,
// // // //     direction: "https://www.google.maps.com",
// // // //     station: 20,
// // // //     location: "Air tag Signal https://www.google.maps.com",

// // // //     // anonymous function can handling with All Object 

// // // //     removeAndPush: function(para)  {
// // // //     this.number = para
// // // //     if (para === 39) {
// // // //        let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station  and his location is " + this.location;
// // // //          return  alert(resultif)
// // // //      } 
// // // //    else  { 
// // // //         //  alert("nothing here im else");
// // // //      }
// // // //  }
// // // //   };
// // // //  console.log(IDbus5.removeAndPush(31));
// // // //  const IDbus6 = {
// // // //     name: "Alsa",
// // // //     number: 39,
// // // //     ID:111111,
// // // //     direction: "https://www.google.maps.com",
// // // //     station: 20,
// // // //     location: "Air tag Signal https://www.google.maps.com",

// // // //     // anonymous function can handling with All Object 

// // // //     removeAndPush1: function(para)  {
// // // //     this.number = para
// // // //     if (para === 39) {
// // // //        let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station  and his location is " + this.location;
// // // //          return  alert(resultif)
// // // //      } 
// // // //    else  { 
// // // //         //  alert("nothing here im else");
// // // //      }
// // // //  }
// // // //   };
// // // //  console.log(IDbus6.removeAndPush1(31));

// // // //  const IDbus7 = {
// // // //     name: "Alsa",
// // // //     number: 39,
// // // //     ID:111111,
// // // //     direction: "https://www.google.maps.com",
// // // //     station: 20,
// // // //     location: "Air tag Signal https://www.google.maps.com",

// // // //     // anonymous function can handling with All Object 

// // // //     removeAndPush2: function(para)  {
// // // //     this.number = para
// // // //     if (para === 39) {
// // // //        let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station  and his location is " + this.location;
// // // //          return  alert(resultif)
// // // //      } 
// // // //    else  { 
// // // //         //  alert("nothing here im else");
// // // //      }
// // // //  }
// // // //   };

// // // //  console.log(IDbus7.removeAndPush2(31));



// // // // const  IDbus8 = {
// // // //     name: "Alsa",
// // // //     number: 39,
// // // //     ID:111111,
// // // //     direction: "https://www.google.maps.com",
// // // //     station: 20,
// // // //     location: "Air tag Signal https://www.google.maps.com",

// // // //     // anonymous function can handling with All Object 

// // // //     removeAndPush3: function(para)  {
// // // //     this.number = para
// // // //     if (para === 39) {
// // // //        let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station  and his location is " + this.location;
// // // //          return  alert(resultif)
// // // //      } 
// // // //    else  { 
// // // //         //  alert("nothing here im else");
// // // //      }
// // // //  }
// // // //   };

// // // //  console.log(IDbus8.removeAndPush3(31));


// // // //  const IDbus9 = {
// // // //     name: "Alsa",
// // // //     number: 39,
// // // //     ID:111111,
// // // //     direction: "https://www.google.maps.com",
// // // //     station: 20,
// // // //     location: "Air tag Signal https://www.google.maps.com",

// // // //     // anonymous function can handling with All Object 

// // // //     removeAndPush4: function(para)  {
// // // //     this.number = para
// // // //     if (para === 39) {
// // // //        let resultif =  "today this bus has a number " + this.number + " and his ID is: "  + this.ID + " have a  " + this.station + " station  and his location is " + this.location;
// // // //          return  alert(resultif)
// // // //      } 
// // // //    else  { 
// // // //         //  alert("nothing here im else");
// // // //      }
// // // //  }


 
// // // //   };
// // // //   (IDbus9.removeAndPush4(31));















































































// // // // // const IDbus1 = {
// // // // //   name: "Alsa",
// // // // //   number: 39,
// // // // //   ID:111111,
// // // // //   direction: "https://www.google.maps.com",
// // // // //   station: 20,
// // // // //   location: "Air tag Signal https://www.google.maps.com",

// // // // //   // anonymous function can handling with All Object 

// // // // //   removeAndPush: function(numberofbus)  {
// // // // //   this.number = numberofbus
// // // // //   if (numberofbus === 1) {
// // // // //      let resultif =  "today this bus has a number " + this.number + " and his ID is: " +this.ID+ " have a "+ 25 +" station  and his location is " + this.location;
// // // // //        return  alert(resultif)
// // // // //   }else{ 
// // // // //       alert("nothing here im else");
// // // // //   }
// // // // // }
// // // // // };

// // // // // console.log(IDbus1.removeAndPush(1));
















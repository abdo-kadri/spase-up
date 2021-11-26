console.log("hello word")

let titel = document.querySelector(".tit")
let bigBox =document.querySelector(".bigBox")
let activ = 1

//  menue  cod
let  menu =document.querySelector(".fa-barss")
let  closee = document.querySelector(".fa-timess")


closee.addEventListener("click",function(){
  titel.style.display = "none";
  console.log("tit display is none frome close")
})

//  media queri max 368
function myFunction3(max368) {
  //console.log(max368.matches)
  if (max368.matches) {
    
    titel.style.display = "none";
    console.log("tit display is none FROM 368")
    menu.addEventListener("click",function(){
      titel.style.display = "block";
      console.log("tit display is block")
  })
  if(activ == 1){
    bigBox.style ="background-image: url(assets/home/background-home-mobile.jpg)"
    }
    if(activ == 2){
      bigBox.style ="background-image: url(assets/destination/background-destination-mobile.jpg)"
    }
    if(activ == 3){
      bigBox.style ="background-image: url(assets/crew/background-crew-mobile.jpg)"
    }
    if(activ == 4){
      bigBox.style ="background-image: url(assets/technology/background-technology-mobile.jpg)"
    }
  } else{ console.log("max 368 not work")} 
  }

var max368 = window.matchMedia("(max-width: 368px)")
myFunction3(max368) // Call listener function at run time
max368.addListener(myFunction3) // Attach listener function on state changes

//  media queri max768
function myFunction7(max768) {
console.log(max768.matches)
  if (max768.matches) { // If media query matches
    titel.style.display = "none";
    console.log("tit display is none 00000000000000")
    menu.addEventListener("click",function(){
      titel.style.display = "block";
      console.log("tit display is block 1111111111111111111")
  })
  if(activ == 1){
    bigBox.style ="background-image: url(assets/home/background-home-tablet.jpg)"
    }
    if(activ == 2){
      bigBox.style ="background-image: url(assets/destination/background-destination-tablet.jpg)"
    }
    if(activ == 3){
      bigBox.style ="background-image: url(assets/crew/background-crew-tablet.jpg)"
    }
    if(activ == 4){
      bigBox.style ="background-image: url(assets/technology/background-technology-tablet.jpg)"
    }
  }else{ console.log("max 768 not work")} 
}

var max768 = window.matchMedia("(min-width : 368px) and (max-width: 768px)")
myFunction7(max768) // Call listener function at run time
max768.addListener(myFunction7) // Attach listener function on state changes

//media min 768
function myFunction8(min768) {
  //console.log(min768.matches)
  if (min768.matches) {
    titel.style.display = "flex";
    console.log("from min 768 titel.style.display = flex")
    if(activ == 1){
      console.log(activ)
      bigBox.style ="background-image:url(assets/home/background-home-desktop.jpg);"
      console.log( bigBox.style.backgroundImage)
      }
      if(activ == 2){
        bigBox.style ="background-image: url(assets/destination/background-destination-desktop.jpg)"
        console.log("chacbakround it work frome acttiv 2")
      }
      if(activ == 3){
        bigBox.style ="background-image: url(assets/crew/background-crew-desktop.jpg)"
      }
      if(activ == 4){
        bigBox.style ="background-image: url(assets/technology/background-technology-desktop.jpg)"
      }
  }else{console.log("min768 not work")}
}
var min768 = window.matchMedia("(min-width: 769px)")
myFunction8(min768) // Call listener function at run time
min768.addListener(myFunction8) // Attach listener function on state changes
// chac bacround-img
function chacBackgrounnd (){
  myFunction8(min768)
  myFunction7(max768)
  myFunction3(max368)
  
  console.log("chacbakround it work")
}



//code of pagee prinnsipaal 

let tit = document.querySelectorAll(".t")
console.log(tit)
tit.forEach(function(ele,index){
  ele.addEventListener("click",function(){
    console.log("box  nem  " +index+" is clic")
    for (let i = 0; i < tit.length; i++) {
      document.querySelector(`.boxn${i+1}`).style.display="none"
      console.log(`boxn${i+1} is closed............` )
      activ = 1
      document.querySelector(`.t.n${i+1}`).style=`border-bottom:none;`
    }
    document.querySelector(`.t.n${index+1}`).style=`border-bottom: SOLID;;`
    if(index+1 == 1){
      document.querySelector(`.boxn${index+1}`).style.display="grid"
      //document.querySelector(`.bigBox`).style ="background-image: url(assets/home/background-home-desktop.jpg);"
      console.log(`boxn${index+1} is open............` )
      activ = 1
      chacBackgrounnd()
    }
      if(index+1 == 2){
      document.querySelector(`.boxn${index+1}`).style.display="block"
      //document.querySelector(`.bigBox`).style ="background-image: url(assets/destination/background-destination-desktop.jpg);"
      console.log(`boxn${index+1} is open............` )
      activ = 2
      chacBackgrounnd()
    }
    if(index+1 == 3){
      document.querySelector(`.boxn${index+1}`).style.display="grid"
      //document.querySelector(`.bigBox`).style ="background-image: url(assets/crew/background-crew-desktop.jpg);"
      console.log(`boxn${index+1} is open............` )
      activ = 3
      chacBackgrounnd()
    }
    if(index+1 == 4){
      document.querySelector(`.boxn${index+1}`).style.display="grid"
      //document.querySelector(`.bigBox`).style ="background-image: url(assets/technology/background-technology-desktop.jpg);"
      console.log(`boxn${index+1} is open............` )
      activ = 4
      chacBackgrounnd()
    }
    
  })
})

// box n 2 content chanch
 let box2Tit = document.querySelectorAll(".titel div")
 console.log(box2Tit)
 box2Tit.forEach(function(ele,index){
   ele.addEventListener("click",function(){
     ele.style ="border-bottom: SOLID; border-color: rgba(255, 255, 255, 1);"
     if(index+1 ==1){
       document.querySelector(".boxn2-img").src="assets/destination/image-moon.png"
       document.querySelector(".plant-name").innerHTML="MOON"
       document.querySelector(".plant-info").innerHTML="See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
       document.querySelector(".distance").innerHTML="384,400 km"
       document.querySelector(".time").innerHTML="3 days"
     }
     if(index+1 ==2){
      document.querySelector(".boxn2-img").src="assets/destination/image-mars.png"
      document.querySelector(".plant-name").innerHTML="MARS"
      document.querySelector(".plant-info").innerHTML="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
      document.querySelector(".distance").innerHTML="225 MIL. km"
      document.querySelector(".time").innerHTML="9 months"
     }
     if(index+1 ==3){
      document.querySelector(".boxn2-img").src="assets/destination/image-europa.png"
      document.querySelector(".plant-name").innerHTML="EUROPA"
      document.querySelector(".plant-info").innerHTML="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
      document.querySelector(".distance").innerHTML="628 MIL. km"
      document.querySelector(".time").innerHTML="3 years"
     }
     if(index+1 ==4){
      document.querySelector(".boxn2-img").src="assets/destination/image-titan.png"
      document.querySelector(".plant-name").innerHTML="TITAN"
      document.querySelector(".plant-info").innerHTML="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
      document.querySelector(".distance").innerHTML="1.6 BIL. km"
      document.querySelector(".time").innerHTML="7 years"
     }
   })
 })
 // box n 3 content change
 let boxn3tit = document.querySelectorAll(".move div")
 boxn3tit.forEach(function(ele,index){
   ele.addEventListener("click",function(){
     ele.style ="background-color: white;"
     if(index+1 == 1){
       document.querySelector(".box3bigTit span").innerHTML= `0${index+1}`
       document.querySelector(".b3span1").innerHTML= `Commander `
       document.querySelector(".b3span2").innerHTML= `Douglas Hurley `
       document.querySelector(".b3p").innerHTML= `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. `
       document.querySelector(".box3img img").src= `assets/crew/image-douglas-hurley.png`
     }
     if(index+1 == 2){
      document.querySelector(".box3bigTit span").innerHTML= `0${index+1}`
      document.querySelector(".b3span1").innerHTML= `Commander `
      document.querySelector(".b3span2").innerHTML= `Douglas Hurley `
      document.querySelector(".b3p").innerHTML= `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. `
      document.querySelector(".box3img img").src= `assets/crew/image-victor-glover.png`
     }
     if(index+1 == 3){
      document.querySelector(".box3bigTit span").innerHTML= `0${index+1}`
      document.querySelector(".b3span1").innerHTML= `Commander `
      document.querySelector(".b3span2").innerHTML= `Douglas Hurley `
      document.querySelector(".b3p").innerHTML= `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. `
      document.querySelector(".box3img img").src= `assets/crew/image-mark-shuttleworth.png`
     }
     if(index+1 == 4){
      document.querySelector(".box3bigTit span").innerHTML= `0${index+1}`
      document.querySelector(".b3span1").innerHTML= `Commander `
      document.querySelector(".b3span2").innerHTML= `Douglas Hurley `
      document.querySelector(".b3p").innerHTML= `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. `
      document.querySelector(".box3img img").src= `assets/crew/image-anousheh-ansari.png`
     }
   })
 })
 // box n 4 content 
 let boxn4Tit =document.querySelectorAll(".box4move div")
 boxn4Tit.forEach(function(ele,index){
    ele.addEventListener("click",function(){
      ele.style ="background-color: rgba(255, 255, 255, 1)"
      ele.style.color =" #000"
      if(index+1 ==1){
        document.querySelector(".box4-img").style ="background-image: url(assets/technology/image-launch-vehicle-landscape.jpg)"
      }
      if(index+1 ==2){
        document.querySelector(".box4-img").style ="background-image: url(assets/technology/image-space-capsule-landscape.jpg)"
      }
      if(index+1 ==3){
        document.querySelector(".box4-img").style="background-image: url(assets/technology/image-spaceport-landscape.jpg)"
      }
    })
 })
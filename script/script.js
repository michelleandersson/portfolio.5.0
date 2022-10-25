$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
         $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

$('#spotify-btn').on('click', ()=> {
    $('.spotify-show-text').slideToggle(1000); 
    let x=document.getElementById("spotify-btn"); 
    if(x.innerHTML==="Show more"){
        x.innerHTML = "Show less"; 
    } else {
        x.innerHTML = "Show more"; 
    }
});

$('#bhromaon-btn').on('click', ()=> {
    $('.bhromaon-show-text').slideToggle(1000); 
    let x=document.getElementById("bhromaon-btn"); 
    if(x.innerHTML==="Show more"){
        x.innerHTML = "Show less"; 
    } else {
        x.innerHTML = "Show more"; 
    }
});

$('#monticello-btn').on('click', ()=> {
    $('.monticello-show-text').slideToggle(1000); 
    let x=document.getElementById("monticello-btn"); 
    if(x.innerHTML==="Show more"){
        x.innerHTML = "Show less"; 
    } else {
        x.innerHTML = "Show more"; 
    }
});

$('#genesis-btn').on('click', ()=> {
    $('.genesis-show-text').slideToggle(1000); 
    let x=document.getElementById("genesis-btn"); 
    if(x.innerHTML==="Show more"){
        x.innerHTML = "Show less"; 
    } else {
        x.innerHTML = "Show more"; 
    }
});

$('#fluffy-btn').on('click', ()=> {
    $('.fluffy-show-text').slideToggle(1000); 
    let x=document.getElementById("fluffy-btn"); 
    if(x.innerHTML==="Show more"){
        x.innerHTML = "Show less"; 
    } else {
        x.innerHTML = "Show more"; 
    }
});

$('#banger-btn').on('click', ()=> {
    $('.banger-show-text').slideToggle(1000); 
    let x=document.getElementById("banger-btn"); 
    if(x.innerHTML==="Show more"){
        x.innerHTML = "Show less"; 
    } else {
        x.innerHTML = "Show more"; 
    }
});


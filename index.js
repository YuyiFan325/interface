$(document).ready(function(){
  $(".pictures, .display").mouseover(function(){
    $(".aboutLeft").css({
      "background": "linear-gradient(#fff, #dddddd)", 
      "padding-top": "50px",
      "margin-top": "-50px",
      "font-weight": "bold",
    })
  })
  $(".pictures, .display").mouseleave(function(){
    $(".aboutLeft").css({
      "background": "none",
      "font-weight": "normal",
    });
  })
})

$(document).ready(function(){
  $(".empty").mouseover(function(){
    $(".aboutRight").css({
      "background": "linear-gradient(#fff, #dddddd)", 
      "padding-top": "50px",
      "margin-top": "-50px",
      "font-weight": "bold",
    })
    $(".empty").css({
      "box-shadow": "0 0 10px grey",
      "cursor": "pointer",
    });
  })
  $(".empty").mouseleave(function(){
    $(".aboutRight").css("background", "none");
    $(".empty").css({
      "box-shadow": "none",
      "font-weight": "normal",
    });
    $(".aboutRight").css("font-weight", "normal");
  })
})







$(document).ready(function(){
  $(".pic1").click(function(){
    $(".pic1-2").css("opacity", "1");
    $(".pic2-2").css("opacity", "0");
    $(".pic3-2").css("opacity", "0");
    $(".pic4-2").css("opacity", "0");
    $(".pic5-2").css("opacity", "0");
    $(".pic6-2").css("opacity", "0");
    $(".pic7-2").css("opacity", "0");
    $(".pic8-2").css("opacity", "0");
    $(".pic9-2").css("opacity", "0");
    $("#txt1").toggle();
    $("#txt2").hide();
    $("#txt3").hide();
    $("#txt4").hide();
    $("#txt5").hide();
    $("#txt6").hide();
    $("#txt7").hide();
    $("#txt8").hide();
    $("#txt9").hide();
    $(".sun").show();
    $(".moon").hide();
    $(".rain").hide();
    $(".people").hide();
    $(".water").hide();
    $(".wind").hide();
    $(".fire").hide();
    $(".mountain").hide();
    $(".wood").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})

$(document).ready(function(){
  $(".pic2").click(function(){
    $(".pic2-2").css("opacity", "1");
    $(".pic1-2").css("opacity", "0");
    $(".pic3-2").css("opacity", "0");
    $(".pic4-2").css("opacity", "0");
    $(".pic5-2").css("opacity", "0");
    $(".pic6-2").css("opacity", "0"); 
    $(".pic7-2").css("opacity", "0");
    $(".pic8-2").css("opacity", "0");
    $(".pic9-2").css("opacity", "0");   
    $("#txt2").toggle();
    $("#txt1").hide();
    $("#txt3").hide();
    $("#txt4").hide();
    $("#txt5").hide();
    $("#txt6").hide();
    $("#txt7").hide();
    $("#txt8").hide();
    $("#txt9").hide();
    $(".moon").show();
    $(".sun").hide();
    $(".rain").hide();
    $(".people").hide();
    $(".water").hide();
    $(".wind").hide();
    $(".fire").hide();
    $(".mountain").hide();
    $(".wood").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})

$(document).ready(function(){
  $(".pic3").click(function(){
    $(".pic3-2").css("opacity", "1");
    $(".pic2-2").css("opacity", "0");
    $(".pic1-2").css("opacity", "0");
    $(".pic4-2").css("opacity", "0");
    $(".pic5-2").css("opacity", "0");
    $(".pic6-2").css("opacity", "0");
    $(".pic7-2").css("opacity", "0");
    $(".pic8-2").css("opacity", "0");
    $(".pic9-2").css("opacity", "0");
    $("#txt3").toggle();
    $("#txt1").hide();
    $("#txt2").hide();
    $("#txt4").hide();
    $("#txt5").hide();
    $("#txt6").hide();
    $("#txt7").hide();
    $("#txt8").hide();
    $("#txt9").hide();
    $(".rain").show();
    $(".sun").hide();
    $(".moon").hide();
    $(".people").hide();
    $(".water").hide();
    $(".wind").hide();
    $(".fire").hide();
    $(".mountain").hide();
    $(".wood").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})

$(document).ready(function(){
  $(".pic4").click(function(){
    $(".pic4-2").css("opacity", "1");
    $(".pic2-2").css("opacity", "0");
    $(".pic3-2").css("opacity", "0");
    $(".pic1-2").css("opacity", "0");
    $(".pic5-2").css("opacity", "0");
    $(".pic6-2").css("opacity", "0"); 
    $(".pic7-2").css("opacity", "0");
    $(".pic8-2").css("opacity", "0");
    $(".pic9-2").css("opacity", "0");   
    $("#txt4").toggle();
    $("#txt1").hide();
    $("#txt3").hide();
    $("#txt2").hide();
    $("#txt5").hide();
    $("#txt6").hide();
    $("#txt7").hide();
    $("#txt8").hide();
    $("#txt9").hide();
    $(".wind").show();
    $(".sun").hide();
    $(".moon").hide();
    $(".rain").hide();
    $(".water").hide();
    $(".people").hide();
    $(".fire").hide();
    $(".mountain").hide();
    $(".wood").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})

$(document).ready(function(){
  $(".pic5").click(function(){
    $(".pic5-2").css("opacity", "1");
    $(".pic2-2").css("opacity", "0");
    $(".pic3-2").css("opacity", "0");
    $(".pic4-2").css("opacity", "0");
    $(".pic1-2").css("opacity", "0");
    $(".pic6-2").css("opacity", "0");
    $(".pic7-2").css("opacity", "0");
    $(".pic8-2").css("opacity", "0");
    $(".pic9-2").css("opacity", "0");
    $("#txt5").toggle();
    $("#txt1").hide();
    $("#txt3").hide();
    $("#txt4").hide();
    $("#txt2").hide();
    $("#txt6").hide();
    $("#txt7").hide();
    $("#txt8").hide();
    $("#txt9").hide();
    $(".people").show();
    $(".sun").hide();
    $(".moon").hide();
    $(".wind").hide();
    $(".rain").hide();
    $(".water").hide();
    $(".fire").hide();
    $(".mountain").hide();
    $(".wood").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})

$(document).ready(function(){
  $(".pic6").click(function(){
    $(".pic6-2").css("opacity", "1");
    $(".pic2-2").css("opacity", "0");
    $(".pic3-2").css("opacity", "0");
    $(".pic4-2").css("opacity", "0");
    $(".pic5-2").css("opacity", "0");
    $(".pic1-2").css("opacity", "0");
    $(".pic7-2").css("opacity", "0");
    $(".pic8-2").css("opacity", "0");
    $(".pic9-2").css("opacity", "0");
    $("#txt6").toggle();
    $("#txt5").hide();
    $("#txt1").hide();
    $("#txt3").hide();
    $("#txt4").hide();
    $("#txt2").hide();
    $("#txt7").hide();
    $("#txt8").hide();
    $("#txt9").hide();
    $(".water").show();
    $(".sun").hide();
    $(".moon").hide();
    $(".people").hide();
    $(".rain").hide();
    $(".wind").hide();
    $(".fire").hide();
    $(".mountain").hide();
    $(".wood").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})

$(document).ready(function(){
  $(".pic7").click(function(){
    $(".pic7-2").css("opacity", "1");
    $(".pic2-2").css("opacity", "0");
    $(".pic3-2").css("opacity", "0");
    $(".pic4-2").css("opacity", "0");
    $(".pic5-2").css("opacity", "0");
    $(".pic1-2").css("opacity", "0");
    $(".pic6-2").css("opacity", "0");
    $(".pic8-2").css("opacity", "0");
    $(".pic9-2").css("opacity", "0");
    $("#txt7").toggle();
    $("#txt5").hide();
    $("#txt1").hide();
    $("#txt3").hide();
    $("#txt4").hide();
    $("#txt2").hide();
    $("#txt6").hide();
    $("#txt8").hide();
    $("#txt9").hide();
    $(".fire").show();
    $(".sun").hide();
    $(".moon").hide();
    $(".people").hide();
    $(".rain").hide();
    $(".wind").hide();
    $(".water").hide();
    $(".mountain").hide();
    $(".wood").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})

$(document).ready(function(){
  $(".pic8").click(function(){
    $(".pic8-2").css("opacity", "1");
    $(".pic2-2").css("opacity", "0");
    $(".pic3-2").css("opacity", "0");
    $(".pic4-2").css("opacity", "0");
    $(".pic5-2").css("opacity", "0");
    $(".pic1-2").css("opacity", "0");
    $(".pic7-2").css("opacity", "0");
    $(".pic6-2").css("opacity", "0");
    $(".pic9-2").css("opacity", "0");
    $("#txt8").toggle();
    $("#txt5").hide();
    $("#txt1").hide();
    $("#txt3").hide();
    $("#txt4").hide();
    $("#txt2").hide();
    $("#txt7").hide();
    $("#txt6").hide();
    $("#txt9").hide();
    $(".mountain").show();
    $(".sun").hide();
    $(".moon").hide();
    $(".people").hide();
    $(".rain").hide();
    $(".wind").hide();
    $(".fire").hide();
    $(".water").hide();
    $(".wood").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})

$(document).ready(function(){
  $(".pic9").click(function(){
    $(".pic9-2").css("opacity", "1");
    $(".pic2-2").css("opacity", "0");
    $(".pic3-2").css("opacity", "0");
    $(".pic4-2").css("opacity", "0");
    $(".pic5-2").css("opacity", "0");
    $(".pic1-2").css("opacity", "0");
    $(".pic7-2").css("opacity", "0");
    $(".pic8-2").css("opacity", "0");
    $(".pic6-2").css("opacity", "0");
    $("#txt9").toggle();
    $("#txt5").hide();
    $("#txt1").hide();
    $("#txt3").hide();
    $("#txt4").hide();
    $("#txt2").hide();
    $("#txt6").hide();
    $("#txt8").hide();
    $("#txt7").hide();
    $(".wood").show();
    $(".sun").hide();
    $(".moon").hide();
    $(".people").hide();
    $(".rain").hide();
    $(".wind").hide();
    $(".fire").hide();
    $(".mountain").hide();
    $(".water").hide();
    $(".evolution").css("box-shadow", "0 0 10px grey");
    $(".thumbUp").css("opacity","1");
    $(".thumbDown").css("opacity","1");
    $(".empty").css("box-shadow","0px 0px 10px grey inset");
    $(".icon").css("opacity", "1");
  })
})








// $(document).ready(function(){
//   $("#txt1").click(function(){
//     $(".sun").show();
//     $(".moon").hide();
//     $(".rain").hide();
//     $(".people").hide();
//     $(".water").hide();
//     $(".wind").hide();
//     $(".fire").hide();
//     $(".mountain").hide();
//     $(".wood").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })

// $(document).ready(function(){
//   $("#txt2").click(function(){
//     $(".moon").show();
//     $(".sun").hide();
//     $(".rain").hide();
//     $(".people").hide();
//     $(".water").hide();
//     $(".wind").hide();
//     $(".fire").hide();
//     $(".mountain").hide();
//     $(".wood").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })

// $(document).ready(function(){
//   $("#txt3").click(function(){
//     $(".rain").show();
//     $(".sun").hide();
//     $(".moon").hide();
//     $(".people").hide();
//     $(".water").hide();
//     $(".wind").hide();
//     $(".fire").hide();
//     $(".mountain").hide();
//     $(".wood").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })

// $(document).ready(function(){
//   $("#txt4").click(function(){
//     $(".wind").show();
//     $(".sun").hide();
//     $(".moon").hide();
//     $(".rain").hide();
//     $(".water").hide();
//     $(".people").hide();
//     $(".fire").hide();
//     $(".mountain").hide();
//     $(".wood").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })

// $(document).ready(function(){
//   $("#txt5").click(function(){
//     $(".people").show();
//     $(".sun").hide();
//     $(".moon").hide();
//     $(".wind").hide();
//     $(".rain").hide();
//     $(".water").hide();
//     $(".fire").hide();
//     $(".mountain").hide();
//     $(".wood").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })

// $(document).ready(function(){
//   $("#txt6").click(function(){
//     $(".water").show();
//     $(".sun").hide();
//     $(".moon").hide();
//     $(".people").hide();
//     $(".rain").hide();
//     $(".wind").hide();
//     $(".fire").hide();
//     $(".mountain").hide();
//     $(".wood").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })

// $(document).ready(function(){
//   $("#txt7").click(function(){
//     $(".fire").show();
//     $(".sun").hide();
//     $(".moon").hide();
//     $(".people").hide();
//     $(".rain").hide();
//     $(".wind").hide();
//     $(".water").hide();
//     $(".mountain").hide();
//     $(".wood").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })

// $(document).ready(function(){
//   $("#txt8").click(function(){
//     $(".mountain").show();
//     $(".sun").hide();
//     $(".moon").hide();
//     $(".people").hide();
//     $(".rain").hide();
//     $(".wind").hide();
//     $(".fire").hide();
//     $(".water").hide();
//     $(".wood").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })

// $(document).ready(function(){
//   $("#txt9").click(function(){
//     $(".wood").show();
//     $(".sun").hide();
//     $(".moon").hide();
//     $(".people").hide();
//     $(".rain").hide();
//     $(".wind").hide();
//     $(".fire").hide();
//     $(".mountain").hide();
//     $(".water").hide();
//     $(".evolution").css("box-shadow", "0 0 10px grey");
//     $(".thumbUp").css("opacity","1");
//     $(".thumbDown").css("opacity","1");
//     $(".empty").css("box-shadow","0px 0px 10px grey inset");
//     $(".icon").css("opacity", "1");
//   })
// })
// $(document).ready(function(){
//   $("#sun1").mouseover(function(){
//     $("#sun1").css("opacity","1"); 
//   })
// })

// $(document).ready(function(){
//   $("#sun2").mouseover(function(){
//     $("#sun2").css("opacity","1"); 
//   })
// })

// $(document).ready(function(){
//   $("#sun3").mouseover(function(){
//     $("#sun3").css("opacity","1"); 
//   })
// })

// $(document).ready(function(){
//   $("#sun4").mouseover(function(){
//     $("#sun4").css("opacity","1"); 
//   })
// })

// $(document).ready(function(){
//   $("#sun5").mouseover(function(){
//     $("#sun5").css("opacity","1"); 
//   })
// })

// const body = document.querySelector("body");
// const pic = document.querySelector(".slider-pic");
// const input = document.querySelector("input");
// const bar = document.querySelector(".prograss-bar");
// const thumb = document.querySelector(".thumb");
// input.oninput = function(){
//   let sliderValue = input.value;
//   thumb.style.left = sliderValue + '%';
//   bar.style.width = sliderValue + '%';
//   if(sliderValue < 20){
//     pic.style.marginTop = "0px";
//     body.classList.add("sun-2");
//     body.classList.remove("sun-1");
//     body.classList.remove("");
//   }
// }


// $(document).ready(function(){
//   $(".dropbtn").click(function(){
//     $(".dropdown-content").slideToggle("slow")
//   })
// })

//const slideValue = document.querySelector("span");
// const inputSlider = document.querySelector("input");
// inputSlider.oninput = (()=>{
//   let value = inputSlider.value;
//   slideValue.textContent = value;
//   slideValue.style.left = (value/2) + "%";
//   slideValue.classList.add("show");
// });
// inputSlider.onblur = (()=>{
//   slideValue.classList.remove("show");
// });

// $(document).ready(function(){
//   var handle = $( "#custom-handle" );
//     $( "#slider" ).slider({
//       create: function() {
//         handle.text( $( this ).slider( "value" ) );
//       },
//       slide: function( event, ui ) {
//         handle.text( ui.value );
//       }
//     });
// });

// $( function() {
//     $( ".ui-widget-content" ).draggable();
//   } );

// const draggables = document.querySelectorAll('.fill')
// const containers = document.querySelectorAll('.container')

// draggables.forEach(draggable => {
//   draggable.addEventListener('dragstart', () => {
//     darggable.classList.add('dragging')
//   })

//   draggable.addEventListener('dragger', () => {
//     draggable.classList.remove('dragging')
//   })
// })

// containers.forEach(container => {
//   container.addEventListener('dragover', e => {
//     e.preventDefault()
//     const afterElement = getDragAfterElement(container,e.clientY)
//     const draggable = document.querySelector('.fill')
//     if(afterElement == null){
//       container.appendChild(draggable)
//     }else{
//       container.insertBefore(draggable,aftere)
//     }
//     container.appendChild(draggable)
//   })
// })

// function getDragAfterElement(container,y){
//   const draggableElements = [...containter.querySelectorAll('draggable:not (.fill)')]
//   draggableElements.reduce((closet, child) => {
//     const box = child.getBoundingClientRet()
//     const offset = y - box.top - box.height/2
//     if (offset < 0 && offsets > closet.offset){
//       return {offset: offset, element:child}
//     }else{
//       return closest
//     }
//   }, {offset: Number.NEGATIVE_INFINITY })
// 

// $(document).ready(function(){
//   $(".empty").click(function(){
//     $(".empty").css("box-shadow","0px 0px 15px #000 inset");
//     $("#gif1").toggle();
//   })
// })
// 
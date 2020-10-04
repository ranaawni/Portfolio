$( document ).ready(function() {
     
     var skillsArray=[]
     var starsArray=[]
     // var Range = $("#myRange").val();
     //      var MyRage = $("<p>"+Range+"</p>");
     //      $("#myRange").append(MyRage);
     $("#part2").hide();
     $("#submit").click(function(){
          $("#part1").hide();
          $("#part2").show();
          var fname = $("#fname").val();
          var name = $("<h1>"+fname+"</h1>");
          $("#text").append(name);
        var field = $("#position").val();
          var position = $("<h3>"+field+"</h3>");
          $("#text").append(position);
          var about = $("#about").val();
          var desc = $("<pre>"+about+"</pre>");
           desc.attr("id","experience");
          $("#divabout").append(desc);


          

//           var table
//           $("table").append(table)
// var image
// var data
// var stars
// var imageTd

//           $.each(skillsArray, function(i,item){
            
//             table = $("<tr></tr>")

//            data = $("<td>"+item+"</td>")
//             $("tr").append(data)
               
//                for (var count = 0; count < 5; count++){
                  
//                    image = $("<img>")
//                    image.attr("src", "stars.png")
//                    imageTd = $("<td>"+image+"</td>")
//                    $("td").append(imageTd)    

//                    // image=$(' <i class= "fas fa-star"></i> ')   
//                    // imageTd = $("<td>"+image+"</td>")
//                    // $("tr").append(imageTd)
//                }
          
//           })

     })



     $("#add").click(function(){

          // var table = $("<tr></tr>")
          // $("table").append(table)

          // var skills = $("#skills").val();
          // var skillElement = $("<td>"+skills+"</td>");
          // $("tr").append(skillElement);
 



          // var sliderValue =$("#sliderVlue").val()
          // console.log(sliderValue)
          // var sliderElement =$("<td></td>")
          // sliderElement.attr("id","element")
          //      // var image
          // for(var i = 0; i <= sliderValue; i++ ){             
          //     // var  image = $("<img>")
          //     //  image.attr("src", "stars.png")
          //     //  $("tr").append(image)    

          //     image=$(' <i class= "fas fa-star"></i> ')   
          //       $("td").append(image)

          //  }

          //  $("#sliderVlue").html(0)
          // $("#skills").val("")
          // $("#myRange").val(0)


          ////////////////////////////////////////////////////

          

        

          // skillsArray.push($("#skills").val());
          // starsArray.push($("#sliderVlue").val());
          
          // $("#sliderVlue").html(0)
          // $("#skills").val("")
          // $("#myRange").val(0)


     })


})
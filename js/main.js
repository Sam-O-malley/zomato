
function getData() {
    
$.ajax({
// url: 'https://developers.zomato.com/api/v2.1/reviews?res_id=7100538',
 url: 'https://developers.zomato.com/api/v2.1/cuisines?city_id=71',
   dataType: 'json',
   type: 'GET',
   async: true,
   beforeSend: function(xhr){xhr.setRequestHeader('user-key','0d4d795b7b6b0e26ad6f107918004ec4');
      },// This inserts the api key into the HTTP header
        success: function(response) 
        { console.log(response) } 
    });
    }
    
    $(document).ready(function(){
      $('#data').click(function(){
        $.getJSON("demo_ajax_json.js", function(result){
          $.each(result, function(i, field){
            $("div").append(field + " ");
          });
        });
      });
    });
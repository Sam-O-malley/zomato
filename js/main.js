// $.ajax({
//     url:'js/config.json',
//     dataType: 'json',
//     type: 'GET',
//     success: function(keys) {
//         key = key[0].userkey;
//         console.log("the key has loaded")
//     },
//     error: function (error) {
//         console.log(error);
//         console.log("its not working")
//     }
// }),


// function getData() {
    
$.ajax({
        url: 'https://developers.zomato.com/api/v2.1/reviews?res_id=7100538',
        dataType: 'json',
        // type: 'GET',
        async: true,
        beforeSend: function(xhr){xhr.setRequestHeader('user-key', 
        '0d4d795b7b6b0e26ad6f107918004ec4');
    },  // This inserts the api key into the HTTP header
        success: function(response) 
        { console.log(response) } 
    });
            // }
    //     })
    // };

    

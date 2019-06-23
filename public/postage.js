//This is jquery It could also be done in vanilla javascript
//The first line is getting the document that sent a call, in this case, postageSubmit.html
$(document).ready(function () {
    $("#myButton2").on("click", function(){
        let ounces = $("#ounces").val();
        let service = $("#service").val();

//This is an AJAX call for the jquery       
        $.get('/postage_service', {
                'ounces' : ounces,
                'service' : service
            } , function(data){
                $("#ajax_results2").text(data.result);
            }, 'json'
        );
    })

});





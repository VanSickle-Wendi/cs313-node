//This is jquery It could also be done in vanilla javascript
//The first line is getting the document that sent a call, in this case, submit.html
$(document).ready(function () {
    $("#myButton").on("click", function(){
        let number1 = $("#number1").val();
        let number2 = $("#number2").val();
        let operand = $("#operand").val();
//This is an AJAX call for the jquery       
        $.get('/math_service', {
                'number1' : number1,
                'number2' : number2,
                'operand' : operand
            } , function(data){
                $("#ajax_results").text(data.result);
            }, 'json'
        );
    })

});
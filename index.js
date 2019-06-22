const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/postage', handlePostage)
  .get('/math', function (req, res) {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var operand = req.query.operand;
    var result = doMath(number1, number2, operand);

    //This is for rendering it to a view
    var params1 = {
      number1: number1, number2: number2, operand: operand, result: result
    };
    res.render('pages/view', params1);

  })
  .get('/math_service', function (req, res) {
    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var operand = req.query.operand;
    var result = { result: doMath(number1, number2, operand) };
    var stringify = JSON.stringify(result);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(stringify);
    res.end();

  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
  

function doMath(number1, number2, operand) {
  var result = 0;
  if (operand === 'plus') {
    result = Number(number1) + Number(number2);
  } else if (operand === 'minus') {
    result = Number(number1) - Number(number2);
  } else if (operand === 'times') {
    result = Number(number1) * Number(number2);
  } else if (operand === 'divide') {
    result = Number(number1) / Number(number2);
  }
  
  return result;
  }
  
  
function handlePostage(request, response) {
	const service = request.query.service;
	const ounces = Number(request.query.ounces);

	// TODO: Here we should check to make sure we have all the correct parameters

	calcPostage(response, service, ounces);
} 



function calcPostage(response, serv, oz) {

	let result = 0;
      
   	if (serv === "Letters (Stamped)" && oz <= 1) {
         result = .55;
      }else if (serv === "Letters (Stamped)" && oz <= 2) {
         result = .70;
      }else if (serv === "Letters (Stamped)" && oz <= 3) {
         result = .85;
      }else if (serv === "Letters (Stamped)" && oz <= 3.5) {
         result = 1;
      }else if (serv === "Letters(Metered)" && oz <= 1) {
         result = .50;
      }else if (serv === "Letters(Metered)" && oz <= 2) {
         result = .65; 
      }else if (serv === "Letters(Metered)" && oz <= 3) {
         result = .80;
      }else if (serv === "Letters(Metered)" && oz <= 3.5) {
         result = .95;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 1) {
         result = 1;          
      }else if (serv === "Large Envelopes(Flats)" && oz <= 2) {
         result = 1.15;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 3) {
         result = 1.30;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 4) {
         result = 1.45;
      }else if (serv === "largeEnvFlats" && oz <= 5) {
         result = 1.60;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 6) {
         result = 1.75;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 7) {
         result = 1.90;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 8) {
         result = 2.05;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 9) {
         result = 2.20;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 10) {
         result = 2.35;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 11) {
         result = 2.50;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 12) {
         result = 2.65;
      }else if (serv === "Large Envelopes(Flats)" && oz <= 13) {
         result = 2.80;  
      }else if (serv === "First-Class Package" && oz <= 4) {
         result = 3.66;          
      }else if (serv === "First-Class Package" && oz <= 8) {
         result = 4.39;
      }else if (serv === "First-Class Package" && oz <= 12) {
         result = 5.19;
      }else if (serv === "First-Class Package" && oz <= 13) {
         result = 5.71;          
      } else {
         result = "Your package is too heavy for these services.";
	}   

	// Set up a JSON object of the values we want to pass along to the EJS result page
	const params = {service: serv, ounces: oz, result: result};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('pages/postageResult', params);

}
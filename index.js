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
    .get('/postage_service', function (req, res) {
    var ounces = req.query.ounces;
    var service = req.query.service;
    var result = { result: calculateRateAjax(service, ounces) };
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

	calculateRate(response, service, ounces);
}

function calculateRate(response, service, ounces) {

	let result = 0;
      
   	if (service === "Letters (Stamped)" && ounces <= 1) {
         result = .55;
      }else if (service === "Letters (Stamped)" && ounces <= 2) {
         result = .70;
      }else if (service === "Letters (Stamped)" && ounces <= 3) {
         result = .85;
      }else if (service === "Letters (Stamped)" && ounces <= 3.5) {
         result = 1;
      }else if (service === "Letters(Metered)" && ounces <= 1) {
         result = .50;
      }else if (service === "Letters(Metered)" && ounces <= 2) {
         result = .65; 
      }else if (service === "Letters(Metered)" && ounces <= 3) {
         result = .80;
      }else if (service === "Letters(Metered)" && ounces <= 3.5) {
         result = .95;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 1) {
         result = 1;          
      }else if (service === "Large Envelopes(Flats)" && ounces <= 2) {
         result = 1.15;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 3) {
         result = 1.30;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 4) {
         result = 1.45;
      }else if (service === "largeEnvFlats" && ounces <= 5) {
         result = 1.60;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 6) {
         result = 1.75;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 7) {
         result = 1.90;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 8) {
         result = 2.05;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 9) {
         result = 2.20;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 10) {
         result = 2.35;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 11) {
         result = 2.50;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 12) {
         result = 2.65;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 13) {
         result = 2.80;  
      }else if (service === "First-Class Package" && ounces <= 4) {
         result = 3.66;          
      }else if (service === "First-Class Package" && ounces <= 8) {
         result = 4.39;
      }else if (service === "First-Class Package" && ounces <= 12) {
         result = 5.19;
      }else if (service === "First-Class Package" && ounces <= 13) {
         result = 5.71;          
      } else {
         result = "0 Your package is too heavy for these services.";
	}   

	// Set up a JSON object of the values we want to pass along to the EJS result page
	const params = {service: service, ounces: ounces, result: result};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.
	response.render('pages/postageResult', params);


}

function calculateRateAjax(service, ounces) {

	let result = 0;
      
   	if (service === "Letters (Stamped)" && ounces <= 1) {
         result = .55;
      }else if (service === "Letters (Stamped)" && ounces <= 2) {
         result = .70;
      }else if (service === "Letters (Stamped)" && ounces <= 3) {
         result = .85;
      }else if (service === "Letters (Stamped)" && ounces <= 3.5) {
         result = 1;
      }else if (service === "Letters(Metered)" && ounces <= 1) {
         result = .50;
      }else if (service === "Letters(Metered)" && ounces <= 2) {
         result = .65; 
      }else if (service === "Letters(Metered)" && ounces <= 3) {
         result = .80;
      }else if (service === "Letters(Metered)" && ounces <= 3.5) {
         result = .95;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 1) {
         result = 1;          
      }else if (service === "Large Envelopes(Flats)" && ounces <= 2) {
         result = 1.15;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 3) {
         result = 1.30;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 4) {
         result = 1.45;
      }else if (service === "largeEnvFlats" && ounces <= 5) {
         result = 1.60;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 6) {
         result = 1.75;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 7) {
         result = 1.90;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 8) {
         result = 2.05;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 9) {
         result = 2.20;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 10) {
         result = 2.35;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 11) {
         result = 2.50;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 12) {
         result = 2.65;
      }else if (service === "Large Envelopes(Flats)" && ounces <= 13) {
         result = 2.80;  
      }else if (service === "First-Class Package" && ounces <= 4) {
         result = 3.66;          
      }else if (service === "First-Class Package" && ounces <= 8) {
         result = 4.39;
      }else if (service === "First-Class Package" && ounces <= 12) {
         result = 5.19;
      }else if (service === "First-Class Package" && ounces <= 13) {
         result = 5.71;          
      } else {
         result = "0 Your package is too heavy for these services.";
	}   

      return "Your purchase price is $" + result;


}
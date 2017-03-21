'use strict';

const { getCurrentObj, updateCurrentObj } = require('./currentObj.js')
const currentObj = getCurrentObj()

//change page based upon user selection
//will get Jesse and Peter to help complete

module.exports.changePage = (arg)=>{
  if(arg.length === 0 ){throw new Error ("Please select another option")};
  	switch (arg) {
	  case '1':
	  	const { createCustomerMenu } = require('./createCustomers.js')
		createCustomerMenu()
		break
	  case '2':
		const { activeCustomers } = require('./createCustomers.js')
		activeCustomers()
		break
	  case '3':
	  	const { checkForSavedPayment } = require('./createPaymentOptions.js')
	  	checkForSavedPayment()
		break
	  case '4':
	  	const { createProducts } = require('./createProducts.js')
	  	addProducts()
		break
	  case '5':

	  	console.log(arg)
		break
	  case '6':
	  	console.log('Goodbye!')
	  	break
	}
  return {};
};

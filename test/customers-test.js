const { assert: {equal, isString} } = require('chai')
const { customerInfo } = require('../lib/customers')

describe('customers', () => {
    describe('customerInfo', () => {
        it('should return a string of names', () => {
            let name = customerInfo()
            customerInfo(), 'customer info'
        })

        it('should return specific name in string', () => {
            let specName = customerInfo("customer_name")
        })

        it('should return specific address', () => {
            let specAdd = customerInfo("street_address")
        })

        it('should return specific city', () => {
            let specCity = customerInfo("city")
        })

        it('should return specific state', () => {
            let specState = customerInfo("state")
        })

        it('should return specific postal code', () => {
            let specPostalCode = customerInfo("postal_code")
        })

        it('should return specific phone number', () => {
            let specPhoneNum = customerInfo("phone_number")
        })
    })

    describe('populateCustomers', () => {
        it('should return string of info', () => {

        })
    })
  
    describe('errorHandler', () => {
        it('should return string for error message', () => {

        })
    })
})

// Create Customer
// Choose active customer
// Create Payment Option
// Add Product to an Order
// Complete an Order
// See Product Popularity

const { assert: {equal, isTrue} } = require('chai')
const { getCustomer } = require('../main')

describe('main', () => {
    describe('getCustomer', () => {
        it('should return an array', () => {
            let result = getCustomer()
            isTrue(Array.isArray(result))
        })
    })
})
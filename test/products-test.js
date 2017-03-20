const { assert: {equal, isTrue} } = require('chai')
const { getProduct } = require('../lib/products')

describe('products', () => {
    describe('getProduct', () => {
        it('should return array', () => {
            let result = getProduct()
            isTrue(Array.isArray(result))
        })
    })
})
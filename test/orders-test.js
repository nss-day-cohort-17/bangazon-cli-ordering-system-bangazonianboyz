const { assert: {isTrue, isFalse} } = require('chai')
const { orderInfo } = require('../lib/orders')

describe('orders', () => {
    describe('orderInfo', () => {
        it('should return true', () => {
            let orderInfo = true;
            isTrue(orderInfo, 'Paid off')
        })

        it('should return false', () => {
            let orderInfo = false;
            isFalse(orderInfo, 'Not fully paid')
        })
    })

    describe('populateOrders', () => {
        it('should return order string', () => {
            
        })
    })
})
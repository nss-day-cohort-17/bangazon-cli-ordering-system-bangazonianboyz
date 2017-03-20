const { assert: {isTrue} } = require('chai')
const {getRev} = require('../lib/revenue')

describe('revenue', () => {
    describe('getRev', () => {
        it('should return array', () => {
            let revInfo = getRev()
            isTrue(Array.isArray(revInfo))
        })
    })
})
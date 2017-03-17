const { assert: {equal, isString} } = require('chai')
const { getName } = require('../lib/names')

describe('names', () => {
    describe('getName', () => {
        it('should return a string of names', () => {
            let name = getName()
            isString(getName(), 'name info')
        })
    })
})
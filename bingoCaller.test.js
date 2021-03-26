const { BingoCaller } = require('./BingoCaller')
const { BingoCard } = require('./BingoCard')

describe('Called number is in appropiate range', () => {
    let bingoCaller = new BingoCaller()

    test('Number should be between 1 and 75 inclusive', () => {
        let num = bingoCaller.callNumber()
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(75)
    })
})

describe('BingoCaller should call all the numbers from the card', () => {
    let bingoCaller = new BingoCaller()
    let calledNumbers = []

    test ('Non repeated', () => {
        for (let i=0; i<75; ++i) {
          let num = bingoCaller.callNumber()
          expect(calledNumbers.includes(num)).toBeFalsy()
          calledNumbers.push(num)
        }
      })
})
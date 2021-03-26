const { BingoCard } = require('./bingoCard')

describe('Testing columns limits when generating a random card', () => {
    let bingoCard = BingoCard.generateRandomCard()

    test('Numbers on column B should be between 1 and 15 inclusive', () => {
        let numbers = bingoCard.getLetter('B')
        numbers.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(1)
            expect(num).toBeLessThanOrEqual(15)
        })
    })

    test('Numbers on column I should be between 16 and 30 inclusive', () => {
        let numbers = bingoCard.getLetter('I')
        numbers.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(6)
            expect(num).toBeLessThanOrEqual(30)
        })
    })

    test('Numbers on column N should be between 31 and 45 inclusive', () => {
        let numbers = bingoCard.getLetter('N')
        numbers.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(31)
            expect(num).toBeLessThanOrEqual(45)
        })
    })

    test('Numbers on column G should be between 46 and 60 inclusive', () => {
        let numbers = bingoCard.getLetter('G')
        numbers.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(46)
            expect(num).toBeLessThanOrEqual(60)
        })
    })

    test('Numbers on column O should be between 61 and 75 inclusive', () => {
        let numbers = bingoCard.getLetter('O')
        numbers.forEach(num => {
            expect(num).toBeGreaterThanOrEqual(61)
            expect(num).toBeLessThanOrEqual(75)
        })
    })
})
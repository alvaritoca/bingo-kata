const letters = ['B','I','N','G','O']

class BingoCard {

    constructor(grid) {
        this.grid = grid
    }

    /**
     * @description returns the numbers of the column related to the letter. When the letter is 'N', it excludes the center of the card
     */
    getLetter(letter) {
        let column = this.grid[letter]
        if(letter == 'N') {
            return column.filter(index => index !== 'X')
        }
        return column
    }

    /**
     * @description returns all the numbers that were included on the Card
     */
    getCardNumbers() {
        return [
            ...this.getLetter('B'),
            ...this.getLetter('I'),
            ...this.getLetter('N'),
            ...this.getLetter('G'),
            ...this.getLetter('O')
        ]
    }

    /**
     * @description generates a new Bingo card with random numbers
     */
    static generateRandomCard() {

        let grid = {}

        for (let i = 0; i < letters.length; i++) {
            //Assign min and max values based on the letter (column)
            let min = (i * 15) + 1;
            let max = min + 15;

            grid[letters[i]] = []

            while(grid[letters[i]].length < 5) {
                let num = Math.floor(Math.random() * (max - min)) + min
                if(!grid[letters[i]].includes(num)) {
                    grid[letters[i]].push(num)
                }
            }
        }
        grid[letters[2]][2] = 'X'

        return new BingoCard(grid)
    }

}

module.exports = { BingoCard }
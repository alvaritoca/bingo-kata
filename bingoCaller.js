class BingoCaller {

    constructor(nums = []) {
        this.calledNumbers = {}
        nums && nums.forEach(n => {
          this.addCalledNumber(n)
        })
      }

    /**
     * 
     * @param {*} num 
     * @description marks the number as called
     */
    addCalledNumber(num) {
        this.calledNumbers[num] = true
    }

    /**
     * 
     * @param {*} num 
     * @returns boolean
     * @description validates if the number has been called
     */
    isCalledNumber(num) {
        return !this.calledNumbers[num]
    }

    /**
     * 
     * @returns int
     * @description calls a number that hasn't been called yet
     */
    callNumber() {

        let num = 0
        let max = 76
        let min = 1
        
        //We keep calling numbers (1-75) until we get one that it's not on the called numbers array
        do {
            num = Math.floor(Math.random() * (max - min)) + min
        } while (!this.isCalledNumber(num))

        this.addCalledNumber(num)

        return num
    }
    
    /**
     * 
     * @param {*} bingoCard 
     * @returns boolean
     * @description validates numbers in the bingo card with the called numbers by the BingoCaller
     */
    checkBingoCard(bingoCard) {
        let numbers = bingoCard.getCardNumbers()
        numbers.forEach(function (num, index) {
            if(!this.isCalledNumber(num[index])) {
                return false
            }
        })
        return true
    }
}

module.exports = { BingoCaller }
export function Bord() {

   // this.size = 10;

    //this.filledCells = []; // Array of string x/o
}


/**
 * @param {number} x
 * @param {number} y
 * @param {string} stone x|o
 *
 * @return boolean if step is available return true
 */
Bord.prototype.makeStep = function (x, y, stone) {
    // todo implements store clicks
};

Bord.prototype.getStone = function (x, y) {
    return ''; // o | x | ''
};

/*Bord.prototype.getCells = function () {
    return []; // todo
};*/

export function Game() {
    this.bord = new Bord();

    this.hiText = 'hi Anton';

    /**
     * todo
     *
     * currentPlayer x|o
     *
     * isGameEnded
     *
     * board -> instance Bord class
     *
     * makeStep
     *
     * some getters for render
     */
}

Game.prototype.currentPlayer = 'x';

Game.prototype.makeStep = function (x, y) {
    this.bord.makeStep(x, y, this.currentPlayer);

    // todo trigger current player
    // todo check game ended
};

Game.prototype.pressHi = function () {
    this.hiText = this.hiText + '!';
};
import {Game} from "./Model";
import {GameView} from "./View";

export function GameController() {
    this.game = new Game();
    this.view = new GameView(this, this.game);

}

GameController.prototype.startGame = function() {
    this.view.draw();
};

GameController.prototype.makeStep = function (x, y) {
    this.game.makeStep(x, y);
    this.view.draw(this.game);
};

GameController.prototype.onHiClick = function () {
    this.game.pressHi();
    this.view.draw();
};


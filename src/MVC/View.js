import {crateDivNode} from "../utils/domUtils";

/**
 *
 * @param {GameController} controller
 * @param {Game} game // todo it's not good way provide data to view, we make this for simplification.
 * @constructor
 */
export function GameView(controller, game) {
    this.controller = controller;
    this.game = game;
}

GameView.prototype.draw = function () {
    if (document.body.children[0]) {
        document.body.removeChild(document.body.children[0]); // clear
    }

    const node = crateDivNode(
        {class: ['wrapper0', 'wrapper']},
        crateDivNode(
            {class: ['wrapper1', 'wrapper']},
            crateDivNode(
                {class: ['wrapper2', 'wrapper']},
                crateDivNode(
                    {class: ['wrapper3', 'wrapper']},
                    crateDivNode({
                        class: 'hi',
                        onClick: () => {
                            this.controller.onHiClick()
                        }
                    }, this.game.hiText)
                ),
            ),
        ),
    );

    document.body.appendChild(node);
};

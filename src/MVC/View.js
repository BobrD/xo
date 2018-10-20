import {h} from "../utils/domUtils";

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

function drawTable() {
    return h('table', {}, [0, 1, 2].map((x) => {
        return h('tr', {}, [0, 1, 2].map((y) => {

            // todo add eventListener
            // on click should call GameController::makeStep()
            return h('td', {}, '0'); // todo get x | o from model
        }))
    }));
}


GameView.prototype.draw = function () {
    if (document.body.children[0]) {
        document.body.removeChild(document.body.children[0]); // clear
    }

    const node = h( 'div', {class: ['wrapper0', 'wrapper']},
        h('div', {class: ['wrapper1', 'wrapper']},
            h('div', {class: ['wrapper2', 'wrapper']},
                h('div', {class: ['wrapper3', 'wrapper']},
                    h(
                        'div',
                        {
                            class: 'hi',
                            onClick: () => {
                                this.controller.onHiClick()
                            }
                        },
                        drawTable()
                    )
                ),
            ),
        ),
    );

    document.body.appendChild(node);
};

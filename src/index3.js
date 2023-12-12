import * as drawlib from "./drawlib.js";
import * as color from "./color.js";

/**
 * @throws {string}
 * @returns {CanvasRenderingContext2D}
 * @param {string} id
 */
function get2DContextById(id) {
    const canvas = document.getElementById(id);
    if (canvas === null) {
        throw "No html element with id `canvas` found";
    }
    if (!(canvas instanceof HTMLCanvasElement)) {
        throw "The selected element is not a canvas";
    }
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
            return ctx;
        } else {
            throw "Error when getting the context";
        }
    } else {
        throw "`getContext` is not a property of the element. Please use a modern browser.";
    }
}

const BODY_COLOR = color.grey;

const bladeOfGrass = drawlib.group( [
    drawlib.polygon(color.darkGreen, [
        {x: 0, y: 0},
        {x: 0, y: 45},
        {x: 10, y: 45},
    ]),
    drawlib.polygon(color.darkGreen, [
        {x: -10, y: 8},
        {x: 0, y: 45},
        {x: 10, y: 45},
    ]),
    drawlib.polygon(color.darkGreen, [
        {x: 10, y: 8},
        {x: 0, y: 45},
        {x: 10, y: 45},
    ])
]);

const hill = drawlib.group([
    drawlib.move(0, 0, drawlib.circle(color.lightGreen, 500)),

    // place some blade of grass
    drawlib.move(0, -300, bladeOfGrass),
    drawlib.move(50, -320, bladeOfGrass),
    drawlib.move(100, -250, bladeOfGrass),
    drawlib.move(150, -200, bladeOfGrass),
    drawlib.move(250, -225, bladeOfGrass),
    drawlib.move(300, -250, bladeOfGrass),
    drawlib.move(170, -420, bladeOfGrass),


    drawlib.move(-50, -320, bladeOfGrass),
    drawlib.move(-100, -250, bladeOfGrass),
    drawlib.move(-150, -240, bladeOfGrass),
    drawlib.move(-250, -225, bladeOfGrass),
    drawlib.move(-300, -280, bladeOfGrass),
    drawlib.move(-170, -350, bladeOfGrass),

    // a rock
    drawlib.move(-50, -400, drawlib.rectangle(color.darkGrey, 100, 50)),
    drawlib.move(-50, -425, drawlib.circle(color.darkGrey, 50)),


]);

const treeLeaves = drawlib.group([
    drawlib.move(0, -40, drawlib.circle(color.darkGreen, 70)),

    drawlib.move(0, 20, drawlib.circle(color.green, 30)),
    drawlib.move(40, 10, drawlib.circle(color.green, 30)),
    drawlib.move(70, -10, drawlib.circle(color.green, 30)),
    drawlib.move(70, -40, drawlib.circle(color.green, 30)),
    drawlib.move(50, -70, drawlib.circle(color.green, 30)),
    drawlib.move(30, -95, drawlib.circle(color.green, 30)),
    drawlib.move(0, -110, drawlib.circle(color.green, 30)),

    drawlib.move(-40, 10, drawlib.circle(color.green, 30)),
    drawlib.move(-70, -10, drawlib.circle(color.green, 30)),
    drawlib.move(-70, -40, drawlib.circle(color.green, 30)),
    drawlib.move(-50, -70, drawlib.circle(color.green, 30)),
    drawlib.move(-30, -95, drawlib.circle(color.green, 30)),
]);

const treeBody = drawlib.group([
    drawlib.rectangle(color.darkBrown, 60, 100),
    drawlib.move(30, 25, drawlib.polygon(color.darkBrown, [
        {x: 0, y: 0},
        {x: 0, y: 25},
        {x: 25, y: 25},
    ])),
    drawlib.move(-30, 25, drawlib.polygon(color.darkBrown, [
        {x: 0, y: 0},
        {x: 0, y: 25},
        {x: -25, y: 25},
    ])),
]);

const treeOnHill = drawlib.group([
    drawlib.move(0, 25, treeBody),

    drawlib.move(0, -50, treeLeaves),
    drawlib.move(0, 572, hill),

    // sun
    drawlib.move(550, -300, drawlib.circle(color.darkOrange, 250)),
    drawlib.move(550, -300, drawlib.circle(color.lightOrange, 150)),
]);

function main() {
    const context = get2DContextById("canvas");
    drawlib.renderCentered(treeOnHill, context);
}

main();

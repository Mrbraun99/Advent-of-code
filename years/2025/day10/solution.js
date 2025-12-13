import GLPK from "https://cdn.skypack.dev/glpk.js";

export function part1(input) {
    let sum = 0;

    for (const line of input) {
        const parts = line.split(" ");

        const light = Aoc.sum([...parts[0].slice(1, -1)].map((char, index) => char == "#" ? Math.pow(2, index) : 0));

        const buttons = [];
        for (let i = 1; i < parts.length - 1; i++) {
            buttons.push(Aoc.sum(parts[i].slice(1, -1).split(",").map(Number).map(value => Math.pow(2, value))));
        }

        const queue = [{ "light": 0, "step": 0 }];
        const visited = new Set([0]);

        while (true) {
            const node = queue.shift();

            if (node.light == light) {
                sum += node.step;
                break;
            }

            for (const button of buttons) {
                const next = node.light ^ button;

                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push({ "light": next, "step": node.step + 1 });
                }
            }
        }
    }

    return sum;
}

export async function part2(input) {
    const glpk = await GLPK();

    let sum = 0;

    for (const line of input) {
        const parts = line.split(" ");

        const attributes = Array.from({ length: parts.length - 2 }, (_, index) => "x" + index);
        const equations = [];

        for (const energy of parts[parts.length - 1].slice(1, -1).split(",").map(Number)) {
            const equation = {
                "vars": Array.from({ length: attributes.length }, (_, index) => ({
                    "name": "x" + index,
                    "coef": 0,
                })), "bnds": { type: glpk.GLP_FX, lb: energy }
            };

            equations.push(equation)
        }

        for (let i = 0; i < attributes.length; i++) {
            for (const value of parts[i + 1].slice(1, -1).split(",").map(Number)) {
                equations[value].vars[i].coef = 1;
            }
        }

        const ilp = await glpk.solve({
            objective: {
                direction: glpk.GLP_MIN,
                vars: Array.from({ length: attributes.length }, (_, index) => ({
                    "name": "x" + index,
                    "coef": 1,
                })),
            },
            subjectTo: equations,
            bounds: Array.from({ length: attributes.length }, (_, index) => ({
                "name": "x" + index,
                "type": glpk.GLP_LO,
                "lb": 0,
            })),
            generals: Array.from({ length: attributes.length }, (_, index) =>
                "x" + index,
            )
        }, { "presol": true });

        sum += Aoc.sum(Object.values(ilp.result.vars));
    }

    return sum;
}
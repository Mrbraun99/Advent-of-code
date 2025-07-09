export function part1(input) {
    let paper = 0;

    for (const line of input) {
        let [l, w, h] = line.split("x").map(value => parseInt(value));
        paper += (2 * l * w) + (2 * w * h) + (2 * h * l) + Math.min(l * w, w * h, h * l);
    }

    return paper;
}

export function part2(input) {
    let ribbon = 0;

    for (const line of input) {
        let [l, w, h] = line.split("x").map(value => parseInt(value));
        ribbon += Math.min(2 * l + 2 * w, 2 * l + 2 * h, 2 * w + 2 * h) + (l * w * h);
    }

    return ribbon;
}
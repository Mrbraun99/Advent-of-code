export function part1(input) {
    const [desired_y, desired_x] = input[0].match(/\b\d+\b/g).map(value => parseInt(value));

    let pos = { x: 1, y: 1 };
    let code = 20151125;

    while (true) {
        if (pos.y == 1) pos = { x: 1, y: pos.x + 1 };
        else pos = { x: pos.x + 1, y: pos.y - 1 };

        code = (code * 252533) % 33554393;
        if (pos.x == desired_x && pos.y == desired_y) return code;
    }
}

export function part2(input) {
    return "Merry Christmas!";
}
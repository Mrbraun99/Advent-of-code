export function part1(input) {
    let zero_count = 0;
    let dial = 50;

    for (const line of input) {
        const [_, direction, amount] = line.match(/^(L|R)(\d+)$/);

        dial = Aoc.mod(dial + Number(amount) * { "R": 1, "L": -1 }[direction], 100);

        if (dial == 0) {
            zero_count++;
        }
    }

    return zero_count;
}

export function part2(input) {
    let zero_count = 0;
    let dial = 50;

    for (const line of input) {
        const [_, direction, amount] = line.match(/^(L|R)(\d+)$/);

        const zero_cross = Math.floor(Number(amount) / 100);
        const remainder = Number(amount) % 100;

        if (remainder > 0) {
            const prev_dial = dial;
            dial = dial + remainder * { "R": 1, "L": -1 }[direction];

            if ((dial >= 100 || dial <= 0) && prev_dial != 0) {
                zero_count++;
            }
        }

        zero_count += zero_cross;
        dial = Aoc.mod(dial, 100);
    }

    return zero_count;
}
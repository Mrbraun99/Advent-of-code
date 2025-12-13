export function part1(input) {
    let count = 0;

    for (const line of AocInput.HORIZONTAL_CHUNKS(input)[6]) {
        const [_, width, height, p0, p1, p2, p3, p4, p5] = line.match(/^(\d+)x(\d+): (\d+) (\d+) (\d+) (\d+) (\d+) (\d+)$/);

        let required_space = 0;
        required_space += Math.ceil(parseInt(p0) / 2) * 12;
        required_space += Math.ceil(parseInt(p1) / 2) * 12;
        required_space += Math.ceil(parseInt(p2) / 2) * 15;
        required_space += parseInt(p3) * 9;
        required_space += Math.ceil(parseInt(p4) / 2) * 16;
        required_space += parseInt(p5) * 9;

        if (width * height >= required_space) count++;
    }

    return count;
}

export function part2(input) {
    return Aoc.MERRY_CHRISTMAS;
}
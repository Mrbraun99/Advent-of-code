export function part1(input) {
    const beams = new Set([input[0].indexOf("S")]);
    let splits = 0;

    for (let i = 2; i < input.length; i += 2) {
        for (const beam of [...beams]) {
            if (input[i][beam] == "^") {
                beams.delete(beam);
                beams.add(beam + 1);
                beams.add(beam - 1);
                splits++;
            }
        }
    }

    return splits;
}

export function part2(input) {
    const beams = { [input[0].indexOf("S")]: 1 };

    for (let i = 2; i < input.length; i += 2) {
        for (const beam of Object.keys(beams).map(Number)) {
            if (input[i][beam] == "^") {
                beams[beam + 1] = (beams[beam + 1] ?? 0) + beams[beam];
                beams[beam - 1] = (beams[beam - 1] ?? 0) + beams[beam];
                delete beams[beam];
            }
        }
    }

    return Aoc.sum(Object.values(beams));
}
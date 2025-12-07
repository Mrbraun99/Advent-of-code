export function part1(input) {
    const discs = [];

    for (const line of input) {
        const [_, index, positions, position] = line.match(/Disc #(\d+) has (\d+) positions; at time=0, it is at position (\d+)./);

        discs.push({ "positions": parseInt(positions), "position": (parseInt(position) + parseInt(index)) % parseInt(positions) });
    }

    for (let i = 0; ; i++) {
        if (discs.every(disc => disc.position === 0)) return i;

        for (const disc of discs) disc.position = (disc.position + 1) % disc.positions;
    }
}

export function part2(input) {
    const discs = [];

    for (const line of input) {
        const [_, index, positions, position] = line.match(/Disc #(\d+) has (\d+) positions; at time=0, it is at position (\d+)./);

        discs.push({ "positions": parseInt(positions), "position": (parseInt(position) + parseInt(index)) % parseInt(positions) });
    }

    discs.push({ "positions": 11, "position": (0 + discs.length + 1) % 11 });

    for (let i = 0; ; i++) {
        if (discs.every(disc => disc.position === 0)) return i;

        for (const disc of discs) disc.position = (disc.position + 1) % disc.positions;
    }
}
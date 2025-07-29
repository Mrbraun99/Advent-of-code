export function part1(input) {
    const ranges = [];

    for (const range of input) {
        const [start, end] = range.split("-").map(value => parseInt(value));
        ranges.push({ "start": start, "end": end });
    }

    ranges = ranges.sort((a, b) => a.start - b.start);

    let ip = 0;
    for (const range of ranges) {
        if (ip > range.end) continue;
        if (ip < range.start) return ip;
        ip = range.end + 1;
    }
}

export function part2(input) {
    const ranges = [];

    for (const range of input) {
        const [start, end] = range.split("-").map(value => parseInt(value));
        ranges.push({ "start": start, "end": end });
    }

    ranges = ranges.sort((a, b) => a.start - b.start);

    let ip_count = 0;
    let ip = 0;
    for (const range of ranges) {
        if (ip > range.end) continue;
        if (ip < range.start) ip_count += range.start - ip;
        ip = range.end + 1;
    }

    return ip_count;
}
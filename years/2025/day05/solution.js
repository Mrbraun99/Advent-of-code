export function part1(input) {
    const [input1, input2] = AocInput.HORIZONTAL_CHUNKS(input);
    const ranges = [];

    for (const line of input1) {
        const [start, end] = line.split("-").map(Number);
        ranges.push({ "start": start, "end": end });
    }

    let fresh_ingridient_count = 0;

    for (const line of input2) {
        const id = parseInt(line);

        for (const range of ranges) {
            if (range.start <= id && id <= range.end) {
                fresh_ingridient_count++;
                break;
            }
        }
    }

    return fresh_ingridient_count;
}

export function part2(input) {
    const [input1, input2] = AocInput.HORIZONTAL_CHUNKS(input);
    const ranges = [];

    for (const line of input1) {
        const [start, end] = line.split("-").map(Number);
        ranges.push({ "start": start, "end": end });
    }

    ranges.sort((a, b) => a.start - b.start);

    let fresh_ingridient_count = 0;
    let start = ranges[0].start;
    let end = ranges[0].end;

    for (let i = 1; i < ranges.length; i++) {
        if (ranges[i].start > end) {
            fresh_ingridient_count += end - start + 1;
            start = ranges[i].start;
            end = ranges[i].end;
            continue;
        }

        end = Math.max(end, ranges[i].end);
    }

    fresh_ingridient_count += end - start + 1;

    return fresh_ingridient_count;
}
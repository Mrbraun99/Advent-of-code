export function part1(input) {
    let sum = 0;

    for (const line of input) {
        let count = line.length + 2;

        for (let i = 0; i < line.length;) {
            count--;

            if (line[i] == '\\') line[i + 1] == 'x' ? i += 4 : i += 2;
            else i++;
        }

        sum += count;
    }

    return sum;
}

export function part2(input) {
    let sum = 0;
    for (const line of input) sum += 2 + line.split("").filter(char => char == '"').length + line.split("").filter(char => char == '\\').length;

    return sum;
}
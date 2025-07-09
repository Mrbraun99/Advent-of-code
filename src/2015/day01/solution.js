export function part1(input) {
    return input[0].length - (2 * input[0].split("").filter(char => char == ')').length);
}

export function part2(input) {
    let floor = 0;

    for (let i = 0; i < input[0].length; i++) {
        floor += input[0][i] == "(" ? 1 : -1;
        if (floor < 0) return i + 1;
    }
}
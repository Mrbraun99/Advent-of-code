export function part1(input) {
    let sum = 0;

    for (const line of input) {
        const batteries = line.split("").map(Number);
        const digit1 = Math.max(...batteries.slice(0, -1));
        const digit2 = Math.max(...batteries.slice(batteries.indexOf(digit1) + 1));

        sum += digit1 * 10 + digit2;
    }

    return sum;
}

export function part2(input) {
    let sum = 0;

    for (const line of input) {
        const digits = [];
        const batteries = line.split("").map(Number);

        let start_index = 0;
        for (let i = 0; i < 12; i++) {
            digits[i] = (i < 11) ? Math.max(...batteries.slice(start_index, -11 + i)) : Math.max(...batteries.slice(start_index));
            start_index = batteries.indexOf(digits[i], start_index) + 1;
        }

        sum += parseInt(digits.join(""));
    }

    return sum;
}
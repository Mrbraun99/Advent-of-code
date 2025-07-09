export function part1(input) {
    let value = input[0];
    for (let i = 0; i < 40; i++) value = String(value).match(/(\d)\1*/g).map(sequence => sequence.length + sequence[0]).join("");

    return value.length;
}

export function part2(input) {
    let value = input[0];
    for (let i = 0; i < 50; i++) value = String(value).match(/(\d)\1*/g).map(sequence => sequence.length + sequence[0]).join("");

    return value.length;
}
export function part1(input) {
    for (let i = 0; ; i++) if (MD5(input[0] + i.toString()).substr(0, 5) == "00000") return i;
}

export function part2(input) {
    for (let i = 0; ; i++) if (MD5(input[0] + i.toString()).substr(0, 6) == "000000") return i;
}
export function part1(input) {
    let sum = 0;

    for (const number_pair of input[0].split(",")) {
        const [start, end] = number_pair.split("-").map(Number);

        let digits = start.toString().length;
        let first_half = null;

        if (digits % 2 == 0) {
            const p1 = Math.floor(start / Math.pow(10, digits / 2));
            const p2 = Math.floor(start % Math.pow(10, digits / 2));

            first_half = p1 + ((p1 >= p2) ? 0 : 1);
        } else {
            digits++;
            first_half = Math.pow(10, (digits / 2) - 1);
        }

        while (true) {
            const value = first_half * Math.pow(10, first_half.toString().length) + first_half;

            if (value > end) break;

            sum += value;
            first_half++;
        }
    }

    return sum;
}

export function part2(input) {
    function isInvalidID(str) {
        return (str + str).slice(1, -1).includes(str);
    }

    let sum = 0;

    for (const number_pair of input[0].split(",")) {
        const [start, end] = number_pair.split("-").map(Number);

        for (let i = start; i <= end; i++) {
            if (isInvalidID(i.toString())) {
                sum += i;
            }
        }

    }

    return sum;
}
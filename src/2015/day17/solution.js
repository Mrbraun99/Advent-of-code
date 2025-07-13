export function part1(input) {
    let combinations = 0;

    for (let i = 1; i < Math.pow(2, input.length); i++) {
        let sum = 0;

        for (const [index, bit] of Array.from(i.toString(2).padStart(input.length, '0')).entries()) {
            if (bit == '1') sum += parseInt(input[index]);
        }

        if (sum == 150) combinations++;
    }

    return combinations;
}

export function part2(input) {
    let combinations = 0;
    let min_container_count = Infinity;

    for (let i = 1; i < Math.pow(2, input.length); i++) {
        let sum = 0;

        for (const [index, bit] of Array.from(i.toString(2).padStart(input.length, '0')).entries()) {
            if (bit == '1') sum += parseInt(input[index]);
        }

        if (sum == 150) {
            let container_count = i.toString(2).split('').filter(bit => bit == '1').length;

            if (container_count < min_container_count) {
                min_container_count = container_count;
                combinations = 0;
            }

            if (container_count == min_container_count) combinations++;
        }
    }

    return combinations;
}
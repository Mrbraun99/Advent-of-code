export function part1(input) {
    const registers = { "a": 0, "b": 0, "c": 0, "d": 0 };
    let index = 0;

    while (index < input.length) {
        let match;

        if ((match = input[index].match(/^cpy (a|b|c|d) (a|b|c|d)$/))) {
            registers[match[2]] = registers[match[1]];
            index++;
            continue;
        }

        if ((match = input[index].match(/^cpy ([+-]?\d+) (a|b|c|d)$/))) {
            registers[match[2]] = parseInt(match[1]);
            index++;
            continue;
        }

        if ((match = input[index].match(/^inc (a|b|c|d)$/))) {
            registers[match[1]] += 1;
            index++;
            continue;
        }

        if ((match = input[index].match(/^dec (a|b|c|d)$/))) {
            registers[match[1]] -= 1;
            index++;
            continue;
        }

        if ((match = input[index].match(/^jnz (a|b|c|d) ([+-]?\d+)$/))) {
            if (registers[match[1]] != 0) index += parseInt(match[2]);
            else index++;
            continue;
        }

        if ((match = input[index].match(/^jnz ([+-]?\d+) ([+-]?\d+)$/))) {
            if (parseInt(match[1]) != 0) index += parseInt(match[2]);
            else index++;
            continue;
        }
    }

    return registers.a;
}

export function part2(input) {
    const registers = { "a": 0, "b": 0, "c": 1, "d": 0 };
    let index = 0;

    while (index < input.length) {
        let match;

        if ((match = input[index].match(/^cpy (a|b|c|d) (a|b|c|d)$/))) {
            registers[match[2]] = registers[match[1]];
            index++;
            continue;
        }

        if ((match = input[index].match(/^cpy ([+-]?\d+) (a|b|c|d)$/))) {
            registers[match[2]] = parseInt(match[1]);
            index++;
            continue;
        }

        if ((match = input[index].match(/^inc (a|b|c|d)$/))) {
            registers[match[1]] += 1;
            index++;
            continue;
        }

        if ((match = input[index].match(/^dec (a|b|c|d)$/))) {
            registers[match[1]] -= 1;
            index++;
            continue;
        }

        if ((match = input[index].match(/^jnz (a|b|c|d) ([+-]?\d+)$/))) {
            if (registers[match[1]] != 0) index += parseInt(match[2]);
            else index++;
            continue;
        }

        if ((match = input[index].match(/^jnz ([+-]?\d+) ([+-]?\d+)$/))) {
            if (parseInt(match[1]) != 0) index += parseInt(match[2]);
            else index++;
            continue;
        }
    }

    return registers.a;
}
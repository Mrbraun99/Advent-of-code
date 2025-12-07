export function part1(input) {
    const registers = { "a": 0, "b": 0 };
    let index = 0;

    while (index < input.length) {
        let match;

        if ((match = input[index].match(/^hlf (\S+)$/))) {
            registers[match[1]] /= 2;
            index++;
            continue;
        }

        if ((match = input[index].match(/^tpl (\S+)$/))) {
            registers[match[1]] *= 3;
            index++;
            continue;
        }

        if ((match = input[index].match(/^inc (\S+)$/))) {
            registers[match[1]] += 1;
            index++;
            continue;
        }

        if ((match = input[index].match(/^jmp ([+-]?\d+)$/))) {
            index += parseInt(match[1]);
            continue;
        }

        if ((match = input[index].match(/^jie (\S+), ([+-]?\d+)$/))) {
            if (registers[match[1]] % 2 == 0) index += parseInt(match[2]);
            else index++;
            continue;
        }

        if ((match = input[index].match(/^jio (\S+), ([+-]?\d+)$/))) {
            if (registers[match[1]] == 1) index += parseInt(match[2]);
            else index++;
            continue;
        }
    }

    return registers.b;
}

export function part2(input) {
    const registers = { "a": 1, "b": 0 };
    let index = 0;

    while (index < input.length) {
        let match;

        if ((match = input[index].match(/^hlf (\S+)$/))) {
            registers[match[1]] /= 2;
            index++;
            continue;
        }

        if ((match = input[index].match(/^tpl (\S+)$/))) {
            registers[match[1]] *= 3;
            index++;
            continue;
        }

        if ((match = input[index].match(/^inc (\S+)$/))) {
            registers[match[1]] += 1;
            index++;
            continue;
        }

        if ((match = input[index].match(/^jmp ([+-]?\d+)$/))) {
            index += parseInt(match[1]);
            continue;
        }

        if ((match = input[index].match(/^jie (\S+), ([+-]?\d+)$/))) {
            if (registers[match[1]] % 2 == 0) index += parseInt(match[2]);
            else index++;
            continue;
        }

        if ((match = input[index].match(/^jio (\S+), ([+-]?\d+)$/))) {
            if (registers[match[1]] == 1) index += parseInt(match[2]);
            else index++;
            continue;
        }
    }

    return registers.b;
}
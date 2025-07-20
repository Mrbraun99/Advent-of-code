export function part1(input) {
    const frequency = [{}, {}, {}, {}, {}, {}, {}, {}];

    for (const line of input) {
        for (let i = 0; i < frequency.length; i++) {
            if (!frequency[i][line[i]]) frequency[i][line[i]] = 0;
            frequency[i][line[i]]++;
        }
    }

    let message = "";
    for (let i = 0; i < frequency.length; i++) {
        message += Object.entries(frequency[i]).sort((a, b) => (b[1] - a[1]))[0][0];
    }

    return message;
}

export function part2(input) {
    const frequency = [{}, {}, {}, {}, {}, {}, {}, {}];

    for (const line of input) {
        for (let i = 0; i < frequency.length; i++) {
            if (!frequency[i][line[i]]) frequency[i][line[i]] = 0;
            frequency[i][line[i]]++;
        }
    }

    let message = "";
    for (let i = 0; i < frequency.length; i++) {
        message += Object.entries(frequency[i]).sort((a, b) => (b[1] - a[1])).at(-1)[0];
    }

    return message;
}
export function part1(input) {
    let counter = 0;

    loop: for (const line of input) {
        for (const segment of line.match(/\[([^\]]+)\]/g).map(s => s.slice(1, -1))) {
            if (segment.match(/(.)(?!\1)(.)\2\1/)) continue loop;
        }

        for (const segment of line.split(/\[[^\]]+\]/g)) {
            if (segment.match(/(.)(?!\1)(.)\2\1/)) {
                counter++;
                continue loop;
            }
        }
    }

    return counter;
}

export function part2(input) {
    let counter = 0;

    loop: for (const line of input) {
        const ABA = [];

        for (const segment of line.split(/\[[^\]]+\]/g)) {
            ABA.push(...[...segment.matchAll(/(?=(.)(?!\1)(.)\1)/g)].map(phrase => segment.substr(phrase.index, 3)));
        }

        if (ABA.length == 0) continue;

        for (const segment of line.match(/\[([^\]]+)\]/g).map(s => s.slice(1, -1))) {
            for (const phrase of ABA.map(phrase => phrase[1] + phrase[0] + phrase[1])) {
                if (segment.includes(phrase)) {
                    counter++;
                    continue loop;
                }
            }
        }
    }

    return counter;
}
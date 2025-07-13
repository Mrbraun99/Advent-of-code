export function part1(input) {
    return input[0].match(/-?\b\d+\b/g).map(value => parseInt(value)).reduce((acc, value) => acc + value, 0);
}

export function part2(input) {
    function process(input) {
        if (input == null) return 0;
        if (typeof input === 'string') return 0;
        if (typeof input === 'number') return input;

        if (Array.isArray(input)) return input.reduce((acc, value) => acc + process(value), 0);

        if (Object.values(input).includes('red')) return 0;
        return Object.values(input).reduce((acc, value) => acc + process(value), 0);
    }

    return process(JSON.parse(input[0]));
}
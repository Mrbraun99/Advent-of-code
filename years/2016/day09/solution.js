export function part1(input) {
    const file = input[0].replace(/\s+/g, '');

    let full_length = 0;
    let i = 0;

    while (i < file.length) {
        if (file[i] === "(") {
            const end = file.indexOf(')', i);
            const [length, repeat] = file.substring(i + 1, end).split('x').map(Number);

            full_length += length * repeat;

            i = end + 1 + length;
            continue;
        }

        full_length += 1;
        i++;
    }

    return full_length;
}

export function part2(input) {
    function decompress(file) {
        let full_length = 0;
        let i = 0;

        while (i < file.length) {
            if (file[i] === "(") {
                const end = file.indexOf(')', i);
                const [length, repeat] = file.substring(i + 1, end).split('x').map(Number);

                full_length += repeat * decompress(file.substring(end + 1, end + 1 + length));

                i = end + 1 + length;
                continue;
            }

            full_length += 1;
            i++;
        }

        return full_length;
    }

    return decompress(input[0].replace(/\s+/g, ''));
}
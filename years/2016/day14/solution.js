export function part1(input) {
    let valid_hashes = 0;
    const hashes = [];
    for (let i = 0; i <= 1000; i++) hashes.push(MD5(input[0] + i));

    for (let i = 0; ; i++) {
        const match = hashes[i].match(/(.)\1\1/);
        if (match) {
            for (let j = 1; j <= 1000; j++) {
                if (hashes[i + j].includes(match[1].repeat(5))) {
                    valid_hashes++;
                    if (valid_hashes == 64) return i;
                    break;
                }
            }
        }

        hashes.push(MD5(input[0] + (i + 1001)));
    }
}

export function part2(input) {
    function hash(value) {
        for (let i = 0; i <= 2016; i++) value = MD5(value);
        return value;
    }

    let valid_hashes = 0;
    const hashes = [];
    for (let i = 0; i <= 1000; i++) hashes.push(hash(input[0] + i));

    for (let i = 0; ; i++) {
        const match = hashes[i].match(/(.)\1\1/);
        if (match) {
            for (let j = 1; j <= 1000; j++) {
                if (hashes[i + j].includes(match[1].repeat(5))) {
                    valid_hashes++;
                    if (valid_hashes == 64) return i;
                    break;
                }
            }
        }

        hashes.push(hash(input[0] + (i + 1001)));
    }
}
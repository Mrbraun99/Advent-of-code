export function part1(input) {
    let password = "";

    for (let i = 0; ; i++) {
        const hash = MD5(input[0] + i);

        if (hash.startsWith("00000")) {
            password += hash[5];
            if (password.length == 8) return password;
        }
    }
}

export function part2(input) {
    let password = new Array(8).fill(null);

    let counter = 0;
    for (let i = 0; ; i++) {
        const hash = MD5(input[0] + i);

        if (hash.startsWith("00000") && ['0', '1', '2', '3', '4', '5', '6', '7'].includes(hash[5])) {
            if (password[parseInt(hash[5])] == null) {
                password[parseInt(hash[5])] = hash[6];
                if (++counter == 8) return password.join("");
            }
        }
    }
}
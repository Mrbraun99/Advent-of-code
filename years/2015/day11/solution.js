export function part1(input) {
    let password = input[0];

    while (true) {
        const chars = password.split("");
        for (let i = chars.length - 1; i >= 0; i--) {
            chars[i] = String.fromCharCode(((chars[i].charCodeAt(0) - 97 + 1) % 26) + 97);
            if (chars[i] != "a") break;
        }
        password = chars.join('');

        if (!(/abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/.test(password))) continue;
        if (/[iol]/.test(password)) continue;
        if (!(/(.)\1.*(.)\2/.test(password))) continue;

        return password;
    }
}

export function part2(input) {
    let password = part1(input);

    while (true) {
        const chars = password.split("");
        for (let i = chars.length - 1; i >= 0; i--) {
            chars[i] = String.fromCharCode(((chars[i].charCodeAt(0) - 97 + 1) % 26) + 97);
            if (chars[i] != "a") break;
        }
        password = chars.join('');

        if (!(/abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz/.test(password))) continue;
        if (/[iol]/.test(password)) continue;
        if (!(/(.)\1.*(.)\2/.test(password))) continue;

        return password;
    }
}
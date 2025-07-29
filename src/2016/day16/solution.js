export function part1(input) {
    let data = input[0];

    while (data.length < 272) {
        data = data + "0" + data.split('').reverse().map(bit => bit == 1 ? 0 : 1).join("");
    }

    data = data.slice(0, 272);

    while (data.length % 2 == 0) {
        data = data.match(/.{2}/g).map(pair => pair[0] == pair[1] ? 1 : 0).join("");
    }

    return data;
}

export function part2(input) {
    let data = input[0];

    while (data.length < 35651584) {
        data = data + "0" + data.split('').reverse().map(bit => bit == 1 ? 0 : 1).join("");
    }

    data = data.slice(0, 35651584);

    while (data.length % 2 == 0) {
        data = data.match(/.{2}/g).map(pair => pair[0] == pair[1] ? 1 : 0).join("");
    }

    return data;
}
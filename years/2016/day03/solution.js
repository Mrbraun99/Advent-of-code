export function part1(input) {
    let valid_triangles = 0;

    for (const line of input) {
        const [a, b, c] = [...line.matchAll(/\d+/g)].map(value => parseInt(value[0]));

        if (a + b <= c) continue;
        if (a + c <= b) continue;
        if (b + c <= a) continue;

        valid_triangles++;
    }

    return valid_triangles;
}

export function part2(input) {
    let valid_triangles = 0;

    const queue1 = [];
    const queue2 = [];
    const queue3 = [];

    for (const line of input) {
        const [a, b, c] = [...line.matchAll(/\d+/g)].map(value => parseInt(value[0]));

        queue1.push(a);
        queue2.push(b);
        queue3.push(c);
    }

    let queue = queue1.concat(queue2, queue3);

    for (let i = 0; i < queue.length; i += 3) {
        if (queue[i] + queue[i + 1] <= queue[i + 2]) continue;
        if (queue[i] + queue[i + 2] <= queue[i + 1]) continue;
        if (queue[i + 1] + queue[i + 2] <= queue[i]) continue;

        valid_triangles++;
    }

    return valid_triangles;
}

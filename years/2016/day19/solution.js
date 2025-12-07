export function part1(input) {
    let elves = Array.from({ length: input }, (_, index) => index + 1);

    while (elves.length > 1) {
        const is_odd = elves.length % 2 == 1;

        elves = elves.filter((_, index) => index % 2 == 0);
        if (is_odd) elves.shift();
    }

    return elves[0];
}

export function part2(input) {
    function range(n, m) {
        return Array.from({ length: m - n + 1 }, (_, i) => n + i);
    }

    const elves1 = range(1, Math.floor(input / 2));
    const elves2 = range(Math.floor(input / 2) + 1, input);
    let head1 = 0;
    let head2 = 0;

    while ((elves1.length - head1 + elves2.length - head2) > 1) {
        head2++;

        if ((elves1.length - head1 + elves2.length - head2) % 2 == 0) elves1.push(elves2[head2++]);
        elves2.push(elves1[head1++]);
    }

    return elves2.length - head2 == 0 ? elves1[head1] : elves2[head2];
}
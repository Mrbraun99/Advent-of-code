export function part1(input) {
    function permutation(values) {
        let list = [];

        function permute(arr, memo = []) {
            if (arr.length == 0) {
                list.push(memo);
                return;
            }

            for (let i = 0; i < arr.length; i++) {
                let current = arr.slice();
                let next = current.splice(i, 1);
                permute(current.slice(), memo.concat(next));
            }
        }

        permute(values);
        return list;
    }

    const city_count = ((-1 + Math.sqrt(1 + 8 * input.length)) / 2) + 1;
    const adjacency_matrix = [...Array(city_count)].map(e => Array(city_count).fill(0));
    const cities = [];

    for (const line of input) {
        const [_, src, dst, distance] = line.match(/^(\S+) to (\S+) = (\d+)$/);

        if (cities.indexOf(src) == -1) cities.push(src);
        if (cities.indexOf(dst) == -1) cities.push(dst);

        adjacency_matrix[cities.indexOf(src)][cities.indexOf(dst)] = parseInt(distance);
        adjacency_matrix[cities.indexOf(dst)][cities.indexOf(src)] = parseInt(distance);
    }

    let length = Infinity;

    loop: for (const sequence of permutation(Array.from({ length: city_count }, (_, i) => i))) {
        let distance = 0;

        for (let i = 0; i < sequence.length - 1; i++) {
            distance += adjacency_matrix[sequence[i]][sequence[i + 1]];
            if (distance > length) continue loop;
        }

        length = distance;
    }

    return length;
}

export function part2(input) {
    function permutation(values) {
        let list = [];

        function permute(arr, memo = []) {
            if (arr.length == 0) {
                list.push(memo);
                return;
            }

            for (let i = 0; i < arr.length; i++) {
                let current = arr.slice();
                let next = current.splice(i, 1);
                permute(current.slice(), memo.concat(next));
            }
        }

        permute(values);
        return list;
    }

    const city_count = ((-1 + Math.sqrt(1 + 8 * input.length)) / 2) + 1;
    const adjacency_matrix = [...Array(city_count)].map(e => Array(city_count).fill(0));
    const cities = [];

    for (const line of input) {
        const [_, src, dst, distance] = line.match(/^(\S+) to (\S+) = (\d+)$/);

        if (cities.indexOf(src) == -1) cities.push(src);
        if (cities.indexOf(dst) == -1) cities.push(dst);

        adjacency_matrix[cities.indexOf(src)][cities.indexOf(dst)] = parseInt(distance);
        adjacency_matrix[cities.indexOf(dst)][cities.indexOf(src)] = parseInt(distance);
    }

    let length = -Infinity;

    loop: for (const sequence of permutation(Array.from({ length: city_count }, (_, i) => i))) {
        let distance = 0;
        for (let i = 0; i < sequence.length - 1; i++) distance += adjacency_matrix[sequence[i]][sequence[i + 1]];

        length = Math.max(distance, length);
    }

    return length;
}
export function part1(input) {
    function permutation(values) {
        const list = [];

        function permute(values, memo = []) {
            if (values.length == 0) {
                list.push(memo);
                return;
            }

            for (let i = 0; i < values.length; i++) {
                const current = values.slice();
                const next = current.splice(i, 1);
                permute(current.slice(), memo.concat(next));
            }
        }

        permute(values);
        return list;
    }

    let highest_happiness = -Infinity;
    const points = {};

    for (const line of input) {
        const [_, subject, mode, point, neighbour] = line.match(/(\w+) would (gain|lose) (\d+) happiness units by sitting next to (\w+)/);

        if (points[subject] == null) points[subject] = {};
        points[subject][neighbour] = { "gain": 1, "lose": -1 }[mode] * parseInt(point);
    }

    for (const sitting of permutation(Object.keys(points))) {
        let happiness = 0;

        for (let i = 0; i < sitting.length; i++) {
            happiness += points[sitting[i]][sitting[(i + 1) % sitting.length]];
            happiness += points[sitting[(i + 1) % sitting.length]][sitting[i]];
        }

        if (happiness > highest_happiness) highest_happiness = happiness;
    }

    return highest_happiness;
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

    let highest_happiness = -Infinity;
    const points = {};

    for (const line of input) {
        const [_, subject, mode, point, neighbour] = line.match(/(\w+) would (gain|lose) (\d+) happiness units by sitting next to (\w+)/);

        if (points[subject] == null) points[subject] = {};
        points[subject][neighbour] = { "gain": 1, "lose": -1 }[mode] * parseInt(point);
    }

    points['me'] = {};
    for (const neighbour of Object.keys(points).filter(name => name !== "me")) {
        points[neighbour]['me'] = 0;
        points['me'][neighbour] = 0;
    }

    for (const sitting of permutation(Object.keys(points))) {
        let happiness = 0;

        for (let i = 0; i < sitting.length; i++) {
            happiness += points[sitting[i]][sitting[(i + 1) % sitting.length]];
            happiness += points[sitting[(i + 1) % sitting.length]][sitting[i]];
        }

        if (happiness > highest_happiness) highest_happiness = happiness;
    }

    return highest_happiness;
}
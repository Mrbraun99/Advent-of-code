export function part1(input) {
    const movement = {
        '<': { x: -1, y: 0 },
        '>': { x: 1, y: 0 },
        '^': { x: 0, y: -1 },
        'v': { x: 0, y: 1 },
    };

    const visited_houses = [{ x: 0, y: 0 }];
    const santa_pos = { x: 0, y: 0 };

    for (const direction of input[0].split("")) {
        santa_pos.x += movement[direction].x;
        santa_pos.y += movement[direction].y;

        if (visited_houses.find(pos => pos.x == santa_pos.x && pos.y == santa_pos.y) == null) visited_houses.push({ x: santa_pos.x, y: santa_pos.y });
    }

    return visited_houses.length;
}

export function part2(input) {
    const movement = {
        '<': { x: -1, y: 0 },
        '>': { x: 1, y: 0 },
        '^': { x: 0, y: -1 },
        'v': { x: 0, y: 1 },
    };

    const visited_houses = [{ x: 0, y: 0 }];
    const santa_pos = { x: 0, y: 0 };
    const robo_santa_pos = { x: 0, y: 0 };

    for (let i = 0; i < input[0].length; i += 2) {
        santa_pos.x += movement[input[0][i]].x;
        santa_pos.y += movement[input[0][i]].y;

        robo_santa_pos.x += movement[input[0][i + 1]].x;
        robo_santa_pos.y += movement[input[0][i + 1]].y;

        if (visited_houses.find(pos => pos.x == santa_pos.x && pos.y == santa_pos.y) == null) visited_houses.push({ x: santa_pos.x, y: santa_pos.y });
        if (visited_houses.find(pos => pos.x == robo_santa_pos.x && pos.y == robo_santa_pos.y) == null) visited_houses.push({ x: robo_santa_pos.x, y: robo_santa_pos.y });
    }

    return visited_houses.length;
}
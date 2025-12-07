export function part1(input) {
    const queue = [{ "x": 0, "y": 0, "path": "" }];

    while (queue.length > 0) {
        const node = queue.shift();

        if (node.x == 3 && node.y == 3) return node.path;

        const code = MD5(input + node.path).slice(0, 4);

        if (node.y != 0 && ['b', 'c', 'd', 'e', 'f'].includes(code[0])) queue.push({ "x": node.x, "y": node.y - 1, "path": node.path + "U" });
        if (node.y != 3 && ['b', 'c', 'd', 'e', 'f'].includes(code[1])) queue.push({ "x": node.x, "y": node.y + 1, "path": node.path + "D" });
        if (node.x != 0 && ['b', 'c', 'd', 'e', 'f'].includes(code[2])) queue.push({ "x": node.x - 1, "y": node.y, "path": node.path + "L" });
        if (node.x != 3 && ['b', 'c', 'd', 'e', 'f'].includes(code[3])) queue.push({ "x": node.x + 1, "y": node.y, "path": node.path + "R" });
    }
}

export function part2(input) {
    const queue = [{ "x": 0, "y": 0, "path": "" }];
    let steps = -Infinity;

    while (queue.length > 0) {
        const node = queue.shift();

        if (node.x == 3 && node.y == 3) {
            if (node.path.length > steps) steps = node.path.length;
            continue;
        }

        const code = MD5(input + node.path).slice(0, 4);

        if (node.y != 0 && ['b', 'c', 'd', 'e', 'f'].includes(code[0])) queue.push({ "x": node.x, "y": node.y - 1, "path": node.path + "U" });
        if (node.y != 3 && ['b', 'c', 'd', 'e', 'f'].includes(code[1])) queue.push({ "x": node.x, "y": node.y + 1, "path": node.path + "D" });
        if (node.x != 0 && ['b', 'c', 'd', 'e', 'f'].includes(code[2])) queue.push({ "x": node.x - 1, "y": node.y, "path": node.path + "L" });
        if (node.x != 3 && ['b', 'c', 'd', 'e', 'f'].includes(code[3])) queue.push({ "x": node.x + 1, "y": node.y, "path": node.path + "R" });
    }

    return steps;
}
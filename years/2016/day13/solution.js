export function part1(input) {
    function isEmpty(x, y) {
        return (x * x + 3 * x + 2 * x * y + y + y * y + parseInt(input[0])).toString(2).split('').filter(bit => bit === '1').length % 2 == 0;
    }

    const visited = {};
    const queue = [{ "x": 1, "y": 1, "step": 0 }];

    while (true) {
        const node = queue.shift();

        if (visited[node.x + ";" + node.y]) continue;
        visited[node.x + ";" + node.y] = true;

        if (node.x == 31 && node.y == 39) return node.step;

        if (visited[(node.x + 1) + ";" + node.y] == null && isEmpty(node.x + 1, node.y)) {
            queue.push({ "x": node.x + 1, "y": node.y, "step": node.step + 1 });
        }

        if (node.x - 1 >= 0 && visited[(node.x - 1) + ";" + node.y] == null && isEmpty(node.x - 1, node.y)) {
            queue.push({ "x": node.x - 1, "y": node.y, "step": node.step + 1 });
        }

        if (visited[node.x + ";" + (node.y + 1)] == null && isEmpty(node.x, node.y + 1)) {
            queue.push({ "x": node.x, "y": node.y + 1, "step": node.step + 1 });
        }

        if (node.y - 1 >= 0 && visited[node.x + ";" + (node.y - 1)] == null && isEmpty(node.x, node.y - 1)) {
            queue.push({ "x": node.x, "y": node.y - 1, "step": node.step + 1 });
        }
    }
}

export function part2(input) {
    function isEmpty(x, y) {
        return (x * x + 3 * x + 2 * x * y + y + y * y + parseInt(input[0])).toString(2).split('').filter(bit => bit === '1').length % 2 == 0;
    }

    const visited = {};
    const queue = [{ "x": 1, "y": 1, "step": 0 }];

    while (queue.length > 0) {
        const node = queue.shift();

        if (visited[node.x + ";" + node.y]) continue;
        visited[node.x + ";" + node.y] = true;

        if (node.step == 50) continue;

        if (visited[(node.x + 1) + ";" + node.y] == null && isEmpty(node.x + 1, node.y)) {
            queue.push({ "x": node.x + 1, "y": node.y, "step": node.step + 1 });
        }

        if (node.x - 1 >= 0 && visited[(node.x - 1) + ";" + node.y] == null && isEmpty(node.x - 1, node.y)) {
            queue.push({ "x": node.x - 1, "y": node.y, "step": node.step + 1 });
        }

        if (visited[node.x + ";" + (node.y + 1)] == null && isEmpty(node.x, node.y + 1)) {
            queue.push({ "x": node.x, "y": node.y + 1, "step": node.step + 1 });
        }

        if (node.y - 1 >= 0 && visited[node.x + ";" + (node.y - 1)] == null && isEmpty(node.x, node.y - 1)) {
            queue.push({ "x": node.x, "y": node.y - 1, "step": node.step + 1 });
        }
    }

    return Object.keys(visited).length;
}
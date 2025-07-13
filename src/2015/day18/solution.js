export function part1(input) {
    let grid = [];
    for (const line of input) grid.push(line.split(""));
    const size = { x: grid[0].length, y: grid.length };

    function inBound(x, y) {
        return (x < size.x && y < size.y && x >= 0 && y >= 0);
    }

    for (let i = 0; i < 100; i++) {
        const next_iteration = JSON.parse(JSON.stringify(grid));

        for (let y = 0; y < size.y; y++) {
            for (let x = 0; x < size.x; x++) {
                let neighbours_off = 8;

                if (inBound(x, y + 1) && grid[y + 1][x] == "#") neighbours_off--;
                if (inBound(x, y - 1) && grid[y - 1][x] == "#") neighbours_off--;
                if (inBound(x + 1, y) && grid[y][x + 1] == "#") neighbours_off--;
                if (inBound(x - 1, y) && grid[y][x - 1] == "#") neighbours_off--;

                if (inBound(x + 1, y + 1) && grid[y + 1][x + 1] == "#") neighbours_off--;
                if (inBound(x - 1, y - 1) && grid[y - 1][x - 1] == "#") neighbours_off--;
                if (inBound(x - 1, y + 1) && grid[y + 1][x - 1] == "#") neighbours_off--;
                if (inBound(x + 1, y - 1) && grid[y - 1][x + 1] == "#") neighbours_off--;

                if (grid[y][x] == "#") next_iteration[y][x] = !(neighbours_off == 6 || neighbours_off == 5) ? "." : "#";
                if (grid[y][x] == ".") next_iteration[y][x] = neighbours_off == 5 ? "#" : ".";
            }
        }

        grid = next_iteration;
    }

    let counter = 0;
    for (let y = 0; y < size.y; y++) {
        for (let x = 0; x < size.x; x++) {
            if (grid[y][x] == "#") counter++;
        }
    }

    return counter;
}

export function part2(input) {
    let grid = [];
    for (const line of input) grid.push(line.split(""));
    const size = { x: grid[0].length, y: grid.length };

    function inBound(x, y) {
        return (x < size.x && y < size.y && x >= 0 && y >= 0);
    }

    grid[0][0] = "#";
    grid[size.y - 1][0] = "#";
    grid[0][size.x - 1] = "#";
    grid[size.y - 1][size.x - 1] = "#";

    for (let i = 0; i < 100; i++) {
        const next_iteration = JSON.parse(JSON.stringify(grid));

        for (let y = 0; y < size.y; y++) {
            for (let x = 0; x < size.x; x++) {
                if ((x == 0 && y == 0) || (x == 0 && y == size.y - 1) || (x == size.x - 1 && y == 0) || (x == size.x - 1 && y == size.y - 1)) continue;

                let neighbours_off = 8;

                if (inBound(x, y + 1) && grid[y + 1][x] == "#") neighbours_off--;
                if (inBound(x, y - 1) && grid[y - 1][x] == "#") neighbours_off--;
                if (inBound(x + 1, y) && grid[y][x + 1] == "#") neighbours_off--;
                if (inBound(x - 1, y) && grid[y][x - 1] == "#") neighbours_off--;

                if (inBound(x + 1, y + 1) && grid[y + 1][x + 1] == "#") neighbours_off--;
                if (inBound(x - 1, y - 1) && grid[y - 1][x - 1] == "#") neighbours_off--;
                if (inBound(x - 1, y + 1) && grid[y + 1][x - 1] == "#") neighbours_off--;
                if (inBound(x + 1, y - 1) && grid[y - 1][x + 1] == "#") neighbours_off--;

                if (grid[y][x] == "#") next_iteration[y][x] = !(neighbours_off == 6 || neighbours_off == 5) ? "." : "#";
                if (grid[y][x] == ".") next_iteration[y][x] = neighbours_off == 5 ? "#" : ".";
            }
        }

        grid = next_iteration;
    }

    let counter = 0;
    for (let y = 0; y < size.y; y++) {
        for (let x = 0; x < size.x; x++) {
            if (grid[y][x] == "#") counter++;
        }
    }

    return counter;
}
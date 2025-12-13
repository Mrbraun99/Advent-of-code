export function part1(input) {
    let grid = [];
    for (const line of input) grid.push(line.split(""));
    const size = { x: grid[0].length, y: grid.length };

    let count = 0;

    for (let y = 0; y < size.y; y++) {
        for (let x = 0; x < size.x; x++) {
            if (grid[y][x] != "@") continue;

            let neighbours = 0;

            if (x - 1 >= 0 && grid[y][x - 1] == "@") neighbours++;
            if (y - 1 >= 0 && grid[y - 1][x] == "@") neighbours++;

            if (x + 1 < size.x && grid[y][x + 1] == "@") neighbours++;
            if (y + 1 < size.y && grid[y + 1][x] == "@") neighbours++;

            if (x - 1 >= 0 && y - 1 >= 0 && grid[y - 1][x - 1] == "@") neighbours++;
            if (x - 1 >= 0 && y + 1 < size.y && grid[y + 1][x - 1] == "@") neighbours++;
            if (x + 1 >= 0 && y - 1 >= 0 && grid[y - 1][x + 1] == "@") neighbours++;
            if (x + 1 >= 0 && y + 1 < size.y && grid[y + 1][x + 1] == "@") neighbours++;

            if (neighbours < 4) {
                count++;
            }
        }
    }

    return count;
}

export function part2(input) {
    let grid = [];
    for (const line of input) grid.push(line.split(""));
    const size = { x: grid[0].length, y: grid.length };

    let prev_count = -1;
    let count = 0;

    while (true) {
        if (prev_count == count) break;
        prev_count = count;

        for (let y = 0; y < size.y; y++) {
            for (let x = 0; x < size.x; x++) {
                if (grid[y][x] != "@") continue;

                let neighbours = 0;

                if (x - 1 >= 0 && grid[y][x - 1] == "@") neighbours++;
                if (y - 1 >= 0 && grid[y - 1][x] == "@") neighbours++;

                if (x + 1 < size.x && grid[y][x + 1] == "@") neighbours++;
                if (y + 1 < size.y && grid[y + 1][x] == "@") neighbours++;

                if (x - 1 >= 0 && y - 1 >= 0 && grid[y - 1][x - 1] == "@") neighbours++;
                if (x - 1 >= 0 && y + 1 < size.y && grid[y + 1][x - 1] == "@") neighbours++;
                if (x + 1 >= 0 && y - 1 >= 0 && grid[y - 1][x + 1] == "@") neighbours++;
                if (x + 1 >= 0 && y + 1 < size.y && grid[y + 1][x + 1] == "@") neighbours++;

                if (neighbours < 4) {
                    grid[y][x] = ".";
                    count++;
                }
            }
        }
    }

    return count;
}
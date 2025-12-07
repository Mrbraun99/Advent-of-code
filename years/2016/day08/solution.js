export function part1(input) {
    function shiftY(grid, y, shift) {
        const row = grid[y];
        const length = row.length;
        shift = shift % length;
        grid[y] = row.slice(-shift).concat(row.slice(0, length - shift));
    }

    function shiftX(grid, x, shift) {
        let transposed = grid[0].map((_, index) => grid.map(row => row[index]));

        const row = transposed[x];
        const length = row.length;
        shift = shift % length;
        transposed[x] = row.slice(-shift).concat(row.slice(0, length - shift));

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[0].length; x++) {
                grid[y][x] = transposed[x][y];
            }
        }
    }

    const grid = [...Array(6)].map(e => Array(50).fill(0));

    for (const line of input) {
        let match;

        if ((match = line.match(/^rect (\d+)x(\d+)$/))) {
            const [_, width, height] = match;

            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    grid[y][x] = 1;
                }
            }

            continue;
        }

        if ((match = line.match(/^rotate row y=(\d+) by (\d+)$/))) {
            const [_, y, shift] = match;

            shiftY(grid, y, shift);
            continue;
        }

        if ((match = line.match(/^rotate column x=(\d+) by (\d+)$/))) {
            const [_, x, shift] = match;

            shiftX(grid, x, shift);
            continue;
        }
    }

    let lit_counter = 0;
    for (let y = 0; y < 6; y++) {
        for (let x = 0; x < 50; x++) {
            if (grid[y][x] == 1) lit_counter++;
        }
    }

    return lit_counter;
}

export function part2(input) {
    function shiftY(grid, y, shift) {
        const row = grid[y];
        const length = row.length;
        shift = shift % length;
        grid[y] = row.slice(-shift).concat(row.slice(0, length - shift));
    }

    function shiftX(grid, x, shift) {
        let transposed = grid[0].map((_, index) => grid.map(row => row[index]));

        const row = transposed[x];
        const length = row.length;
        shift = shift % length;
        transposed[x] = row.slice(-shift).concat(row.slice(0, length - shift));

        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[0].length; x++) {
                grid[y][x] = transposed[x][y];
            }
        }
    }

    const grid = [...Array(6)].map(e => Array(50).fill(0));

    for (const line of input) {
        let match;

        if ((match = line.match(/^rect (\d+)x(\d+)$/))) {
            const [_, width, height] = match;

            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    grid[y][x] = 1;
                }
            }

            continue;
        }

        if ((match = line.match(/^rotate row y=(\d+) by (\d+)$/))) {
            const [_, y, shift] = match;

            shiftY(grid, y, shift);
            continue;
        }

        if ((match = line.match(/^rotate column x=(\d+) by (\d+)$/))) {
            const [_, x, shift] = match;

            shiftX(grid, x, shift);
            continue;
        }
    }

    for (let y = 0; y < 6; y++) {
        let styles = [];
        for (let x = 0; x < 50; x++) {
            styles.push(grid[y][x] == 1 ? "color: white" : "color: black");
        }
        console.log(("%c▉").repeat(50), ...styles);
    }

    return "Read console";
}
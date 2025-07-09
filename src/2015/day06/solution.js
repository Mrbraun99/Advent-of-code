export function part1(input) {
    const grid = [...Array(1000)].map(e => Array(1000).fill(0));

    for (const instruction of input) {
        let match;

        if ((match = instruction.match(/^turn (on|off) (\d+),(\d+) through (\d+),(\d+)$/))) {
            const [_, mode, start_x, start_y, end_x, end_y] = match;

            for (let y = parseInt(start_y); y <= parseInt(end_y); y++) {
                for (let x = parseInt(start_x); x <= parseInt(end_x); x++) {
                    grid[y][x] = { "on": 1, "off": 0 }[mode];
                }
            }

            continue;
        }

        if ((match = instruction.match(/^toggle (\d+),(\d+) through (\d+),(\d+)$/))) {
            const [_, start_x, start_y, end_x, end_y] = match;

            for (let y = parseInt(start_y); y <= parseInt(end_y); y++) {
                for (let x = parseInt(start_x); x <= parseInt(end_x); x++) {
                    grid[y][x] = (grid[y][x] + 1) % 2;
                }
            }

            continue;
        }
    }

    let light_on_counter = 0;
    for (let y = 0; y < 1000; y++) {
        for (let x = 0; x < 1000; x++) {
            if (grid[y][x] == 1) light_on_counter++;
        }
    }

    return light_on_counter;
}

export function part2(input) {
    const grid = [...Array(1000)].map(e => Array(1000).fill(0));

    for (const instruction of input) {
        let match;

        if ((match = instruction.match(/^turn (on|off) (\d+),(\d+) through (\d+),(\d+)$/))) {
            const [_, mode, start_x, start_y, end_x, end_y] = match;

            for (let y = parseInt(start_y); y <= parseInt(end_y); y++) {
                for (let x = parseInt(start_x); x <= parseInt(end_x); x++) {
                    grid[y][x] = Math.max(grid[y][x] + { "on": 1, "off": -1 }[mode], 0);
                }
            }

            continue;
        }

        if ((match = instruction.match(/^toggle (\d+),(\d+) through (\d+),(\d+)$/))) {
            const [_, start_x, start_y, end_x, end_y] = match;

            for (let y = parseInt(start_y); y <= parseInt(end_y); y++) {
                for (let x = parseInt(start_x); x <= parseInt(end_x); x++) {
                    grid[y][x] += 2;
                }
            }

            continue;
        }
    }

    let brightness = 0;

    for (let y = 0; y < 1000; y++) {
        for (let x = 0; x < 1000; x++) {
            brightness += grid[y][x];
        }
    }

    return brightness;
}
export function part1(input) {
    const pos = { x: 0, y: 0 };
    let facing = "UP";

    for (const line of input[0].split(",").map((value) => value.trim())) {
        const [_, direction, steps] = line.match(/^(R|L)(\d+)$/);

        switch (direction) {
            case "R": {
                facing = { UP: "RIGHT", RIGHT: "DOWN", DOWN: "LEFT", LEFT: "UP" }[facing];
                break;
            }
            case "L": {
                facing = { UP: "LEFT", LEFT: "DOWN", DOWN: "RIGHT", RIGHT: "UP" }[facing];
                break;
            }
        }

        switch (facing) {
            case "UP": {
                pos.y += parseInt(steps);
                break;
            }
            case "DOWN": {
                pos.y -= parseInt(steps);
                break;
            }
            case "LEFT": {
                pos.x -= parseInt(steps);
                break;
            }
            case "RIGHT": {
                pos.x += parseInt(steps);
                break;
            }
        }
    }

    return Math.abs(pos.x) + Math.abs(pos.y);
}

export function part2(input) {
    const visited = { "0,0": true };
    const pos = { x: 0, y: 0 };
    let facing = "UP";

    for (const line of input[0].split(",").map((value) => value.trim())) {
        const [_, direction, steps] = line.match(/^(R|L)(\d+)$/);

        switch (direction) {
            case "R": {
                facing = { UP: "RIGHT", RIGHT: "DOWN", DOWN: "LEFT", LEFT: "UP" }[facing];
                break;
            }
            case "L": {
                facing = { UP: "LEFT", LEFT: "DOWN", DOWN: "RIGHT", RIGHT: "UP" }[facing];
                break;
            }
        }

        for (let i = 1; i <= parseInt(steps); i++) {
            switch (facing) {
                case "UP": {
                    pos.y += 1;
                    break;
                }
                case "DOWN": {
                    pos.y -= 1;
                    break;
                }
                case "LEFT": {
                    pos.x -= 1;
                    break;
                }
                case "RIGHT": {
                    pos.x += 1;
                    break;
                }
            }

            if (visited[pos.x + "," + pos.y]) return Math.abs(pos.x) + Math.abs(pos.y);
            visited[pos.x + "," + pos.y] = true;
        }
    }
}

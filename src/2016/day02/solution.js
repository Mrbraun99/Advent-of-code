export function part1(input) {
    const keypad =
        [
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"],
        ];

    let code = "";
    const pos = { x: 1, y: 1 };

    for (const line of input) {
        for (const direction of line) {
            if (direction == "U" && pos.y != 0 && keypad[pos.y - 1][pos.x] != 0) pos.y--;
            if (direction == "D" && pos.y != 2 && keypad[pos.y + 1][pos.x] != 0) pos.y++;
            if (direction == "L" && pos.x != 0 && keypad[pos.y][pos.x - 1] != 0) pos.x--;
            if (direction == "R" && pos.x != 2 && keypad[pos.y][pos.x + 1] != 0) pos.x++;
        }

        code += keypad[pos.y][pos.x];
    }

    return code;
}

export function part2(input) {
    const keypad =
        [
            [0, 0, "1", 0, 0],
            [0, "2", "3", "4", 0],
            ["5", "6", "7", "8", "9"],
            [0, "A", "B", "C", 0],
            [0, 0, "D", 0, 0],
        ];

    let code = "";
    const pos = { x: 0, y: 2 };

    for (const line of input) {
        for (const direction of line) {
            if (direction == "U" && pos.y != 0 && keypad[pos.y - 1][pos.x] != 0) pos.y--;
            if (direction == "D" && pos.y != 4 && keypad[pos.y + 1][pos.x] != 0) pos.y++;
            if (direction == "L" && pos.x != 0 && keypad[pos.y][pos.x - 1] != 0) pos.x--;
            if (direction == "R" && pos.x != 4 && keypad[pos.y][pos.x + 1] != 0) pos.x++;
        }

        code += keypad[pos.y][pos.x];
    }

    return code;
}
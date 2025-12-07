export function part1(input) {
    let safe_tiles = 0;
    let current_row = "." + input[0] + ".";

    let row = 0;
    while (true) {
        safe_tiles += current_row.split("").filter(char => char == '.').length - 2;
        if (++row == 40) return safe_tiles;

        const next_row = [];
        for (let i = 1; i < current_row.length - 1; i++) {
            if (current_row[i - 1] == "^" && current_row[i] == "^" && current_row[i + 1] == ".") {
                next_row.push("^");
                continue
            }

            if (current_row[i - 1] == "." && current_row[i] == "^" && current_row[i + 1] == "^") {
                next_row.push("^");
                continue
            }

            if (current_row[i - 1] == "^" && current_row[i] == "." && current_row[i + 1] == ".") {
                next_row.push("^");
                continue
            }

            if (current_row[i - 1] == "." && current_row[i] == "." && current_row[i + 1] == "^") {
                next_row.push("^");
                continue
            }

            next_row.push(".");
        }

        current_row = "." + next_row.join("") + ".";
    }
}

export function part2(input) {
    let safe_tiles = 0;
    let current_row = "." + input[0] + ".";

    let row = 0;
    while (true) {
        safe_tiles += current_row.split("").filter(char => char == '.').length - 2;
        if (++row == 400000) return safe_tiles;

        const next_row = [];
        for (let i = 1; i < current_row.length - 1; i++) {
            if (current_row[i - 1] == "^" && current_row[i] == "^" && current_row[i + 1] == ".") {
                next_row.push("^");
                continue
            }

            if (current_row[i - 1] == "." && current_row[i] == "^" && current_row[i + 1] == "^") {
                next_row.push("^");
                continue
            }

            if (current_row[i - 1] == "^" && current_row[i] == "." && current_row[i + 1] == ".") {
                next_row.push("^");
                continue
            }

            if (current_row[i - 1] == "." && current_row[i] == "." && current_row[i + 1] == "^") {
                next_row.push("^");
                continue
            }

            next_row.push(".");
        }

        current_row = "." + next_row.join("") + ".";
    }
}
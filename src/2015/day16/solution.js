export function part1(input) {
    const properties = { "children": 3, "cats": 7, "samoyeds": 2, "pomeranians": 3, "akitas": 0, "vizslas": 0, "goldfish": 5, "trees": 3, "cars": 2, "perfumes": 1 }

    loop: for (const line of input) {
        for (const [key, value] of line.match(/(\w+): (\d+)/g).map(match => match.split(": "))) {
            if (properties[key] != parseInt(value)) continue loop;
        }

        return parseInt(line.match(/^Sue (\d+):/)[1]);
    }
}

export function part2(input) {
    const properties = { "children": 3, "cats": 7, "samoyeds": 2, "pomeranians": 3, "akitas": 0, "vizslas": 0, "goldfish": 5, "trees": 3, "cars": 2, "perfumes": 1 }

    loop: for (const line of input) {
        for (const [key, value] of line.match(/(\w+): (\d+)/g).map(match => match.split(": "))) {
            switch (key) {
                case "cats":
                case "trees":
                    {
                        if (properties[key] >= parseInt(value)) continue loop;
                        break;
                    }
                case "pomeranians":
                case "goldfish":
                    {
                        if (properties[key] <= parseInt(value)) continue loop;
                        break;
                    }
                default:
                    {
                        if (properties[key] != parseInt(value)) continue loop;
                        break;
                    }
            }
        }

        return parseInt(line.match(/^Sue (\d+):/)[1]);
    }
}
export function part1(input) {
    const bots = {};
    const instructions = {};
    const queue = [];

    for (const line of input) {
        let match;

        if ((match = line.match(/^value (\d+) goes to bot (\d+)$/))) {
            const chip_value = parseInt(match[1]);
            const id = parseInt(match[2]);

            if (!bots[id]) bots[id] = { "chips": [chip_value] };
            else bots[id].chips.push(chip_value);

            if (bots[id].chips.length == 2) queue.push(id);

            continue;
        }

        if ((match = line.match(/^bot (\d+) gives low to (bot|output) (\d+) and high to (bot|output) (\d+)$/))) {
            instructions[match[1]] = { "low": { "type": match[2], "id": parseInt(match[3]) }, "high": { "type": match[4], "id": parseInt(match[5]) } };
            continue;
        }
    }

    while (true) {
        const id = queue.shift();
        const [low_chip, high_chip] = bots[id].chips.sort((a, b) => a - b);

        if (low_chip == 17 && high_chip == 61) return id;

        if (instructions[id].low.type == "bot") {
            if (bots[instructions[id].low.id] == null) bots[instructions[id].low.id] = { "chips": [] };

            bots[instructions[id].low.id].chips.push(low_chip);

            if (bots[instructions[id].low.id].chips.length == 2) queue.push(instructions[id].low.id);
        }

        if (instructions[id].high.type == "bot") {
            if (bots[instructions[id].high.id] == null) bots[instructions[id].high.id] = { "chips": [] };

            bots[instructions[id].high.id].chips.push(high_chip);

            if (bots[instructions[id].high.id].chips.length == 2) queue.push(instructions[id].high.id);
        }

        bots[id].chips = [];
    }
}

export function part2(input) {
    const bots = {};
    const instructions = {};
    const outputs = [];
    const queue = [];

    for (const line of input) {
        let match;

        if ((match = line.match(/^value (\d+) goes to bot (\d+)$/))) {
            const chip_value = parseInt(match[1]);
            const id = parseInt(match[2]);

            if (!bots[id]) bots[id] = { "chips": [chip_value] };
            else bots[id].chips.push(chip_value);

            if (bots[id].chips.length == 2) queue.push(id);

            continue;
        }


        if ((match = line.match(/^bot (\d+) gives low to (bot|output) (\d+) and high to (bot|output) (\d+)$/))) {
            instructions[match[1]] = { "low": { "type": match[2], "id": parseInt(match[3]) }, "high": { "type": match[4], "id": parseInt(match[5]) } };
            continue;
        }
    }

    while (true) {
        const id = queue.shift();
        const [low_chip, high_chip] = bots[id].chips.sort((a, b) => a - b);

        if (instructions[id].low.type == "bot") {
            if (bots[instructions[id].low.id] == null) bots[instructions[id].low.id] = { "chips": [] };

            bots[instructions[id].low.id].chips.push(low_chip);

            if (bots[instructions[id].low.id].chips.length == 2) queue.push(instructions[id].low.id);
        } else {
            outputs[instructions[id].low.id] = low_chip;
        }

        if (instructions[id].high.type == "bot") {
            if (bots[instructions[id].high.id] == null) bots[instructions[id].high.id] = { "chips": [] };

            bots[instructions[id].high.id].chips.push(high_chip);

            if (bots[instructions[id].high.id].chips.length == 2) queue.push(instructions[id].high.id);
        } else {
            outputs[instructions[id].high.id] = low_chip;
        }

        bots[id].chips = [];

        if (outputs[0] != null && outputs[1] != null && outputs[2] != null) return outputs[0] * outputs[1] * outputs[2];
    }
}
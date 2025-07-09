export function part1(input) {
    const wires = {};
    const instructions = [];

    for (const instruction of input) {
        let match;

        if ((match = instruction.match(/^(\S+) -> (\S+)$/))) {
            const [_, a, result] = match;

            if (!isNaN(a)) wires[a] = parseInt(a);

            instructions.push({ "op": "ASSIGN", "a": a, "result": result });
            continue;
        }

        if ((match = instruction.match(/^(\S+) (AND|OR|LSHIFT|RSHIFT) (\S+) -> (\S+)$/))) {
            const [_, a, op, b, result] = match;

            if (!isNaN(a)) wires[a] = parseInt(a);
            if (!isNaN(b)) wires[b] = parseInt(b);

            instructions.push({ "op": op, "a": a, "b": b, "result": result });
            continue;
        }

        if ((match = instruction.match(/^NOT (\S+) -> (\S+)$/))) {
            const [_, a, result] = match;

            instructions.push({ "op": "NOT", "a": a, "result": result });
            continue;
        }
    }

    while (instructions.length > 0) {
        let instruction = instructions.shift();

        switch (instruction.op) {
            case "ASSIGN":
                {
                    if (wires[instruction.a] != null) wires[instruction.result] = wires[instruction.a];
                    else instructions.push(instruction);
                    break;
                }
            case "NOT":
                {
                    if (wires[instruction.a] != null) wires[instruction.result] = 65535 - wires[instruction.a];
                    else instructions.push(instruction);
                    break;
                }
            case "AND":
                {
                    if (wires[instruction.a] != null && wires[instruction.b] != null) wires[instruction.result] = wires[instruction.a] & wires[instruction.b];
                    else instructions.push(instruction);
                    break;
                }
            case "OR":
                {
                    if (wires[instruction.a] != null && wires[instruction.b] != null) wires[instruction.result] = wires[instruction.a] | wires[instruction.b];
                    else instructions.push(instruction);
                    break;
                }
            case "LSHIFT":
                {
                    if (wires[instruction.a] != null && wires[instruction.b] != null) wires[instruction.result] = wires[instruction.a] << wires[instruction.b];
                    else instructions.push(instruction);
                    break;
                }
            case "RSHIFT":
                {
                    if (wires[instruction.a] != null && wires[instruction.b] != null) wires[instruction.result] = wires[instruction.a] >> wires[instruction.b];
                    else instructions.push(instruction);
                    break;
                }
        }
    }

    return wires["a"];
}

export function part2(input) {
    const wires = {};
    const instructions = [];

    for (const instruction of input) {
        let match;

        if ((match = instruction.match(/^(\S+) -> (\S+)$/))) {
            const [_, a, result] = match;

            if (result == "b") {
                wires["b"] = part1(input);
                continue;
            }

            if (!isNaN(a)) wires[a] = parseInt(a);

            instructions.push({ "op": "ASSIGN", "a": a, "result": result });
            continue;
        }

        if ((match = instruction.match(/^(\S+) (AND|OR|LSHIFT|RSHIFT) (\S+) -> (\S+)$/))) {
            const [_, a, op, b, result] = match;

            if (!isNaN(a)) wires[a] = parseInt(a);
            if (!isNaN(b)) wires[b] = parseInt(b);

            instructions.push({ "op": op, "a": a, "b": b, "result": result });
            continue;
        }

        if ((match = instruction.match(/^NOT (\S+) -> (\S+)$/))) {
            const [_, a, result] = match;

            instructions.push({ "op": "NOT", "a": a, "result": result });
            continue;
        }
    }

    while (instructions.length > 0) {
        let instruction = instructions.shift();

        switch (instruction.op) {
            case "ASSIGN":
                {
                    if (wires[instruction.a] != null) wires[instruction.result] = wires[instruction.a];
                    else instructions.push(instruction);
                    break;
                }
            case "NOT":
                {
                    if (wires[instruction.a] != null) wires[instruction.result] = 65535 - wires[instruction.a];
                    else instructions.push(instruction);
                    break;
                }
            case "AND":
                {
                    if (wires[instruction.a] != null && wires[instruction.b] != null) wires[instruction.result] = wires[instruction.a] & wires[instruction.b];
                    else instructions.push(instruction);
                    break;
                }
            case "OR":
                {
                    if (wires[instruction.a] != null && wires[instruction.b] != null) wires[instruction.result] = wires[instruction.a] | wires[instruction.b];
                    else instructions.push(instruction);
                    break;
                }
            case "LSHIFT":
                {
                    if (wires[instruction.a] != null && wires[instruction.b] != null) wires[instruction.result] = wires[instruction.a] << wires[instruction.b];
                    else instructions.push(instruction);
                    break;
                }
            case "RSHIFT":
                {
                    if (wires[instruction.a] != null && wires[instruction.b] != null) wires[instruction.result] = wires[instruction.a] >> wires[instruction.b];
                    else instructions.push(instruction);
                    break;
                }
        }
    }

    return wires["a"];
}
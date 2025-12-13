export function part1(input) {
    const junction_boxes = [];
    for (let i = 0; i < input.length; i++) {
        const [x, y, z] = input[i].split(",").map(Number);
        junction_boxes.push({ "pos": { x: x, y: y, z: z }, "circuit": i });
    }

    const connections = [];
    for (let i = 0; i < junction_boxes.length - 1; i++) {
        for (let j = i + 1; j < junction_boxes.length; j++) {
            const box1 = junction_boxes[i];
            const box2 = junction_boxes[j];

            const distance = Math.sqrt(Math.pow(box1.pos.x - box2.pos.x, 2) + Math.pow(box1.pos.y - box2.pos.y, 2) + Math.pow(box1.pos.z - box2.pos.z, 2));
            connections.push({ "src": i, "dst": j, "distance": distance });
        }
    }

    connections.sort((a, b) => a.distance - b.distance);

    for (let i = 0; i < 1000; i++) {
        if (junction_boxes[connections[i].src].circuit != junction_boxes[connections[i].dst].circuit) {
            for (const box of junction_boxes.filter(box => box.circuit == junction_boxes[connections[i].src].circuit)) {
                box.circuit = junction_boxes[connections[i].dst].circuit;
            }
        }
    }

    const circuit_sizes = Array(junction_boxes.length).fill(0);
    for (const box of junction_boxes) {
        circuit_sizes[box.circuit]++;
    }

    circuit_sizes.sort((a, b) => b - a);

    return circuit_sizes[0] * circuit_sizes[1] * circuit_sizes[2];
}

export function part2(input) {
    const junction_boxes = [];
    for (let i = 0; i < input.length; i++) {
        const [x, y, z] = input[i].split(",").map(Number);
        junction_boxes.push({ "pos": { x: x, y: y, z: z }, "circuit": i });
    }

    const connections = [];
    for (let i = 0; i < junction_boxes.length - 1; i++) {
        for (let j = i + 1; j < junction_boxes.length; j++) {
            const box1 = junction_boxes[i];
            const box2 = junction_boxes[j];

            const distance = Math.sqrt(Math.pow(box1.pos.x - box2.pos.x, 2) + Math.pow(box1.pos.y - box2.pos.y, 2) + Math.pow(box1.pos.z - box2.pos.z, 2));
            connections.push({ "src": i, "dst": j, "distance": distance });
        }
    }

    connections.sort((a, b) => a.distance - b.distance);

    for (const connection of connections) {
        if (junction_boxes[connection.src].circuit != junction_boxes[connection.dst].circuit) {
            for (const box of junction_boxes.filter(box => box.circuit == junction_boxes[connection.src].circuit)) {
                box.circuit = junction_boxes[connection.dst].circuit;
            }

            if (junction_boxes.every(box => box.circuit == junction_boxes[0].circuit)) {
                return junction_boxes[connection.src].pos.x * junction_boxes[connection.dst].pos.x;
            }
        }
    }
}
export function part1(input) {
    const weights = [];
    let total_weight = 0;

    for (const line of input) {
        const weight = parseInt(line);
        weights.push(weight);
        total_weight += weight;
    }

    const desired_weight = total_weight / 3;
    const first_group = { "size": Infinity, bitmaps: [] };

    function split(index, sum, bitmap) {
        if (sum == desired_weight) {
            const size = bitmap.filter(value => value == 1).length;

            if (size == first_group.size) {
                first_group.bitmaps.push([...bitmap]);
            }

            if (size < first_group.size) {
                first_group.size = size;
                first_group.bitmaps = [[...bitmap]];
            }

            return;
        }

        if (index == weights.length) return;

        if (sum + weights[index] <= desired_weight) {
            bitmap[index] = 1;
            split(index + 1, sum + weights[index], bitmap);
        }

        bitmap[index] = 0;
        split(index + 1, sum, bitmap);
    }

    split(0, 0, Array(weights.length).fill(0));

    let min_quantum_entanglement = Infinity;



    for (const bitmap of first_group.bitmaps) {
        const quantum_entanglement = weights.filter((_, index) => bitmap[index] == 1).reduce((acc, value) => acc * value, 1);

        if (quantum_entanglement < min_quantum_entanglement) min_quantum_entanglement = quantum_entanglement;
    }

    return min_quantum_entanglement;
}

export function part2(input) {
    const weights = [];
    let total_weight = 0;

    for (const line of input) {
        const weight = parseInt(line);
        weights.push(weight);
        total_weight += weight;
    }

    const desired_weight = total_weight / 4;
    const first_group = { "size": Infinity, bitmaps: [] };

    function split(index, sum, bitmap) {
        if (sum == desired_weight) {
            const size = bitmap.filter(value => value == 1).length;

            if (size == first_group.size) {
                first_group.bitmaps.push([...bitmap]);
            }

            if (size < first_group.size) {
                first_group.size = size;
                first_group.bitmaps = [[...bitmap]];
            }

            return;
        }

        if (index == weights.length) return;

        if (sum + weights[index] <= desired_weight) {
            bitmap[index] = 1;
            split(index + 1, sum + weights[index], bitmap);
        }

        bitmap[index] = 0;
        split(index + 1, sum, bitmap);
    }

    split(0, 0, Array(weights.length).fill(0));

    let min_quantum_entanglement = Infinity;



    for (const bitmap of first_group.bitmaps) {
        const quantum_entanglement = weights.filter((_, index) => bitmap[index] == 1).reduce((acc, value) => acc * value, 1);

        if (quantum_entanglement < min_quantum_entanglement) min_quantum_entanglement = quantum_entanglement;
    }

    return min_quantum_entanglement;
}
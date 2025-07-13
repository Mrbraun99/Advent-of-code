export function part1(input) {
    const unique_molecules = new Set();
    const replacements = [];

    for (const line of input) {
        if (line == "") break;

        const [_, src, dst] = line.match(/^(\S+) => (\S+)$/);
        replacements.push({ "src": src, "dst": dst });
    }

    let molecule = input[input.length - 1];

    for (const { src, dst } of replacements) {
        for (const result of Array.from(molecule.matchAll(new RegExp(`(?=${src})`, 'g')), m => molecule.slice(0, m.index) + dst + molecule.slice(m.index + src.length))) {
            unique_molecules.add(result);
        }
    }

    return unique_molecules.size;
}

export function part2(input) {
    const replacements = [];

    for (const line of input) {
        if (line == "") break;

        const [_, src, dst] = line.match(/^(\S+) => (\S+)$/);
        replacements.push({ "src": src, "dst": dst });
    }

    const queue = [{ "molecule": input[input.length - 1], "step": 0 }];
    const visited = {};

    while (queue.length > 0) {
        const { molecule, step } = queue.shift();

        if (visited[molecule]) continue;
        visited[molecule] = true;

        const unique_molecules = new Set();
        for (const { src, dst } of replacements) {
            for (const result of Array.from(molecule.matchAll(new RegExp(`(?=${dst})`, 'g')), m => molecule.slice(0, m.index) + src + molecule.slice(m.index + dst.length))) {
                unique_molecules.add(result);
            }
        }

        if (unique_molecules.has("e")) return step + 1;
        queue.push(...Array.from(unique_molecules).map(molecule => { return { "molecule": molecule, "step": step + 1 } }));
        queue.sort((a, b) => a.molecule.length - b.molecule.length);
    }
}
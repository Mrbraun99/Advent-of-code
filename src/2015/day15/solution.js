export function part1(input) {
    let highest_score = -Infinity;
    const properties = { "prop1": [], "prop2": [], "prop3": [], "prop4": [] };

    for (const line of input) {
        const [_, , capacity, durability, flavor, texture,] = line.match(/(\w+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+)/);

        properties.prop1.push(parseInt(capacity));
        properties.prop2.push(parseInt(durability));
        properties.prop3.push(parseInt(flavor));
        properties.prop4.push(parseInt(texture));
    }

    function solve(amounts, remaining, index) {
        if (index === 1) {
            amounts[0] = remaining;

            const prop_1_score = Math.max(0, amounts.reduce((acc, val, i) => acc + val * properties.prop1[i], 0));
            const prop_2_score = Math.max(0, amounts.reduce((acc, val, i) => acc + val * properties.prop2[i], 0));
            const prop_3_score = Math.max(0, amounts.reduce((acc, val, i) => acc + val * properties.prop3[i], 0));
            const prop_4_score = Math.max(0, amounts.reduce((acc, val, i) => acc + val * properties.prop4[i], 0));

            const score = prop_1_score * prop_2_score * prop_3_score * prop_4_score;
            if (score > highest_score) highest_score = score;

            return;
        }

        for (let i = 0; i <= remaining; i++) {
            amounts[index - 1] = i;
            solve(amounts, remaining - i, index - 1);
        }
    }

    solve([0, 0, 0, 0], 100, input.length);

    return highest_score;
}

export function part2(input) {
    let highest_score = -Infinity;
    const properties = { "prop1": [], "prop2": [], "prop3": [], "prop4": [], "calorie": [] };

    for (const line of input) {
        const [_, , capacity, durability, flavor, texture, calorie] = line.match(/(\w+): capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (-?\d+)/);

        properties.prop1.push(parseInt(capacity));
        properties.prop2.push(parseInt(durability));
        properties.prop3.push(parseInt(flavor));
        properties.prop4.push(parseInt(texture));
        properties.calorie.push(parseInt(calorie));
    }

    function solve(amounts, remaining, index) {
        if (index === 1) {
            amounts[0] = remaining;

            if (amounts.reduce((acc, val, i) => acc + val * properties.calorie[i], 0) != 500) return;

            const prop_1_score = Math.max(0, amounts.reduce((acc, val, i) => acc + val * properties.prop1[i], 0));
            const prop_2_score = Math.max(0, amounts.reduce((acc, val, i) => acc + val * properties.prop2[i], 0));
            const prop_3_score = Math.max(0, amounts.reduce((acc, val, i) => acc + val * properties.prop3[i], 0));
            const prop_4_score = Math.max(0, amounts.reduce((acc, val, i) => acc + val * properties.prop4[i], 0));

            const score = prop_1_score * prop_2_score * prop_3_score * prop_4_score;
            if (score > highest_score) highest_score = score;

            return;
        }

        for (let i = 0; i <= remaining; i++) {
            amounts[index - 1] = i;
            solve(amounts, remaining - i, index - 1);
        }
    }

    solve([0, 0, 0, 0], 100, input.length);

    return highest_score;
}
export function part1(input) {
    function combination(items, k, repeats = false) {
        const results = [];

        function combinate(start, combo) {
            if (combo.length == k) {
                results.push(combo.slice());
                return;
            }

            for (let i = start; i < items.length; i++) {
                const item = items[i];

                if (!repeats && combo.includes(item)) continue;

                combo.push(item);
                combinate(repeats ? i : i + 1, combo);
                combo.pop();
            }
        }

        combinate(0, []);
        return results;
    }

    const weapons =
        [
            { "cost": 8, "damage": 4 },
            { "cost": 10, "damage": 5 },
            { "cost": 25, "damage": 6 },
            { "cost": 40, "damage": 7 },
            { "cost": 74, "damage": 8 }
        ];

    const armors =
        [
            { "cost": 0, "armor": 0 },
            { "cost": 13, "armor": 1 },
            { "cost": 31, "armor": 2 },
            { "cost": 53, "armor": 3 },
            { "cost": 75, "armor": 4 },
            { "cost": 102, "armor": 5 }
        ];


    const rings = [
        { "cost": 0, "damage": 0, "armor": 0 },
        { "cost": 25, "damage": 1, "armor": 0 },
        { "cost": 50, "damage": 2, "armor": 0 },
        { "cost": 100, "damage": 3, "armor": 0 },
        { "cost": 20, "damage": 0, "armor": 1 },
        { "cost": 40, "damage": 0, "armor": 2 },
        { "cost": 80, "damage": 0, "armor": 3 }
    ];

    const ring_combinations = [[rings[0], rings[0]], ...combination(rings, 2)];

    let minimal_gold_cost = Infinity;

    for (const weapon of weapons) {
        for (const armor of armors) {
            for (const ring_combination of ring_combinations) {
                const gold_cost = weapon.cost + armor.cost + ring_combination[0].cost + ring_combination[1].cost;

                if (gold_cost > minimal_gold_cost) continue;

                let player = {
                    "hp": 100,
                    "damage": weapon.damage + ring_combination[0].damage + ring_combination[1].damage,
                    "armor": armor.armor + ring_combination[0].armor + ring_combination[1].armor,
                };

                let boss = {
                    "hp": parseInt(input[0].split(": ")[1]),
                    "damage": parseInt(input[1].split(": ")[1]),
                    "armor": parseInt(input[2].split(": ")[1]),
                }

                while (true) {
                    boss.hp -= Math.max(1, player.damage - boss.armor);
                    if (boss.hp <= 0) {
                        minimal_gold_cost = gold_cost;
                        break;
                    }

                    player.hp -= Math.max(1, boss.damage - player.armor);
                    if (player.hp <= 0) break;
                }
            }
        }
    }

    return minimal_gold_cost;
}

export function part2(input) {
    function combination(items, k, repeats = false) {
        const results = [];

        function combinate(start, combo) {
            if (combo.length == k) {
                results.push(combo.slice());
                return;
            }

            for (let i = start; i < items.length; i++) {
                const item = items[i];

                if (!repeats && combo.includes(item)) continue;

                combo.push(item);
                combinate(repeats ? i : i + 1, combo);
                combo.pop();
            }
        }

        combinate(0, []);
        return results;
    }

    const weapons =
        [
            { "cost": 8, "damage": 4 },
            { "cost": 10, "damage": 5 },
            { "cost": 25, "damage": 6 },
            { "cost": 40, "damage": 7 },
            { "cost": 74, "damage": 8 }
        ];

    const armors =
        [
            { "cost": 0, "armor": 0 },
            { "cost": 13, "armor": 1 },
            { "cost": 31, "armor": 2 },
            { "cost": 53, "armor": 3 },
            { "cost": 75, "armor": 4 },
            { "cost": 102, "armor": 5 }
        ];


    const rings = [
        { "cost": 0, "damage": 0, "armor": 0 },
        { "cost": 25, "damage": 1, "armor": 0 },
        { "cost": 50, "damage": 2, "armor": 0 },
        { "cost": 100, "damage": 3, "armor": 0 },
        { "cost": 20, "damage": 0, "armor": 1 },
        { "cost": 40, "damage": 0, "armor": 2 },
        { "cost": 80, "damage": 0, "armor": 3 }
    ];

    const ring_combinations = [[rings[0], rings[0]], ...combination(rings, 2)];

    let max_gold_cost = -Infinity;

    for (const weapon of weapons) {
        for (const armor of armors) {
            for (const ring_combination of ring_combinations) {
                const gold_cost = weapon.cost + armor.cost + ring_combination[0].cost + ring_combination[1].cost;

                if (gold_cost < max_gold_cost) continue;

                let player = {
                    "hp": 100,
                    "damage": weapon.damage + ring_combination[0].damage + ring_combination[1].damage,
                    "armor": armor.armor + ring_combination[0].armor + ring_combination[1].armor,
                };

                let boss = {
                    "hp": parseInt(input[0].split(": ")[1]),
                    "damage": parseInt(input[1].split(": ")[1]),
                    "armor": parseInt(input[2].split(": ")[1]),
                }

                while (true) {
                    boss.hp -= Math.max(1, player.damage - boss.armor);
                    if (boss.hp <= 0) break;

                    player.hp -= Math.max(1, boss.damage - player.armor);
                    if (player.hp <= 0) {
                        max_gold_cost = gold_cost;
                        break;
                    };
                }
            }
        }
    }

    return max_gold_cost;
}
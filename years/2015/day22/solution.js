export function part1(input) {
    const player = {
        "hp": 50,
        "mana": 500,
        "armor": 0,
        "effects": { "shield": 0, "poison": 0, "recharge": 0 },
        "used_mana": 0,
    }

    const boss = {
        "hp": parseInt(input[0].split(": ")[1]),
        "damage": parseInt(input[1].split(": ")[1]),
    }

    const spell_cost = {
        "magic_missile": 53,
        "drain": 73,
        "shield": 113,
        "poison": 173,
        "recharge": 229
    }

    let lowest_mana_cost = Infinity;

    function fight(player, boss, spell) {
        player.armor = (--player.effects.shield) > 0 ? 7 : 0;

        if (player.effects.poison > 0) {
            boss.hp -= 3;
            player.effects.poison--;
        }

        if (player.effects.recharge > 0) {
            player.mana += 101;
            player.effects.recharge--;
        }

        if (boss.hp <= 0) {
            if (player.used_mana < lowest_mana_cost) lowest_mana_cost = player.used_mana;
            return;
        }

        if (player.used_mana + spell_cost[spell] > lowest_mana_cost) return;
        player.used_mana += spell_cost[spell];
        player.mana -= spell_cost[spell];

        switch (spell) {
            case "magic_missile":
                {
                    boss.hp -= 4;
                    break;
                }
            case "drain":
                {
                    player.hp += 2;
                    boss.hp -= 2;
                    break;
                }
            case "shield":
                {
                    player.effects.shield = 6;
                    break;
                }
            case "poison":
                {
                    player.effects.poison = 6;
                    break;
                }
            case "recharge":
                {
                    player.effects.recharge = 5;
                    break;
                }
        }

        if (player.mana < 0) return;

        if (boss.hp <= 0) {
            if (player.used_mana < lowest_mana_cost) lowest_mana_cost = player.used_mana;
            return;
        }

        player.armor = (--player.effects.shield) > 0 ? 7 : 0;

        if (player.effects.poison > 0) {
            boss.hp -= 3;
            player.effects.poison--;
        }

        if (player.effects.recharge > 0) {
            player.mana += 101;
            player.effects.recharge--;
        }

        if (boss.hp <= 0) {
            if (player.used_mana < lowest_mana_cost) lowest_mana_cost = player.used_mana;
            return;
        }

        player.hp -= Math.max(1, boss.damage - player.armor);
        if (player.hp <= 0) return;

        fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "magic_missile");
        fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "drain");

        if (player.effects.shield < 2) fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "shield");
        if (player.effects.poison < 2) fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "poison");
        if (player.effects.recharge < 2) fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "recharge");
    }

    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "magic_missile", 0);
    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "drain", 0);
    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "shield", 0);
    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "poison", 0);
    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "recharge", 0);

    return lowest_mana_cost;
}

export function part2(input) {
    const player = {
        "hp": 50,
        "mana": 500,
        "armor": 0,
        "effects": { "shield": 0, "poison": 0, "recharge": 0 },
        "used_mana": 0,
    }

    const boss = {
        "hp": parseInt(input[0].split(": ")[1]),
        "damage": parseInt(input[1].split(": ")[1]),
    }

    const spell_cost = {
        "magic_missile": 53,
        "drain": 73,
        "shield": 113,
        "poison": 173,
        "recharge": 229
    }

    let lowest_mana_cost = Infinity;

    function fight(player, boss, spell) {
        if (--player.hp <= 0) return;

        player.armor = (--player.effects.shield) > 0 ? 7 : 0;

        if (player.effects.poison > 0) {
            boss.hp -= 3;
            player.effects.poison--;
        }

        if (player.effects.recharge > 0) {
            player.mana += 101;
            player.effects.recharge--;
        }

        if (boss.hp <= 0) {
            if (player.used_mana < lowest_mana_cost) lowest_mana_cost = player.used_mana;
            return;
        }

        if (player.used_mana + spell_cost[spell] > lowest_mana_cost) return;
        player.used_mana += spell_cost[spell];
        player.mana -= spell_cost[spell];

        switch (spell) {
            case "magic_missile":
                {
                    boss.hp -= 4;
                    break;
                }
            case "drain":
                {
                    player.hp += 2;
                    boss.hp -= 2;
                    break;
                }
            case "shield":
                {
                    player.effects.shield = 6;
                    break;
                }
            case "poison":
                {
                    player.effects.poison = 6;
                    break;
                }
            case "recharge":
                {
                    player.effects.recharge = 5;
                    break;
                }
        }

        if (player.mana < 0) return;

        if (boss.hp <= 0) {
            if (player.used_mana < lowest_mana_cost) lowest_mana_cost = player.used_mana;
            return;
        }

        player.armor = (--player.effects.shield) > 0 ? 7 : 0;

        if (player.effects.poison > 0) {
            boss.hp -= 3;
            player.effects.poison--;
        }

        if (player.effects.recharge > 0) {
            player.mana += 101;
            player.effects.recharge--;
        }

        if (boss.hp <= 0) {
            if (player.used_mana < lowest_mana_cost) lowest_mana_cost = player.used_mana;
            return;
        }

        player.hp -= Math.max(1, boss.damage - player.armor);
        if (player.hp <= 0) return;

        fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "magic_missile");
        fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "drain");

        if (player.effects.shield < 2) fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "shield");
        if (player.effects.poison < 2) fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "poison");
        if (player.effects.recharge < 2) fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "recharge");
    }

    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "magic_missile", 0);
    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "drain", 0);
    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "shield", 0);
    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "poison", 0);
    fight(JSON.parse(JSON.stringify(player)), JSON.parse(JSON.stringify(boss)), "recharge", 0);

    return lowest_mana_cost;
}
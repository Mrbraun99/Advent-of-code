export function part1(input) {
    let max_distance = -Infinity;

    for (const line of input) {
        const [speed, fly, rest] = line.match(/\b\d+\b/g).map(v => parseInt(v));

        const distance = Math.floor(2503 / (fly + rest)) * (speed * fly) + (Math.min(2503 % (fly + rest), fly) * speed);
        max_distance = max(max_distance, distance);
    }

    return max_distance;
}

export function part2(input) {
    let reindeers = [];

    for (const line of input) {
        const [speed, fly, rest] = line.match(/\b\d+\b/g).map(v => parseInt(v));
        reindeers.push({ "speed": speed, "fly": fly, "rest": rest, "distance": 0, "score": 0 });
    }

    for (let i = 0; i < 2503; i++) {
        for (const reindeer of reindeers) {
            if (i % (reindeer.fly + reindeer.rest) < reindeer.fly) reindeer.distance += reindeer.speed;
        }

        let max_distance = Math.max(...reindeers.map(reindeer => reindeer.distance));
        for (const reindeer of reindeers.filter(reindeer => reindeer.distance == max_distance)) reindeer.score++;
    }

    return Math.max(...reindeers.map(reindeer => reindeer.score));
}
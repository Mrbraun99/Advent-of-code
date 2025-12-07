export function part1(input) {
    let sum = 0;

    for (const line of input) {
        const match = line.match(/^([a-z\-]+)-(\d+)\[([^\]]+)\]$/);

        const frequency = {};
        for (const char of match[1].replace(/-/g, "")) {
            if (!frequency[char]) frequency[char] = 0;
            frequency[char]++;
        }

        if (Object.entries(frequency).sort((a, b) => (b[1] == a[1]) ? a[0].localeCompare(b[0]) : b[1] - a[1]).slice(0, 5).map(([char]) => char).join('') == match[3]) {
            sum += parseInt(match[2]);
        }
    }

    return sum;
}

export function part2(input) {
    for (const line of input) {
        const match = line.match(/^([a-z\-]+)-(\d+)\[([^\]]+)\]$/);

        const decrypted_str = [...match[1].replace(/-/g, "")].map(char => String.fromCharCode((((char.charCodeAt(0) - 97) + (parseInt(match[2]) % 26)) % 26) + 97)).join('');
        if (decrypted_str.includes("north")) return match[2];
    }
}
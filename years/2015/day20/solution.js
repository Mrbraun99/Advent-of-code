export function part1(input) {
    function getDivisors(n) {
        const divisors = [];

        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push(i);
                if (n / i != i) divisors.push(n / i);
            }
        }

        return divisors;
    }

    for (let i = 0; ; i++) {
        if (getDivisors(i).reduce((acc, value) => acc + value, 0) >= input[0] / 10) return i;
    }
}

export function part2(input) {
    function getDivisors(n) {
        const divisors = [];

        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                divisors.push(i);
                if (n / i != i) divisors.push(n / i);
            }
        }

        return divisors;
    }

    const divisor_counts = {};

    for (let i = 0; ; i++) {
        const divisors = getDivisors(i);

        if (divisors.filter(divisor => (divisor_counts[divisor] ?? 0) < 50).reduce((acc, value) => acc + value, 0) >= input[0] / 11) return i;
        for (const div of divisors) divisor_counts[div] = (divisor_counts[div] ?? 0) + 1;
    }
}
export function part1(input) {
    let nice_string_count = 0;

    loop: for (const line of input) {
        let vowel_count = 0;
        let double_letter_count = 0;

        for (let i = 0; i < line.length; i++) {
            if (i < line.length - 1 && ['ab', 'cd', 'pq', 'xy'].includes(line[i] + line[i + 1])) continue loop;

            if (['a', 'e', 'i', 'o', 'u'].includes(line[i])) vowel_count++;
            if (i < line.length - 1 && line[i] == line[i + 1]) double_letter_count++;
        }

        if (vowel_count >= 3 && double_letter_count >= 1) nice_string_count++;
    }

    return nice_string_count;
}

export function part2(input) {
    let nice_string_count = 0;

    for (const line of input) {
        for (let i = 0; i < line.length - 1; i++) {
            if ((line.match(new RegExp(line[i] + line[i + 1], 'g'), '') || []).length >= 2) {
                if (/([a-z]).\1/.test(line)) nice_string_count++;
                break;
            }
        }
    }

    return nice_string_count;
}
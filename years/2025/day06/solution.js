export function part1(input) {
    const problems = AocInput.VERTICAL_LINES(input, /\s+/);

    let sum = 0;
    for (const problem of problems) {
        switch (problem[4]) {
            case "+":
                {
                    sum += problem.slice(0, 4).map(Number).reduce((acc, value) => acc + value, 0);
                    break;
                }
            case "*":
                {
                    sum += problem.slice(0, 4).map(Number).reduce((acc, value) => acc * value, 1);
                    break;
                }
        }
    }

    return sum;
}

export function part2(input) {
    const operators = input[4].split(/\s+/);
    let operator_index = 0;
    let numbers = [];

    let sum = 0;
    for (let i = 0; i < input[0].length; i++) {
        if (input[0][i] == " " && input[1][i] == " " && input[2][i] == " " && input[3][i] == " ") {
            switch (operators[operator_index]) {
                case "+":
                    {
                        sum += numbers.reduce((acc, value) => acc + value, 0);
                        break;
                    }
                case "*":
                    {
                        sum += numbers.reduce((acc, value) => acc * value, 1);
                        break;
                    }
            }

            numbers = [];
            operator_index++;
            continue;
        }

        numbers.push(parseInt(input[0][i] + input[1][i] + input[2][i] + input[3][i]));
    }

    switch (operators[operator_index]) {
        case "+":
            {
                sum += numbers.reduce((acc, value) => acc + value, 0);
                break;
            }
        case "*":
            {
                sum += numbers.reduce((acc, value) => acc * value, 1);
                break;
            }
    }

    return sum;
}
export function part1(input) {
    let largest_area = -Infinity;
    const vertices = [];

    for (const line of input) {
        const [x, y] = line.split(",").map(Number);
        vertices.push({ x: x, y: y });
    }

    for (let i = 0; i < vertices.length - 1; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
            const area = (Math.abs(vertices[i].x - vertices[j].x) + 1) * (Math.abs(vertices[i].y - vertices[j].y) + 1);

            if (area > largest_area) {
                largest_area = area;
            }
        }
    }

    return largest_area;
}

export function part2(input) {
    function isPointInsidePolygon(point, vertices) {
        let inside = false;

        for (let i = 0, j = vertices.length - 1; i < vertices.length; j = i++) {
            if (vertices[i].y == vertices[j].y) {
                if (point.y === vertices[i].y && point.x >= Math.min(vertices[i].x, vertices[j].x) && point.x <= Math.max(vertices[i].x, vertices[j].x)) {
                    return true;
                }
            }

            if (vertices[i].x == vertices[j].x) {
                if (point.x === vertices[i].x && point.y >= Math.min(vertices[i].y, vertices[j].y) && point.y <= Math.max(vertices[i].y, vertices[j].y)) {
                    return true;
                }
            }

            const intersects = (vertices[i].y > point.y) !== (vertices[j].y > point.y) && point.x < vertices[i].x;

            if (intersects) inside = !inside;
        }

        return inside;
    }

    let largest_area = -Infinity;
    const vertices = [];

    for (const line of input) {
        const [x, y] = line.split(",").map(Number);
        vertices.push({ x: x, y: y });
    }


    const lines = { "vertical": [], "horizontal": [] };
    for (let i = 0; i < vertices.length - 1; i++) {
        if (vertices[i].x == vertices[i + 1].x) {
            lines.vertical.push({ "p1": { x: vertices[i].x, y: vertices[i].y }, "p2": { x: vertices[i + 1].x, y: vertices[i + 1].y } });
        } else {
            lines.horizontal.push({ "p1": { x: vertices[i].x, y: vertices[i].y }, "p2": { x: vertices[i + 1].x, y: vertices[i + 1].y } });
        }
    }

    for (let i = 0; i < vertices.length - 1; i++) {
        for (let j = i + 1; j < vertices.length; j++) {
            const area = (Math.abs(vertices[i].x - vertices[j].x) + 1) * (Math.abs(vertices[i].y - vertices[j].y) + 1);

            if (area > largest_area) {
                if (!isPointInsidePolygon(vertices[i], vertices)) continue;
                if (!isPointInsidePolygon(vertices[j], vertices)) continue;

                if (lines.vertical.some(function (line) {
                    if (Math.min(vertices[i].x, vertices[j].x) < line.p1.x && line.p1.x < Math.max(vertices[i].x, vertices[j].x)) {
                        if (Math.max(line.p1.y, line.p2.y) > Math.min(vertices[i].y, vertices[j].y) && Math.min(line.p1.y, line.p2.y) < Math.max(vertices[i].y, vertices[j].y)) return true;
                    }

                    return false;
                })) continue;

                if (lines.horizontal.some(function (line) {
                    if (Math.min(vertices[i].y, vertices[j].y) < line.p1.y && line.p1.y < Math.max(vertices[i].y, vertices[j].y)) {
                        if (Math.max(line.p1.x, line.p2.x) > Math.min(vertices[i].x, vertices[j].x) && Math.min(line.p1.x, line.p2.x) < Math.max(vertices[i].x, vertices[j].x)) return true;
                    }

                    return false;
                })) continue;

                largest_area = area;
            }
        }
    }

    return largest_area;
}
export function part1(input) {
    const graph = {};

    for (const line of input) {
        const [src, neighbours] = line.split(": ");
        graph[src] = { "paths": 0, "indegree": 0, "predecessors": [], "successors": neighbours.split(" ") };
    }

    graph["out"] = { "paths": 0, "indegree": 0, "predecessors": [], "successors": [] };


    for (const line of input) {
        const [src, successors] = line.split(": ");

        for (const successor of successors.split(" ")) {
            graph[successor].predecessors.push(src);
            graph[successor].indegree++;
        }
    }

    const topological_order = [];
    const queue = [];

    for (const [name, node] of Object.entries(graph)) {
        if (node.indegree == 0) {
            queue.push(name);
        }
    }

    while (queue.length > 0) {
        const node = queue.shift();

        topological_order.push(node);
        for (const successor of graph[node].successors) {
            graph[successor].indegree--;

            if (graph[successor].indegree == 0) {
                queue.push(successor);
            }
        }
    }

    graph["you"].paths = 1;
    for (const node_name of topological_order.slice(topological_order.indexOf("you") + 1)) {
        graph[node_name].paths = Aoc.sum(graph[node_name].predecessors.map(predecessor => graph[predecessor].paths));
    }

    return graph["out"].paths;
}

export function part2(input) {
    const graph = {};

    for (const line of input) {
        const [src, neighbours] = line.split(": ");
        graph[src] = { "paths": 0, "indegree": 0, "predecessors": [], "successors": neighbours.split(" ") };
    }

    graph["out"] = { "paths": 0, "indegree": 0, "predecessors": [], "successors": [] };

    for (const line of input) {
        const [src, successors] = line.split(": ");

        for (const successor of successors.split(" ")) {
            graph[successor].predecessors.push(src);
            graph[successor].indegree++;
        }
    }

    const topological_order = [];
    const queue = [];

    for (const [name, node] of Object.entries(graph)) {
        if (node.indegree == 0) {
            queue.push(name);
        }
    }

    while (queue.length > 0) {
        const node = queue.shift();

        topological_order.push(node);
        for (const successor of graph[node].successors) {
            graph[successor].indegree--;

            if (graph[successor].indegree == 0) {
                queue.push(successor);
            }
        }
    }

    graph["svr"].paths = 1;
    for (const node_name of topological_order.slice(topological_order.indexOf("svr") + 1)) {
        graph[node_name].paths = Aoc.sum(graph[node_name].predecessors.map(predecessor => graph[predecessor].paths));

        if (node_name == "fft" || node_name == "dac") {
            for (const [name, node] of Object.entries(graph)) {
                if (node_name == name) continue;

                node.paths = 0;
            }
        }
    }

    return graph["out"].paths;
}
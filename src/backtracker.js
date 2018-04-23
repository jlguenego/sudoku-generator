module.exports = function backtracker(config) {
    const solutions = [];
    const solution = config.getSolutionStructure();

    let iterationId = 0;

    let i = 0;

    let universe = config.universe;
    let universeCopy = JSON.parse(JSON.stringify(config.universe));
    while (true) {
        iterationId++;
        if (config.maxIteration > 0 && iterationId > config.maxIteration) {
            throw new Error('maxIteration reached.');
        }
        if (i === -1) {
            if (config.strategy === 'find-all') {
                break;
            }
            throw new Error('it seems that the backtracking cannot find a solution.');
        }

        const possibilities = config.getPossibilities(universe, i);

        if (possibilities.length === 0) {
            config.resetSolution(solution, i);
            config.resetPossibilities(possibilities, i, universeCopy);
            i--;
            continue;
        }

        let n = config.pop(possibilities);
        config.setSolution(solution, i, n);

        const status = config.checkSolution(solution, i);
        if (status) {
            i++;
        } else {
            continue;
        }
        if (i === config.length) {
            if (config.strategy === 'find-first') {
                break;
            }
            if (config.strategy === 'find-all') {
                const s = JSON.parse(JSON.stringify(solution));
                solutions.push(s);
                if (solutions.length >= config.max) {
                    break;
                }
                i--;
                continue;
            }

        }
    }
    if (config.strategy === 'find-first') {
        return solution;
    }
    if (config.strategy === 'find-all') {
        return solutions;
    }
}
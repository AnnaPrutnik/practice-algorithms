const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

//find the shortest way from dot 'start' to dot 'end'

function breadthSearch(graph, start, end) {
  const results = [];
  let way = [];
  way.push(start);
  const nextPositions = graph[start];

  const functionForTheNextPosition = (currentWay, nextStep) => {
    if (!nextStep) {
      return;
    }
    for (let i = 0; i < nextStep.length; i++) {
      currentWay.push(nextStep[i]);
      if (nextStep[i] === end) {
        results.push([...currentWay]);
      } else {
        const next = graph[nextStep[i]];
        functionForTheNextPosition(currentWay, next);
      }
      currentWay.pop();
    }
  };

  functionForTheNextPosition(way, nextPositions);
  if (results.length === 0) {
    return `there no way from dot ${start} to dot ${end}`;
  }
  if (results.length === 1) {
    return `the shortest way from dot ${start} to dot ${end}: ${results[0]}`;
  }

  let shortestWay = [results[0].length, results[0]];
  for (let i = 1; i < results.length; i++) {
    if (shortestWay[0] > results[i].length) {
      shortestWay = [results[i].length, results[i]];
    }
  }

  return `the shortest way from dot ${start} to dot ${end}: ${shortestWay[1]}`;
}

console.log(breadthSearch(graph, 'a', 'g'));

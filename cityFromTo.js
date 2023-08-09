function order(cityNodes, cityFrom, cityTo, company) {
  let edges = [];
  for (let i = 0; i < cityFrom.length; i++) {
      if (!edges[cityFrom[i]]) {
          edges[cityFrom[i]] = [];
      }
      if (!edges[cityTo[i]]) {
          edges[cityTo[i]] = [];
      }
      edges[cityFrom[i]].push(cityTo[i]);
      edges[cityTo[i]].push(cityFrom[i]);
  }

  const result = [];

  const queue = [];
  queue.push(company);

  const used = new Array(cityNodes).fill(false);
  used[company] = true;

  const city_depth = new Array(cityNodes).fill(0);

  while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);
      const cityList = edges[current];
      for (let i = 0; i < cityList.length; i++) {
          if (!used[cityList[i]]) {
              used[cityList[i]] = true;
              city_depth[cityList[i]] = city_depth[current] + 1;
              queue.push(cityList[i]);
          }
      }
  }

  result.sort((a, b) => {
      if (city_depth[a] !== city_depth[b]) {
          return city_depth[a] - city_depth[b];
      }
      return a - b;
  });
  result.shift();
  return result;
}
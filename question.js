function getStaleServerCount(n, log_data, query, X) {
  // Write your code here
  query = query.map(i => [i - X, i]);
  let result = [];
  
  for (let i = 0; i < query.length; i++) {
      const left = query[i][0];
      const right = query[i][1];
      let pods = query.length;
      let used = new Array(n + 1).fill(false);
      for (let j = 0; j < log_data.length; j++) {
          const time = log_data[j][1]
          const pod = log_data[j][0]
          if (left <= time && time <= right) {
              if (!used[pod]) {
                  pods--
                  used[pod] = true
              } else {
                  continue;
              }
          } else {
              continue;
          }
      }
      result.push(pods);
  }
  
  return result;
}

getStaleServerCount()
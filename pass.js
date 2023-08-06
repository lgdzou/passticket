function getTimes(time, direction) {
	// Write your code here

	function updateTimes(slow) {
		let slowIndex = slow
		let slowVal = time[slow]
		while (time[slowIndex] === slowVal) {
			time[slowIndex] = slowVal + 1
			slowIndex++
		}
	}

	let result = new Array(direction.length).fill(undefined);
	let status = 1;

	let slow = 0,
		fast = 1;
	while (slow < direction.length) {
		if (result[slow] !== undefined) {
			slow++
			continue;
		}
		if (time[slow] === time[fast]) {
			if (direction[slow] === status) {
				result[slow] = time[slow]
				status = direction[slow]
				updateTimes(slow)
				slow++
			}
			if (direction[fast] === status) {
				result[fast] = time[fast]
				status = direction[fast]
				updateTimes(slow)
			}
			fast++
		} else {
			result[slow] = time[slow];
			status = direction[slow];
			updateTimes(slow)
			slow++
			fast++
		}
	}

	return result;
}



console.log(getTimes([0, 1, 1, 3, 3], [0, 1, 0, 0, 1]))

console.log(getTimes([3, 3, 3, 4, 4, 5, 6, 6, 7, 8],
	[1, 1, 0, 1, 0, 0, 0, 1, 0, 0]))

// [3, 4, 7, 5, 8, 9, 10, 6, 11, 12]
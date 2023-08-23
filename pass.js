// function getTimes(time, direction) {
// 	// Write your code here

// 	function updateTimes(slow) {
// 		let slowIndex = slow
// 		let slowVal = time[slow]
// 		while (time[slowIndex] === slowVal) {
// 			time[slowIndex] = slowVal + 1
// 			slowIndex++
// 		}
// 	}

// 	let result = new Array(direction.length).fill(undefined);
// 	let status = 1;

// 	let slow = 0,
// 		fast = 1;
// 	while (slow < direction.length) {
// 		if (result[slow] !== undefined) {
// 			slow++
// 			continue;
// 		}
// 		if (time[slow] === time[fast]) {
// 			if (direction[slow] === status) {
// 				result[slow] = time[slow]
// 				status = direction[slow]
// 				updateTimes(slow)
// 				slow++
// 			}
// 			if (direction[fast] === status) {
// 				result[fast] = time[fast]
// 				status = direction[fast]
// 				updateTimes(slow)
// 			}
// 			fast++
// 		} else {
// 			result[slow] = time[slow];
// 			status = direction[slow];
// 			updateTimes(slow)
// 			slow++
// 			fast++
// 		}
// 	}

// 	return result;
// }

function getTimes(time, direction) { 
	let inQueue = [];
	let outQueue = [];
	let result = new Array(time.length);

	for (let i = 0; i < direction.length; i++) { 
		let item = {
			time: time[i],
			index: i
		}
		if (direction[i] === 0) {
			inQueue.push(item)
		} else { 
			outQueue.push(item)
		}
	}

	let current = 0;
	let status = 1;
	while (inQueue.length !== 0 && outQueue.length !== 0) { 
		const inFirst = inQueue[0]
		const outFirst = outQueue[0]

		if (current < inFirst.time && current < outFirst.time) {
			current = Math.min(inFirst.time, outFirst.time)
			status = 1
		}
		if (outFirst.time < inFirst.time && current < inFirst.time) {
			result[outFirst.index] = current
			outQueue.shift()
			status = 1
		} else if (outFirst.time > inFirst.time && current < outFirst.time) {
			result[inFirst.index] = current
			inQueue.shift()
			status = 0
		} else { 
			if (status === 1) { 
				result[outFirst.index] = current
				outQueue.shift()
				status = 1
			} else {
				result[inFirst.index] = current
				inQueue.shift()
				status = 0
			}
		}
		current++
	}

	if (inQueue.length !== 0) { 
		inQueue.forEach(item => { 
			result[item.index] = current++
		})
	}

	if (outQueue.length !== 0) { 
		outQueue.forEach(item => { 
			result[item.index] = current++
		})
	}

	return result;
}


console.log(getTimes([0, 1, 1, 3, 3], [0, 1, 0, 0, 1]))

console.log(getTimes([3, 3, 3, 4, 4, 5, 6, 6, 7, 8],
	[1, 1, 0, 1, 0, 0, 0, 1, 0, 0]))

// [3, 4, 7, 5, 8, 9, 10, 6, 11, 12]
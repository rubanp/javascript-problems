function isFactor(target, n1, n2) {

	function branch(current, history) {
		if (current === target)	{
			return history;
		}
		if (current > target) {
			return null;
		}
		return branch(current + n1, (`${history} + ${n1}`)) || branch(current + n2, (`${history} + ${n2}`));
	}

	return branch(0, '0') || "not possible";
}

console.log(isFactor(11, 3, 7));

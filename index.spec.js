const groupBy = require("./index.js");

test('groups up via function being passed', () => {
	const ben = {		age: 30,	name: "Ben",	};
	const brian = {	age: 30,	name: "Brian",	};
	const megan = {	age: 32,	name: "Megan",	};
	expect([ ben, brian, megan ].reduce(groupBy(({age}) => age))).toEqual({
		30: [ben, brian],
		32: [megan],
	});
});

test('groups up via function being passed', () => {
	const ben = {		age: 30,	name: "Ben",	};
	const brian = {	age: 30,	name: "Brian",	};
	const megan = {	age: 32,	name: "Megan",	};
	expect([ ben, brian, megan ].reduce(groupBy("age"))).toEqual({
		30: [ben, brian],
		32: [megan],
	});
});
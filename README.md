# group-by
library for grouping json objects, this is some functionality i use on servers to help sort things into groups when needed.

using reduce this function will group items you have either by name, or by passing a function.

install:

   npm install grouping-by

Usage:

	expect([ ben, brian, megan ].reduce(groupBy(({age}) => age))).toEqual({
		30: [ben, brian],
		32: [megan],
	});

	expect([ ben, brian, megan ].reduce(groupBy("age"))).toEqual({
		30: [ben, brian],
		32: [megan],
	});

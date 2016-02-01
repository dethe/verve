var current_level;



var levels = [
	{
		shapes: [
			['rpolygon', -150, -150, 25, 20],
			['crescent', -150, -75, 25, 20],
			['asterisk', -150, 0, 25, 5],
			['asterisk', -150, 75, 25, 6],
			['asterisk', -150, 150, 25, 8],

			['rpolygon', -75, -150, 25, 3],
			['rpolygon', -75, -75, 25, 4],
			['rpolygon', -75, 0, 25, 5],
			['rpolygon', -75, 75, 25, 6],
			['star', -75, 150, 25, 5],

			['star', 0, -150, 25, 7],
			['spiral', 0, -75, 25, 500, 3],
			['spiral', 0, 0, 25, 20, .75],
			['polyplus', 0, 75, 25, 20],
			['polyminus', 0, 150, 25, 20],

			['line', 75, -150, 27, 27],
			['line', 75, -75, 27, 0],
			['line', 75, 0, 27, -27],
			['line', 75, 75, 0, 27],
            ['coffin', 75, 150, 25],

		],
		
		pitches: [7, 1, 3]
	},
	{
		shapes: [
			['asterisk', -75, 0, 25, 8],
			['asterisk', -75, 0, 25, 8],
			['line', -25, 0, 100, 0],
			['line', -25, 0, 100, 0],
			['line', -25, 0, 100, 50],
			['spiral', 0, -75, 25, 500, 3],
			['spiral', 0, -75, 25, 500, 3],
			['line', -25, 0, 100, 50],
		],
		pitches: [7, 1]
	},
]

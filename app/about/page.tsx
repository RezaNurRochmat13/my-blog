'use client';

import { useState } from 'react';

export default function About() {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			About page is works
			<button onClick={() => setCounter(counter + 1)}>Counter</button>
			Counter : {counter}
		</div>
	);
}

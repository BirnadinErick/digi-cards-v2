type DequeT = {
	id: number;
	owner: string;
	created_on: string;
	title: string;
	category: string;
	difficulty: number;
	time: number;
	sidenote: string;
};

type CardT = {
	id: number;
	question: string;
	score: number;
	deque: number;
	answers: string;
};

export type { DequeT, CardT };

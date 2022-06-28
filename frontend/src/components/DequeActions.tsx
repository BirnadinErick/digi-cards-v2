import { Component } from 'solid-js';

const ActionButton: Component<{
	styles: Array<string>;
	text: string;
	onClick: Function;
}> = (props) => {
	return (
		<div
			class={`deque-action-btn hover:font-bold ${props.styles.join(' ')}`}
			onclick={() => {
				props.onClick();
			}}
		>
			<p>{props.text}</p>
		</div>
	);
};

export default ActionButton;

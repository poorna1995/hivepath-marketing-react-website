import React from "react";

const CheckIcon = ({ ...props }) => {
	return (
		<svg
			width="13"
			height="10"
			viewBox="0 0 13 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M1 5L4.66667 9L12 1"
				stroke="#333333"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default CheckIcon;

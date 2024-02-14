import React from "react";

const ErrorIcon = (props) => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M20 10C20 15.5228 15.5228 20 10 20C4.47716 20 0 15.5228 0 10C0 4.47716 4.47716 0 10 0C15.5228 0 20 4.47716 20 10ZM11.3333 14.6667C11.3333 15.403 10.7364 16 10 16C9.26362 16 8.66667 15.403 8.66667 14.6667C8.66667 13.9303 9.26362 13.3333 10 13.3333C10.7364 13.3333 11.3333 13.9303 11.3333 14.6667ZM10 3.11111C9.26362 3.11111 8.66667 3.70807 8.66667 4.44444V11.1111C8.66667 11.8475 9.26362 12.4444 10 12.4444C10.7364 12.4444 11.3333 11.8475 11.3333 11.1111V4.44444C11.3333 3.70807 10.7364 3.11111 10 3.11111Z"
				fill="url(#paint0_linear_4876_1700)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_4876_1700"
					x1="1.5"
					y1="1.5"
					x2="15.5"
					y2="20"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#E90303" />
					<stop offset="1" stop-color="#F37D7D" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default ErrorIcon;

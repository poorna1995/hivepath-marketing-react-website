import React from "react";

const SocialMediaIcon = (props) => {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
            {...props}
		>
			<path
				opacity="0.4"
				d="M14.375 26.25C20.9334 26.25 26.25 20.9334 26.25 14.375C26.25 7.81662 20.9334 2.5 14.375 2.5C7.81662 2.5 2.5 7.81662 2.5 14.375C2.5 20.9334 7.81662 26.25 14.375 26.25Z"
				fill="url(#paint0_linear_3819_1493)"
			/>
			<path
				d="M26.2001 22.3001L24.1626 22.9876C23.6001 23.1751 23.1501 23.6126 22.9626 24.1876L22.2751 26.2251C21.6876 27.9876 19.2126 27.9501 18.6626 26.1876L16.3501 18.7501C15.9001 17.2751 17.2626 15.9001 18.7251 16.3626L26.1751 18.6751C27.9251 19.2251 27.9501 21.7126 26.2001 22.3001Z"
				fill="url(#paint1_linear_3819_1493)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_3819_1493"
					x1="2.5"
					y1="14.375"
					x2="26.25"
					y2="14.375"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#E65C00" />
					<stop offset="1" stop-color="#F9D423" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_3819_1493"
					x1="16.2627"
					y1="21.8999"
					x2="27.5002"
					y2="21.8999"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#E65C00" />
					<stop offset="1" stop-color="#F9D423" />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default SocialMediaIcon;

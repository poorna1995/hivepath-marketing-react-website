import React from "react";

const CloseIcon = (props) => {
	return (
		<svg
			width="9"
			height="9"
			viewBox="0 0 9 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M8.42518 8.50935C8.11741 8.8172 7.60767 8.8172 7.2999 8.50935L4.328 5.53674L1.36573 8.50935C1.05796 8.8172 0.548214 8.8172 0.240445 8.50935C-0.0673245 8.20151 -0.0673245 7.69164 0.240445 7.3838L3.20272 4.41119L0.230827 1.4482C-0.0769423 1.14036 -0.0769423 0.630493 0.230827 0.322651C0.384711 0.168729 0.586685 0.0917683 0.798276 0.0917683C1.00987 0.0917683 1.21184 0.168729 1.36573 0.322651L4.328 3.28564L7.29028 0.322651C7.44416 0.168729 7.64614 0.0917683 7.85773 0.0917683C8.0597 0.0917683 8.27129 0.168729 8.42518 0.322651C8.73295 0.630493 8.73295 1.14036 8.42518 1.4482L5.45328 4.41119L8.41556 7.37418C8.73295 7.69164 8.73295 8.19189 8.42518 8.50935Z"
				fill="#333333"
			/>
		</svg>
	);
};

export default CloseIcon;

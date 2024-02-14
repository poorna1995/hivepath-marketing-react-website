import React from "react";
import GradientText from "../GradientText";

const HeadingGradientTypography = ({ title, gradient }) => {
	return (
		<GradientText
			gradient={
				gradient ||
				`linear-gradient(92.61deg, #696EFF 6.52%, #F289FC 108.02%)`
			}
			style={{
				fontSize: "52px",
				fontWeight: "800",
				lineHeight: "80px",
			}}
		>
			{title}
		</GradientText>
	);
};

export default HeadingGradientTypography;

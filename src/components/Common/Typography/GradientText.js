import { Typography } from "@mui/material";
import React from "react";

const GradientText = ({ gradient, children, ...props }) => {
	const { sx } = props;
	return (
		<Typography
			sx={{
				width: "auto",
				backgroundColor: "rgba(24, 61, 255, 1)",
				display: "inline-block",
				backgroundImage:
					gradient ||
					`linear-gradient(92.61deg, #696EFF 6.52%, #F289FC 108.02%)`,
				backgroundClip: "text",
				WebkitBackgroundClip: "text",

				WebkitTextFillColor: "transparent",
				backgroundRepeat: "repeat",
				MozBackgroundClip: "text",
				MozTextFillColor: "transparent",
				// ...sx,
			}}
			{...props}
		>
			{children}
		</Typography>
	);
};

export default GradientText;

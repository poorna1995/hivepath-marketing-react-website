import { Typography } from "@mui/material";
import React from "react";

const SectionHeading = ({ content, color, fontSize, fontWeight }) => {
	return (
		<Typography
			sx={{
				fontSize: fontSize || "52px",
				fontWeight: fontWeight || "800",
				lineHeight: "80px",
				color: color || "#364358",
			}}
		>
			{content}
		</Typography>
	);
};

export default SectionHeading;

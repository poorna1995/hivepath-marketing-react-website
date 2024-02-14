import { Typography } from "@mui/material";
import React from "react";
import BookIcon from "../../../svg-files/Components/HomepageIcons/BookIcon";

const TextSlideAnimation = () => {
	return (
		<div
			style={{
				background: "white",
				padding: "24px",
				borderRadius: "20px",
				display: "flex",
				alignItems: "center",
			}}
		>
			<BookIcon />
			<Typography
				sx={{
					fontWeight: 600,
					fontSize: "22px",
					lineHeight: "26px",

					color: "#222222",
					paddingLeft: "16px",
				}}
			>
				Take the first step & claim your username.
			</Typography>
		</div>
	);
};

export default TextSlideAnimation;

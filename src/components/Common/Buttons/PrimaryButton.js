import React from "react";
import { Button, useTheme } from "@mui/material";

const PrimaryButton = ({ title, ...props }) => {
	const theme = useTheme();
	// console.log(theme);
	return (
		<Button
			disableElevation
			disableRipple
			sx={{
				textTransform: "initial",
				bgcolor: theme.palette.primary.main,
				height: "70px",
				// width: "220px",
				borderRadius: "15px",
				fontSize: " 24px",
				lineHeight: "29px",
				fontWeight: 600,
				paddingLeft: "32px",
				paddingRight: "32px",
				"&:hover": {
					bgcolor: theme.palette.primary.main,
				},
			}}
			{...props}
			variant="contained"
		>
			{title || "Become a Host"}
		</Button>
	);
};

export default PrimaryButton;

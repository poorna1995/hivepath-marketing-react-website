import React from "react";
import { Button, useTheme } from "@mui/material";

const SecondaryButton = ({ title, ...props }) => {
	const theme = useTheme();
	return (
		<Button
			disableElevation
			disableRipple
			sx={{
				textTransform: "initial",
				bgcolor: "rgba(72, 74, 158, 0.1)",
				height: "50px",
				// width: "220px",
				borderRadius: "10px",
				paddingLeft: "32px",
				paddingRight: "32px",
				fontWeight: 600,
				fontSize: "18px",
				lineHeight: "160%",

				color: "black",
				"&:hover": {
					bgcolor: "rgba(72, 74, 158, 0.1)",
				},
			}}
			{...props}
			variant="contained"
		>
			{title}
		</Button>
	);
};

export default SecondaryButton;

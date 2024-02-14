import React from "react";
import BriefcaseIcon from "../../../svg-files/Components/BriefcaseIcon";
import { Typography } from "@mui/material";

const ContactInfoCard = ({ icon, title, divider, cardStyles }) => {
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flex: 1,
				...cardStyles,
			}}
		>
			{icon || (
				<BriefcaseIcon
					style={{
						marginTop: "4px",
						marginRight: "5px",
						width: "40px",
						height: "40px",
					}}
				/>
			)}

			<div>
				<Typography
					style={{
						fontWeight: 500,
						fontSize: "21px",
					}}
				>
					{title || "Student"}
				</Typography>
			</div>
		</div>
	);
};

export default ContactInfoCard;

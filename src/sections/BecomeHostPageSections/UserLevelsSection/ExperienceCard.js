import { Typography } from "@mui/material";
import React from "react";
import BriefcaseIcon from "../../../svg-files/Components/BriefcaseIcon";
import CheckIcon from "../../../svg-files/Components/CheckIcon";

const ExperienceCard = ({ icon, title, list }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "flex-start",
				marginTop: "16px",
				marginBottom: "16px",
				flex: 1,
			}}
		>
			{icon || (
				<BriefcaseIcon
					style={{
						flex: "0.1",
						marginTop: "4px",
					}}
				/>
			)}

			<div
				style={{
					flex: "0.3",
				}}
			>
				<Typography
					style={{
						fontWeight: 700,
						fontSize: "34px",
					}}
				>
					{title || "Student"}
				</Typography>
			</div>
			<div
				style={{
					flex: "0.6",
				}}
			>
				{list.map((item) => (
					<div style={{ display: "flex", alignItems: "flex-start" }}>
						<CheckIcon
							style={{
								minHeight: "20px",
								minWidth: "20px",
								marginRight: "16px",
								maxWidth: "20px",
								maxHeight: "20px",
								marginTop: "4px",
							}}
						/>{" "}
						<Typography
							style={{
								fontSize: "21px",
								lineHeight: "30px",
								fontWeight: "600",
								paddingBottom: "32px",
							}}
						>
							{item.title ||
								" Academics, achievements & student life."}
						</Typography>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExperienceCard;

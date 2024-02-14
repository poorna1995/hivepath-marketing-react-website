import { Chip, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "../../../components/Common/Buttons/PrimaryButton";
import BriefcaseIcon from "../../../svg-files/Components/BriefcaseIcon";

const StepCardTextContainer = ({
	number,
	title,
	description,
	data = [],
	chipData = [],
}) => {
	// const data = [1, 2, 3];
	return (
		<div>
			{" "}
			<Typography
				style={{
					fontSize: "52px",
					fontWeight: 700,
				}}
			>
				{number}
			</Typography>
			<Typography
				style={{
					fontSize: "36px",
					fontWeight: 700,
					color: "#364358",
				}}
			>
				{title}
			</Typography>
			<Typography
				style={{
					fontSize: "18px",
					fontWeight: "23px",
				}}
			>
				{description}
			</Typography>
			{data.length > 0 &&
				data.map((item) => (
					<div
						style={{
							marginTop: "16px",
							marginBottom: "16px",
						}}
					>
						<Stack direction={"row"} alignItems="center">
							{item.icon && item.icon}
							<Typography
								style={{
									fontSize: "24px",
									fontWeight: "700",
									lineHeight: "29px",
									paddingLeft: "16px",
									color:'#364358'
								}}
							>
								{item.title}
							</Typography>
						</Stack>
						<Typography
							style={{
								fontSize: "18px",
								fontWeight: "400",
								lineHeight: "32px",
							}}
						>
							{item.description}
						</Typography>
					</div>
				))}
			<Grid container spacing={2} paddingTop="32px" paddingBottom="32px">
				{chipData.length > 0 &&
					chipData.map((item) => (
						<Grid
							item
							xs={6}
							label={item.title}
							icon={item.icon}
							style={{
								// height: "66px",
								// width: "220px",
								// display: "flex",
								// alignItems: "center",
								// justifyContent: "flex-start",
								padding: "16px",
							}}
						>
							<Stack
								direction={"row"}
								sx={{
									background: "rgba(255, 255, 255, 0.8)",
									padding: "16px",
									borderRadius: "10px",
								}}
							>
								{item.icon}{" "}
								<Typography
									style={{
										fontSize: "21px",
										lineHeight: "25px",
										fontWeight: 700,
										paddingLeft: "16px",
									}}
								>
									{item.title}
								</Typography>
							</Stack>
						</Grid>
					))}
			</Grid>
			<PrimaryButton />
		</div>
	);
};

export default StepCardTextContainer;

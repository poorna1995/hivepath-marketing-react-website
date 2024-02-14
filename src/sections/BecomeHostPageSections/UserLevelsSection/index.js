import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import ContentWithBackgroundImageGrid from "../../../components/Common/ContentWithBackgroundImage/ContentWithBackgroundImageGrid";
import ExperiencesCardList from "./ExperiencesCardList";
import UserLevelTitle from "./UserLevelTitle";

const UserLevelsSection = () => {
	const [show, setShow] = useState(false);

	const handleClick = () => {
		setShow(!show);
	};
	return (
		<ContentWithBackgroundImageGrid
			bgImageFileName={`become-host/3rdSection_bg.png`}
			containerStyles={{
				maxHeight: {
					md: show ? "1300px" : "1000px",
					sm: "auto",
				},
			}}
		>
			<Container
				maxWidth="xl"
				// paddingTop="32px"
				sx={{
					paddingBottom: {
						md: "initial",
						sm: "32px",
					},
				}}
			>
				<Grid
					container
					alignItems={"flex-start"}
					//  marginTop="64px"
				>
					<Grid item md={4} marginTop="64px">
						<UserLevelTitle />
					</Grid>
					<Grid item md={8}>
						<ExperiencesCardList
							show={show}
							handleClick={handleClick}
						/>
					</Grid>
				</Grid>
			</Container>
		</ContentWithBackgroundImageGrid>
	);
};

export default UserLevelsSection;

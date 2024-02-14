import { Grid } from "@mui/material";
import React from "react";
import FeatureCard from "./FeatureCard";

const CardsGrid = () => {
	// const data = [1, 2, 3, 4];
	return (
		<Grid container spacing={2}>
			{data.map((item) => (
				<Grid item md={6} xs={12} padding="16px">
					<FeatureCard
						imgSrc={item.imgSrc}
						title={item.title}
						description={item.description}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default CardsGrid;

const data = [
	{
		imgSrc: "become-host/features/card-1.png",
		title: `Transform to network influencer.`,
		description: `Spread your presence beyond digital media. Build your brand with us and pave the way for the future.`,
	},
	{
		imgSrc: "become-host/features/card-2.png",
		title: `Build leadership acumen.`,
		description: `Share your experiences to guide others. Help them learn new things and direct them to the right path. `,
	},
	{
		imgSrc: "become-host/features/card-3.png",
		title: `Build a strong community.`,
		description: `Form a reliable network who constantly inspire you to improve with new ideas and information. `,
	},
	{
		imgSrc: "become-host/features/card-4.png",
		title: `Create a professional brand.`,
		description: `Connect, interact, expand & diversify your network to unlimited opportunities, fields, and more. `,
	},
];

import { Box, Container, Divider, Typography } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import FacebookIcon from "../../svg-files/Components/SocialIcons/FacebookIcon";
import LinkedinIcon from "../../svg-files/Components/SocialIcons/LinkedinIcon";
import TwitterIcon from "../../svg-files/Components/SocialIcons/TwitterIcon";
import HivepathImage from "../Common/HivepathImage";

const Footer = () => {
	return (
		<Box
			sx={{
				bgcolor: "#1C1C1C",
				marginTop: "32px",
			}}
		>
			<Container maxWidth="xl">
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						color: "common.white",
						paddingTop: "16px",
						paddingBottom: "16px",
						flex: 1,
					}}
				>
					<HivepathImage
						fileName={`logo-white.png`}
						style={{
							width: "160px",
							//  height: "40px"
						}}
					/>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							// width: "400px",
							flex: "0.6",
							"& a": {
								color: "common.white",
								textDecoration: "none",
							},
						}}
					>
						<Link to="/profile-features">Profile features</Link>
						<Link to="/become-a-host">Become a host</Link>
						<Link to="/contact-us">Contact us</Link>
						<Link to="/privacy-policy">Privacy Policy</Link>
						<Link to="/terms-and-conditions">
							Terms and conditions
						</Link>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							width: "400px",
							flex: "0.2",
							"& a": {
								color: "common.white",
								textDecoration: "none",
								marginLeft: "16px",
							},
						}}
					>
						{socialLinks.map((item) => (
							<a href={item.url} target="_blank" rel="noreferrer">
								{item.icon}
							</a>
						))}
					</Box>
				</Box>
				<Divider
					sx={{
						bgcolor: "common.white",
						color: "white",
					}}
				/>
				<Typography
					style={{
						fontWeight: 600,
						fontSize: "13px",
						lineHeight: "16px",
						color: "rgba(255,255,255,0.8)",
						textAlign: "center",
						padding: "16px",
						paddingBottom: "32px",
					}}
				>
					Copyright © 2021 hivepath. All rights reserved
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;

const socialLinks = [
	{
		icon: <FacebookIcon />,
		url: "https://www.facebook.com/Hivepath-110065848067921",
	},
	{
		icon: <LinkedinIcon />,
		url: "https://www.linkedin.com/company/hivepath-newagenetworkingplatform/",
	},

	{
		icon: <TwitterIcon />,
		url: "https://twitter.com/Hivepath1",
	},
];

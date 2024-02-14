import {
	AppBar,
	Box,
	Button,
	Container,
	Fade,
	MenuItem,
	Paper,
	Popper,
	Toolbar,
} from "@mui/material";
import { Link, navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import Image from "../Common/HivepathImage";

import SecondaryButton from "../Common/Buttons/SecondaryButton";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import MoreMenuIcon from "../../svg-files/Components/MoreMenuIcon";
import ProfileIcon from "../../svg-files/Components/MenuIcons/ProfileIcon";
import HostIcon from "../../svg-files/Components/MenuIcons/HostIcon";

const AppHeader = () => {
	const [show, setShow] = useState(false);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();

	const handleClick = (newPlacement) => (event) => {
		setAnchorEl(event.currentTarget);
		setOpen((prev) => placement !== newPlacement || !prev);
		setPlacement(newPlacement);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else setShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	const handleClickLogin = () => {
		window.open(`https://app.hivepath.io/login`, "_blank");
	};
	const handleClickSignUp = () => {
		window.open(`https://app.hivepath.io/sign-up`, "_blank");
	};

	const handleMenuButtonClick = (link) => {
		navigate(`${link}`);
		setOpen((prev) => !prev);
	};

	return (
		<AppBar
			sx={{
				// bgcolor: "background.default",
				color: "text.primary",
				background: show
					? "linear-gradient(180deg, #F8FAFF 0%, rgba(248, 250, 255, 0.52) 100%)"
					: "transparent",
				backdropFilter: "blur(62px)",
			}}
			elevation={0}
		>
			<Popper
				open={open}
				anchorEl={anchorEl}
				placement={placement}
				transition
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper
							sx={{
								boxShadow:
									"0px 0px 40px 0px rgba(0, 0, 0, 0.1)",
								padding: "16px",
								marginTop: "16px",
								borderRadius: "10px",
							}}
						>
							<MenuItem
								component={Button}
								onClick={() =>
									handleMenuButtonClick("/profile-features")
								}
								startIcon={<ProfileIcon />}
								sx={{
									textTransform: "initial",
									width: "100%",
								}}
								// to="/profile-features"
							>
								Profile
							</MenuItem>
							<MenuItem
								component={Button}
								onClick={() =>
									handleMenuButtonClick("/become-a-host")
								}
								startIcon={<HostIcon />}
								sx={{
									textTransform: "initial",
								}}
								// to="/become-a-host"
							>
								Become a host
							</MenuItem>
						</Paper>
					</Fade>
				)}
			</Popper>

			<Toolbar>
				<Container
					maxWidth="xl"
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Link to="/">
						<Image
							// src={logo}
							fileName={`logo.png`}
							style={{
								// height: "40px",
								width: "120px",
								objectFit: "cover",
							}}
						/>
					</Link>
					<Box
						style={{
							display: "flex",
						}}
					>
						<MenuItem
							component={Button}
							onClick={handleClick("bottom")}
							endIcon={<MoreMenuIcon />}
							sx={{
								textTransform: "initial",
							}}
						>
							Features
						</MenuItem>

						<MenuItem component={Link} to="/contact-us">
							Contact us
						</MenuItem>
						<SecondaryButton
							title={"Log in"}
							onClick={handleClickLogin}
						/>
						<PrimaryButton
							title={`Sign up`}
							style={{
								height: "50px",
								fontSize: "18px",
								fontWeight: 600,
								marginLeft: "16px",
							}}
							onClick={handleClickSignUp}
						/>
						{/* <MenuItem
							onClick={handleClickLogin}
							component={SecondaryButton}
							title={`Login`}
						></MenuItem> */}
					</Box>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default AppHeader;

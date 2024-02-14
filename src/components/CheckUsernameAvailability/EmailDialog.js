import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "../../svg-files/Components/HomepageIcons/PopUpIcons/CloseIcon";
import GradientCheckIcon from "../../svg-files/Components/HomepageIcons/PopUpIcons/GradientCheckIcon";
import authFetch from "../../utils/authFetch";
import BaseDialog from "../Common/BaseDialog";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import StyledHivepathImage from "../Common/HivepathImage/index";

const STAGES = {
	STAGE1: "stage1",
	STAGE2: "stage2",
};

const EmailDialog = ({ open, handleClose, username }) => {
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [email, setEmail] = useState("");
	const [stage, setStage] = useState(STAGES.STAGE1);

	const reserveUsernameURL =
		"https://profile.hivepath.io/api/reserveUsername";

	const handleReserveUsername = (e) => {
		e.preventDefault();
		setLoading(true);
		const data = {
			username,
			email,
		};
		authFetch(reserveUsernameURL, data)
			.then((json) => {
				if (json.status === "success") {
					console.log(json);
					setIsSuccess(true);
					setStage(STAGES.STAGE2);
					setErrorMessage(json.message);
				} else {
					setIsError(true);
					setErrorMessage(json.message);
				}
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	// console.log({ stage });
	const handleCloseModal = () => {
		handleClose();
		setEmail("");
		setErrorMessage("");
		setStage(STAGES.STAGE1);
	};
	const handleContinueToHivepath = () => {
		window.open(`https://app.hivepath.io/sign-up`, "_blank");
	};
	return (
		<BaseDialog open={open} handleClose={handleCloseModal}>
			<Box
				sx={{
					padding: "16px",
				}}
			>
				<Typography
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						fontWeight: 800,
						fontSize: "26px",
						lineHeight: " 160%",
						color: "#364358",
					}}
				>
					Congratulations{" "}
					<StyledHivepathImage
						fileName={`homepage/pop-up/congrats.png`}
						style={{
							height: "20px",
							width: "20px",
							marginLeft: "16px",
						}}
					/>
				</Typography>
				{stage === STAGES.STAGE1 && (
					<>
						<Typography
							sx={{
								fontWeight: 800,
								fontSize: "24px",
								lineHeight: "160%",
								color: "#364358",
								textAlign: "center",
							}}
						>
							<GradientCheckIcon
								style={{
									marginRight: "8px",
									height: "20px",
									width: "20px",
								}}
							/>
							<span
								style={{
									color: "#1CB83D",
								}}
							>
								{username}
							</span>{" "}
							is available.
						</Typography>
						<Typography
							sx={{
								fontWeight: 500,
								fontSize: "18px",
								lineHeight: "160%",
								color: "#222222",
								textAlign: "center",
								paddingTop: "16px",
								paddingBottom: "16px",
							}}
						>
							Reserve this username by entering your email.
						</Typography>
						<form onSubmit={handleReserveUsername}>
							<Grid
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "flex-start",

									flex: 1,
									width: "100%",
								}}
								container
								spacing={2}
							>
								<Grid item xs={12}>
									<TextField
										sx={{
											"& .MuiOutlinedInput-root": {
												background: "white",
												// border: "2px solid rgba(0, 0, 0, 0.5)",
												borderRadius: "10px",
											},
											// background: "white",
											// borderRadius: "10px",
											marginRight: "16px",
											flex: 1,
											// flex: 1,
										}}
										fullWidth
										placeholder="Enter your email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
										helperText={
											(isSuccess && errorMessage) ||
											(isError && errorMessage)
										}
										error={isError}
									/>
								</Grid>
								<Grid item xs={12}>
									<PrimaryButton
										title={`Reserve username`}
										style={{
											height: "50px",
											fontWeight: 600,
											fontSize: "18px",
											lineHeight: " 160%",
										}}
										onClick={handleReserveUsername}
										type="submit"
										disabled={!email || loading}
										fullWidth
									/>
								</Grid>
							</Grid>
						</form>
					</>
				)}
				{stage === STAGES.STAGE2 && (
					<>
						<Typography
							sx={{
								fontWeight: 500,
								fontSize: "18px",
								lineHeight: "160%",
								paddingBottom: "16px",
							}}
						>
							We have reserved the username{" "}
							<span
								style={{
									color: "#1CB83D",
									fontWeight: "800",
								}}
							>
								{username}
							</span>{" "}
							with your email.
						</Typography>
						<Grid container spacing={2} justifyContent="center">
							<Grid item xs={12}>
								<PrimaryButton
									title={`Continue to join Hivepath`}
									style={{
										height: "50px",
										fontWeight: 600,
										fontSize: "18px",
										lineHeight: " 160%",
									}}
									onClick={handleContinueToHivepath}
									disabled={!email || loading}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									onClick={handleCloseModal}
									sx={{ textTransform: "initial" }}
									fullWidth
								>
									Skip for now
								</Button>
							</Grid>
						</Grid>
					</>
				)}
			</Box>
		</BaseDialog>
	);
};

export default EmailDialog;

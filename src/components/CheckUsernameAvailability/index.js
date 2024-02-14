import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import ErrorIcon from "../../svg-files/Components/HomepageIcons/PopUpIcons/ErrorIcon";
import authFetch from "../../utils/authFetch";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import EmailDialog from "./EmailDialog";

const CheckUsernameAvailability = ({ buttonTitle }) => {
	const checkUserNameURL =
		"https://profile.hivepath.io/api/checkUsernameAvailability";
	const [username, setUsername] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const [emailDialogOpen, setEmailDialogOpen] = useState(false);

	const [thankYouModalOpen, setThankYouModalOpen] = useState(false);

	const handleChange = (e) => {
		setUsername(e.target.value);
		// handleCheckAvailability();
	};

	const messageForFailure = (
		<p
			style={{
				fontWeight: 500,
				fontSize: "14px",
				lineHeight: "160%",
				color: "#ED3535",
				display: "flex",
				alignItems: "center",
			}}
		>
			{" "}
			<ErrorIcon style={{ marginRight: "8px" }} /> Username already
			exists! Please try again.
		</p>
	);
	const handleCheckAvailability = (e) => {
		e.preventDefault();
		const data = {
			username,
		};
		setLoading(true);
		authFetch(checkUserNameURL, data)
			.then((json) => {
				setLoading(false);
				if (json.status === "success") {
					console.log(json);
					setMessage(`Username is available!`);
					setIsSuccess(true);
					setEmailDialogOpen(true);
				} else {
					setIsError(true);
					setMessage(messageForFailure);
				}
				// setMessage(json.message);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleModalClose = () => {
		setEmailDialogOpen(false);
		setUsername("");
		setMessage("");
	};

	return (
		<Box
			style={{
				margin: "auto",
				marginTop: "32px",
				maxWidth: "800px",
			}}
		>
			<form onSubmit={handleCheckAvailability}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-start",
						flex: 1,
						width: "100%",
					}}
				>
					<TextField
						sx={{
							"& .MuiOutlinedInput-root": {
								background: "white",
								// border: "2px solid rgba(0, 0, 0, 0.5)",
								borderRadius: "10px",
							},
							marginRight: "16px",
							flex: 1,
						}}
						placeholder="Enter a username"
						value={username}
						onChange={handleChange}
						helperText={isError && message}
						error={isError}
					/>
					<PrimaryButton
						title={buttonTitle || `Check availability`}
						style={{ width: "270px", height: "60px" }}
						// onClick={handleCheckAvailability}
						type="submit"
						disabled={username.length < 3 || loading}
						fullWidth
					/>
				</div>
			</form>
			{username && isSuccess && (
				<EmailDialog
					open={emailDialogOpen}
					handleClose={handleModalClose}
					username={username}
				/>
			)}
		</Box>
	);
};

export default CheckUsernameAvailability;

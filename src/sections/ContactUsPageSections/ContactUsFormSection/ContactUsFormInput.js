import React from "react";
import { TextField } from "@mui/material";

const ContactUsFormInput = ({
	placeholder,
	inputStyles,
	isMultiline,
	...props
}) => {
	return (
		<TextField
			sx={{
				"& .MuiOutlinedInput-root": {
					background: "white",
					borderRadius: "10px",
					height: isMultiline ? "auto" : "50px",
				},

				width: "100%",
				marginTop: "20px",
				flex: 1,
				...inputStyles,
			}}
			placeholder={placeholder || "Enter vaue"}
			multiline={isMultiline}
			rows={isMultiline && 4}
			// value={username}
			// onChange={handleChange}
			// helperText={(isSuccess && message) || (isError && message)}
			// error={isError}
		/>
	);
};

export default ContactUsFormInput;

import React from "react";
import { Box } from "@mui/material";
import SectionHeading from "../../../components/Common/Typography/SectionHeading";
import ContactUsFormInput from "./ContactUsFormInput";
import PrimaryButton from "../../../components/Common/Buttons/PrimaryButton";

const ContactUsForm = () => {
	return (
		<Box
			sx={{
				background: "#FFFFFF",
				boxShadow: "0px 0px 44px rgba(0, 0, 0, 0.08)",
				borderRadius: "20px",
				height: "auto",
				width: "500px",
				// maxHeight: "700px",
			}}
		>
			<div
				style={{
					height: "100px",
					background: "#F3F4FF",
					paddingLeft: "40px",
					borderRadius: "20px 20px 0px 0px",
					display: "flex",
					alignItems: "center",
				}}
			>
				<SectionHeading content={`Get in touch with us`} fontSize="32px" />
			</div>

			<div
				className="form"
				style={{ padding: "10px 40px 30px", textAlign: "center" }}
			>
				<ContactUsFormInput placeholder={"Name"} />
				<ContactUsFormInput placeholder={"Contact number"} />
				<ContactUsFormInput placeholder={"Email address"} />
				<ContactUsFormInput placeholder={"Designation"} />
				<ContactUsFormInput placeholder={"Message"} isMultiline={true} />

				<PrimaryButton
					title={"Submit"}
					style={{
						height: "50px",
						fontSize: "18px",
						marginTop: "20px",
						width: "60%",
						textAlign: "center",
					}}
				/>
			</div>
		</Box>
	);
};

export default ContactUsForm;

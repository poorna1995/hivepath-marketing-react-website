import React from "react";
import { Dialog, IconButton } from "@mui/material";
// import { MdClose } from "react-icons/md";
import CloseIcon from "../../../svg-files/Components/HomepageIcons/PopUpIcons/CloseIcon";
const BaseDialog = ({
	open,
	handleClose,
	children,
	popupStyles,
	hideButton,
}) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{
				style:
					//  popupStyles
					//   ? popupStyles
					//   :
					{
						borderRadius: "15px",

						position: "relative",
						maxWidth: "700px",
						margin: "auto",
						minWidth: "400px",
						paddingLeft: "16px",
						paddingRight: "16px",
						paddingTop: "32px",
						paddingBottom: "32px",
						minHeight: "160px",
						...popupStyles,
					},
			}}
			BackdropProps={{
				style: {
					opacity: "1",
				},
			}}
			scroll="paper"
		>
			{!hideButton && (
				<IconButton
					style={{
						position: "absolute",
						top: "10px",
						right: "10px",
						zIndex: "10",
					}}
					sx={{
						color: "black",
						bgcolor: "rgba(0,0,0,0.1)",
						"&:hover": {
							bgcolor: "primary.main",
							color: "white",
							fill: "white",
							"& svg >path": {
								fill: "white",
							},
						},
					}}
					onClick={handleClose}
				>
					<CloseIcon />
				</IconButton>
			)}

			{children}
		</Dialog>
	);
};

export default BaseDialog;

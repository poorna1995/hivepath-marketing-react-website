import { Chip, Container } from "@mui/material";
import React from "react";
import AdvanceFilteringIcon from "../../../svg-files/Components/MoreSectionIcons/AdvanceFilteringIcon";
import BookmarksIcon from "../../../svg-files/Components/MoreSectionIcons/BookmarksIcon";
import BuildFollowersIcon from "../../../svg-files/Components/MoreSectionIcons/BuildFollowersIcon";
import CalendarIntegrationIcon from "../../../svg-files/Components/MoreSectionIcons/CalendarIntegrationIcon";
import GoogleMeetIcon from "../../../svg-files/Components/MoreSectionIcons/GoogleMeetIcon";
import NotificationsIcon from "../../../svg-files/Components/MoreSectionIcons/NotificationsIcon";
import RecommendationsIcon from "../../../svg-files/Components/MoreSectionIcons/RecommendationsIcon";
import ReferIcon from "../../../svg-files/Components/MoreSectionIcons/ReferIcon";
import ReviewsIcon from "../../../svg-files/Components/MoreSectionIcons/ReviewsIcon";
import SessionTrackerIcon from "../../../svg-files/Components/MoreSectionIcons/SessionTrackerIcon";
import ShareResourcesIcon from "../../../svg-files/Components/MoreSectionIcons/ShareResourcesIcon";
import ShareResources from "../../../svg-files/Components/MoreSectionIcons/ShareResourcesIcon";
import SocialMediaIntegrationIcon from "../../../svg-files/Components/MoreSectionIcons/SocialMediaIntegrationIcon";
import TrackAttendeeIcon from "../../../svg-files/Components/MoreSectionIcons/TrackAttendeeIcon";
import WaitlistIcon from "../../../svg-files/Components/MoreSectionIcons/WaitlistIcon";

const RandomChipsContainer = () => {
	// const data = [1, 2, 3, 4, 5];
	return (
		<Container>
			{data.map((item) => (
				<Chip
					label={item.label}
					icon={item.icon}
					style={{
						marginRight: "16px",
						marginLeft: item.marginLeft && item.marginLeft,
						marginTop: "32px",
						background: "white",
						padding: "16px",
						color: "#333333",
						fontWeight: 600,
						fontSize: "20px",
						lineHeight: "29px",
						height: "60px",
						borderRadius: "40px",
					}}
				/>
			))}
		</Container>
	);
};

export default RandomChipsContainer;

const data = [
	{ icon: <NotificationsIcon />, label: "Notifications",marginLeft: "16px" },
	{ icon: <CalendarIntegrationIcon />, label: "Calendar integrations" },
	{ icon: <ReferIcon />, label: "Refer", marginLeft: "32px" },
	{ icon: <RecommendationsIcon />, label: "Recommendations" },
	{
		icon: <SocialMediaIntegrationIcon />,
		label: "Social media integrations",
	},
	{ icon: <ReviewsIcon />, label: "Reviews" },
	{ icon: <GoogleMeetIcon />, label: "Google meet", marginLeft: "32px" },
	{ icon: <SessionTrackerIcon />, label: "Session tracker" },
	{ icon: <WaitlistIcon />, label: "Waitlist" },
	{ icon: <BuildFollowersIcon />, label: "Build followers" },
	{
		icon: <ShareResourcesIcon />,
		label: "Share resources",
		marginLeft: "48px",
	},
	{ icon: <BookmarksIcon />, label: "Bookmarks" },
	{
		icon: <AdvanceFilteringIcon />,
		label: "Advance filtering",
		marginLeft: "16px",
	},
	{ icon: <TrackAttendeeIcon />, label: "Track attendee" },
];

import React from "react";
import BriefcaseIcon from "../../../svg-files/Components/BriefcaseIcon";
import ExpertiseIcon from "../../../svg-files/Components/ProcessIcons/StepOneIcons/ExpertiseIcon";
import SocialMediaIcon from "../../../svg-files/Components/ProcessIcons/StepOneIcons/SocialMediaIcon";
import ShareSessionsIcon from "../../../svg-files/Components/ProcessIcons/StepThreeIcons/ShareSessionsIcon";
import TrackAttendeesIcon from "../../../svg-files/Components/ProcessIcons/StepThreeIcons/TrackAttendeesIcon";
import AcademicGrowthIcon from "../../../svg-files/Components/ProcessIcons/StepTwoIcons/AcademicGrowthIcon";
import AlumniConnectIcon from "../../../svg-files/Components/ProcessIcons/StepTwoIcons/AlumniConnectIcon";
import AskMeAnythingIcon from "../../../svg-files/Components/ProcessIcons/StepTwoIcons/AskMeAnythingIcon";
import CareerAdviceIcon from "../../../svg-files/Components/ProcessIcons/StepTwoIcons/CareerAdviceIcon";
import CareerGrowthIcon from "../../../svg-files/Components/ProcessIcons/StepTwoIcons/CareerGrowthIcon";
import PortfolioReviewIcon from "../../../svg-files/Components/ProcessIcons/StepTwoIcons/PortfolioReviewIcon";
import StepCard from "./StepCard";

const StepsList = () => {
	// const data = [0, 1, 2];
	return (
		<div>
			{data.map((item) => (
				<div
					style={{
						marginBottom: "64px",
					}}
				>
					<StepCard
						imgSrc={item.imgSrc}
						title={item.title}
						data={item.data}
						description={item.description}
						id={item.id}
						sideImage={item.sideImage}
						chipData={item.chipData}
					/>
				</div>
			))}
		</div>
	);
};

export default StepsList;

const data = [
	{
		id: "01",
		imgSrc: "become-host/step1_bg.png",
		title: `Create Your Profile.`,
		description: `Hivepath provides all the tools to build your personal brand. Showcase your skills, achievements, projects and feature all of your talent in one place. Let the world know you more!
		`,
		sideImage: `become-host/process/step-1.png`,
		data: [
			{
				icon: <BriefcaseIcon />,
				title: `Work experience`,
				description: `Provide your work details, career progressions, milestones achieved and featured projects.`,
			},
			{
				icon: <ExpertiseIcon />,
				title: `Expertise`,
				description: `Your skills are your achievements. Highlight them to connect, build, and help your network. `,
			},
			{
				icon: <SocialMediaIcon />,
				title: `Social media`,
				description: `Provide your social profiles to spread your presence across other platforms for more reach. `,
			},
		],
	},
	{
		id: "02",

		imgSrc: "become-host/step2_bg.png",
		title: `Create a Knowledge Session.`,
		description: `We introduce you to a new way of sharing your unique experiences through Knowledge Sessions. Talk about topics you love and help people achieve their goals in life. Learn & explore new ideas every day! `,
		sideImage: `become-host/process/step-2.png`,

		chipData: [
			{
				icon: <CareerAdviceIcon />,
				title: `Career Advice`,
			},
			{
				icon: <AlumniConnectIcon />,
				title: `Alumni Connect`,
			},
			{
				icon: <PortfolioReviewIcon />,
				title: `Portfolio Review`,
			},
			{
				icon: <AskMeAnythingIcon />,
				title: `Ask Me Anything`,
			},
			{
				icon: <CareerGrowthIcon />,
				title: `Career Growth`,
			},
			{
				icon: <AcademicGrowthIcon />,
				title: `Academic Growth`,
			},
		],
	},
	{
		id: "03",
		imgSrc: "become-host/step3_bg.png",
		title: `Engage & Build a Network.`,
		description: `Hivepath is well aware of the requirements of a Host. Our features have been built from scratch to provide you with the easiest engagements possible for meaningful networking. `,
		sideImage: `become-host/process/step-3.png`,
		data: [
			{
				icon: <BriefcaseIcon />,
				title: `1:1 interactions`,
				description: `Connect and interact with people directly on 1:1 virtual meetings hosted seamlessly in Hivepath.`,
			},
			{
				icon: <TrackAttendeesIcon />,
				title: `Track attendees`,
				description: `Keep a track of all your attendees in the ‘My attendees’ section where we keep a list of all the users you’ve interacted with.`,
			},
			{
				icon: <ShareSessionsIcon />,
				title: `Share sessions`,
				description: `With more than one sharing method, easily invite other people from various platforms to join your sessions and have fun! `,
			},
		],
	},
];

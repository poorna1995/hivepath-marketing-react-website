import { Button, Container, Divider } from "@mui/material";
import React, { useState } from "react";
import BriefcaseIcon from "../../../svg-files/Components/BriefcaseIcon";
import AcademicGrowthIcon from "../../../svg-files/Components/ProcessIcons/StepTwoIcons/AcademicGrowthIcon";
import AlumniConnectIcon from "../../../svg-files/Components/ProcessIcons/StepTwoIcons/AlumniConnectIcon";
import MidLevelIcon from "../../../svg-files/Components/UserLevelsIcon/MidLevelIcon";
import SeniorLevelIcon from "../../../svg-files/Components/UserLevelsIcon/SeniorLevelIcon";
import ExperienceCard from "./ExperienceCard";

const ExperiencesCardList = ({ show, handleClick, ...props }) => {
	// const data = [1, 2, 3, 4, 5, 6, 7, 8];

	// const [show, setShow] = useState(false);

	const list = show ? data : data.slice(0, 4);
	// const handleClick = () => {
	// 	setShow(!show);
	// };

	return (
		<Container>
			{list.map((item, index) => (
				<>
					<ExperienceCard
						icon={item.icon}
						title={item.title}
						list={item.list}
					/>
					{list.length - 1 > index && <Divider />}
				</>
			))}
			<Button
				onClick={handleClick}
				style={{
					textTransform: "capitalize",
					background: "#ececec",
					borderRadius: "15px",
					color: "#222222",
					fontSize: "24px",
					fontWeight: 600,
					lineHeight: "29px",
					height: "52px",
					width: "180px",
				}}
			>
				{" "}
				{show ? "See Less" : "See More"}
			</Button>
		</Container>
	);
};

export default ExperiencesCardList;

const iconStyle = {
	flex: "0.1",
	marginTop: "4px",
};

const data = [
	{
		icon: (
			<AlumniConnectIcon
				style={{
					width: "25px",
					height: "25pxx",
					...iconStyle,
				}}
			/>
		),
		title: "Student",
		list: [
			{
				title: `Academics, achievements & student life.`,
			},
			{
				title: `Information on admissions, scholarships, international
                studies, etc.`,
			},
		],
	},
	{
		icon: <BriefcaseIcon style={iconStyle} />,
		title: (
			<>
				Entry-level <br />
				(1-3 years)
			</>
		),
		list: [
			{
				title: `Career transitions, professional tools & resources. `,
			},
			{
				title: `Talk about the first job, interview process, internships, and so on. `,
			},
		],
	},
	{
		icon: <MidLevelIcon style={iconStyle} />,
		title: (
			<>
				Mid-level <br />
				(3-5 years)
			</>
		),
		list: [
			{
				title: `Career experiences, work culture, and career development. `,
			},
			{
				title: `Talk on career advancement, formal negotiations, promotions, and more.  `,
			},
		],
	},
	{
		icon: <SeniorLevelIcon style={iconStyle} />,
		title: (
			<>
				Senior-level
				<br />
				(6+ years)
			</>
		),
		list: [
			{
				title: `Career transitions, senior roles & management.`,
			},
			{
				title: `Discuss strong networks, team management, and so on. `,
			},
		],
	},
	{
		// icon:'',
		title: "Industry leaders",
		list: [
			{
				title: `Leadership skills, team guidance & future prospects.`,
			},
			{
				title: `Sessions on AMA interactions, recommendations, and more.`,
			},
		],
	},
	{
		// icon:'',
		title: "Networking  influencers",
		list: [
			{
				title: `Career ventures, networking, and motivation.`,
			},
			{
				title: `Sessions to build, expand, and diversify an audience.`,
			},
		],
	},
];

"use client";
import { Box } from "@mui/material";
import {
	DashboardOutlined,
	HomeOutlined,
	FileCopyOutlined,
	CloudOutlined,
	CheckOutlined,
	MoodOutlined,
	LogoutOutlined,
	SettingsOutlined,
} from "@mui/icons-material";
import CustomListItem from "../CustomListItem/CustomListItem";

import styles from "./sidebar.module.css";
const Sidebar = () => {
	return (
		<Box
			className={styles.sidebar}
			flex={1}
			p={2}
			sx={{ display: { xs: "none", sm: "block" } }}
		>
			<Box className={styles.top}>
				<h1>Magdi Yacoub</h1>
			</Box>

			<Box className={styles.center}>
				<CustomListItem title="Dashboard" url="#" icon={<DashboardOutlined />} />
				<CustomListItem title="HOME" url="#" icon={<HomeOutlined />} />
				<CustomListItem title="NEW REQUEST" url="#" icon={<FileCopyOutlined />} />
				<CustomListItem title="Patient List" url="#" icon={<CloudOutlined />} />
				<CustomListItem title="ACCEPTED" url="#" icon={<CheckOutlined />} />
				<CustomListItem title="REJECTED" url="#" icon={<MoodOutlined />} />
				<CustomListItem title="PENDING" url="#" icon={<CloudOutlined />} />
			</Box>

			<Box className={styles.bottom}>
				<CustomListItem title="SETTINGS" url="#" icon={<SettingsOutlined />} />
				<CustomListItem title="LOG OUT " url="#" icon={<LogoutOutlined />} />
			</Box>
		</Box>
	);
};

export default Sidebar;

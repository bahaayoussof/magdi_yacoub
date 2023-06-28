import React from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const CustomListItem = ({ url, icon, title }) => (
	<ListItem disablePadding>
		<ListItemButton component="a" href={url}>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText primary={title} />
		</ListItemButton>
	</ListItem>
);

export default CustomListItem;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#0B7FB8",
		},
		secondary: {
			main: "#CF272F",
		},
		error: {
			main: "#DD1C3E",
			light: "#FCE8EC",
		},
		warning: {
			main: "#FFD53A",
			light: "#FFFBEB",
		},
		success: {
			main: "#39BF50",
			light: "#EBF9ED",
		},
		info: {
			main: "#121212",
		},
		text: {
			primary: "#121212dd",
			blue: "#343E6E",
			white: "#FFF",
			orange: "#F15931",
		},
		overrides: {
			MuiAppBar: {
				root: {
					"box-shadow": "none",
				},
			},
		},
	},
	shape: {
		borderRadius: 8,
	},
	// direction: "rtl",
	typography: {
		fontFamily: "Roboto, sans-serif",
		h1: {
			fontWeight: 500,
			fontSize: 20,
			lineHeight: "24px",
			letterSpacing: "0.25px",
		},
		h2: {
			fontWeight: 500,
			fontSize: 16,
			lineHeight: "20px",
			letterSpacing: "0.1px",
		},
		h3: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: "20px",
			letterSpacing: "0.01em",
		},
		body1: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: "20px",
			letterSpacing: "0.01em",
		},
		h4: {
			fontWeight: 500,
			fontSize: 12,
			lineHeight: "20px",
			letterSpacing: "0.01em",
		},

		subtitle1: {
			fontWeight: 700,
			fontSize: "22px",
			lineHeight: "24px",
		},
	},

	shadows: {
		0: "none",
		1: "0px 2px 16px 0px rgba(18, 18, 18, 0.16)",
		2: "0px 2px 8px 0px rgba(18, 18, 18, 0.08)",
		4: "0px 2px 4px 0px rgba(18, 18, 18, 0.08)",
		8: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
		16: "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
	},
	components: {
		MuiTooltip: {
			styleOverrides: {
				tooltip: {
					fontSize: "1rem",
					padding: "10px",
				},
			},
		},
		MuiTable: {
			styleOverrides: {
				root: {
					borderCollapse: "separate",
					borderSpacing: 0,
				},
			},
		},

		MuiDataGrid: {
			styleOverrides: {
				root: {
					"& .MuiDataGrid-columnHeader:focus": {
						outline: "none",
					},
					"& .MuiDataGrid-cell:focus-within": {
						outline: "none",
					},
				},
			},
		},

		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "capitalize",
					padding: "7px 20px",
				},
			},
		},

		MuiTextField: {
			styleOverrides: {
				root: {
					width: "27ch",
					margin: "7px",
					"& .MuiFormHelperText-root": {
						color: "#DD1C3E",
					},
				},
			},
		},

		MuiAppBar: {
			styleOverrides: {
				root: {
					height: "50px",
					display: "flex",
					justifyContent: "center",
				},
			},
		},

		MuiOutlinedInput: {
			styleOverrides: {
				input: {
					"&:-webkit-autofill": {
						transition: "background-color 5000s ease-in-out 0s, color 5000s ease-in-out 0s",
						transitionDelay: " background-color 5000s, color 5000s ",
					},
				},

				root: {
					maxHeight: "3rem",
					// ? uncomment this if you want input height smaller than 3rem
					// marginTop: 5,
					// "& .MuiAutocomplete-input": {
					// 	marginTop: -6,
					// },
					"&:-webkit-autofill": {
						color: "red !important",
					},

					"&:hover fieldset": {
						// borderColor: "#343E6E !important",
					},
					"&.Mui-focused fieldset": {
						// borderColor: "#343E6E !important",
					},
				},
			},
		},
	},
});

export default theme;

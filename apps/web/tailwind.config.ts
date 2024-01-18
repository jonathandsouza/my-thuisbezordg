import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		fontSize: {
			"text-12": "12px",
			"text-14": "14px",
			"size-16": "16px",
			"size-19": "19px",
			"size-20": "20px",
			"size-24": "24px",
			"size-28": "28px",
			"size-32": "32px",
			"size-48": "48px",
		},

		extend: {
			zIndex: {
				sticky: "1000",
				drawer: "2000",
				header: "3000",
				modal: "4000",
				"cookie-banner": "5000",
				notification: "6000",
				alert: "7000",
			},

			colors: {
				primary: "f36805",
			},
		},
	},
	plugins: [],
};
export default config;

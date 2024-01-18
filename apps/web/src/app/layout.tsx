import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<header className="px-4 py-3 bg-white">
				<Image
					src="/brand-logo.svg"
					alt="none"
					width={166}
					height={32}
				/>
			</header>
			<body>{children}</body>
		</html>
	);
}

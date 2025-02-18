import { ImageResponse } from "next/og";

export const size = {
	width: 32,
	height: 32,
};

export const contentType = "image/png";

const Icon = () => {
	return new ImageResponse(
		<div
			style={{
				fontSize: 24,
				background: "black",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				borderRadius: "20%",
				color: "white",
			}}
		>
			&#120148;
		</div>,
		{
			...size,
		},
	);
}

export default Icon;
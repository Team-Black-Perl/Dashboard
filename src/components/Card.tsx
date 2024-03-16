// Card.tsx
import React, { useState } from "react";
import axios from "axios";
import alert from "../assets/alert.png";
import playBack from "../assets/buttonicon.png";
import map from "../assets/maps.png";

interface CardProps {
	_id: string;
	long: string;
	lat: string;
	vidSrc: string;
	page: string;
	ip: string;
	location: string;
	onClosePopup: () => void; 
}

const Card: React.FC<CardProps> = ({
	_id,
	vidSrc,
	lat,
	long,
	page,
	ip,
	location,
	onClosePopup
}) => {
	const [isClicked, setIsClicked] = useState(false);
	const [isDone, setIsDone] = useState(false);

	const updateStatus = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3000/alert/update",
				{
					uid: _id,
				}
			);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleClick = () => {
		setIsClicked(!isClicked);
	};

	const handleClose = () => {
		setIsClicked(false);
	};

	const handleMarkAsDone = async () => {
		setIsDone(true);
		await updateStatus();
		onClosePopup();
		setTimeout(() => setIsClicked(false), 500); // Close the pop-up after animation
	};

	return (
		<div
			className={`bg-white shadow-md rounded-lg my-4 mx-2 w-full max-w-screen-lg relative ${
				isClicked ? "bg-blue-200" : ""
			}`}
		>
			<div
				className="flex items-center justify-between px-6 py-4"
				onClick={handleClick}
			>
				<div
					style={{
						maxWidth: "500px",
						maxHeight: "500px",
						overflow: "hidden",
					}}
				>
					<img
						className="mr-4"
						src={alert}
						style={{ maxWidth: "30%", maxHeight: "30%" }}
					/>
				</div>
				<div className="ml-4 flex flex-col justify-center">
					<div className="text-gray-700 text-base text-center mb-2">
						Location: {location}
					</div>
					<div className="text-gray-700 text-base text-center mb-2">
						Co ordinates: {lat}, {long}
					</div>
					<div className="text-gray-700 text-base text-center">
						IP: {ip}
					</div>
				</div>
			</div>
			{isClicked && (
				<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
					<div className="bg-white rounded-lg p-8 flex flex-col items-center">
						<div className="flex flex-row">
							<div className="m-8 flex items-center ">
								<a
									href={vidSrc}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={playBack}
										alt="video playback"
										className="h-14 w-14"
									/>
								</a>
							</div>
							<div className="m-8 flex items-center">
								<a
									href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${long}&travelmode=driving`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src={map}
										alt="maps"
										className="h-14 w-14"
									/>
								</a>
							</div>
						</div>
						<div className="mt-4 flex items-center space-x-4">
							{page === "alerts" && (
								<button
									className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded ${
										isDone ? "animate-pulse" : ""
									}`}
									onClick={handleMarkAsDone}
								>
									{isDone ? "Marked as Done" : "Mark as Done"}
								</button>
							)}

							<button
								className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
								onClick={handleClose}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Card;

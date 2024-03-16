// Alerts.tsx
import React from "react";
import Card from "../components/Card";
import axios from "axios";

axios.defaults.withCredentials = true;

interface Alert {
	uid: string;
	lat: string;
	long: string;
	downloadURL: string;
}

interface User {
	user_id: number;
	ip_address: string;
	long: number;
	lat: number;
	city: string;
	state: string;
}
const History: React.FC = () => {
	const [alerts, setAlerts] = React.useState<Alert[]>([]);
	const [user, setUser] = React.useState<User | null>(null);

	const getData = async () => {
		try {
			const response = await axios.get("http://localhost:3000/alert/All");
			setAlerts(response.data.alerts);
			setUser(response.data.userData);
			console.log(response.data.userData);
		} catch (error) {
			console.error(error);
		}
	};
	const handleClosePopup = () => {
		getData(); // Call getData when the pop-up is closed
	};

	React.useEffect(() => {
		getData();
	}, []);

	return (
		<div className="h-screen w-screen flex flex-col">
			<div className="flex-grow bg-gray-100 rounded-lg overflow-hidden">
				<div className="h-full flex flex-col justify-center items-center">
					{alerts.map((alert, index) => (
						<Card
							key={index}
							_id={alert.uid}
							lat={alert.lat}
							long={alert.long}
							vidSrc={alert.downloadURL}
							page="history"
							ip={user?.ip_address ? user.ip_address : ""}
							location={`${user?.city}, ${user?.state}`}
							onClosePopup={handleClosePopup}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default History;

// Alerts.tsx
import React from "react";
import Card from "../components/Card";
import axios from "axios";

axios.defaults.withCredentials = true;

interface History {
	uid: string;
	lat: string;
	long: string;
	downloadUrl: string;
}
const History: React.FC = () => {
	const [alerts, setAlerts] = React.useState<History[]>([]);

	const getData = async () => {
		try {
			const response = await axios.get(
				"http://localhost:3000/alert/All"
			);
			setAlerts(response.data);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
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
							imageSrc={alert.downloadUrl}
							altText="fight.png" // Assuming all alerts use the same alt text for now
              page="history"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default History;

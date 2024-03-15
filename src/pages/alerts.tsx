import fight1 from "../assets/fight1.jpeg";

const Alerts = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Full-screen parent card */}
      <div className="flex-grow bg-gray-100 rounded-lg overflow-hidden">
        <div className="h-full flex flex-col justify-center items-center">
          {/* Child cards */}
          <div className="bg-white shadow-md rounded-lg my-4 mx-2 w-full max-w-screen-lg">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <img className="mr-4" src={fight1} alt="fight.png" />
              </div>
              <div className="ml-4">
                <div className="font-bold text-xl mb-2">Card 1</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg my-4 mx-2 w-full max-w-screen-lg">
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <img className="mr-4" src={fight1} alt="fight.png" />
              </div>
              <div className="ml-4">
                <div className="font-bold text-xl mb-2">Card 2</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;

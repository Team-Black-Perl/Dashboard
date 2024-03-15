import gifImage from "../assets/gif2.gif";

function Home() {
  return (
    <div className="relative flex items-center">
      <img
        src={gifImage}
        alt="GIF Image"
        className="w-auto h-auto"
        style={{ marginTop: "55px" }}
      />
      <div
        className="absolute right-0 text-xl font-bold text-blue-300"
        style={{
          marginRight: "40px",
          marginBottom: "5px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>Welcome to our</h1>
        <h1>smart city's</h1>
        <h1>smart police dashboard.</h1>
      </div>
    </div>
  );
}

export default Home;
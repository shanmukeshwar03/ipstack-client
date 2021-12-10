import { useEffect, useState } from "react";
import Loading from "components/Loading";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ipstack, setIpstack] = useState(null);

  const getIpDetails = async () => {
    setError(null);
    try {
      const response = await axios.get("/");
      setIpstack(response.data);
    } catch (error) {
      if (error.response.data) {
        setError(error.response.data);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    getIpDetails();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="home-container">
      <header>Your IP Details</header>
      {error ? (
        <span className="home-error">{error}</span>
      ) : (
        Object.keys(ipstack).map((detail, key) => (
          <div className="home-detail" key={key}>
            <span>{detail} : </span>
            <span>{ipstack[detail]}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;

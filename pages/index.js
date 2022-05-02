import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [ipstack, setIpstack] = useState(null);

  const getIpDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/");
      if (response.data.status === "success") setIpstack(response.data);
      else setIpstack(null);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getIpDetails();
  }, []);

  return (
    <div className="flex flex-col mt-8 items-center m-auto w-full md:w-2/4 lg:w1/2">
      <Head>
        <title>ipstack</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="shadow-lg p-4 rounded-md w-3/4 lg:w-1/2">
        {ipstack ? (
          <>
            <header className="mb-2 text-2xl font-medium text-indigo-700">
              Your IP Details
            </header>
            {Object.keys(ipstack).map((detail, key) => (
              <div className="flex gap-2 items-center" key={key}>
                <span className="text-lg font-medium capitalize">
                  {detail}:
                </span>
                <span className="text-md font-normal text-slate-700 capitalize">
                  {ipstack[detail]}
                </span>
              </div>
            ))}
          </>
        ) : (
          <span className="text-center text-xl text-slate-700 font-medium">
            Unable to get your ip-details
          </span>
        )}
      </div>
      <button
        onClick={getIpDetails}
        className="mt-6 bg-indigo-500 px-2 py-1 rounded-md text-white shadow-sm flex gap-2 items-center hover:bg-indigo-400 hover:scale-105 hover:rounded-xl"
      >
        <div
          className={`${
            !loading && "hidden"
          } animate-spin h-5 w-5 border-[3px] border-t-white border-l-white rounded-[50%] border-b-transparent border-r-white`}
        ></div>
        check again
      </button>
    </div>
  );
};

export default Home;

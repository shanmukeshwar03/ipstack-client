import "styles/globals.css";
import "styles/home.css";
import "styles/loading.css";
import axios from "axios";
import Head from "next/head";

axios.defaults.baseURL = process.env.HOST_URL;

const App = ({ Component }) => {
  return (
    <div>
      <Head>
        <title>Ipstack</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component />
    </div>
  );
};

export default App;

import axios from "axios";
import "styles/globals.css";

axios.defaults.baseURL = process.env.HOST_URL;

const App = ({ Component }) => {
  return <Component />;
};

export default App;

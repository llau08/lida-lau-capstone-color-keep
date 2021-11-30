import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
const profileList = [];

function Home() {
  return (
    <main>
      <h1>WELCOME TO COLOR KEEP</h1>
      <Search />
      <Link to="/add-client">
        <button>Add New Client</button>
      </Link>
    </main>
  );
}
export default Home;

import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import "../Home/Home.scss";

function Home() {
  return (
    <main className="home">
      <h1>WELCOME TO COLOR KEEP</h1>
      <Search />
      <Link to="/add-client">
        <button>Add New Client</button>
      </Link>
    </main>
  );
}
export default Home;

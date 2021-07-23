import { useEffect, useState } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() =>
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  );
  const monstes = users;
  const searchField = search;
  const filteredMonsters = monstes.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="mt-3 min-h-screen flex flex-col h-2/5 dark:bg-gray-800 bg-white">
      <SearchBox
        placeholder="Search monsters"
        handleChange={(e) => setSearch(e.target.value)}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

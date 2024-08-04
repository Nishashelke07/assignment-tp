import React, { useEffect, useState } from "react";
import './styles.css';
import Loader from "../utils/loader";
import UserCard from "./userCard";
import SearchBar from "./searchBar";

function Users() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setUsersData(result.users.slice(0,10));
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsersData();
  }, []);

  const filteredUsers = query
    ? usersData.filter(user =>
        user.username.toLowerCase().includes(query.toLowerCase())
      )
    : usersData;

  return (
    <div className="container">
        <SearchBar query={query} onQueryChange={setQuery} />
      {loading ? (
        <Loader />
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : filteredUsers.length > 0 ? (
        <div className="card-container">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div className="error-message">No users found.</div>
      )}
    </div>
  )
}

export default Users;

import React from "react";
import "./styles.css";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.image} alt={user.firstName} />
      <h3>{user.username}</h3>
      <h3>{user.age}</h3>
      <h3>{user.gender}</h3>
      <h3>{user.company.title}</h3>
      <h3>{user.company.name}</h3>
    </div>
  );
};

export default UserCard;

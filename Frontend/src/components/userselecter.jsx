import React, { useEffect, useState } from "react";

const Userselecter = ({ selectedUserId, setSelectedUserId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://leaderboard-1-6kwv.onrender.com/api/alluser")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="user-select-container">
      <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Userselecter;
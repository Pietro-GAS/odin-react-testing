import { useState, useEffect } from "react";

const User = (props) => {
    const { name, email } = props.user;
    return(
        <div className="person">
            <h3>{name}</h3>
            <span>{email}</span>
        </div>
    );
};

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
          .then((response) => response.json())
          .then((user) => setUser(user))
          .catch((error) => setError(error.message))
    }, []);

    if (error) {
        return <span>{error}</span>;
    };

    return <>{user ? <User user={user} /> : <span>Loading...</span>}</>;
};
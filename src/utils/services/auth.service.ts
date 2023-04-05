import React from "react";

export const AuthSeervice = () => {
    const [user, setUser] = React.useState(null);

    const signUp = (user) => {
        setUser(user);
    };

    const signIn = (user) => {
        setUser(user);
    };

    const logout = () => {
        setUser(null);
    };

    return {
        user,
        signUp,
        signIn,
        logout,
    };
};

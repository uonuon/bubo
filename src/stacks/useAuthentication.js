/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AppConfig, UserSession, showConnect  } from "@stacks/connect";
import { Person } from "@stacks/profile";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

export const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    setUserData(getUserData());
  }, [])


  useEffect(() => {
    if (userSession.isUserSignedIn() && userData) {
        setAuthenticated(true)
        setProfile(getPerson());
    } else  {
        setAuthenticated(false);
    }
  }, [userData]);


  const authenticate = () => {
    showConnect({
      appDetails: {
        name: "bubo",
        icon: window.location.origin + "/logo-placeholder.png",
      },
      redirectTo: "/",
      onFinish: (data) => {
        setUserData(getUserData);
      },
      userSession: userSession,
    });
  }
  
  const getUserData = () => {
    try {
      return userSession.loadUserData();
    } catch (error) {
        return null
    }
  }
  
  const getPerson = () => {
    return new Person(getUserData().profile);
  }

  const logout = () => {
      userSession.signUserOut();
      setAuthenticated(false)
      setUserData(false)
      setProfile(false)
  }
  
  return {
    isAuthenticated,
    authenticate,
    userData,
    logout,
    profile
  };
};

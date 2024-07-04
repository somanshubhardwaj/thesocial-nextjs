const useUser = async (email: any) => {
  try {
    if (!email) {
      return {
        username: null,
        fullName: null,
        profilePicture: null,
      };
    }
    const response = await fetch("/api/users/logIndetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email }),
    });
    const data = await response.json();
  
    if (data.error) {
      return {
        username: null,
        fullName: null,
        profilePicture: null,
      };
    }
    return {
      username: data.username,
      fullName: data.fullName,
      profilePicture: data.profilePicture,
    };
  } catch (error) {}
};

export default useUser;

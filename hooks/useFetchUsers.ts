import { useState } from "react";

const useFetchUsers = (email: string) => {
  const [loading, setLoading] = useState(false);
  const fetchuser = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/users/fetchusers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return { fetchuser, loading };
};
export default useFetchUsers;

import React, { useEffect ,useState} from "react";
import useFetchUsers from "@/hooks/useFetchUsers";
import { useAuth } from "@/context/AuthContext";
const Userlist = () => {
  const { loading, fetchuser } = useFetchUsers();
  const [users, setUsers] = useState([]);

  const { currentUser } = useAuth();
  async function fetchUsers() {
    const res = await fetchuser(currentUser.email);
    setUsers(res);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
    
 
  console.log(users);
  if (loading) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4">
      <div className="">
        {users.map((user) => (
          <div className="" key={user.id}>
            <div className="flex items-center space-x-2 p-2">
              <img
                src={user.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-white">{user.fullName}</h3>
                <p className="text-gray-500 text-sm">@{user.username}</p>
              </div>

              <button className="ml-auto px-2 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userlist;

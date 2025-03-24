import { users } from "./index";
import { useEffect, useState } from "react";
export const UsersFiltering = () => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDeartment] = useState("");

  const handleSubmit = () => {
    setFilteredUsers(
      users.filter((user) =>
        user.username
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      )
    );
  };

  const Departments = [...new Set(users.map((user) => user.department))];
  return (
    <>
      <h1 className='font-bold text-2xl text-center p-2'>Users</h1>
      {/* {JSON.stringify(Departments)} */}
      <button
        onClick={() => {
          setFilteredUsers(users);
          setSearchQuery("");
        }}
        className='bg-gray-400 absolute top-2 right-2 hover:bg-gray-500 duration-300 cursor-pointer py-2 px-4 rounded-xl'
      >
        Reset Filter
      </button>
      {filteredUsers.length == 0 ? (
        <div className='w-full h-screen flex justify-center items-center'>
          <h1 className='text-2xl font-bold'>Users not found</h1>
        </div>
      ) : (
        <>
          <div>
            <div className='w-full flex justify-center items-center gap-2'>
              <input
                type='text'
                placeholder='Enter name'
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className='px-4 py-2 rounded-xl border'
              />
              <button
                onClick={handleSubmit}
                className='bg-gray-400 hover:bg-gray-500 duration-300 cursor-pointer py-2 px-4 rounded-xl'
              >
                Search
              </button>
            </div>
            <div className='w-full flex justify-center items-center gap-2 p-4'>
              <select
                value={department}
                className='border p-2 outline-none rounded-md'
                onChange={(e) => {
                  setDeartment(e.target.value);
                  setFilteredUsers(
                    users.filter((user) => user.department == e.target.value)
                  );
                }}
              >
                <option defaultChecked>Select Department</option>
                {Departments.map((department) => {
                  return <option value={department}>{department}</option>;
                })}
              </select>
            </div>
            <div className='w-full flex justify-center items-center min-h-screen p-4'>
              <table className='border-collapse w-full text-center'>
                <thead className=' '>
                  <tr>
                    <th className='border border-gray-400'>ID</th>
                    <th className='border border-gray-400'>Name</th>
                    <th className='border border-gray-400'>Semester</th>
                    <th className='border border-gray-400'>Department</th>
                  </tr>
                </thead>
                <tbody className=''>
                  {filteredUsers.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td className='border border-gray-400'>{user.id}</td>
                        <td className='border border-gray-400'>
                          {user.username}
                        </td>
                        <td className='border border-gray-400'>
                          {user.semester}
                        </td>
                        <td className='border border-gray-400'>
                          {user.department}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

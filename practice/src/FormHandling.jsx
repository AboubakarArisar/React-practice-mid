import React, { useEffect, useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const [currentUser, setCurrentUser] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("user")).name);
  }, [formData]);
  const handleFormChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    setFormData({
      name: "",
      password: "",
      email: "",
    });
    alert("user data saved");
  };
  return (
    <div className='w-full h-screen  bg-gray-900 flex  flex-col  gap-4 justify-center items-center p-4 text-white'>
      <form
        onSubmit={handleSubmit}
        className='w-[40%] h-[55vh] border border-white rounded-xl flex flex-col justify-start items-center gap-5 p-4'
      >
        <h1 className='font-bold'>Form</h1>

        <input
          type='text'
          className='px-3 py-2 border rounded-md'
          name='name'
          value={formData.name}
          onChange={handleFormChange}
          placeholder='Enter name...'
        />
        <div>
          <input
            type={showPassword ? "text" : "password"}
            className='px-3 py-2 border rounded-md relative'
            name='password'
            value={formData.password}
            onChange={handleFormChange}
            placeholder='Enter password...'
          />
          <label className='flex items-center gap-2 mt-2 cursor-pointer justify-center'>
            <input
              type='checkbox'
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>
        <input
          type='email'
          name='email'
          className='px-3 py-2 border rounded-md'
          placeholder='Enter email...'
          onChange={handleFormChange}
          value={formData.email}
        />

        <input
          type='submit'
          className='px-3 py-2 bg-gray-300 text-black hover:text-white  hover:bg-gray-500 duration-300 cursor-pointer rounded-md'
        />
      </form>

      {currentUser && (
        <h1 className='text-2xl font-bold'>Current user : {currentUser}</h1>
      )}
    </div>
  );
};

export default FormHandling;

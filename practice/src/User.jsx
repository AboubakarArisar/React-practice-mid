import Button from "./Button";
import { useState } from "react";
export function User() {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  return (
    <>
      <div className='w-full h-screen text-black flex justify-center items-center gap-2 flex-col'>
        <input
          type='text'
          placeholder='enter your name'
          value={name}
          onChange={(event) => setName(event.target.value)}
          className='border-2 border-black rounded-xl p-2'
        />
        <Button
          name={"Submit"}
          clickHandler={() => {
            setDisplayName(name);
            setName("");
          }}
          className={"bg-gray-400 px-4 py-2 rounded-xl cursor-pointer"}
        />

        <h1>{displayName}</h1>
      </div>
    </>
  );
}

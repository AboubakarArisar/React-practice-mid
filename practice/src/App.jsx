import Button from "./Button";
function App() {
  const user = {
    name: "Ataberk",
    age: 20,
    isAdmin: true,
  };
  return (
    <>
      {/* //conditional rendering // true && reneder // ternary ? true : false */}
      {user.isAdmin && <h1>You are a admin</h1>}

      {user.isAdmin ? (
        <Button
          name='Click me '
          className='bg-amber-300 rounded-2xl px-2 py-4]'
          clickHandler={() => alert("button clicked")}
        />
      ) : (
        <>
          <h1>Unauthorized</h1>
       
        </>
      )}
    </>
  );
}

export default App;

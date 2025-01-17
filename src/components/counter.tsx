import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [draftCounter, setDraftCounter] = useState(counter)

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{counter}</p>
      <div className="flex gap-2">
        <button onClick={() => setCounter(counter - 1)}>➖ Decrement</button>
        <button onClick={() => setCounter(0)}>🔁 Reset</button>
        <button onClick={() => setCounter(counter + 1)}>➕ Increment</button>
      </div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          setCounter(draftCounter)
        }}>
          <input type="number" value={draftCounter} onChange={(e) => setDraftCounter(e.target.valueAsNumber)} />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { increment } from "@store/reducers/counter";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store";
import { useGetHelloByNameQuery } from "@store/api/hello";

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(({ counter: { value } }) => value);
  const { data } = useGetHelloByNameQuery("romeo");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          count is {value}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

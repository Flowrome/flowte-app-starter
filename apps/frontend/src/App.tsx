import reactLogo from "./assets/react.svg";
import nestLogo from "./assets/nest.svg";
import reduxLogo from "./assets/redux.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.scss";
import { increment } from "@store/reducers/counter";
import { useAppDispatch, useAppSelector } from "@store";
import { useGetHelloByNameQuery } from "@store/api/hello";
import classNames from 'classnames'

function App() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(({ counter: { value } }) => value);
  const { data } = useGetHelloByNameQuery("Flowte");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={styles['logo']} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={classNames(styles['logo'], styles['react'])} alt="React logo" />
        </a>
        <a href="https://redux-toolkit.js.org/" target="_blank">
          <img src={reduxLogo} className={classNames(styles['logo'], styles['redux'])} alt="Redux logo" />
        </a>
        <a href="https://docs.nestjs.com/v" target="_blank">
          <img src={nestLogo} className={classNames(styles['logo'], styles['nest'])} alt="Nest logo" />
        </a>
      </div>
      <h1>Vite + React + Redux + Nest</h1>
      <div className={styles['card']}>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          count is {value}
        </button>
        <p>This is a message from backend: "<b>{data?.message}</b>"</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles['read-the-docs']}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../store/modules/counter";
import { wrapper } from "@/store";

export default function Test() {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }) => counter.value);
  useEffect(() => {
    console.log("v", value);
  }, [value]);

  const plus = useCallback(
    (value) => {
      dispatch(counterActions.increment());
    },
    [dispatch]
  );

  const minus = useCallback(
    (value) => {
      dispatch(counterActions.decrement());
    },
    [dispatch]
  );

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => minus()}>-</button>
      <span>{value}</span>
      <button onClick={() => plus()}>+</button>
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      //   초기 상태를 설정할 수 있고, 커스텀 로직을 추가할 수 있다.
      //   서버 단에서 Redux 액션을 수행할 수 있다.
      store.dispatch(counterActions.increment());
      console.log("State on server", store.getState());
      return {
        props: {},
      };
    }
);

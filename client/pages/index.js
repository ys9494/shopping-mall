import AppLayout from "@/components/AppLayout";
import Main from "@/components/Main/Main";

export default function Home() {
  return (
    <AppLayout>
      <Main />
    </AppLayout>
  );
}

// import { wrapper } from "../src/store/store";
// import { useSelector, useDispatch } from "react-redux";

// // import { useAppDispatch, useAppSelector } from "../src/hooks/reduxHook";
// import { decrement, increment } from "@/src/store/features/counterSlice";
// import { selectAuthState, setAuthState } from "@/src/store/features/authSlice";
// import { NextPage } from "next";

// const Home = function () {
//   const { value: count } = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   const authState = useSelector(selectAuthState);

//   return (
//     <div>
//       <div>home</div>
//       <div>REDUX</div>
//       <div>{authState ? "Logged in" : "Not Logged In"}</div>
//       <button
//         onClick={() => {
//           authState
//             ? dispatch(setAuthState(false))
//             : dispatch(setAuthState(true));
//         }}
//       >
//         {authState ? "Logout" : "LogIn"}
//       </button>

//       <button onClick={() => dispatch(increment())}>increment</button>
//       <span>{count}</span>
//       <button onClick={() => dispatch(decrement())}>decrement</button>
//     </div>
//   );
// };

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
//       // 초기 상태를 설정할 수 있고, 커스텀 로직을 추가할 수 있다.
//       // 서버 단에서 Redux 액션을 수행할 수 있다.
//       store.dispatch(increment());
//       store.dispatch(setAuthState(false));
//       console.log("State on server", store.getState());
//       return {
//         props: {},
//       };
//     }
// );

// export default Home;

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { LoginWrapper, LoginForm, GotoSingup } from "./login-styled";
import { InputWrapper, Button } from "../Common/common-styled";
// import { useUserDispatch } from "../../context/UserContext";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const passwordRef = useRef();
  //   const navigate = useNavigate();
  //   const dispatch = useUserDispatch();

  //   /** 로그인 API */
  //   const loginAPI = async (userData) => {
  //     try {
  //       const { data } = await post("/users/login", userData);
  //       console.log("login", data.isAdmin);
  //       localStorage.setItem("token", data.token);
  //       dispatch({
  //         type: "LOGIN",
  //         isAdmin: data.isAdmin,
  //       });
  //       navigate("/");
  //     } catch (err) {
  //       console.log("Error", err?.response?.data);
  //       // navigate("/login");
  //       alert("이메일 또는 비밀번호를 확인해주세요");
  //     }
  //   };

  /** 로그인 제출 */
  const loginSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 완료!");
    setEmail("");
    setPassword("");
  };

  return (
    <LoginWrapper>
      <h1>LOG IN</h1>
      <LoginForm onSubmit={loginSubmit}>
        <InputWrapper>
          <label>EMAIL</label>
          <input
            type="email"
            required
            value={loginInput.email}
            onChange={(e) =>
              setLoginInput({ ...loginInput, email: e.target.value })
            }
            placeholder="이메일을 입력하세요"
          />
        </InputWrapper>
        <InputWrapper>
          <label>PASSWORD</label>
          <input
            type="password"
            required
            value={loginInput.password}
            onChange={(e) =>
              setLoginInput({ ...loginInput, password: e.target.value })
            }
            ref={passwordRef}
            placeholder="비밀번호를 입력하세요"
          />
        </InputWrapper>
        <Button>LOG IN</Button>
        <GotoSingup>
          <Link href="/signup">Create an account</Link>
        </GotoSingup>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;

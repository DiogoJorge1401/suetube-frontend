import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../api/client";
import { auth, provider } from "../../api/firebase";
import { useAppDispatch } from "../../redux/store";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import {
  Button,
  Container,
  ErrorMessage,
  FormGroup,
  Input,
  Link,
  Links,
  More,
  Or,
  SubTitle,
  Title,
  Wrapper,
} from "./Components";

interface SignInProps {
  sideBarIsOpen: boolean;
  handleClick: (s: string) => void;
}

export const SignIn = ({ sideBarIsOpen, handleClick }: SignInProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ msg: "", type: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const resetError = () => {
    setError({ msg: "", type: "" });
  };

  const request = async (endpoint: string, data: any) => {
    return (await client.post(endpoint, data)).data;
  };

  const handleSign = async (type: "signin" | "signup" | "google") => {
    const options = {
      async signin() {
        if (!username || !password) return;
        dispatch(loginStart());

        const data = await request("/auth/signin", { username, password });

        dispatch(loginSuccess(data));

        navigate("/");
      },
      async signup() {
        if (!username || !password || !email) return;

        await request("/auth/signup", { username, password, email });

        await this.signin();
      },
      async google() {
        dispatch(loginStart());

        const res = await signInWithPopup(auth, provider);

        const data = await request("/auth/google", {
          username: res.user.displayName,
          email: res.user.email,
          img: res.user.photoURL,
        });

        dispatch(loginSuccess(data));

        navigate("/");
      },
    };

    try {
      await options[type]();
    } catch (error: any) {
      dispatch(loginFailure());
      setError({ msg: error.response.data.message, type });
      setTimeout(resetError, 1500);
    }
  };

  return (
    <Container
      sideBarIsOpen={sideBarIsOpen}
      onClick={() => handleClick("signin")}
    >
      <Wrapper>
        <FormGroup>
          <Title>Sign in</Title>

          <SubTitle>To continue to SueTube</SubTitle>

          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value.trim())}
          />

          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value.trim())}
          />

          <Button onClick={() => handleSign("signin")}>Sign in</Button>

          <Button onClick={() => handleSign("google")}>
            Signin with Google
          </Button>

          {error.type === "signin" && <ErrorMessage>{error.msg}</ErrorMessage>}
        </FormGroup>

        <Or>OR</Or>

        <FormGroup>
          <Title>Sign up</Title>

          <SubTitle>To continue to SueTube</SubTitle>

          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value.trim())}
          />

          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value.trim())}
          />

          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value.trim())}
          />

          <Button onClick={() => handleSign("signup")}>Sign up</Button>

          {error.type === "signup" && <ErrorMessage>{error.msg}</ErrorMessage>}
        </FormGroup>
      </Wrapper>

      <More>
        English(USA)
        <Links>
          <Link>Help</Link>

          <Link>Privacy</Link>

          <Link>Term</Link>
        </Links>
      </More>
    </Container>
  );
};

import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";

import { useSearchParams } from "react-router-dom";

function AuthenticationPage() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  if (isLogin) {
    return <Login />;
  } else {
    return <Signup />;
  }
}

export default AuthenticationPage;

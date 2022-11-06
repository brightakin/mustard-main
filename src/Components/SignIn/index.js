import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SignInDesktop from "./SignInDesktop";
import SignInMobile from "./SignInMobile";

const SignInPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <SignInMobile /> : <SignInDesktop />}</>;
};

export default SignInPage;

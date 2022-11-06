import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SignUpDesktop from "./SignUpDesktop";
import SignUpMobile from "./SignUpMobile";

const SignUpPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <SignUpMobile /> : <SignUpDesktop />}</>;
};

export default SignUpPage;

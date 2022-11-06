import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ResetPasswordMobile from "./ResetPasswordMobile";
import ResetPasswordDesktop from "./ResetPasswordDesktop";

const ResetPasswordPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <ResetPasswordMobile /> : <ResetPasswordDesktop />}</>;
};

export default ResetPasswordPage;

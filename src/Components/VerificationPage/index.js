import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import VerificationPageDesktop from "./VerificationPageDesktop";
import VerificationPageMobile from "./VerificationPage.Mobile";

const VerificationPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>{matches ? <VerificationPageMobile /> : <VerificationPageDesktop />}</>
  );
};

export default VerificationPage;

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ConfirmedVerificationDesktop from "./ConfirmedVerificationDesktop";
import ConfirmedVerificationMobile from "./ConfirmedVerificationMobile";

const ConfirmedVerificationPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {matches ? (
        <ConfirmedVerificationMobile />
      ) : (
        <ConfirmedVerificationDesktop />
      )}
    </>
  );
};

export default ConfirmedVerificationPage;

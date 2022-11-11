import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContactUsDesktop from "./ContactUsDesktop";
import ContactUsMobile from "./ContactUsMobile";

const ContactUs = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return <>{matches ? <ContactUsMobile /> : <ContactUsDesktop />}</>;
};

export default ContactUs;

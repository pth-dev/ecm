import { Link as RouterLink } from "react-router-dom";

// material-ui
import { Link, Box } from "@mui/material";

// Import the logo
import logo from "~/assets/logo.svg";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return (
    <Box className="logo-section">
      <Link component={RouterLink} to="/">
        <img src={logo} alt="BIDV Logo" />
      </Link>
    </Box>
  );
};

export default LogoSection;

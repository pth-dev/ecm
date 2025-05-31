import { Container, Box, Typography } from "@mui/material";
import LoginForm from "../features/auth/components/LoginForm";
import BIDVLogo from "~/assets/logo.svg";

const LoginPage = () => {
  return (
    <Container maxWidth={false} disableGutters sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            mb: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={BIDVLogo}
            alt="BIDV ECM"
            sx={{ height: 60, mb: 2 }}
          />
          <Typography variant="h5" fontWeight="bold" color="#1C4B82">
            BIDV Enterprise Content Management
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Hệ thống quản lý tài liệu doanh nghiệp
          </Typography>
        </Box>

        <LoginForm />

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mt: 4, textAlign: "center" }}
        >
          © {new Date().getFullYear()} BIDV. Proof of Concept - Bản quyền thuộc
          về BIDV.
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;

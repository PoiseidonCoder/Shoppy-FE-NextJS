import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

const LoginPage = () => {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" type="email" />
      <TextField label="Password" variant="outlined" type="text" />
      <Button variant="contained">Login</Button>
      <Link component={NextLink} href="/auth/signup" className="self-center">
        Signup
      </Link>
    </Stack>
  );
};

export default LoginPage;

// import { logoutUser } from "@/services/actions/logoutUser";
// import { getUserInfo } from "@/services/auth.services";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  //   const userInfo = getUserInfo();
  const router = useRouter();

  //   const handleLogOut = () => {
  //     logoutUser(router);
  //   };
  return (
    <Stack direction="row" spacing={2}>
      <Button component={Link} href="/login">
        Register
      </Button>
      <Button component={Link} href="/login">
        Login
      </Button>
    </Stack>
  );
};

export default AuthButton;

// {userInfo?.userId ? (
//     <Button color="error" onClick={handleLogOut}>
//       Logout
//     </Button>
//   ) : (
//     <Button component={Link} href="/login">
//       Login
//     </Button>
//   )}

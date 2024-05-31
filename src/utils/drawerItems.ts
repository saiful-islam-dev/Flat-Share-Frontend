//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import TryIcon from "@mui/icons-material/Try";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import { DrawerItem, UserRole } from "@/type";
import { USER_ROLE } from "@/contants/role";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: GroupIcon,
        }
      );
      break;

    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Flats",
          path: `${role}/manage-flats`,
          icon: TryIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: MedicalInformationIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "My Flat Posts",
          path: `${role}/my-flats`,
          icon: DashboardIcon,
        },
        {
          title: "Post a Flat",
          path: `${role}/post-flat`,
          icon: DashboardIcon,
        },
        {
          title: "My Requests on Flats",
          path: `${role}/my-requests`,
          icon: DashboardIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...defaultMenus, ...roleMenus];
};

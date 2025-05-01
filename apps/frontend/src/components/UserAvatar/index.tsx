import { Box } from "@mui/material";

interface UserAvatarProps {
  avatar?: string;
  name: string;
}

// Reusable UserAvatar Component
const UserAvatar = ({ avatar, name }: UserAvatarProps) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
    <img
      src={avatar}
      alt={name}
      style={{
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "1px solid white",
        boxShadow: "0 0 2px rgba(0,0,0,0.3)",
      }}
    />
    <span style={{ fontSize: "14px" }}>{name}</span>
  </Box>
);

export default UserAvatar;

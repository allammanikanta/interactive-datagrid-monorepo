import { Typography } from "@mui/material";

import { HEADER, PRIMARY_COLOR } from "../../utils/constants";

const Header = () => {
  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{ m: 2, ml: 0, color: PRIMARY_COLOR }}
    >
      {HEADER}
    </Typography>
  );
};
export default Header;

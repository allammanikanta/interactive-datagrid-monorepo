import { Box } from "@mui/material";

import { FOOTER_MESSAGE, PRIMARY_COLOR } from "../../utils/constants";

export const Footer = () => {
  return (
    <Box
      sx={{
        fontSize: 12,
        fontStyle: "Italic",
        display: "flex",
        justifyContent: "flex-end",
        color: PRIMARY_COLOR,
      }}
    >
      {FOOTER_MESSAGE}
    </Box>
  );
};

export default Footer;

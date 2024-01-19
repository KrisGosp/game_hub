import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      width={{
        sm: "500px",
        md: "370px",
        lg: "270px",
        xl: "270px",
      }}
      height={{
        sm: "500px",
        md: "420px",
        lg: "400px",
        xl: "400px",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

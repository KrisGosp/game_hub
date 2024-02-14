import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const GameCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.2s ease-in-out",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

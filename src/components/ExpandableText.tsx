import { Button } from "@chakra-ui/react";
import { useState } from "react";

const ExpandableText = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);

  const output = text.length > 300 ? text.slice(0, 300) : text;

  return (
    <div>
      {expanded ? text : output + "..."}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        marginX={5}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default ExpandableText;

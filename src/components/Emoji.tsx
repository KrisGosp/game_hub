import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

const Emoji = ({ rating }: { rating: number }) => {
  if (rating < 3) return null;

  const emojiMap: { [key: string]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "perfect", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;

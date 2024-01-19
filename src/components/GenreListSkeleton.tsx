import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack marginY={5}>
      <Skeleton boxSize="40px" borderRadius={8} />
      <SkeletonText />
    </HStack>
  );
};

export default GenreListSkeleton;

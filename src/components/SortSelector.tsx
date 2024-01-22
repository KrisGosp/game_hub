import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        choose category
      </MenuButton>
      <MenuList>
        <MenuItem>asda</MenuItem>
        <MenuItem>ada</MenuItem>
        <MenuItem>asdadsada</MenuItem>
        <MenuItem>dda</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

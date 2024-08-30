import {
  Box,
  useDisclosure,
  useColorModeValue,
  Flex,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  Button,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink, Outlet } from "react-router-dom";

const Links = [
  { url: "/", name: "Chakra-UI" },
  { url: "/color", name: "Color" },
  { url: "/to-do-list", name: "To do List" },
  { url: "/stop-watch", name: "Stop watch" },
  { url: "/digital-clock", name: "Digital Clock" },
  { url: "/data-table", name: "Datatable" },
];

export function Baselayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.url} to={link.url}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.url} to={link.url}>
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
        <Outlet></Outlet>
      </Box>
    </>
  );

  // return (
  //   <>
  //     <div className="App">
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/">Chakra UI</Link>
  //           </li>
  //           <li>
  //             <Link to="/home">Home</Link>
  //           </li>
  //           <li>
  //             <Link to="/color">Color</Link>
  //           </li>
  //           <li>
  //             <Link to="/to-do-list">To do list</Link>
  //           </li>
  //           <li>
  //             <Link to="/stop-watch">Stop Watch</Link>
  //           </li>
  //           <li>
  //             <Link to="/digital-clock">Digital Clock</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //       <Outlet></Outlet>
  //     </div>
  //   </>
  // );
}

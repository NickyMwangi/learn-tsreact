import { FormControl, FormHelperText, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export const EmpCreate = () => {
  const handlesubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: "30%" }}
      h="100vh"
      justifyContent="center"
      onSubmit={handlesubmit}
    >
      <Heading>Employee Form</Heading>

      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input name="name" placeholder="Enter username" />
      </FormControl>

      <FormControl>
        <FormLabel>Email Address</FormLabel>
        <Input type="email" name="email" placeholder="Enter Email address" />
      </FormControl>

      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input type="number" name="phone" placeholder="Enter phone number" />
      </FormControl>
    </VStack>
  );
};

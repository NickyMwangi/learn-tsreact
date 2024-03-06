import { Tr, Td } from "@chakra-ui/react";

interface IEmployee {
  id: number;
  name: string;
  email: string;
  phone: number;
  active: boolean;
}

interface IEmployeeProps {
  employee: IEmployee;
  index: number;
}
export function Employee(props: IEmployeeProps) {
  const { employee, index } = props;
  const { id, name, email, phone, active } = employee;

  return (
    <Tr key={index}>
      <Td>{id}</Td>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{phone}</Td>
      <Td>{active}</Td>
    </Tr>
  );
}

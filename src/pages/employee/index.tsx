import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Employee } from "./mapRender";
import { EmployeeHook } from "./EmployeeHook";
import { Link } from "react-router-dom";
export default function EmployeeListing() {
  const { employees } = EmployeeHook();

  return (
    <>
      <Card my="20px">
        <CardHeader>
          <Heading size="md"> Employees Listing</Heading>
        </CardHeader>
        <CardBody>
          <div>
            <Link className="primary" to="create">
              {" "}
              Add new (+)
            </Link>
          </div>
          <TableContainer>
            <Table size="m" variant="simple">
              <TableCaption>Employee data</TableCaption>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Phone</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {employees.map((item, i) => (
                  <Employee employee={item} index={i} />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </>
  );
}

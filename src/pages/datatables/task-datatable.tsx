import {
  Box,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import DATA from "../../data";
import { EditableCell } from "./editable-cell";
import { DropdownCell } from "./dropdown-cell";

// an array of columns definitions
const tblColumns = [
  {
    accessorKey: "task",
    header: "Task",
    // size: 225, Can define column size
    cell: EditableCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: DropdownCell,
  },
  {
    accessorKey: "due",
    header: "Due Date",
    cell: (props: any) => <p>{props.getValue()?.toLocaleTimeString()}</p>,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (props: any) => <p>{props.getValue()}</p>,
  },
];

export const TaskDataTable = () => {
  const [data, setData] = useState(DATA);
  const dataTable = useReactTable({
    data,
    columns: tblColumns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex: number, columnId: any, value: any) =>
        setData(
          (
            prev //map through the previous data
          ) =>
            prev.map((row, index) =>
              index === rowIndex // check if the current row is equal to update row
                ? {
                    ...prev[rowIndex],
                    [columnId]: value,
                  }
                : row
            )
        ),
    },
  });
  return (
    <Box mx="auto" px={6} pt={2} fontSize={"sm"}>
      <Heading mb={10}>Tanstack Table</Heading>
      <Box>
        <Table variant="striped" size="sm" colorScheme="blackAlpha">
          <Thead>
            {dataTable.getHeaderGroups().map((headerGroup) => {
              return (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map((n) => {
                    return (
                      <Th key={n.id}>
                        {flexRender(n.column.columnDef.header, n.getContext())}
                      </Th>
                    );
                  })}
                </Tr>
              );
            })}
          </Thead>
          <Tbody>
            {dataTable.getRowModel().rows.map((rowEl) => {
              return (
                <Tr key={rowEl.id}>
                  {rowEl.getVisibleCells().map((cellEl) => {
                    return (
                      <Td h="52px" key={cellEl.id}>
                        {flexRender(
                          cellEl.column.columnDef.cell,
                          cellEl.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

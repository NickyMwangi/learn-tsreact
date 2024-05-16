import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const EditableCell = ({ getValue, row, column, table }: any) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      value={value}
      variant="filled"
      onChange={(e) => {
        setValue(e.target.value);
        onBlur();
      }}
      size="md"
      w="100%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    />
  );
};

import { FC } from 'react';
import { Table } from '@radix-ui/themes';

const DataTable: FC<{
  data: {
    id: string;
    createdAt: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
  }[];
}> = ({ data }) => {
  if (!data || !data.length) return null;

  return (
    <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Username</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Last name</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((item) => (
          <Table.Row key={item.id}>
            <Table.RowHeaderCell>{item.username}</Table.RowHeaderCell>
            <Table.Cell>{item.email}</Table.Cell>
            <Table.Cell>{item.firstName}</Table.Cell>
            <Table.Cell>{item.lastName}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default DataTable;

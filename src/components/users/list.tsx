import {
  IResourceComponentsProps,
  GetListResponse,
  useMany,
} from "@pankod/refine-core";
import {
  List,
  Table,
  TextField,
  useTable,
  getDefaultSortOrder,
  DateField,
  Space,
  EditButton,
  DeleteButton,
  useSelect,
  TagField,
  FilterDropdown,
  Select,
  ShowButton,
} from "@pankod/refine-antd";
import { IUser } from "src/interfaces";

export const UserList: React.FC<
  IResourceComponentsProps<GetListResponse<IUser>>
> = ({ initialData }) => {
  const { tableProps, sorter } = useTable<IUser>({
    queryOptions: {
      initialData,
    },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          key="id"
          title="ID"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("id", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="first_name"
          key="first_name"
          title="First Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("first_name", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="last_name"
          key="last_name"
          title="Last Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("last_name", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="email"
          key="email"
          title="Email At"
          render={(value) => <TextField value={value}/>}
          defaultSortOrder={getDefaultSortOrder("email", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="login_count"
          key="login_count"
          title="Login Count"
          render={(value) => <TextField value={value}/>}
          defaultSortOrder={getDefaultSortOrder("login_count", sorter)}
          sorter
        />
        <Table.Column
          dataIndex="last_signed_in"
          key="last_signed_in"
          title="Last Signed in"
          render={(value) => <DateField value={value} format="LLL" />}
          defaultSortOrder={getDefaultSortOrder("login_count", sorter)}
          sorter
        />
      </Table>
    </List>
  );
};

import type { ColumnsType } from "antd/es/table";
import type { IUser } from "../types/User";
import Table from "antd/es/table";

interface PropTypes {
  listData: IUser[];
}

const TableUser = (props: PropTypes) => {
  const { listData } = props;

  const columns: ColumnsType<IUser> = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Umur",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Alamat",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "No. Telepon 1",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "No. Telepon 2",
      dataIndex: "cell",
      key: "cell",
    },
    {
      title: "Gambar",
      dataIndex: "picture",
      key: "picture",
      align: "center",
      render: (pictures: string[]) => (
        <img
          style={{
            borderRadius: "20px",
          }}
          src={pictures[0]}
          alt="gambar"
        />
      ),
    },
  ];

  return <Table columns={columns} dataSource={listData} pagination={false} />;
};

export default TableUser;

import { Tooltip } from "antd";
import { ColumnsType } from "antd/lib/table";

export const ColumnsTable = (): any[] => {
  const columnsDrivers: ColumnsType = [
    {
      title: "Nome",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      sorter: true,
    },
    {
      title: "Telefone",
      dataIndex: "phone",
      key: "phone",
      fixed: "left",
      sorter: true,
    },
    {
      title: "CPF",
      dataIndex: "cpf",
      key: "cpf",
      fixed: "left",
      sorter: true,
    },
    {
      title: "Experiência",
      dataIndex: "experience",
      width: 300,
      key: "experience",
      fixed: "left",
      sorter: true,
      render: (registro: string) => {
        const isTruncated = registro.length > 35;
        const truncatedText = isTruncated
          ? `${registro.substring(0, 35)}...`
          : registro;

        return (
          <Tooltip title={isTruncated ? registro : ""} placement="bottom">
            <span>{truncatedText}</span>
          </Tooltip>
        );
      },
    },
    {
      title: "E-Mail",
      dataIndex: "email",
      key: "email",
      fixed: "left",
      sorter: true,
    },
    {
      title: "Veiculo",
      dataIndex: "vehicleType",
      key: "vehicleType",
      fixed: "left",
      sorter: true,
    },
    {
      title: "Veiculo",
      dataIndex: "vehicleType",
      key: "vehicleType",
      fixed: "left",
      sorter: true,
    },
    {
      title: "Marca do Veiculo",
      dataIndex: "vehicleBrand",
      key: "vehicleBrand",
      fixed: "left",
      sorter: true,
    },
    {
      title: "Ano do Veiculo",
      dataIndex: "vehicleYear",
      key: "vehicleYear",
      fixed: "left",
      sorter: true,
    },
  ];

  return columnsDrivers;
};

import { DriversProps } from "~/lib/services/drivers";
import { Table } from "antd";
import React, { FC, ReactElement } from "react";

import { ColumnsTable } from "./columns";

interface ListaProps {
  data: Array<DriversProps>;
  isValidating: boolean;
}

const Lista: FC<ListaProps> = ({ data, isValidating }): ReactElement => {
  return (
    <Table
      bordered
      columns={ColumnsTable()}
      loading={isValidating}
      dataSource={data}
    />
  );
};

export default Lista;

import { Card } from "~/components";
import Breadcrumb from "~/components/Breadcrumb";
import useDriversService from "~/lib/services/drivers";
import { isArray } from "lodash";
import React, { FC, ReactElement } from "react";
import useSWR from "swr";

import Lista from "../Lista";

const BreadcrumbData = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "Motoristas",
    link: "/home/drivers",
  },
];

const Pagina: FC = (): ReactElement => {
  const service = useDriversService();

  const { data, isValidating, mutate } = useSWR("/drivers", async () =>
    service.get()
  );

  const listDrivers = isArray(data) ? data : [];

  return (
    <>
      <Breadcrumb data={BreadcrumbData} />

      <Card title="Motoristas">
        <Lista data={listDrivers} isValidating={isValidating} />
      </Card>
    </>
  );
};

export default Pagina;

import { Breadcrumb as BreadcrumbAntd } from "antd";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

import S from "./styles";

interface BreadcrumbSubProps {
  title: string;
  link: string;
  active?: boolean;
}

interface BreadcrumProps {
  data: BreadcrumbSubProps[];
}

const Breadcrumb: FC<BreadcrumProps> = ({ data }): ReactElement => (
  <S.Breadcrumb>
    {data.map((item) => (
      <BreadcrumbAntd.Item
        key={item.title}
        className={item.active && "active-breadcrumb"}
      >
        <Link href={item.link}>{item.title}</Link>
      </BreadcrumbAntd.Item>
    ))}
  </S.Breadcrumb>
);

export default Breadcrumb;

import { useLocation } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const HistoryBreadcrumb = () => {
  const { state } = useLocation();

  const renderFromUrl = () => {
    if (state.includes("/product")) {
      const productName = state
        .split("/")
        .pop()
        .split("-")
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return <BreadcrumbLink href={state}>{productName}</BreadcrumbLink>;
    }

    return <BreadcrumbLink href="/">Home</BreadcrumbLink>;
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>{renderFromUrl()}</BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <BreadcrumbPage>Histórico de compras</BreadcrumbPage>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

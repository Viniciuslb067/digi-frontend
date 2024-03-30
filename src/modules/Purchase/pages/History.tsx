import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatDate } from "@/utils/date";
import useGetPurchases from "@/services/Purchase/queries/useGetPurchases";
import { HistoryBreadcrumb, HistoryHeader, ProductItem } from "../components";

const History = () => {
  const { data: response } = useGetPurchases();

  return (
    <div className="flex flex-col gap-4">
      <HistoryBreadcrumb />
      <HistoryHeader />
      <Accordion type="single" collapsible className="w-full">
        {response?.data?.map((item) => (
          <AccordionItem key={item.id} value={item.id.toString()}>
            <AccordionTrigger>
              <div className="flex flex-row gap-4 items-center justify-center">
                <h3 className="text-sm lg:text-md">Compra #{item.id}</h3>
                <h6 className="text-gray-400 font-light text-sm lg:text-md">
                  {formatDate(item.createdAt)}
                </h6>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              {item?.products?.map((product) => (
                <ProductItem key={product.slug} product={product} />
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default History;

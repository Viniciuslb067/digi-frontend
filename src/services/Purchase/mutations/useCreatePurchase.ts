import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

import { create } from "../api";
import { useCart } from "@/context/CartProvider/CardProvider";

export const useCreatePurchase = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { setCartDrawerOpen, clearCart } = useCart();

  return useMutation(create, {
    onSuccess: async () => {
      setCartDrawerOpen(false);

      navigate("/purchase-history");

      clearCart();

      toast.success("Compra realizada com sucesso!");
      await queryClient.invalidateQueries("purchases");
    },
  });
};

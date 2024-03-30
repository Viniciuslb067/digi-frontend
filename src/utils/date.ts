export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const formattedDate =
    newDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }) +
    " " +
    newDate.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return formattedDate;
};

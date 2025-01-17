import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
//Service
import { getNotifications } from "@services/notification.service";

export const useFechingNotification = () => {
  //Solicitud
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(10);
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["notificaciones"],
    queryFn: () => getNotifications({ offset: page, limit: countPerPage }),
  });

  return {
    data,
    isError,
    isLoading,
    isFetching,
  };
};

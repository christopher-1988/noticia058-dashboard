import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
//Service
import { getNotifications } from "@services/notification.service";

export const useFechingNotification = () => {
  //Solicitud
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(10);
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["notificaciones"],
    queryFn: () => getNotifications({ offset: page, limit: countPerPage }),
  });
  //
  const invalidateNotification = () => {
    queryClient.invalidateQueries({ queryKey: ["notificaciones"] });
  };
  return {
    data,
    isError,
    isLoading,
    isFetching,
    setPage,
    setCountPerPage,
    invalidateNotification,
  };
};

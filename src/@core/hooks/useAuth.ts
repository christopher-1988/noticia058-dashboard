import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, reset } from "@src/state/slice/user";
import { AppStore } from "@src/state/store";

export default function useAuth() {
  const dispatch = useDispatch();
  const session = useSelector((state: AppStore) => state.auth);

  const saveUser = useCallback(
    (item: unknown) => {
      // doLogin
      dispatch(createUser(item));
    },
    [dispatch]
  );

  const logout = useCallback(() => {
    dispatch(reset());
    // doLogout
  }, [dispatch]);

  return {
    session,
    saveUser,
    logout,
  };
}

import { useQuery } from "@tanstack/react-query";
import userService from "../../services/user.service";
import { useMemo, useState } from "react";
import type { IUser } from "../../types/User";

const useHome = () => {
  const [searchItem, setSearchItem] = useState("");

  const getUsers = async () => {
    const res = await userService.getAllUsers();
    return res.data.data;
  };

  const {
    data: dataUsers,
    isLoading: isLoadingUser,
    isRefetching: isRefetchingUser,
    isPending: isPendingUser,
    isSuccess: isSuccessUser,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  const filteredUsers = useMemo(() => {
    if (!dataUsers?.users) return [];
    return dataUsers.users.filter((user: IUser) =>
      `${user.name} ${user.email}`
        .toLowerCase()
        .includes(searchItem.toLowerCase())
    );
  }, [dataUsers, searchItem]);

  return {
    dataUsers,
    isLoadingUser,
    isRefetchingUser,
    isPendingUser,
    isSuccessUser,
    searchItem,
    setSearchItem,
    filteredUsers,
  };
};

export default useHome;

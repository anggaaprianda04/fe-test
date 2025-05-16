import { useQuery } from "@tanstack/react-query";
import userService from "../../services/user.service";

const useHome = () => {
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

  return {
    dataUsers,
    isLoadingUser,
    isRefetchingUser,
    isPendingUser,
    isSuccessUser,
  };
};

export default useHome;

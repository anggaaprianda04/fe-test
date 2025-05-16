import instance from "../utils/instance";

const userService = {
    getAllUsers: () => instance.get("/users"),
}

export default userService;
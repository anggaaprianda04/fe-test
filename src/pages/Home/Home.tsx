import useHome from "./useHome";
import TableUser from "../../components/Table";
import { Input } from "antd";
import type { ChangeEvent } from "react";

const Home = () => {
  const { isLoadingUser, searchItem, setSearchItem, filteredUsers } = useHome();

  return (
    <div>
      {isLoadingUser ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}>
            <Input
              style={{
                marginBottom: "20px",
                maxWidth: "25%",
              }}
              value={searchItem}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchItem(e.target.value)
              }
              placeholder="Search"
            />
          </div>
          <TableUser listData={filteredUsers} />
        </>
      )}
    </div>
  );
};

export default Home;

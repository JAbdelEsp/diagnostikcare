import Table from "@/components/Table";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "@/redux/slices/userSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [searchTerm, setSearchTerm] = useState("");
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return users.filter((user) => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      const email = user.email.toLowerCase();
      const search = searchTerm.toLowerCase();
      return fullName.includes(search) || email.includes(search);
    });
  }, [searchTerm, users]);

  const columns: any[] = [
    { field: "id", headerName: "Datos Generales", width: 150 },
    { field: "actions", headerName: "Acciones", width: 150 },
  ];
  return (
    <main className="container">
      <h1>Bienvenido a Diagnostikare</h1>
      <input
        datatest-id="user-item"
        type="text"
        placeholder="Buscar usuario..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="searchInput"
      />
      <Table columns={columns} rows={filteredUsers} />
    </main>
  );
}

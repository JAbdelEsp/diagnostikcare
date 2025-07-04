import { fetchUserById } from "@/redux/slices/userSlice";
import type { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DetailCard } from "../../styles/users";
import Preloader from "@/common/Loader";

export default function Detail() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = router.query;
  const { selectedUser, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUserById(Number(id)));
  }, [dispatch]);

  if (!id || isNaN(Number(id))) return <p>Loading...</p>;

  if (loading) {
    return <Preloader />;
  }
  if (!selectedUser) {
    return (
      <div>
        <h1>Usuario no encontrado</h1>
        <p>El usuario con el Id {id} no existe.</p>
      </div>
    );
  }

  return (
    <main className="container">
      <DetailCard datatest-id="user-detail">
        <img src={selectedUser.avatar} />
        <div>
          <h1>
            {selectedUser.first_name} {selectedUser.last_name}
          </h1>
          <p>Email: {selectedUser.email}</p>
          <p>ID: {selectedUser.id}</p>
        </div>
        <button className="btnBack" onClick={() => router.push("/")}>
          Regresar
        </button>
      </DetailCard>
    </main>
  );
}

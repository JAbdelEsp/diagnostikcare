import { BACKEND_BASE_URL } from "@/constant";
import { UserData } from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
  users: UserData[];
  selectedUser: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

// Llamada API con asyncThunk
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch(BACKEND_BASE_URL + "/api/users?page=1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });
  if (!res.ok) throw new Error("Error al cargar usuarios");
  const json = await res.json();
  return json.data;
});

export async function getUserById(id: number): Promise<UserData> {
  const res = await fetch(BACKEND_BASE_URL + `/api/users/${id}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });
  if (!res.ok) throw new Error("Error al obtener usuario");
  const json = await res.json();
  return json.data;
}

export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (id: number) => {
    return await getUserById(id);
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<UserData[]>) => {
          state.loading = false;
          state.users = action.payload;
        }
      )
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unknown Error";
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.selectedUser = null;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.selectedUser = null;
        state.error = action.error.message || "Error while fetching user";
      });
  },
});

export default usersSlice.reducer;

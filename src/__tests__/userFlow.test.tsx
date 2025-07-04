import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Table from "../components/Table";
import UserDetail from "../pages/users/[id]";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../redux/store"; // ajusta según la ubicación real

// Simular el comportamiento de router.push y router.query
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Flujo de navegación a detalle de usuario", () => {
  const mockPush = jest.fn();
  const mockQuery = { id: "1" };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      query: {},
    });
  });

  const columns = [
    { field: "avatar", headerName: "Avatar" },
    { field: "first_name", headerName: "Nombre" },
    { field: "email", headerName: "Correo" },
  ];

  const rows = [
    {
      id: 1,
      avatar: "/avatar1.png",
      first_name: "Juan",
      last_name: "Pérez",
      email: "juan@example.com",
    },
    {
      id: 2,
      avatar: "/avatar2.png",
      first_name: "Ana",
      last_name: "López",
      email: "ana@example.com",
    },
  ];

  it("navega y muestra datos de detalle al hacer clic en un usuario", async () => {
    render(<Table columns={columns} rows={rows} />);

    const userLink = screen.getByText("Juan Pérez");
    fireEvent.click(userLink);

    expect(mockPush).toHaveBeenCalledWith("/users/1");

    // Simula que la ruta cambia y se renderiza la vista de detalle
    (useRouter as jest.Mock).mockReturnValue({
      query: { id: "1" },
    });

    render(
      <Provider store={store}>
        <UserDetail />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Juan Pérez")).toBeInTheDocument();
      expect(screen.getByText("juan@example.com")).toBeInTheDocument();
    });
  });
});

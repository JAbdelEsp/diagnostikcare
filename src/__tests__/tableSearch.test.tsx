import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Table from "../components/Table";
import { useRouter } from "next/router";
import Home from "@/pages";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// Mocks
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/common/Image", () => ({
  Image: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("Input de búsqueda en tabla de usuarios", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
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
    {
      id: 3,
      avatar: "/avatar3.png",
      first_name: "Carlos",
      last_name: "Ramírez",
      email: "carlos@example.com",
    },
  ];

  it("filtra correctamente los usuarios al escribir en el input", async () => {
    render(<Table columns={columns} rows={rows} />);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const input = screen.getByPlaceholderText("Buscar usuario...");

    // Asegura que los tres están al inicio
    expect(screen.getByText("Juan Pérez")).toBeInTheDocument();
    expect(screen.getByText("Ana López")).toBeInTheDocument();
    expect(screen.getByText("Carlos Ramírez")).toBeInTheDocument();

    // Filtrar por "ana"
    fireEvent.change(input, { target: { value: "ana" } });

    await waitFor(() => {
      expect(screen.getByText("Ana López")).toBeInTheDocument();
      expect(screen.queryByText("Juan Pérez")).not.toBeInTheDocument();
      expect(screen.queryByText("Carlos Ramírez")).not.toBeInTheDocument();
    });
  });
});

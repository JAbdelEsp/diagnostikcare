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
      first_name: "John",
      last_name: "Doe",
      email: "john@doe.com",
    },
    {
      id: 2,
      avatar: "/avatar2.png",
      first_name: "Jane",
      last_name: "Doe",
      email: "jane@doe.com",
    },
    {
      id: 3,
      avatar: "/avatar3.png",
      first_name: "Charly",
      last_name: "Doe",
      email: "charly@doe.com",
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
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
    expect(screen.getByText("Charly Doe")).toBeInTheDocument();

    // Filtrar por "ana"
    fireEvent.change(input, { target: { value: "ana" } });

    await waitFor(() => {
      expect(screen.getByText("Jane Doe")).toBeInTheDocument();
      expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
      expect(screen.queryByText("Charly Doe")).not.toBeInTheDocument();
    });
  });
});

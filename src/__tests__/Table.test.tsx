// __tests__/Table.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "../components/Table";
import { useRouter } from "next/router";
// Mock de next/router
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Mock de tu componente de imagen
jest.mock("@/common/Image", () => ({
  Image: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe("Table component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
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
  ];

  it("renderiza encabezados de columnas", () => {
    render(<Table columns={columns} rows={rows} />);
    expect(screen.getByText("Avatar")).toBeInTheDocument();
    expect(screen.getByText("Nombre")).toBeInTheDocument();
    expect(screen.getByText("Correo")).toBeInTheDocument();
  });

  it("renderiza filas correctamente", () => {
    render(<Table columns={columns} rows={rows} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("navega al hacer clic en un nombre de usuario", () => {
    render(<Table columns={columns} rows={rows} />);
    const userLink = screen.getByText("John Doe");
    fireEvent.click(userLink);
    expect(mockPush).toHaveBeenCalledWith("/users/1");
  });
});

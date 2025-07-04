import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { DataGrid } from "./styles";
import { Image } from "@/common/Image";
import { SvgIcon } from "@/common/SvgIcon";
type TableProps = {
  columns: any[];
  rows: any[];
  onClickRow?: (id: string | number) => void;
};

type RowProps = {
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
  id: number;
};

export default function Table({ columns, rows, onClickRow }: TableProps) {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const rowsPerPage = 3;
  const dataIndex = columns.find((col) => col.field === "name")?.headerName;
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const paginatedRows = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return rows.slice(start, start + rowsPerPage);
  }, [rows, page]);
  const handleClick = (id: number) => {
    router.push(`/users/${id}`);
  };
  return (
    <>
      <DataGrid>
        <thead>
          <tr>
            {columns.map((column) => (
              <td key={column.field} style={{ width: column.width }}>
                {column.headerName}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((row: RowProps) => (
            <tr key={row.id} onClick={() => onClickRow && onClickRow(row.id)}>
              <td className="item" datatest-id="user-item">
                <Image src={row.avatar} alt="" />
                <button
                  datatest-id="user-item"
                  className="userLink"
                  onClick={() => handleClick(row.id)}
                >
                  {row.first_name + " " + row.last_name}
                </button>
                <span>{row.email}</span>
              </td>
              <td>
                <button onClick={() => router.push(`/users/${row.id}`)}>
                  <SvgIcon
                    src="edit-image-svgrepo-com.svg"
                    width="20px"
                    height="20px"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </DataGrid>
      <div className="pagination">
        <button
          className="iconButton"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <SvgIcon
            src="arrow-prev-small-svgrepo-com.svg"
            width="20px"
            height="20px"
          />
        </button>
        <span>
          Página {page} de {totalPages}
        </span>
        <button
          className="iconButton"
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <SvgIcon src="next-svgrepo-com.svg" width="20px" height="20px" />
        </button>
      </div>
    </>
  );
}

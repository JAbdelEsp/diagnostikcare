import styled from "styled-components";
export const DataGrid = styled("table")`
  margin: 2vh auto;
  width: 100%;
  background-color: transparent;
  button {
    border: none;
    background-color: transparent;
    color: var(--primary-color);
    font-size: 1.2rem;
    padding-top: 1rem;
    cursor: pointer;
  }
  .table {
    background: inherit;
  }
  thead > tr {
    display: grid;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
  }
  thead > tr {
    grid-template-columns: 2fr 1fr;
  }
  thead > tr > th {
    background-color: inherit;
    border-bottom: 2px solid var(--border-color);
    color: #333;
    font-weight: bold;
  }

  tbody > tr {
    display: grid;
    grid-template-columns: 2fr 1fr;
    margin-bottom: 14px;
    margin-top: 14px;
    background-color: var(--border-color);
    border-radius: 10px;
    padding: 10px;
    &:hover {
      background-color: white;
    }
  }

  tbody > tr > td {
    img {
      position: relative;
      max-width: 50px;
      float: left;
      margin-right: 15px;
    }
    button {
      margin-top: 12px;
    }
    img {
      border-radius: 50%;
    }
  }

  button {
    display: block;
    padding-top: 3px;
    margin-left: 60px;
    border: none;
    color: var(--primary-color);
    background-color: transparent;
    font-size: 1.2rem;
  }
`;

import styled from "styled-components";

export const DetailCard = styled("div")`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border: 2px solid var(--primary-color);
  padding: 3vh;
  border-radius: 10px;
  img {
    width: 240px;
    border-radius: 50%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
      filter: blur(2px);
    }
  }
  p {
    padding: 10px;
    font-size: 1.1vw;
  }
  button {
    width: 220px;
    margin-top: 2rem;
    background-color: var(--primary-color);
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button:hover {
    background-color: var(--secondary-color);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 440px) {
      grid-template-columns: 1fr;
      img { 
        width: 100%;
        display: block;
        margin: 0 auto;
        &:hover {
          transform: scale(1.1);
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
          filter: blur(2px);
        }
      }
      .btnBack {
        width: 100%;
        margin: 2vh auto;
  }
`;

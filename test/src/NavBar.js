import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #272424;
  padding: 0 calc(100vw / 10);

  div {
    display: flex;
    align-items: center;

    img {
      height: 24px;
      width: 24px;
    }

    h1 {
      margin-left: 10px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #272424;
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;

    div {
      img {
        height: 24px;
        width: 24px;
      }
    }

    a {
      margin-left: 10px;
      color: black;
      text-decoration: none;

      &:nth-child(4)::after {
        content: "|";
        margin-left: 10px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    div:nth-child(2) a {
      display: none;
    }
  }

  @media only screen and (min-width: 769px) {
    div:nth-child(2) div img {
      display: none;
    }
  }
`;

export default function Navbar() {
  return (
    <NavbarContainer>
      <div>
        <img src="../wave.png" alt="" />
        <h1>Wave Labs</h1>
      </div>
      <div>
        <a href="#">Kits</a>
        <a href="#">Projects</a>
        <a href="#">Research</a>
        <a href="#">Support</a>
        <a href="#">Login</a>
        <div>
          <img src="../bars.png" alt="" />
        </div>
      </div>
    </NavbarContainer>
  );
};

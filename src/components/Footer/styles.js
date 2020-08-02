import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  h2{
  padding: 10px;
  transition: 0.2s;
  }
  h2:hover{
  color: var(--primary);
  transition: 0.2s;
  }
`;

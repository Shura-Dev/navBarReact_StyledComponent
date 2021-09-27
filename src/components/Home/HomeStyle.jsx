import styled from '@emotion/styled'

export const Gridlayout = styled.div`
  height: 100vh;
  /* background-color: ${({ theme }) => theme.WhiteColor1}; */
  display: grid;
  /* color: ${({ theme }) => theme.WhiteColor1}; */
  grid-template-areas:
    "nav"
    "asideleft"
    "asideright"
    "footer";
  grid-template-rows: 60px 3fr 2fr 1fr;
  grid-template-columns: 1fr;

  @media screen and (min-width: ${({ theme }) => theme.Desktop}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 60px repeat(2, 1fr) 150px;
    grid-template-areas:
      "nav nav nav nav"
      "asideright asideright asideleft asideleft "
      "asideright asideright asideleft asideleft "
      "footer footer footer footer";
  }
`

export const Nav = styled.nav`
  grid-area: nav;
`
export const Asideleft = styled.aside`
  background-color: ${({ theme }) => theme.GrayColor1};
  grid-area: asideleft;
  `
export const Asideright = styled.aside`
background-color: ${({ theme }) => theme.GrayColor1};
grid-area: asideright;
`
export const Footer = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.BlackColor1};
`

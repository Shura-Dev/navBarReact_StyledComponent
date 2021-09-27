import styled from '@emotion/styled'

export const CONTAINER = styled.div`
  background-color: ${({ theme }) => theme.WhiteColor1};
  top: 0;
  position: fixed;
  height: 60px;
  width: 100%;
  color:${({ theme }) => theme.BlackColor1};
  display: flex;
  justify-content:space-between;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  
  & div{
    margin-left: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }

  ul{
    position: absolute;
    top: 30px;
    width: 100%;
    height: 95vh;
    background-color: ${({ theme }) => theme.GrayColor1};
    left: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    transition:  0.5s transform ease;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size:30px;
  @media screen and (min-width:${({ theme }) => theme.Desktop}){
    position: relative;
    top: 0;
    height: auto;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    background-color: transparent;
    justify-content: end;
    align-items: center;
    transform: translateX(0);
  }
  }
  li{
    text-decoration: none;
    list-style: none;
    margin: 0 10px;
  }
  span{
    font-size: 30px;
    margin-right: 30px;
    @media screen and (min-width:${({ theme }) => theme.Desktop}){
      display: none;
    }
  }
  `

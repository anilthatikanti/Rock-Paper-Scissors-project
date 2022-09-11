import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`
export const Heading = styled.h1`
  color: #ffffff;
`
export const ScoreNav = styled.div`
  border: 2px solid #ffffff;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  font-family: 'Bree Serif';
  font-weight: 400;
`
export const Score = styled.p`
  background-color: #ffffff;
  color: #000000;
  font-family: 'Roboto';
  width: 150px;
  height: 120px;
  border-radius: 8px;
  text-align: center;
  padding: 10px;
`
export const UnList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 50%;
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
`
export const ResultsContainer = styled.div`
  border: none;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  font-family: 'Bree Serif';
  font-weight: 400;
  margin-top: 50px;
`
export const Results = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  color: #ffffff;
`
export const Button = styled.button`
  background-color: #ffffff;
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  font-weight: 600;
`
export const RulesContainer = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

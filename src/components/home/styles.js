import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

import {shade} from 'polished'

export const App = styled.div`
  border: 1px solid black;
    position:fixed;
    width:100%;
    height:250vh;
    top:0px;
    left:0px;
    display: flex;
    justify-content: center;
    position: absolute;
    filter: blur(8px);
    -webkit-filter: blur(20px);
    /* https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg */
    background-image: url('https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg');

  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 10px 7px 15px 60px rgba(0,0,0,90);

`

export const HomeDiv = styled.div`
    position: absolute;
    margin: 30px 0px 30px 0px;
    padding: 0px 30px 0px 30px;
    background: rgba(0, 0, 0, 0.70);
    border-radius: 3vw;
    width: ${px2vw(930)};
    max-width: 900px;
    color: white;
    border: 2px solid rgba(0, 0, 0, 0.20);
    box-shadow: 0px 0px 10px 0px black;

    @media (max-width: 800px){
      width: 85vw;
    }

`;


export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 50px;
  header {
    display: flex;
    justify-content: center;
    .logo{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      img {
        width: 400px;
        @media(max-width: 700px){
          width: 70vw;
        }
      }
      h4 {
        margin-top: 5px;
        color: whitesmoke;
      }
    }
  }/* End Header */

  body {
    width: 100%;
    .search{
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 80px;
      input {
          @media(min-width: 700px){
            width: 310px;
            height: 50px;
          }
          @media(max-width: 700px){
            width: 50vw;
            height: 50px;
          }
            padding: 0 24px;
            border: 0;
            border-radius: 5px 0 0 5px;
            color: #3a3a3a;
            &::placeholder {
                color: #a8a8b3;
            }
      }

      button{
        
          @media(min-width: 700px){
            width: 210px;
            height: 50px;
          }
          @media(max-width: 700px){
            width: 20vw;
            height: 50px;
          }

            background: rgb(254, 197, 67);
            border-radius: 0 5px 5px 0;
            border: 0;
            color: #FFF;
            font-weight: bold;
            transition: background-color 0.2s;
            cursor: pointer;
             &:hover {
                background: ${shade(0.2, 'rgb(254, 197, 67)')}
            } 
      }
    }
  }
  .headerdiscove{
    display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 150px;
      margin-bottom: 50px;
  }

  .discover {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      
    }

    .list {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      
      div {
        width: 210px;
        height: 90%;
        display: flex;
        align-items: center;
        background: rgba(0, 0, 0, 0.40);
        flex-direction: column;
        max-width: 230px;
        text-align: center;
        padding: 2px 15px 20px 15px;
        margin-bottom: 50px;
        color: white;
        text-decoration:none;

        @media(max-width: 1000px){
          border-radius: 3vw;
        }

        @media(min-width: 1000px){
          border-radius: 1vw;
        }
        
        img {
          height: 280px;
          border-radius: 5%;
          margin: 10px 0 25px 0;
          @media(min-width: 1000px){
          border-radius: 1vw;
        }

     

      

        }
        &:hover {
            cursor: pointer;
            background: ${shade(0.2, 'rgb(254, 197, 67)')};

            img{
              transition: 1s;
              transform: scale(0.95);
            }

            h2{
              transition: 1s;
              transform: scale(1.1);
            }
            
        } 
      }


    }
  





`
import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

// body {
//   background: url(https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg) no-repeat center center fixed; 
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
// }

export const App = styled.div`
  border: 1px solid black;
    position:fixed;
    width:100%;
    height:180vh;
    top:0px;
    left:0px;
    display: flex;
    justify-content: center;
    position: absolute;
    filter: blur(8px);
    -webkit-filter: blur(20px);
    /* https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg */
    background-image: url(${props => props.background});

  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 10px 7px 15px 60px rgba(0,0,0,90);

`

export const PainelDiv = styled.div`
    position: absolute;
    margin: 30px 0px 30px 0px;
    background: rgba(0, 0, 0, 0.70);
    border-radius: 3vw;
    width: ${px2vw(930)};
    max-width: 900px;
    padding: 50px;
    color: white;
    border: 2px solid rgba(0, 0, 0, 0.20);
    box-shadow: 0px 0px 10px 0px black;

    @media (max-width: 1000px){
      width: 90vw;
      border-radius: 5vw;
      padding: 10px;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      margin-left: 30px;
      padding: 20px 40px 0px 0px;
      img {
        width: 220px;
      }
    }

`;


export const Container = styled.div`
  height: 100%;
  margin-top: 50px;

  .titlemovie {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 2vw;
    
    @media(min-width: 1000px){
      margin-bottom: 50px;
      font-size: 1vw;
    }
  }

  header {
    display: flex;
    @media(max-width: 1000px){
      flex-direction: column;
      & :nth-child(1) { order: 1; }
    }
    
  }

  .body {
    display: flex;
    flex-direction: column;

    .dateandtime { 
      display: flex;
      justify-content: center;
      margin-top: 40px;
      @media (min-width: 800px){
        font-size: 24px;
      }

      div + div {
        margin-left: 50px;
      } 

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        small {
          margin-left: 5px;
        }
      }
    }

    .plot {
      margin: 30px 40px 0px 40px;
      font-size: 1rem;
      text-align: justify;
      text-align-last: justify;
      @media (min-width: 800px){
        margin: 20px 5vw 0px 5vw;
      }
      p {
        display: flex;
      }
    }
    .about-production{
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        margin-top: 50px;
        font-size: 2.5vw;
        @media (max-width: 800px){
          font-size: 4vw;
        }
        
      .people {
        display: flex;
        max-width: 50%;
        flex-direction: column;
        font-size: 18px;
        @media (max-width: 800px){
          font-size: 2vw;
        }
        p + p {
            margin-top: 5px;
        }
      }
      .language {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        @media (max-width: 800px){
          font-size: 2vw;
        }
        p + p {
          margin-top: 5px;
        }   
      }
    } /* end about-production */

    .actors {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 20px 0px 20px;
      font-size: 20px;
      text-align-last: center;
      
    }
    .boxoffice {
      display:flex;
      justify-content: center;
      margin-top: 40px;
    }
    .awards{
      width: 100%;
      margin-top: 70px;
      display: flex; 
      justify-content: center;
      font-size: 28px;
      @media (max-width: 800px){
        font-size: 3vw;
      }
      h5 {
        margin-left: 10px;
      }
    }

    .scores {
      display: flex;
      justify-content: space-around;
      margin-top: 70px;
      div {
        display: flex;
        align-items: center;
        img {
          width: 7vw;
          margin-right: 10px;
        }
        span {
          margin-left: 10px;
        }
        #imdb{
          width: 5vw;
        }
      }
    }


  } /* End Body */




`

export const Poster = styled.div`
  display: flex;
  justify-content: center;
  img {
    border-radius: 5%;
    @media(max-width: 1700px){
      height: 30vw;
      min-height: 350px;
    }
    @media(min-width: 1700px){
      height: 400px;
      
    }
  }
`

export const AboutMovie = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  @media(max-width: 1000px){
    flex-direction: column-reverse;
  }

  
  


  .head-movie {
      display: flex;
      align-items: center;
      text-align: center;
      flex-direction: column;
      justify-content: space-evenly;

      .stars {
        margin-left: 5px;
        font-size: 48px;
        @media (min-width: 1400px){
          font-size: 90px;
          margin: 15px 0 15px 20px;
        }
        @media(max-width: 1000px){

          margin: 15px 0 15px 0;
        }
      }

      small {
        font-size: 28px;
        @media (max-width: 800px){
          font-size: 22px;
          word-wrap: break-word;
        }
      }

  }  

  
  .infos {
    display: flex;
    justify-content: center;
    .genres {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      @media(max-width: 1000px){
        margin-bottom: 15px;
        div{
          margin-left: 10px;
        }
      }
      @media(min-width: 1000px){
        flex-direction: column;
        div{
          margin-left: 10px;
        }
      }

      div {
        background: rgba(0, 0, 0, 0.50);
        padding: 10px;
        border-radius: 3vw;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        @media(max-width: 1000px){
          width: 15vw;
          min-width: 100px;
        }
        @media(min-width: 1000px){
          width: 300px;
        }

      }
    }
  }
 



`

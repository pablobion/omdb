import React, {useState} from 'react'

import {
     App,
     Container,
     HomeDiv,
} from './styles'

import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import logo from '../../assets/logo.png'

import {config} from '../../discover/movies.js'

function Index(props) {
     const [movie, setMovie] = useState('')

     return (
          <>
          <App/>
          <HomeDiv>
               <Container>
                   <header>
                        <div className="logo">
                              <img src={logo}></img>
                              <h4><i><sub>Search the best movies</sub></i></h4>
                        </div>
                   </header>
                   <body>
                         <div className='search'>
                              <form>
                              <input value={movie} onChange={(e) => setMovie(e.target.value)} placeholder='Search OMDb'></input>
                             <Link to={`/movie/${movie}`}>
                              <button type="submit"><FaSearch style={{marginRight: 20}}/>Search</button>
                              </Link>
                              </form>
                         </div>
                         
                   </body>
                   
                   <div className="headerdiscove">
                         <h1>Discover</h1>
                   </div>
                   <div className="discover">
                        <div className="list">
                        <Link style={{color: "transparent"}} to={`/movie/Avengers` }>
                             <div>
                                   <img src='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg'></img>
                                   <h2>The Avengers</h2>                                  
                             </div>
                         </Link>
                         <Link style={{color: "transparent"}} to={`/movie/joker` }>
                             <div>
                                  <img src='https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'></img>
                                        <h2>Joker</h2>                                  
                             </div>
                         </Link>
                         <Link style={{color: "transparent"}} to={`/movie/Interstellar` }>
                             <div>
                                  <img src='https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'></img>
                                        <h2>Interstellar</h2>                                  
                             </div>
                         </Link>
                         <Link style={{color: "transparent"}} to={`/movie/the%20dark%20knight` }>
                             <div>
                                  <img src='https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'></img>
                                        <h2>Batman</h2>                                  
                             </div>
                         </Link>
                         <Link style={{color: "transparent"}} to={`/movie/The+Wolf+of+Wall+Street` }>
                             <div>
                                  <img src='https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg'></img>
                                        <h2>The Wolf of Wall Street</h2>                                  
                             </div>
                         </Link>
                         <Link style={{color: "transparent"}} to={`/movie/hunger+games` }>
                             <div>
                                  <img src='https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_UX182_CR0,0,182,268_AL_.jpg'></img>
                                        <h2>Hunger Games</h2>                                  
                             </div>
                         </Link>
                         <Link style={{color: "transparent"}} to={`/movie/jurassic+park` }>
                             <div>
                                  <img src='https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg'></img>
                                        <h2>Jurassic Park</h2>                                  
                             </div>
                         </Link>
                         <Link style={{color: "transparent"}} to={`/movie/Captain+Marvel` }>
                             <div>
                                  <img src='https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_UX182_CR0,0,182,268_AL_.jpg'></img>
                                        <h2>Captain Marvel</h2>                                  
                             </div>
                         </Link>
                        </div>
                   </div>


               </Container>
          </HomeDiv>
          </>
     )
}


export default Index


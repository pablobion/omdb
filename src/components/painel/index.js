import React, {useEffect, useState} from 'react'

import {
     App,
     Container,
     PainelDiv,
     Poster,
     AboutMovie,

} from './styles'

import { useRouteMatch, Link, Redirect }  from 'react-router-dom'
import axios from 'axios'

import { FaArrowLeft,FaStar, FaStarHalfAlt, FaRegStar, FaClock, FaCalendarAlt,FaTrophy } from 'react-icons/fa'

import rotten from '../../assets/rotten.png'
import meta from '../../assets/meta.png'
import imdb from '../../assets/imdb.png'
import logo from '../../assets/logo.png'

function Index(props) {
     const [json, setJson] = useState('')
     const [rimdb, setRimdb] = useState('n/a')
     const [rrotten, setRroutten] = useState('n/a')
     const [rmeta, setRmeta] = useState('n/a')
     const [genres, setGenres] = useState([])
     const [stars, setStars] = useState([])
     const [redirect, setRedirect] = useState(false)
     const [poster, setPoster] = useState('https://media.giphy.com/media/g0gEi7yMBUEol0Kvkx/giphy.gif')
     const [moviename, setMoviename] = useState('Movie not found!')

     function countStars(stars){
          let star = stars.slice(0,1) // pega o inteiro
          let half = `0.${stars.slice(2,3)}` // pega depois do .
     
          let count = (star/2)
          let response = []
          console.log(stars)

          if(+half > 0.5){
               for(let i = 0; i < count; i++){
                    response.push(<FaStar color='rgb(254, 197, 67)' />)
               }
               response.push(<FaStarHalfAlt color='rgb(254, 197, 67)' />)

          }else {
               for(let i = 0; i < count; i++){
                    response.push(<FaStar color='rgb(254, 197, 67)' />)
               }
          }
          if(response.length != 5){
               const faltantes = 5 - response.length
               for(let i = 0; i < faltantes; i++){
                    response.push(<FaRegStar color='whitesmoke' />)
               }
          }

          return response
     }

     const { params } = useRouteMatch()

     useEffect( () => {
          const response = axios.get(`http://www.omdbapi.com/?t=${params.name}&apikey=5ef9972e`)
               .then(response => {
                    if(response.data.Error == "Movie not found!"){
                         alert('Movie not found!')
                         return
                    }
                         setJson(response.data)
                         setPoster(response.data.Poster)
                         setMoviename(response.data.Title)
                         if(response.data.Ratings){
                              if(response.data.Ratings[0]){
                                   setRimdb(response.data.Ratings[0].Value)
                              }
                              if(response.data.Ratings[1]){
                                   setRroutten(response.data.Ratings[1].Value)
                              }
                              if(response.data.Ratings[2]){
                                   setRmeta(response.data.Ratings[2].Value)
                              }
                         }
                         let auxgenres = response.data.Genre
                         auxgenres = auxgenres.replace(/ /g, '').split(',') // remove os espaços em branco  exemplo | "drama, mystery, drama"  para "drama,mystery,drama" e  depois faz um split separando pela ,
                         setGenres(auxgenres)
                           if(response.data.Ratings.length != 0 ){
                                setStars(countStars(response.data.Ratings[0].Value))
                          }
                 
                    
               })
     }, [])
     
     if (redirect) {
          setRedirect(false)
          return <Redirect to='/'/>;
     }

     return (
          <>
          
          <App background={json.Poster}>
               </App>
          <PainelDiv>
               <Link to={'/'}>
                    <div className="nav">      
                              <FaArrowLeft size={24}>Back</FaArrowLeft>
                              <img src={logo} alt="logo"/>
                    </div>
               </Link>
               <Container>
                    <div className="titlemovie">
                         <h1 className='title'>{moviename}</h1>
                    </div>
                    <header>
                         <Poster>
                              <img src={poster}/>
                         </Poster>
                         <AboutMovie>
                              <div className='head-movie'>
                                   <div className='stars'>
                                        {stars.map(star =>(star))}
                                   </div>
                                   <small>{json.Production}</small>
                              </div>
                              <div className='infos'>
                                   <div className="genres">
                                        {genres.map(elem =>(<div><span>{elem}</span></div>))}
                                   </div>

                              </div>
                         </AboutMovie>
                    </header>
                    <div className='body'>
                         <div className='dateandtime'>
                                   <div>
                                        <span><FaCalendarAlt size="15" color='whitesmoke'/></span>
                                        <small>{json.Released}</small>
                                   </div>
                                   <div>
                                        <span><FaClock size="15" color='whitesmoke'/></span>
                                        <small>{json.Runtime}</small>
                                   </div>
                         </div>
                         <div className="plot">
                              <p>{json.Plot}</p>
                         </div>
                         <div className='about-production'>
                              <div className='people'>
                                   <p>Director: {json.Director}</p>
                                   <p>Writer: {json.Writer}</p>
                              </div>
                              <div className="language">
                                   <p>Country: {json.Country}</p>
                                   <p>Language: {json.Language}</p>
                              </div>
                         </div>
                         <div className="actors">
                              <h6>Actors: {json.Actors}</h6>
                         </div>
                         <div className="boxoffice">
                              <h3>Box Office: {json.BoxOffice}</h3>
                         </div>
                         <div className="awards">
                              <FaTrophy color='rgb(254, 197, 67)'/>
                              <h5>{`${json.Awards}`}</h5>
                         </div>
                         <div className="scores">
                              <div className="imdb">
                                   <img id='imdb' src={meta} alt='meta icon'></img>
                                   <span>{rmeta}</span>
                              </div>
                              <div className="rotten">
                                   <img src={rotten} alt='rotten icon'></img>
                                   <span>{rrotten}</span>
                              </div>
                              <div className="meta">
                                   <img src={imdb} alt='imdb icon'></img>
                                   <span>{rimdb}</span>
                              </div>
                         </div>
                    </div>


               </Container>
          </PainelDiv>
          </>
     )
}


export default Index


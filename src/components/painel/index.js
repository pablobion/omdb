import React, { useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import {
    App,
    Container,
    PainelDiv,
    Poster,
    AboutMovie,

} from './styles'

import { useRouteMatch, Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import { FaArrowLeft, FaStar, FaStarHalfAlt, FaRegStar, FaClock, FaCalendarAlt, FaTrophy } from 'react-icons/fa'

import rotten from '../../assets/rotten.png'
import meta from '../../assets/meta.png'
import imdb from '../../assets/imdb.png'
import logo from '../../assets/logo.png'

function Index(props) {
    const [json, setJson] = useState('')
    const [rimdb, setRimdb] = useState('')
    const [rrotten, setRroutten] = useState('')
    const [rmeta, setRmeta] = useState('')
    const [genres, setGenres] = useState([])
    const [stars, setStars] = useState([])
    const [redirect, setRedirect] = useState(false)
    const [poster, setPoster] = useState('')
    const [moviename, setMoviename] = useState('')

    function countStars(stars) {
        let star = stars.slice(0, 1) // pega o inteiro
        let half = `0.${stars.slice(2, 3)}` // pega depois do .

        let count = (star / 2)
        let response = []
        console.log(stars)

        if (+half > 0.5) {
            for (let i = 0; i < count; i++) {
                response.push(<FaStar color='rgb(254, 197, 67)' />)
            }
            response.push(<FaStarHalfAlt color='rgb(254, 197, 67)' />)

        } else {
            for (let i = 0; i < count; i++) {
                response.push(<FaStar color='rgb(254, 197, 67)' />)
            }
        }
        if (response.length != 5) {
            const faltantes = 5 - response.length
            for (let i = 0; i < faltantes; i++) {
                response.push(<FaRegStar color='whitesmoke' />)
            }
        }

        return response
    }

    const { params } = useRouteMatch()

    useEffect(() => {
        const response = axios.get(`https://www.omdbapi.com/?t=${params.name}&apikey=5ef9972e`)
            .then(response => {
                if (response.data.Error == "Movie not found!") {
                    alert('Movie not found!')
                    return
                }
                setJson(response.data)
                setPoster(response.data.Poster)
                setMoviename(response.data.Title)
                if (response.data.Ratings) {
                    if (response.data.Ratings[0]) {
                        setRimdb(response.data.Ratings[0].Value)
                    }
                    if (response.data.Ratings[1]) {
                        setRroutten(response.data.Ratings[1].Value)
                    }
                    if (response.data.Ratings[2]) {
                        setRmeta(response.data.Ratings[2].Value)
                    }
                }
                let auxgenres = response.data.Genre
                auxgenres = auxgenres.replace(/ /g, '').split(',') // remove os espaços em branco  exemplo | "drama, mystery, drama"  para "drama,mystery,drama" e  depois faz um split separando pela ,
                setGenres(auxgenres)
                if (response.data.Ratings.length != 0) {
                    setStars(countStars(response.data.Ratings[0].Value))
                }


            })
    }, [])

    if (redirect) {
        setRedirect(false)
        return <Redirect to='/' />;
    }

    return (
        <>


            {json.Poster ? (
                <App background={json.Poster} />
            ) : (
                    <App background='https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg' />
                )}


            <PainelDiv>
                <Link to={'/'}>
                    <div className="nav">
                        <FaArrowLeft size={24}>Back</FaArrowLeft>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <Container>
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <div className="titlemovie">
                            {moviename ? (
                                <h1 className='title'>{moviename}</h1>
                            ) : (
                                    <Skeleton className='title' duration={2} height={30} width={250} />
                                )}
                        </div>
                        <header>
                            <Poster>
                                {poster ? (
                                    <img src={poster} />
                                ) : (
                                        <Skeleton duration={2} height={350} width={250} />
                                    )}
                            </Poster>
                            <AboutMovie>
                                <div className='head-movie'>
                                    <div className='stars'>
                                        {stars.map(star => (star))}
                                    </div>

                                    {json.Production ? (
                                        <small>{json.Production}</small>
                                    ) : (
                                            <Skeleton duration={2} height={70} width={230} />
                                        )}
                                </div>
                                <div className='infos'>
                                    <div className="genres">

                                        {json.Genre ? (
                                            genres.map(elem => (<div><span>{elem}</span></div>))
                                        ) : (
                                                <>
                                                    <Skeleton style={{ marginBottom: 15, borderRadius: 5 }} duration={2} height={50} width={250} />
                                                    <Skeleton style={{ marginBottom: 15, borderRadius: 5 }} duration={2} height={50} width={250} />
                                                    <Skeleton style={{ marginBottom: 15, borderRadius: 5 }} duration={2} height={50} width={250} />
                                                </>
                                            )}
                                    </div>

                                </div>
                            </AboutMovie>
                        </header>
                        <div className='body'>
                            <div className='dateandtime'>
                                <div>
                                    {json.Released ? (
                                        <>
                                            <span><FaCalendarAlt size="15" color='whitesmoke' /></span>
                                            <small>{json.Released}</small>
                                        </>
                                    ) : (
                                            <Skeleton style={{ width: '13vh', borderRadius: 5 }} duration={2} height={35} />
                                        )}
                                </div>
                                <div>
                                    {json.Released ? (
                                        <>
                                            <span><FaClock size="15" color='whitesmoke' /></span>
                                            <small>{json.Runtime}</small>
                                        </>
                                    ) : (
                                            <Skeleton style={{ width: '13vh', borderRadius: 5 }} duration={2} height={35} />
                                        )}
                                </div>
                            </div>
                            <div className="plot">

                                {json.Plot ? (
                                    <p>{json.Plot}</p>
                                ) : (
                                        <Skeleton style={{ flex: 1, height: '15vh' }} duration={2} />
                                    )}
                            </div>
                            <div className='about-production'>
                                <div className='people'>

                                    {json.Director ? (
                                        <p>Director: {json.Director}</p>
                                    ) : (
                                            <Skeleton style={{ width: '15vw' }} duration={2} height={20} />
                                        )}

                                    {json.Writer ? (
                                        <p>Writer: {json.Writer}</p>
                                    ) : (
                                            <Skeleton style={{ width: '15vw' }} duration={2} height={20} />
                                        )}
                                </div>
                                <div className="language">

                                    {json.Country ? (
                                        <p>Country: {json.Country}</p>
                                    ) : (
                                            <Skeleton style={{ width: '15vw' }} duration={2} height={20} />
                                        )}

                                    {json.Language ? (
                                        <p>Language: {json.Language}</p>
                                    ) : (
                                            <Skeleton style={{ width: '15vw' }} duration={2} height={20} />
                                        )}
                                </div>
                            </div>
                            <div className="actors">

                                {json.Actors ? (
                                    <h6>Actors: {json.Actors}</h6>
                                ) : (
                                        <Skeleton style={{ width: '15vw' }} duration={2} height={20} />
                                    )}
                            </div>
                            <div className="boxoffice">

                                {json.BoxOffice ? (
                                    <>
                                        <h3>Box Office: {json.BoxOffice}</h3>
                                    </>
                                ) : (
                                        <Skeleton style={{ width: '20vw' }} duration={2} height={35} />
                                    )}
                            </div>
                            <div className="awards">
                                {json.Awards ? (
                                    <>
                                        <FaTrophy color='rgb(254, 197, 67)' />
                                        <h5>{`${json.Awards}`}</h5>
                                    </>
                                ) : (
                                        <Skeleton style={{ width: '20vw' }} duration={2} height={30} />
                                    )}
                            </div>
                            <div className="scores">
                                <div className="imdb">

                                    {rimdb ? (
                                        <>
                                            <img id='imdb' src={meta} alt='meta icon'></img>
                                            <span>{rmeta}</span>
                                        </>
                                    ) : (
                                            <Skeleton style={{ width: '13vh', height: '5vw' }} duration={2} />
                                        )}
                                </div>
                                <div className="rotten">

                                    {rimdb ? (
                                        <>
                                            <img src={rotten} alt='rotten icon'></img>
                                            <span>{rrotten}</span>
                                        </>
                                    ) : (
                                            <Skeleton style={{ width: '13vh', height: '5vw' }} duration={2} />
                                        )}
                                </div>
                                <div className="meta">
                                    {rimdb ? (
                                        <>
                                            <img src={imdb} alt='imdb icon'></img>
                                            <span>{rimdb}</span>
                                        </>
                                    ) : (
                                        
                                            <Skeleton style={{ width: '13vh', height: '5vw' }} duration={2} />
                                        )}
                                </div>
                            </div>
                        </div>
                    </SkeletonTheme>

                </Container>
            </PainelDiv>

        </>
    )
}


export default Index


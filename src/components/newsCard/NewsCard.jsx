import React, { useState, useEffect, createRef } from 'react'
import { CardActionArea, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

import classNames from 'classnames'

import useStyles from './styles'

const NewsCard = ({ article: { description, publishedAt, source, urlToImage, url, title }, i, activeArticle }) => {

    const classes = useStyles()

    const [elRefs, setElRefs] = useState([])

    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50)

    useEffect(() => {
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef())
        )
    }, [])

    useEffect(() => {
        if(i===activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle])
        }
    },[i, activeArticle, elRefs])

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.media} image={urlToImage || 'https://img.freepik.com/free-vector/top-headlines-news-themem-background_1017-14199.jpg?size=626&ext=jpg'} />
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
                </div>
                <Typography className={classes.title} variant='h5' gutterBottom>{title}</Typography>
                <CardContent>
                    <Typography variant='body2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>Learn More</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard

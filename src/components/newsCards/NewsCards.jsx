import React from 'react'
import { Grid, Grow, Typography } from '@material-ui/core'
import useStyles from './styles'

import NewsCard from '../newsCard/NewsCard'
import infoCards from '../constants/infoCards'

const NewsCards = ({ articles, activeArticle }) => {

    const classes = useStyles()

    if (!articles.length) {
        return (
            <Grow in>
                <Grid container className={classes.container} alignItems='stretch' spacing={3}>
                    {
                        infoCards.map((iC) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                                <div className={classes.card} style={{ backgroundColor: iC.color }}>
                                    <Typography variant='h5'>{iC.title}</Typography>
                                    {
                                        iC.info ?
                                            (<Typography variant='h6'>
                                                <strong>
                                                    {iC.title.split(' ')[2]}:
                                                </strong>
                                                <br />
                                                {iC.info}
                                            </Typography>) : null
                                    }
                                    <Typography variant='h6'>Try Saying: <br/> <i>{iC.text}</i></Typography>
                                </div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grow>
        )
    }

    return (
        <Grow in>
            <Grid container className={classes.container} alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} i={i} activeArticle={activeArticle}/>
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards

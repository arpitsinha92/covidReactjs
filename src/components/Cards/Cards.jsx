import React from 'react';
import{Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cn from 'classnames';



const Cards=({data : {activeCases,recovered,deaths,lastUpdatedAtApify}}) => {
   /// console.log(activeCases);
    if(!activeCases){
        return 'Loading...';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
            
             <Grid item component={Card} xs={10} md={3} className={cn(styles.card,styles.activeCases)} >
              <CardContent >
                  <Typography color="textSecondary" gutterBottom>Active Cases</Typography>
                  <Typography variant="h5">
                      <CountUp start={0} end={activeCases} duration={2} separator={","}/>
                  </Typography>
                  <Typography color="textSecondary">{lastUpdatedAtApify}</Typography>
                  <Typography variant="body2">No. of active cases of COVID-19</Typography>
            </CardContent>   
            </Grid> 
           
            <Grid item component={Card} xs={10} md={3} className={cn(styles.card,styles.recovered)}>
              <CardContent>
                  <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                  <Typography variant="h5">
                      <CountUp start={0} end={recovered} duration={1.5} separator={","}/>
                      </Typography>
                  <Typography color="textSecondary">{lastUpdatedAtApify}</Typography>
                  <Typography variant="body2">No. of recovered cases of COVID-19</Typography>
            </CardContent>   
            </Grid> 
           
            <Grid item component={Card} xs={10} md={3} className={cn(styles.card,styles.deaths)}>
              <CardContent>
                  <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                  <Typography variant="h5">
                  <CountUp start={0} end={deaths} duration={0.6} separator={","}/>
                  </Typography>
                  <Typography color="textSecondary">{lastUpdatedAtApify}</Typography>
                  <Typography variant="body2">No. of deaths of COVID-19</Typography>
            </CardContent>   
            </Grid>       
            </Grid>
        </div>
    )
}

export default Cards;
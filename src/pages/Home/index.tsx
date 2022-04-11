import React from 'react';
import { useStyles } from './styles';
import BackgroundImageProgressCircle from '../../components/BackgroundImageProgressCircle';
import Menus from '../../containers/Menus';
import { AppCtx } from '../../context/GlobalContext';
import LineChart from '../../components/LineChart';

function Home(props: any) {
    const classes: any = useStyles();
    const appContext = React.useContext(AppCtx);

    console.log(appContext?.percent)

    return (
        <div className={classes.container}>
            <div className={classes.wrapSection}>
                <BackgroundImageProgressCircle progress={appContext?.percent} />
                <LineChart />
            </div>
            <Menus />
        </div>
    )
}

export default Home;
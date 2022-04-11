import React from 'react';
import { useStyles } from './styles';
import BackgroundImage from '../../assets/d01.jpg';
import CircularProgressWithLabel from '../ProgressCircle';
import { AppCtx } from '../../context/GlobalContext';


type Props = {
    progress: number | undefined
};


function BackgroundImageProgressCircle({ progress }: Props) {
    const classes: any = useStyles();
    if (progress == undefined){
        progress = 0;
    }


    return (
        <div
            className={classes.styleImage}
            style={{
                backgroundImage: `url("${BackgroundImage}")`,
                objectFit: 'contain',
            }}
        >
            <CircularProgressWithLabel value={progress} />
        </div >
    )
}

export default BackgroundImageProgressCircle;
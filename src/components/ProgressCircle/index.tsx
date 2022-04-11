import * as React from 'react';
import CircularProgress, { CircularProgressProps, } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useStyles } from './styles';

export default function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    const classes: any = useStyles();

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress thickness={1} size={5} style={{ width: 181, height: 181, color: "white" }} variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    style={{ color: 'white' }}
                    variant="caption"
                    component="div"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

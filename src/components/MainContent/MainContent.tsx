import React from 'react';
import Grid from '@mui/material/Grid';
import './MainContent.css'
import '../../common/commonStyles.css'
import CustomLayout from "./Dropzone";

const  MainContent = ()  => {
    const handleFile = (file: any) => {
        console.log('file', file);
    }

    return (
        <Grid
            container
            xs={12}
            justifyContent="center"
        >
            <Grid
                xs={8}
                style={{backgroundColor: 'blue'}}
            >
                <h1 className={' textCenter headerText'}>Convert your file here</h1>
                <p className={'textCenter subText'}>Drag your file here and click button Convert</p>
                <CustomLayout/>
            </Grid>
        </Grid>
    );
}

export default MainContent;

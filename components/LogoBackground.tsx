import React from 'react';
import Upload from "./Upload"
import {
    Box, makeStyles,
    createStyles,
    Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import TextTip from "../components/textTip";
export type LogoType = 'logoRect' | 'logoSquare' | 'illustration' | 'bg';
export type LogoStateType = File | null;
interface ProductInfoProps {
    children?: React.ReactNode;
    onClickBack: VoidFunction;
    handleUpload: (file: LogoStateType, name: LogoType) => void;

}
export default function ProductInfo(props: ProductInfoProps) {
    const { onClickBack, handleUpload } = props;
    const useStyles = makeStyles(() =>
        createStyles({
            backBtn: {
                display: "flex",
                marginBottom: "35px"
            },
            backArrow: {
                color: "#0B9DFC",
                marginRight: "10px"
            },
            mainHading: {
                fontWeight: 500,
                fontSize: "22px",
                color: "#222222",

            },
            Text: {
                fontWeight: "normal",
                fontSize: " 18px",
                color: "#222222",
                marginBottom: "16px",
                marginTop: "24px"
            },
            uploadBox: {
                marginTop: "15px",
                marginBottom: "25px"
            },
            drawerWidth: {
                width: '50%',
                ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
                    width: '80%'
                }
            }
        }),
    );
    const classes = useStyles();
    return (
        <>
            <Box component="div" className={classes.backBtn} onClick={onClickBack}><ArrowBackIcon className={classes.backArrow} /><Box component="span">back</Box></Box>
            <Typography variant="caption"
                className={classes.mainHading}
                component="h1">
                Logo and Background
            </Typography>
            <Box component="div" className={classes.Text}>Logo </Box>
            <TextTip name={"Primary Logo"} tip={"Primary Logo here"} />
            <Box className={classes.uploadBox}>
                <Upload
                    handler={handleUpload}
                    name={'logoRect'}
                />
            </Box>
            <TextTip name={"Square Logo"} tip={"Square Logo here"} />
            <Box className={classes.uploadBox} style={{ marginBottom: "40px" }}>
                <Upload
                    handler={handleUpload}
                    name={'logoSquare'}

                />
            </Box>
            <hr style={{ border: "1px solid #CECECE" }} />
            <Box component="div" className={classes.Text}>Background </Box>
            <TextTip name={"Background Image"} tip={"Background Image here"} />
            <Box className={classes.uploadBox}>
                <Upload
                    handler={handleUpload}
                    name={'bg'}
                />
            </Box>
        </>
    );
}

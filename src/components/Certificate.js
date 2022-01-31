import React from "react";
import sun from "../images/suns1.svg";
import Pdf from "react-to-pdf";
import DownloadIcon from '@mui/icons-material/Download';
import '../respons/certificateCss.css'
import { FacebookShareButton, TelegramShareButton, WhatsappShareButton, } from "react-share";
import { FacebookIcon, TelegramIcon, WhatsappIcon, } from "react-share";

const styles = {
    cerc: {
        fontWeight: 500,
        color: "rgb(245 255 96",
        fontFamily: "'Puppies Play', cursive",
        fontSize: 100,
        paddingTop: "11vh",
        fontWeight: 500,
        position: "relative",
        zIndex: 99999
    },
    p: {
        fontFamily: "'Puppies Play', cursive",
        fontSize: 60,
        color: "antiquewhite"
    },
    spam: {
        fontFamily: "'Puppies Play', cursive",
        fontSize: 60,
        color: "antiquewhite",
        borderBottom: "1px solid antiquewhite"
    },
    icon1: {
        height: "5cm",
        width: "5cm",
        position: "absolute",
        top: 39,
        opacity: 0.7,
        left: "10%",
    },
    footer: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: 50,
        alignItems: "center"
    },
    date: {
        color: "antiquewhite",
        fontSize: 23,
        fontFamily: 'Niconne'
    },
    names: {
        float: "right",
        margin: "56px 28px",
        fontWeight: 600,
        width: 93,
        color: "#621e6d",
        position: "absolute"
    },
    restart: {
        position: "absolute",
        right: -139,
        top: "60vh",
    },
    restartbtn: {
        fontFamily: 'Niconne',
        padding: 3,
        fontSize: 25,
        width: 117,
        borderRadius: 50,
        backgroundColor: "rgb(177 169 70)",
        border: "none",
    },
    share: {
        marginTop: 19,
    },
    page: {
        width: "100%",
        backgroundColor: "#862897",
        textAline: "center"
    },
    download: {
        backgroundColor: " #c59913",
        width: 35,
        height: 35,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        marginTop: 10
    }
}

export default function Certificate({ isGood, name, score, restart }) {

    const ref = React.createRef();

    const pdf_options = {
        orientation: 'landscape',
        unit: 'in',
        format: [5.7, 10.5]
    };

    return <div className="cercificat" style={{ position: "relative" }} >
        <div ref={ref} style={styles.page}>
            <h1 style={styles.cerc}>Cercificate of {isGood ? "Excellence" : " Participation"}</h1>
            <p style={styles.p}>This cercificate {isGood ? " of excellence" : ""} is given to</p>
            <span style={styles.spam}>{name}</span>
            <p style={styles.p}> for participating in online Quiz<br /> and get a score {score} out of 20.</p>
            <img src={sun} alt="sun" style={styles.icon1} />
            <div style={styles.footer}>
                <div className="date" style={styles.date}>
                    <p>Date</p>
                    <p style={{ borderBottom: "1px solid" }}>{new Date().getDate()}.{(new Date().getMonth() + 1).toString().padStart(2, "0")}.{new Date().getFullYear()}</p>
                </div>
                <div  >
                    <span style={styles.names}>Arpine Mkoyan</span>
                    <img src={sun} alt="sun" style={{ height: 150, width: 150, marginBottom: 20 }} />
                </div>
            </div>
        </div>
        <div id="restart" style={styles.restart}>
            <button className="restar" style={styles.restartbtn} onClick={restart}>Play again</button>
            <div style={styles.share}>
                <TelegramShareButton url={"https://quiz-game-arpinemkoyan.vercel.app/"} style={{ margin: 2 }}><TelegramIcon size={32} round={true} /></TelegramShareButton>
                <WhatsappShareButton url={"https://quiz-game-arpinemkoyan.vercel.app/"} style={{ margin: 2 }}><WhatsappIcon size={32} round={true} /></WhatsappShareButton>
                <FacebookShareButton url={"https://quiz-game-arpinemkoyan.vercel.app/"} style={{ margin: 2 }}><FacebookIcon size={32} round={true} /></FacebookShareButton>
            </div>
            <Pdf targetRef={ref} filename="Certificate.pdf" options={pdf_options} >
                {({ toPdf }) => <button onClick={toPdf} style={styles.download}><DownloadIcon /></button>}
            </Pdf>
        </div>
    </div>
}
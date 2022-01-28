import questions from "./question"
import { Button } from "@mui/material"
import '../respons/gameCss.css'
const styles = {
    image: {
        margin: 20,
        width: "70%",
        height: 200,
        boxShadow: "rgb(64 0 75) 18px 20px 20px",
        borderRadius: 70
    },
    question: {
        fontFamily: 'Niconne',
        fontSize: 51,
        color: "#dec939",
        fontWeight: 500,
        padding: "0 10px 10px"
    },
    options: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
    },
    option: {
        fontFamily: "'Cinzel Decorative', cursive",
        fontWeight: 600,
        width: "35vw",
        marginBottom: "30px",
        padding: 17,
        borderRadius: 50,
        padding: 3,
        fontSize: "100%",
        color: "antiquewhite",
        backgroundColor: "#8f2cc1"
    }
}

export default function Game({ currentQusetion, nextQuestion }) {

    return <div>
        <img style={styles.image} src={questions[currentQusetion].image} alt={questions[currentQusetion].image} />
        <h1 style={styles.question}>{questions[currentQusetion].question}</h1>
        <div style={styles.options} id="options">
            {questions[currentQusetion].options.map((val, index) => {
                return <Button variant="string" key={index} sx={styles.option} onClick={() => nextQuestion(val.isCorrect)}>{val.option}</Button>
            })}
        </div>
    </div>
}
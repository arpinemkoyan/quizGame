import React, { useState } from "react";
import questions from "./components/question";
import Main from "./components/Main";
import Game from "./components/Game";
import Certificate from "./components/Certificate";
import "./quiz.css"

export default function Quiz() {
    const [name, setName] = useState("")
    const [isChecked, setCheck] = useState(true)
    const [isShow, setShow] = useState(false)
    const [currentQusetion, setNext] = useState(0)
    const [score, setScore] = useState(0);
    const [certificate, setCertificate] = useState(false);
    const [isGood, setGrade] = useState(false)

    const styles = {
        show_style: {
            disabled: "block",
            position: "relative "
        },
        hide_style: {
            disabled: "none"
        }
    }

    function start(e) {
        e.preventDefault();
        setShow(true)
    }
    function nextQuestion(isCorrect) {
        if (currentQusetion === questions.length - 1) {
            (score >= 15) && setGrade(true);
            setCertificate(true)
        }
        else {
            setNext(prevQuestion => ++prevQuestion);
            isCorrect && setScore(prevScore => ++prevScore);
        }
    }
    function restart() {
        setCheck(true)
        setShow(false)
        setCertificate(false)
        setGrade(false)
        setNext(0)
        setName("")
    }

    return <>
        {!isShow ? <Main
            style={isShow ? styles.hide_style : styles.show_style}
            isChecked={isChecked}
            setName={setName}
            setCheck={setCheck}
            name={name}
            start={start}
        /> : (!certificate ?
            <Game
                style={isShow ? styles.show_style : styles.hide_style}
                currentQusetion={currentQusetion}
                nextQuestion={nextQuestion}
            /> :
            <Certificate
                isGood={isGood}
                name={name}
                score={score}
                restart={restart}
            />
        )}
    </>
}
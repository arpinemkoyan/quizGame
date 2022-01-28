import sun from "../images/suns.svg";

export default function Main({ setName, setCheck, name, isChecked, start }) {
    const styles = {
        icon1: {
            height: 150,
            width: 150,
            position: "absolute",
            top: 39,
            opacity: 0.7,
            left: "10%",
        },
        h1: {
            color: "#dec939",
            fontFamily: "'Puppies Play', cursive",
            fontSize: 100,
            paddingTop: "11vh"
        },
        form: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 50
        },
        p: {
            fontFamily: "'Puppies Play', cursive",
            fontSize: 51,
            color: "antiquewhite"
        },
        input: {
            margin: "5% 0",
            padding: 10,
            border: "none",
            outline: "none",
            borderRadius: "46%",
            fontFamily: 'Niconne',
            fontSize: 20,
            textAlign: "center",
            backgroundColor: "#e5d8e8ed",
            color: "#2b1f2b"
        },
        button: {
            fontFamily: 'Niconne',
            border: "none",
            width: 96,
            borderRadius: 50,
            padding: 3,
            fontSize: 25,
            backgroundColor: isChecked ? "rgb(106 177 70 / 40 %)" : "#6ab146",
            color: "#75517b"
        }
    }

    return <div style={{ position: "relative" }}>
        <img src={sun} alt="sun" style={styles.icon1} />
        <h1 style={styles.h1}>Welcome!</h1>
        <form style={styles.form} onSubmit={start} >
            <p style={styles.p}>Enter your name to start the game</p>
            <input style={styles.input} type="text" value={name} onChange={(e) => {
                setName(e.target.value)
                setCheck((name.length >= 2) ? false : true)
            }} />
            <button
                style={styles.button}
                disabled={isChecked}
            >Start</button>
        </form>
    </div>
}
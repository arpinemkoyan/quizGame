import book from '../images/book.jpg'
import chines from '../images/chines.jpg'
import crystal from '../images/crystal.webp'
import Dali from '../images/Dali.jpg'
import Enchiladas from '../images/Enchiladas.jpeg'
import Fenimore from '../images/Fenimore.jpg'
import festival from '../images/festival.jpeg'
import giraffe from '../images/giraffe.jpg'
import letter from '../images/letter.jpg'
import moon from '../images/moon.jpg'
import Neptune from '../images/Neptune.jpg'
import Nobel from '../images/Nobel-prize.jpeg'
import Olive from '../images/Olive.jpg'
import philosophy from '../images/philosophy.jpg'
import Premier from '../images/Premier.jpg'
import sake from '../images/sake.jpg'
import shutterstock from '../images/shutterstock.jpg'
import tiktok from '../images/tiktok.jpg'
import Vanilla from '../images/Vanilla.jpg'
import shakespeare from '../images/shakespeare.jpg'

const questions = [
    {
        question: "What was the most downloaded app of 2020?",
        image: `${tiktok}`,
        options: [
            { option: "Whatsapp", isCorrect: false },
            { option: "Instagram", isCorrect: false, isCorrect: false },
            { option: "Tik Tok", isCorrect: true },
            { option: "Telegram", isCorrect: false }]
    },
    {
        question: "What is Japanese sake made from?",
        image: `${sake}`,
        options: [
            { option: "Barley", isCorrect: false },
            { option: "Rice", isCorrect: true },
            { option: "Grain", isCorrect: false },
            { option: "Maize", isCorrect: false }
        ]
    },
    {
        question: "How many countries still have the shilling as currency?",
        image: `${shutterstock}`,
        options: [
            { option: "5", isCorrect: false },
            { option: "1", isCorrect: false },
            { option: "0", isCorrect: false },
            { option: "4", isCorrect: true }
        ]
    }, {
        question: "What is the Chinese New Year animal for 2021?",
        image: `${chines}`,
        options: [
            { option: "Fox", isCorrect: false },
            { option: "Pig", isCorrect: false },
            { option: "Ox", isCorrect: true },
            { option: "Dog", isCorrect: false }
        ]
    }, {
        question: "Which of Shakespeare's plays is the longest?",
        image: `${shakespeare}`,
        options: [
            { option: "Othello", isCorrect: false },
            { option: "Hamlet", isCorrect: true },
            { option: "King Lear", isCorrect: false },
            { option: "Henri VI", isCorrect: false }
        ]
    }, {
        question: "Enchiladas originated in which country?",
        image: `${Enchiladas}`,
        options: [{ option: "Italy", isCorrect: false },
        { option: "France", isCorrect: false },
        { option: "Mexico", isCorrect: true },
        { option: "Canada", isCorrect: false }
        ]
    }, {
        question: "What colour is a giraffe's tongue?",
        image: `${giraffe}`,
        options: [
            { option: "Red", isCorrect: false },
            { option: "Black", isCorrect: false },
            { option: "Yellow", isCorrect: false },
            { option: "Blue", isCorrect: true }
        ]
    }, {
        question: "Which year was the Premier League founded?",
        image: `${Premier}`,
        options: [
            { option: "1992", isCorrect: true },
            { option: "1993", isCorrect: false },
            { option: "1997", isCorrect: false },
            { option: "1995", isCorrect: false }
        ]
    }, {
        question: "What's the best selling book of all time?",
        image: `${book}`,
        options: [
            { option: "Harry Potter", isCorrect: false },
            { option: "Hamlet", isCorrect: false },
            { option: "The Bible", isCorrect: true },
            { option: "The Little Prince", isCorrect: false }
        ]
    }, {
        question: "Who won the first Nobel Prize for Literature ?",
        image: `${Nobel}`,
        options: [
            { option: "Novelist", isCorrect: false },
            { option: "Dramaturge", isCorrect: false },
            { option: "Poet", isCorrect: true },
            { option: "Essayist", isCorrect: false }
        ]
    }, {
        question: "Which Chemical element was named in honor of the moon?",
        image: `${moon}`,
        options: [
            { option: "Yttrium", isCorrect: false },
            { option: "Tungsten", isCorrect: false },
            { option: "Selenium", isCorrect: true },
            { option: "Krypton", isCorrect: false }
        ]
    }, {
        question: "Vanilla comes from what flowers?",
        image: `${Vanilla}`,
        options: [
            { option: "Zygopetalum", isCorrect: false },
            { option: "Vanda", isCorrect: false },
            { option: "Orchids", isCorrect: true },
            { option: "Miltonia", isCorrect: false }
        ]
    }, {
        question: "In which city the first film festival was held in 1932 ?",
        image: `${festival}`,
        options: [
            { option: "Paris", isCorrect: false },
            { option: "Cannes", isCorrect: false },
            { option: "Venice", isCorrect: true },
            { option: "Berlin", isCorrect: false }
        ]
    }, {
        question: "Which novel did Fenimore Cooper write while batting with his wife?",
        image: `${Fenimore}`,
        options: [
            { option: "The Pioneers", isCorrect: false },
            { option: "The Last of the Mohicans", isCorrect: false },
            { option: "The beast", isCorrect: false },
            { option: "A Warning", isCorrect: true }
        ]
    }, {
        question: "Which of religious philosophy direction is Dzen?",
        image: `${philosophy}`,
        options: [
            { option: "Hinduism", isCorrect: false },
            { option: "Taoism", isCorrect: false },
            { option: "Judaism", isCorrect: false },
            { option: "Buddhism", isCorrect: true }
        ]
    }, {
        question: "Z and which other letter are worth the most in Scrabble ?",
        image: `${letter}`,
        options: [
            { option: "Q", isCorrect: true },
            { option: "Y", isCorrect: false },
            { option: "X", isCorrect: false },
            { option: "F", isCorrect: false },
        ]
    }, {
        question: "Which metal turns glass into crystal?",
        image: `${crystal}`,
        options: [
            { option: "Tin", isCorrect: false },
            { option: "Aluminium", isCorrect: false },
            { option: "Magnesium", isCorrect: false },
            { option: "Lead", isCorrect: true }
        ]
    }, {
        question: "Which oil predominates in Italian cuisine?",
        image: `${Olive}`,
        options: [
            { option: "Sunflower", isCorrect: false },
            { option: "Creamy", isCorrect: false },
            { option: "Olive", isCorrect: true },
            { option: "Beets", isCorrect: false }
        ]
    }, {
        question: "Which art movement is Salvador Dali associated with?",
        image: `${Dali}`,
        options: [
            { option: "Realism", isCorrect: true },
            { option: "Surrealism", isCorrect: false },
            { option: "Modernism", isCorrect: false },
            { option: "Impressionism", isCorrect: false }
        ]
    }, {
        question: "Which is the eighth and furthest known planet from the sun in the solar system?",
        image: `${Neptune}`,
        options: [
            { option: "Neptune", isCorrect: true },
            { option: "Mars", isCorrect: false },
            { option: "Jupiter", isCorrect: false },
            { option: "Saturn", isCorrect: false }
        ]
    }]

export default questions

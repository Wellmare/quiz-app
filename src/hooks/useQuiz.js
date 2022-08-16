import { useState } from 'react'
import questions from '../questions.json'

const UseQuiz = () => {
    const [step, setStep] = useState(0)
    const [score, setScore] = useState(0)

    const [gameEnd, setGameEnd] = useState(false)

    const question = questions[step]
    const quizLength = questions.length

    const startOver = () => {
        setStep(0)
        setScore(0)
        setGameEnd(false)
    }

    const correctSetStep = () => {
        setStep((prevStep) => {
            if (prevStep < quizLength - 1) {
                return prevStep + 1
            } else {
                setGameEnd(true)
            }
        })
    }

    const onClickVariant = (index) => {
        if (question.correct === index) {
            setScore((prevScore) => prevScore + 1)
            correctSetStep()
        } else {
            correctSetStep()
        }
    }

    const percentage = Math.floor(100 / quizLength) * step

    return {
        score,
        gameEnd,
        // correctSetStep,
        startOver,
        onClickVariant,
        question,
        percentage,
        quizLength
    }
}

export default UseQuiz

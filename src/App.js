import './index.scss'
import Game from './components/Game'
import Result from './components/Result'
import useQuiz from './hooks/useQuiz'

function App() {
    const {
        gameEnd,
        onClickVariant,
        score,
        startOver,
        question,
        percentage,
        quizLength
    } = useQuiz()

    return (
        <div className="App">
            {gameEnd ? (
                ''
            ) : (
                <Game
                    question={question}
                    percentage={percentage}
                    onClickVariant={onClickVariant}
                />
            )}

            {gameEnd ? (
                <Result
                    score={score}
                    quizLength={quizLength}
                    startOver={startOver}
                />
            ) : (
                ''
            )}
        </div>
    )
}

export default App

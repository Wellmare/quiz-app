const Result = ({ score, quizLength, startOver }) => {
    return (
        <div className="result">
            <img
                src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
                alt={'result'}
            />
            <h2>
                Вы отгадали {score} ответа из {quizLength}
            </h2>
            <button onClick={startOver}>Попробовать снова</button>
        </div>
    )
}

export default Result
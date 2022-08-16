const Game = ({ question, onClickVariant, percentage }) => {
    const { title, variants } = question

    return (
        <>
            <div className="progress">
                <div
                    style={{ width: `${percentage}%` }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>{title}</h1>
            <ul>
                {variants.map((variant, i) => (
                    <li key={i} onClick={() => onClickVariant(i)}>
                        {variant}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Game

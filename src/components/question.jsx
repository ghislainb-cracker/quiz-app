export default function Question({data, onAnswer}){
    return(
        <div className="container">
            <h2 className="question">{data.question}</h2>
            <div className="btn-container">
                <button onClick={() => onAnswer(true)}>
                    True
                </button>
                <button onClick={() => onAnswer(false)}>
                    False
                </button>
            </div>
        </div>
    )
}
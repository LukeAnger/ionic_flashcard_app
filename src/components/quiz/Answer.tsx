import React from "react";

import { AnswerProps } from "./quizTypings";

const Answer: React.FC<AnswerProps> = ({answer}) => {
    console.log("Answer: ", answer);
    return (
        <div>
            <h1>{answer.answer}</h1>
        </div>
    );
};

export default Answer;
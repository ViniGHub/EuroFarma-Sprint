import { useEffect, useState } from "react";
import { AnswersContainer, Button, Container, FinishContainer, LinkVoltar, QuestionContainer, QuizContainer, TopSection } from "./styles";
import questions from "./questions";

export function Exercicio() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [questionsCorrect, setQuestionsCorrect] = useState(0);
    const [finished, setFinished] = useState(false);

    const loadQuestion = () => {
      setFinished(false);
    };

    const handleAnswer = (correct: boolean) => {
      if (correct) {
        setQuestionsCorrect((prev) => prev + 1);
      }
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setFinished(true);
      }
    };

    const restartQuiz = () => {
      setCurrentIndex(0);
      setQuestionsCorrect(0);
      setFinished(false);
    };

    useEffect(() => {
      loadQuestion();
    }, [currentIndex]);

    return (
      <Container>
        <TopSection>
          <LinkVoltar to="/trilha">Voltar</LinkVoltar>
          <h1>Exercicio</h1>
        </TopSection>

        <QuizContainer>
          {!finished ? (
            <>
              <h2>QUIZ DA RAPAZIADA</h2>
              <QuestionContainer>
                <span>{`${currentIndex + 1}/${questions.length}`}</span>
                <span>{questions[currentIndex].question}</span>
                <AnswersContainer>
                  {questions[currentIndex].answers.map((answer, index) => (
                    <Button key={index} onClick={() => handleAnswer(answer.correct)}>
                      {answer.option}
                    </Button>
                  ))}
                </AnswersContainer>
              </QuestionContainer>
            </>
          ) : (
            <FinishContainer className="show">
              <span>Você acertou {questionsCorrect} de {questions.length}</span>
              <Button onClick={restartQuiz}>Reiniciar</Button>
            </FinishContainer>
          )}
        </QuizContainer>
      </Container>
  );
};
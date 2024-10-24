import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { assessmentQuestions } from '../data/assessmentQuestions';
import QuestionCard from '../components/assessment/QuestionCard';
import ResultCard from '../components/assessment/ResultCard';
import { AssessmentState, AssessmentResult } from '../types/assessment';

export default function Assessment() {
  const setLevel = useStore((state) => state.setLevel);
  const [state, setState] = useState<AssessmentState>({
    currentQuestion: 0,
    answers: {},
    isComplete: false,
    result: null,
  });

  const calculateResult = (): AssessmentResult => {
    const score = Object.entries(state.answers).reduce(
      (total, [id, answer]) => {
        const question = assessmentQuestions.find(q => q.id === id);
        return total + (question?.correctAnswer === answer ? 1 : 0);
      }, 
      0
    );

    const level = 
      score <= 25 ? 'beginner' :
      score <= 40 ? 'intermediate' : 
      'advanced';

    return {
      score,
      totalQuestions: assessmentQuestions.length,
      level,
    };
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = {
      ...state.answers,
      [assessmentQuestions[state.currentQuestion].id]: answer,
    };

    if (state.currentQuestion === assessmentQuestions.length - 1) {
      const result = calculateResult();
      setLevel(result.level);
      setState({
        ...state,
        answers: newAnswers,
        isComplete: true,
        result,
      });
    } else {
      setState({
        ...state,
        answers: newAnswers,
        currentQuestion: state.currentQuestion + 1,
      });
    }
  };

  const handleRetake = () => {
    setState({
      currentQuestion: 0,
      answers: {},
      isComplete: false,
      result: null,
    });
  };

  const currentQuestion = assessmentQuestions[state.currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Portuguese Assessment</h1>
      
      {state.isComplete && state.result ? (
        <ResultCard result={state.result} onRetake={handleRetake} />
      ) : (
        <div className="space-y-6">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
            Question {state.currentQuestion + 1} of {assessmentQuestions.length}
          </div>
          
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={state.answers[currentQuestion.id]}
            onAnswerSelect={handleAnswer}
          />
        </div>
      )}
    </div>
  );
}
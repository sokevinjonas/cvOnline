import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Brain, Lock } from "lucide-react";

const QuizGate = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions = [
    {
      id: 1,
      language: "JavaScript",
      code: `function mystery(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      result += i;
    }
  }
  return result;
}
console.log(mystery(6));`,
      question: "Que va afficher ce programme ?",
      options: ["21", "12", "6", "0", "15"],
      correct: 1
    },
    {
      id: 2,
      language: "PHP",
      code: `<?php
$arr = [1, 2, 3, 4, 5];
$result = array_filter($arr, function($x) {
    return $x % 2 !== 0;
});
echo count($result);
?>`,
      question: "Combien d'éléments contient $result ?",
      options: ["2", "3", "4", "5", "0"],
      correct: 1
    },
    {
      id: 3,
      language: "JavaScript",
      code: `const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, curr) => {
  return curr > 3 ? acc + curr : acc;
}, 0);
console.log(result);`,
      question: "Quelle est la valeur affichée ?",
      options: ["9", "15", "5", "4", "12"],
      correct: 0
    },
    {
      id: 4,
      language: "Python",
      code: `def func(lst):
    return [x**2 for x in lst if x % 2 == 0]

result = func([1, 2, 3, 4, 5])
print(len(result))`,
      question: "Combien d'éléments contient la liste result ?",
      options: ["1", "2", "3", "4", "5"],
      correct: 1
    },
    {
      id: 5,
      language: "JavaScript",
      code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(4));`,
      question: "Quelle est la valeur retournée ?",
      options: ["2", "3", "5", "8", "1"],
      correct: 1
    },
    {
      id: 6,
      language: "PHP",
      code: `<?php
$str = "Hello World";
$arr = explode(" ", $str);
echo strlen($arr[1]);
?>`,
      question: "Que va afficher ce code ?",
      options: ["5", "6", "11", "2", "10"],
      correct: 0
    },
    {
      id: 7,
      language: "JavaScript",
      code: `const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(obj);
const values = Object.values(obj);
console.log(keys.length + values.length);`,
      question: "Quelle est la valeur affichée ?",
      options: ["3", "6", "9", "0", "12"],
      correct: 1
    },
    {
      id: 8,
      language: "Python",
      code: `numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x*x, numbers))
print(sum(squared))`,
      question: "Quelle est la somme calculée ?",
      options: ["15", "25", "55", "30", "45"],
      correct: 2
    },
    {
      id: 9,
      language: "JavaScript",
      code: `const arr = ['a', 'b', 'c'];
arr.forEach((item, index) => {
  if (index === 1) return;
  console.log(item);
});`,
      question: "Que va afficher ce code ?",
      options: ["a, b, c", "a, c", "b", "a", "c"],
      correct: 1
    },
    {
      id: 10,
      language: "PHP",
      code: `<?php
$numbers = [10, 20, 30, 40];
$total = 0;
foreach($numbers as $num) {
    if ($num > 25) {
        $total += $num;
    }
}
echo $total;
?>`,
      question: "Quelle est la valeur de $total ?",
      options: ["70", "100", "30", "40", "60"],
      correct: 0
    }
  ];

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà résolu le quiz
    const hasPassedQuiz = localStorage.getItem('portfolio_quiz_passed');
    if (hasPassedQuiz === 'true') {
      navigate('/portfolio');
      return;
    }

    // Sélectionner une question aléatoire
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  }, [navigate]);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const correct = selectedAnswer === currentQuestion.correct;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setTimeout(() => {
        localStorage.setItem('portfolio_quiz_passed', 'true');
        navigate('/portfolio');
      }, 2000);
    } else {
      setTimeout(() => {
        setShowResult(false);
        setSelectedAnswer(null);
        // Sélectionner une nouvelle question aléatoire
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentQuestion(questions[randomIndex]);
      }, 3000);
    }
  };

  if (!currentQuestion) {
    return <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-primary" />
            <Lock className="h-6 w-6 text-muted-foreground" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Défi <span className="hero-text">Algorithmique</span>
          </h1>
          <p className="text-muted-foreground">
            Résolvez ce petit défi pour accéder au portfolio de Jonas SO
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Badge variant="secondary">{currentQuestion.language}</Badge>
                Challenge
              </CardTitle>
              {showResult && (
                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-green-500 font-medium">Correct !</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-500" />
                      <span className="text-red-500 font-medium">Incorrect</span>
                    </>
                  )}
                </div>
              )}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-slate-100 text-sm">
                <code>{currentQuestion.code}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-medium mb-4">{currentQuestion.question}</h3>
              <div className="space-y-2">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                  >
                    {String.fromCharCode(65 + index)}. {option}
                  </Button>
                ))}
              </div>
            </div>

            {!showResult && (
              <Button 
                onClick={handleSubmit}
                disabled={selectedAnswer === null}
                className="w-full"
                size="lg"
              >
                Valider ma réponse
              </Button>
            )}

            {showResult && isCorrect && (
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-green-700 dark:text-green-300 font-medium">
                  Excellente réponse ! Redirection vers le portfolio...
                </p>
              </div>
            )}

            {showResult && !isCorrect && (
              <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-red-700 dark:text-red-300 font-medium">
                  Pas tout à fait ! Nouvelle question dans quelques secondes...
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            Portfolio de <strong>Jonas SO</strong> - Développeur FullStack
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizGate;
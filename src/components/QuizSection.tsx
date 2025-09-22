import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, RefreshCw, CheckCircle, XCircle, Code, Trophy } from "lucide-react";

interface QuizQuestion {
  id: number;
  language: string;
  code: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const questions: QuizQuestion[] = [
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
      correctAnswer: 1,
      explanation: "La fonction additionne tous les nombres pairs de 1 à 6 : 2 + 4 + 6 = 12"
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
      question: "Quelle sera la sortie de ce code PHP ?",
      options: ["2", "3", "5", "0", "1"],
      correctAnswer: 1,
      explanation: "array_filter garde les nombres impairs (1, 3, 5), donc count() retourne 3"
    },
    {
      id: 3,
      language: "Python",
      code: `def func(lst):
    return [x * 2 for x in lst if x > 2]

result = func([1, 2, 3, 4, 5])
print(len(result))`,
      question: "Que va afficher ce code Python ?",
      options: ["5", "3", "2", "4", "6"],
      correctAnswer: 1,
      explanation: "Les éléments > 2 sont [3, 4, 5], multipliés par 2 = [6, 8, 10], len = 3"
    },
    {
      id: 4,
      language: "JavaScript",
      code: `const arr = [1, 2, 3, 4, 5];
const result = arr
  .filter(x => x > 2)
  .map(x => x * x)
  .reduce((a, b) => a + b, 0);
console.log(result);`,
      question: "Quel est le résultat de ce chaînage de méthodes ?",
      options: ["50", "30", "25", "55", "45"],
      correctAnswer: 0,
      explanation: "Filter: [3,4,5] → Map: [9,16,25] → Reduce: 9+16+25 = 50"
    },
    {
      id: 5,
      language: "PHP",
      code: `<?php
class Counter {
    private static $count = 0;
    
    public function __construct() {
        self::$count++;
    }
    
    public static function getCount() {
        return self::$count;
    }
}

$a = new Counter();
$b = new Counter();
echo Counter::getCount();
?>`,
      question: "Que va afficher ce code PHP orienté objet ?",
      options: ["0", "1", "2", "3", "null"],
      correctAnswer: 2,
      explanation: "Chaque instanciation incrémente la variable statique $count : 0 → 1 → 2"
    },
    {
      id: 6,
      language: "Python",
      code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(5))`,
      question: "Quelle est la valeur de fibonacci(5) ?",
      options: ["3", "5", "8", "13", "21"],
      correctAnswer: 1,
      explanation: "Fibonacci(5) = 5 (séquence: 0,1,1,2,3,5)"
    },
    {
      id: 7,
      language: "JavaScript",
      code: `const obj = {
  name: "Test",
  getName: function() {
    return this.name;
  }
};

const fn = obj.getName;
console.log(fn());`,
      question: "Que va afficher ce code (mode strict) ?",
      options: ["Test", "undefined", "Error", "null", "Object"],
      correctAnswer: 2,
      explanation: "En mode strict, 'this' dans fn() est undefined, causant une erreur"
    },
    {
      id: 8,
      language: "PHP",
      code: `<?php
$numbers = range(1, 5);
$doubled = array_map(function($n) {
    return $n * 2;
}, $numbers);
echo array_sum($doubled);
?>`,
      question: "Quelle est la somme calculée ?",
      options: ["15", "30", "25", "20", "35"],
      correctAnswer: 1,
      explanation: "Range: [1,2,3,4,5] → Doubled: [2,4,6,8,10] → Sum: 30"
    },
    {
      id: 9,
      language: "Python",
      code: `data = {'a': 1, 'b': 2, 'c': 3}
result = sum(v for k, v in data.items() if k != 'b')
print(result)`,
      question: "Quel est le résultat de cette compréhension ?",
      options: ["6", "4", "3", "2", "1"],
      correctAnswer: 1,
      explanation: "Somme des valeurs sauf 'b' : 1 ('a') + 3 ('c') = 4"
    },
    {
      id: 10,
      language: "JavaScript",
      code: `const nums = [1, 2, 3, 4, 5];
const result = nums.slice(1, 4).reverse();
console.log(result.join('-'));`,
      question: "Que va afficher ce code ?",
      options: ["4-3-2", "2-3-4", "5-4-3-2", "1-2-3", "3-2-1"],
      correctAnswer: 0,
      explanation: "Slice(1,4): [2,3,4] → Reverse: [4,3,2] → Join: '4-3-2'"
    },
    {
      id: 11,
      language: "PHP",
      code: `<?php
$str = "Hello World";
$words = explode(" ", $str);
$result = implode("", array_reverse($words));
echo $result;
?>`,
      question: "Quelle chaîne sera affichée ?",
      options: ["WorldHello", "Hello World", "dlroW olleH", "World Hello", "olleHdlroW"],
      correctAnswer: 0,
      explanation: "Explode: ['Hello','World'] → Reverse: ['World','Hello'] → Implode: 'WorldHello'"
    },
    {
      id: 12,
      language: "Python",
      code: `def mystery(s):
    return ''.join(c for i, c in enumerate(s) if i % 2 == 0)

result = mystery("ABCDEF")
print(result)`,
      question: "Quel est le résultat de cette fonction ?",
      options: ["ACE", "BDF", "ABCDEF", "FEDCBA", "AE"],
      correctAnswer: 0,
      explanation: "Garde les caractères aux indices pairs (0,2,4) : A(0), C(2), E(4) = 'ACE'"
    }
  ];

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const loadNewQuestion = () => {
    setCurrentQuestion(getRandomQuestion());
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    const correct = answerIndex === currentQuestion?.correctAnswer;
    setIsCorrect(correct);
    
    setScore(prev => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1
    }));
  };

  useEffect(() => {
    loadNewQuestion();
  }, []);

  if (!currentQuestion) return null;

  return (
    <section id="quiz" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mini-jeu <span className="hero-text">Algorithmique</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testez vos compétences en programmation avec ce quiz interactif. Une nouvelle question à chaque rechargement !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Score and Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Score: {score.correct}/{score.total}
              </Badge>
              <Badge variant="secondary">
                {currentQuestion.language}
              </Badge>
            </div>
            <Button onClick={loadNewQuestion} variant="outline" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Nouvelle question
            </Button>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Quiz Algorithmique - {currentQuestion.language}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Code Block */}
              <div className="relative">
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-mono">
                    {currentQuestion.language}
                  </span>
                </div>
                <pre className="bg-muted p-6 pt-12 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono">{currentQuestion.code}</code>
                </pre>
              </div>

              {/* Question */}
              <div>
                <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
                
                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {currentQuestion.options.map((option, index) => {
                    let buttonClass = "h-auto p-4 text-left justify-start ";
                    
                    if (isAnswered) {
                      if (index === currentQuestion.correctAnswer) {
                        buttonClass += "bg-green-100 border-green-500 text-green-700 hover:bg-green-100";
                      } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                        buttonClass += "bg-red-100 border-red-500 text-red-700 hover:bg-red-100";
                      } else {
                        buttonClass += "opacity-50";
                      }
                    }

                    return (
                      <Button
                        key={index}
                        variant="outline"
                        className={buttonClass}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={isAnswered}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{String.fromCharCode(65 + index)}.</span>
                          <span>{option}</span>
                          {isAnswered && index === currentQuestion.correctAnswer && (
                            <CheckCircle className="h-4 w-4 ml-auto" />
                          )}
                          {isAnswered && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                            <XCircle className="h-4 w-4 ml-auto" />
                          )}
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </div>

              {/* Result and Explanation */}
              {isAnswered && (
                <div className={`p-4 rounded-lg border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {isCorrect ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className={`font-semibold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                      {isCorrect ? 'Correct !' : 'Incorrect'}
                    </span>
                  </div>
                  <p className={`text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    <strong>Explication :</strong> {currentQuestion.explanation}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Ce quiz contient plus de 10 questions différentes. Rechargez pour découvrir de nouveaux défis !
            </p>
            <Button onClick={loadNewQuestion} size="lg" className="bg-gradient-primary hover:opacity-90">
              <RefreshCw className="mr-2 h-5 w-5" />
              Essayer une autre question
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
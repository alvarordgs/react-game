export const quizQuestions = [
  {
    "question": "Qual é a melhor prática para declarar variáveis em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Usar a palavra-chave `var`",
        "isCorrect": false
      },
      { "option": "b", "text": "Utilizar `let` ou `const`", "isCorrect": true },
      { "option": "c", "text": "Usar variáveis globais", "isCorrect": false },
      { "option": "d", "text": "Não declarar variáveis", "isCorrect": false }
    ]
  },
  {
    "question": "Como é sugerido realizar a manipulação do DOM de forma eficiente em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Atualizar o DOM diretamente sem se preocupar com performance",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Usar consultas frequentes ao DOM para atualizações dinâmicas",
        "isCorrect": false
      },
      {
        "option": "c",
        "text": "Armazenar referências a elementos do DOM e reutilizá-las sempre que possível",
        "isCorrect": true
      },
      {
        "option": "d",
        "text": "Evitar completamente a manipulação do DOM em JavaScript",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Como é recomendado organizar o código JavaScript para melhor legibilidade e manutenção?",
    "alternatives": [
      {
        "option": "a",
        "text": "Escrever todo o código em uma única linha",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Usar comentários em excesso para explicar cada linha de código",
        "isCorrect": false
      },
      {
        "option": "c",
        "text": "Dividir o código em funções reutilizáveis e legíveis",
        "isCorrect": true
      },
      {
        "option": "d",
        "text": "Usar nomes de variáveis não descritivos",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Qual é a forma adequada de lidar com erros em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Ignorar os erros para não interromper a execução do código",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Utilizar instruções `try...catch` para lidar com exceções",
        "isCorrect": true
      },
      {
        "option": "c",
        "text": "Não é possível lidar com erros em JavaScript",
        "isCorrect": false
      },
      {
        "option": "d",
        "text": "Deixar o código sem tratamento de erros",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Qual é a prática recomendada ao lidar com loops em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Usar loops `for` em todos os casos",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Evitar loops para melhor desempenho",
        "isCorrect": false
      },
      {
        "option": "c",
        "text": "Usar loops `for...in` para iterar sobre objetos",
        "isCorrect": false
      },
      {
        "option": "d",
        "text": "Utilizar loops apropriados para cada caso (ex: `for`, `while`, `for...of`)",
        "isCorrect": true
      }
    ]
  },
  {
    "question": "Como é aconselhável realizar a detecção de erros e depuração de código em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Não se preocupar com a detecção de erros, já que o JavaScript é à prova de falhas",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Usar console.log() extensivamente para depurar o código",
        "isCorrect": false
      },
      {
        "option": "c",
        "text": "Utilizar ferramentas de desenvolvedor do navegador e estratégias de tratamento de erros para detectar e corrigir problemas",
        "isCorrect": true
      },
      {
        "option": "d",
        "text": "Evitar a detecção de erros para não complicar o código",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Qual é a melhor prática para manipular eventos em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Usar atributos HTML para definir funções de evento",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Adicionar eventos inline diretamente no HTML",
        "isCorrect": false
      },
      {
        "option": "c",
        "text": "Atribuir eventos usando `addEventListener`",
        "isCorrect": true
      },
      {
        "option": "d",
        "text": "Evitar completamente o uso de eventos em JavaScript",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Como é recomendado escrever comentários em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Incluir comentários em várias linhas para cada função",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Comentar apenas partes complicadas do código",
        "isCorrect": true
      },
      {
        "option": "c",
        "text": "Não utilizar comentários, pois dificultam a leitura",
        "isCorrect": false
      },
      {
        "option": "d",
        "text": "Escrever comentários em outra linguagem que não seja JavaScript",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Qual é a prática adequada ao lidar com strings em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Utilizar métodos de manipulação de strings sempre que possível",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Manter as strings imutáveis",
        "isCorrect": true
      },
      {
        "option": "c",
        "text": "Usar apenas strings primitivas",
        "isCorrect": false
      },
      {
        "option": "d",
        "text": "Não utilizar strings em JavaScript",
        "isCorrect": false
      }
    ]
  },
  {
    "question": "Qual é a forma recomendada de nomear variáveis em JavaScript?",
    "alternatives": [
      {
        "option": "a",
        "text": "Usar nomes curtos e pouco descritivos para economizar espaço",
        "isCorrect": false
      },
      {
        "option": "b",
        "text": "Utilizar nomes muito longos para descrever completamente a variável",
        "isCorrect": false
      },
      {
        "option": "c",
        "text": "Escolher nomes descritivos que reflitam o propósito da variável",
        "isCorrect": true
      },
      {
        "option": "d",
        "text": "Não nomear variáveis para reduzir o tamanho do código",
        "isCorrect": false
      }
    ]
  }
]

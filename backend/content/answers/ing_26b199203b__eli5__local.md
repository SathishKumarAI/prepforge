---
qid: ing_26b199203b__eli5__local
question: 'Explain: The interview loop — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 265
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:37:04-05:00'
sources: []
---

Think of the **interview loop** like a chef tasting a soup while cooking.  
The *chef* (the AI) starts with a rough recipe—an initial prompt or set of questions.  
As the soup simmers, the chef tastes it (gets feedback from users or test data).  
If the flavor is too salty, they add a splash of lemon; if it's bland, they stir in more herbs.  
Each tweak is another round of “interviewing” the AI: you ask a question, get an answer, evaluate it, and adjust your next question.  

In practice, developers run this loop with **Glean**, a tool that collects all those taste‑tests (answers) into one searchable notebook. Glean lets them see patterns—what questions give useful answers, which prompts confuse the model, and how small wording changes shift results.  
So the interview loop is simply an iterative tasting process, and Glean is the cookbook where every tweak is recorded so you can refine the recipe until the soup (the AI output) tastes just right.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

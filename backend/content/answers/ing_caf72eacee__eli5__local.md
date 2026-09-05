---
qid: ing_caf72eacee__eli5__local
question: 'Explain: Creating an eval run — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 230
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:43-05:00'
sources: []
---

Imagine you’re a coach who wants to test how well your team can play a new game.  
An **eval run** is like sending the team on a practice match against a set of opponents that are built just for testing.  

1. **Pick the test:** First, choose an *evaluation*—a collection of questions or tasks (the opponents).  
2. **Set up the match:** Create an *EvalRun* by telling the API which evaluation to use and what “player” (your model) should answer.  
3. **Send it off:** The API runs your model on every task, just as a coach would let each player play against each opponent.  
4. **Collect scores:** After the run finishes, you get a report that shows how many tasks were answered correctly—like a score sheet.

So an eval run is simply “give my model this set of test questions and tell me its score,” letting you see if it’s ready for real games.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

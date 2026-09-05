---
qid: ing_475407d9af__eli5__local
question: 'Explain: pass@k — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 210
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:30:11-05:00'
sources: []
---

Imagine you’re running a treasure‑hunt contest with many players, and the judge only has time to check the first **k** guesses of each player.  
The *pass@k* score is simply the fraction of players who found the treasure within those first **k** tries.

In AI, “players” are your models, “guesses” are the top‑ranked results they produce (e.g., the most relevant documents or answers), and “treasure” is a correct answer that meets a quality threshold.  
If 80 % of the models have at least one correct result in their first **k** outputs, the pass@k value is 0.8.

Because we only look at the top **k**, pass@k gives an observable measure of how useful a model’s most confident predictions are—just like seeing whether any player found the treasure early enough to win.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

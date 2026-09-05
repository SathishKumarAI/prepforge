---
qid: ing_f66a1cc67e__eli5__local
question: 'Explain: Train/dev/test split for the judge — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 323
total_tokens: 485
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:05:05-05:00'
sources: []
---

Imagine you’re teaching a dog how to fetch a ball, but you want to be sure it actually learns the trick and not just repeats what it saw in one game.

1. **Train set** – You give the dog many practice games (lots of balls, different spots). It watches and tries to learn the pattern: “ball → run → bring back.”  
2. **Dev (validation) set** – After a while you pause the training and let the dog play with a new ball in a slightly different room. You check if it still knows the trick without seeing that exact scenario before. If it fails, you tweak the instructions or add more practice.  
3. **Test set** – Finally, you run one last game in a brand‑new house with a completely unseen ball. This is the final judgment: does the dog really understand fetch, or was it just memorizing the first room?

In an AI “Eval Gated CICD” pipeline this process is automated: the system trains a model on data (train), then automatically tests it on fresh dev data to decide whether to allow the new version into production. Only if it passes the test set does the code get deployed. The split keeps learning honest and prevents over‑fitting—just like ensuring your dog really knows how to fetch, not just where you threw the ball before.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._

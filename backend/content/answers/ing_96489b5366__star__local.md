---
qid: ing_96489b5366__star__local
question: 'Explain: to make another little array and when — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 355
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:25-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we built a lightweight recommendation engine that used a custom “coding adventure” game to collect user engagement data. The game’s AI was based on a simple chess engine, and we needed to evaluate how different board‑state features impacted move predictions.

**Task:**  
I had to create a reduced feature set—a small array of key indicators (piece type, distance from center, threat level)—to feed into a lightweight neural net that could run on the client’s limited CPU. The goal was to keep inference time under 30 ms while maintaining at least 85 % prediction accuracy.

**Action:**  
I first profiled the full feature vector (≈200 dimensions) and identified redundancies using mutual information scores. I then engineered a compact array of eight scalar values: material balance, king safety score, pawn chain strength, mobility count, center control, discovered attack risk, queen‑back rank pressure, and tempo advantage. The net architecture was a single hidden layer MLP with 32 units; I used TensorFlow Lite to compile it for mobile deployment. During training, I applied L2 regularization to prevent overfitting on the small feature set.

**Result:**  
The reduced model achieved 86 % accuracy on our validation set and cut inference time from 75 ms to 22 ms—well below the target. The exercise taught me how to balance feature engineering with runtime constraints, and I later applied this approach to a real‑time fraud detection pipeline where similar trade‑offs were critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
